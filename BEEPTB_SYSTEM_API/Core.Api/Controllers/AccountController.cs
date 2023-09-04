using Core.Business.Services;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Accounts;
using Core.Business.ViewModels.General;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : GeneralController<CreateAccountViewModel, UpdateAccountViewModel, UserInfoViewModel, User>
    {
        private readonly IAccountService _iAccountService;
        private readonly IUserService _iUserService;
        private readonly IEncryptionService _iEncryptionService;
        private readonly IHubContext<SignalRHubService> _iHubContext;
        private readonly SendMail _iSendMail;
        private readonly ISMSService _iSMSService;


        public IGeneralService _igeneralRawService { get; }

        public AccountController(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions, IUnitOfWork unitOfWork,
            IGeneralService<CreateAccountViewModel, UpdateAccountViewModel, UserInfoViewModel, User> iGeneralService,
            IAccountService iAccountService,
            IUserService iUserService,
            IEncryptionService iEncryptionService,
            IGeneralService igeneralRawService,
            IHubContext<SignalRHubService> iHubContext,
            IOptions<SendMail> sendMail,
            ISMSService iSMSService

            )
            : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iAccountService = iAccountService;
            _iUserService = iUserService;
            _igeneralRawService = igeneralRawService;
            _iHubContext = iHubContext;
            _iEncryptionService = iEncryptionService;
            _iSendMail = sendMail.Value;
            _iSMSService = iSMSService;
        }

        #region Get Data
        [AllowAnonymous]
        [HttpGet("GetUserByPhoneNumber")]
        public JsonResult GetUserChangePassWord(string phoneNumber)
        {
            var result = _unitOfWork.RepositoryCRUD<User>().GetSingle(x => x.UserName == phoneNumber);
            return JsonUtil.Success(result);
        }

        [HttpGet("GetCurrentUserInfo")]
        public JsonResult GetCurrentUserInfo()
        {
            var user = GetCurrentUser();

            var result = _unitOfWork.Repository<Proc_GetListUser>().
                ExecProcedureSingle(Proc_GetListUser.GetEntityProc(GetCurrentUserId(), null, null, null, null, null, null, user.UserTypeId));
            return JsonUtil.Success(result);
        }

        [HttpPost("GetListUser")]
        public JsonResult GetListUser([FromBody] SearchViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_GetListUser>().
                ExecProcedure(Proc_GetListUser.GetEntityProc(model.Id, model.SearchText, model.ProvinceId, model.DistrictId, model.WardId, model.DepartmentId, model.RoleId,
                model.UserTypeId, model.PageNumber, model.PageSize));
            return JsonUtil.Success(result);
        }

        [HttpGet("GetListFreeEmployee")]
        public JsonResult GetListFreeEmployee(int? BranchId)
        {
            var result = _unitOfWork.Repository<Proc_GetListFreeEmployee>().ExecProcedure(Proc_GetListFreeEmployee.GetEntityProcView(BranchId));
            return JsonUtil.Success(result);
        }
        #endregion

        [AllowAnonymous]
        [HttpPost("SignIn")]
        public async Task<JsonResult> SignIn([FromBody] SignInViewModel model)
        {
            return await _iAccountService.SignIn(model);
        }

        [AllowAnonymous]
        [HttpPost("Create")]
        public override async Task<JsonResult> Create([FromBody] CreateAccountViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }

            return JsonUtil.Create(_iAccountService.CreateUser(viewModel));

        }

        public override async Task<JsonResult> Update([FromBody] UpdateAccountViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }
            var result = await _iGeneralService.Update(viewModel);
            if (result.IsSuccess)
            {
                _unitOfWork.RepositoryCRUD<UserRole>().DeleteEmptyWhere(r => r.UserId == viewModel.Id);
                List<UserRole> listUserRole = new List<UserRole>();
                var user = result.Data as UserInfoViewModel;
                if (!Util.IsNull(viewModel.RoleIds))
                {
                    foreach (int roleId in viewModel.RoleIds)
                    {
                        UserRole userRole = new UserRole();
                        userRole.UserId = user.Id;
                        userRole.RoleId = roleId;
                        listUserRole.Add(userRole);
                    }
                }

                if (!Util.IsNull(listUserRole))
                {
                    await _igeneralRawService.Create<UserRole>(listUserRole);
                }
            }
            //
            return JsonUtil.Create(result);
        }

        #region Update
        [HttpGet("UpdateUserAvatarPath")]
        public JsonResult UpdateUserAvatarPath(string path, int userId)
        {
            var user = _unitOfWork.RepositoryR<User>().GetSingle(userId);
            if (user == null) return JsonUtil.Error("Tài khoản không tồn tại");
            else
            {
                user.AvatarPath = path;
                _unitOfWork.Commit();
                return JsonUtil.Success(user);
            }
        }

        [HttpPost("UpdateLocationApp")]
        public JsonResult UpdateLocationApp([FromBody] List<LocationAppViewModel> viewModel)
        {
            if (viewModel != null && viewModel.Count > 0)
            {
                LocationViewModel model = new LocationViewModel();
                model.Id = GetCurrentUserId();
                model.CurrentLat = viewModel[0].Lat.GetValueOrDefault();
                model.CurrentLat = viewModel[0].Lng.GetValueOrDefault();

                _iHubContext.Clients.All.SendAsync("UpdatePosition", new { user = model });

                _unitOfWork.Repository<Proc_UpdateLocationUser>().ExecProcedureSingle(Proc_UpdateLocationUser.GetEntityProc(GetCurrentUserId(), viewModel[0].Lat.GetValueOrDefault(), viewModel[0].Lng.GetValueOrDefault(), 0, 0, 0));
            }

            return JsonUtil.Success();
        }

        [HttpPost("UpdateUserSystem")]
        public JsonResult UpdateUserSystem([FromBody] UpdateAccountViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }

            return JsonUtil.Create(_iAccountService.UpdateUserSystem(model));
        }

        [AllowAnonymous]
        [HttpPost("UpdateLocation")]
        public JsonResult UpdateLocation([FromBody] LocationViewModel viewModel)
        {
            if (!viewModel.Id.HasValue)
            {
                viewModel.Id = viewModel.UserId;
            }
            // Dùng signalR send tới web
            _iHubContext.Clients.All.SendAsync("UpdatePosition", new { user = viewModel });
            if (viewModel.IsUpdate == true)
            {
                _unitOfWork.Repository<Proc_UpdateLocationUser>().ExecProcedureSingle(Proc_UpdateLocationUser.GetEntityProc(viewModel.Id.Value, viewModel.CurrentLat, viewModel.CurrentLng, viewModel.X, viewModel.Y, viewModel.Z));
            }

            return JsonUtil.Success();
        }

        [HttpPost("UpdateFireBaseToken")]
        public async Task<JsonResult> UpdateFireBaseToken([FromBody] TokenViewModel viewModel)
        {
            var user = GetCurrentUser();
            user.FireBaseToken = viewModel.InstanceIDToken;
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            await _unitOfWork.CommitAsync();

            return JsonUtil.Success();
        }
        #endregion

        #region Password
        [AllowAnonymous]
        [HttpPost("ChangePassWord")]
        public async Task<JsonResult> ChangePassWord([FromBody] ChangePassWordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }

            return JsonUtil.Success(await _iAccountService.ChangePassWord(model));
        }

        [AllowAnonymous]
        [HttpPost("SendMailForgotPassword")]
        public async Task<JsonResult> SendMailForgotPassword([FromBody] ForgotPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }

            return JsonUtil.Create(_iAccountService.SendMailForgotPassword(model));
        }

        [AllowAnonymous]
        [HttpPost("CheckCodeValidChangePassword")]
        public async Task<JsonResult> CheckCodeValidChangePassword([FromBody] ForgotPasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return JsonUtil.Error(ModelState);
            }

            return JsonUtil.Success(_iAccountService.CheckCodeValidChangePassword(model));
        }

        [AllowAnonymous]
        [HttpPost("ChangePassWordForgotPassword")]
        public async Task<JsonResult> ChangePassWordForgotPassword([FromBody] ChangePassWordViewModel model)
        {
            if (Util.IsNull(model.NewPassWord))
            {
                return JsonUtil.Error("Mật khẩu mới bị rỗng !");
            }

            return JsonUtil.Create(_iAccountService.ChangePassWordForgotPassword(model));
        }
        #endregion

        #region SMS
        [AllowAnonymous]
        [HttpGet("SendSMSUser")]
        public async Task<JsonResult> SendSMSUser(SMS viewModel)
        {
            var result = _unitOfWork.RepositoryCRUD<User>().GetSingle(x => x.UserName == viewModel.PhoneNumber);
            if (Util.IsNull(result))
            {
                return JsonUtil.Error("Số điện thoại chưa được đăng kí");
            }

            Random content = new Random();
            const string chars = "0123456789";
            viewModel.Content = new string(Enumerable.Repeat(chars, 4).Select(s => s[content.Next(s.Length)]).ToArray());

            return JsonUtil.Create(await _iSMSService.SendSMS(viewModel.PhoneNumber, viewModel.Content));
        }

        [AllowAnonymous]
        [HttpGet("CreeateCustomerSendSMS")]
        public async Task<JsonResult> SendSMSCreeate(SMS viewModel)
        {
            Random content = new Random();
            const string chars = "0123456789";
            viewModel.Content = new string(Enumerable.Repeat(chars, 4).Select(s => s[content.Next(s.Length)]).ToArray());
            return JsonUtil.Create(await _iSMSService.SendSMS(viewModel.PhoneNumber, viewModel.Content));
        }
        #endregion
    }
}
