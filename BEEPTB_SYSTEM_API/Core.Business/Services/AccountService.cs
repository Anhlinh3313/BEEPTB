using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Accounts;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Security;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public partial class AccountService : BaseService, IAccountService
    {
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly IEncryptionService _iEncryptionService;
        private readonly SendMail _iSendMail;
        public IGeneralService _igeneralRawService { get; }

        public AccountService(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork,
            IOptions<JwtIssuerOptions> jwtOptions,
            IGeneralService igeneralRawService,
            IOptions<SendMail> sendMail,
            IEncryptionService iEncryptionService) : base(logger, optionsAccessor, unitOfWork)
        {
            _jwtOptions = jwtOptions.Value;
            ThrowIfInvalidOptions(_jwtOptions);
            _iEncryptionService = iEncryptionService;
            _igeneralRawService = igeneralRawService;
            _iSendMail = sendMail.Value;
        }

        public async Task<dynamic> CreateAccount(CreateAccountViewModel model)
        {
            User user = Mapper.Map<User>(model);
            _unitOfWork.RepositoryCRUD<User>().InsertAndUpdate(user);
            await _unitOfWork.CommitAsync();
            return JsonUtil.Success(ConvertUserToUserInfoViewModel(user));
        }

        public async Task<dynamic> UpdateAccount(UpdateAccountViewModel model)
        {
            User user = GetUser(model.Id);
            user = Mapper.Map(model, user);
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            await _unitOfWork.CommitAsync();
            return JsonUtil.Success(ConvertUserToUserInfoViewModel(user));
        }

        public async Task<dynamic> ChangePassWord(ChangePassWordViewModel model)
        {
            User user = GetUser(model.UserId);
            if (!Util.IsNull(user.IsPassWordBasic))
            {
                user.IsPassWordBasic = false;
            }
            user = Mapper.Map(model, user);
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            await _unitOfWork.CommitAsync();
            return JsonUtil.Success(ConvertUserToUserInfoViewModel(user));
        }

        public async Task<dynamic> DeleteAccount(BasicViewModel model)
        {
            User user = GetUser(model.Id);

            if (user != null)
            {
                user.IsEnabled = false;
                _unitOfWork.RepositoryCRUD<User>().Update(user);
                await _unitOfWork.CommitAsync();
                return JsonUtil.Success();
            }

            return JsonUtil.Error(ValidatorMessage.Account.NotExist);

        }

        public dynamic GetAccountInfo(int id)
        {
            var user = GetUser(id);

            if (user != null)
            {
                return JsonUtil.Success(ConvertUserToUserInfoViewModel(user));
            }

            return JsonUtil.Error(ValidatorMessage.Account.NotExist);
        }

        public dynamic GetAccountList()
        {
            return JsonUtil.Success(Mapper.Map<IEnumerable<UserInfoViewModel>>(_unitOfWork.RepositoryR<User>().FindBy(x => !x.IsEnabled && x.IsEnabled)));
        }

        public async Task<dynamic> SignIn(SignInViewModel model)
        {
            DateTime datetime = DateTime.Now;
            model.HourLogin = datetime.Hour;
            model.MinuteLogin = datetime.Minute;
            var user = _unitOfWork.RepositoryCRUD<User>().GetSingle(x => x.UserName == (model.UserName) && (x.UserTypeId == model.UserTypeId || model.UserTypeId == null));
            if (user == null)
            {
                return JsonUtil.Error("Số điện thoại hoặc mật khẩu không đúng!");
            }
            var checkPass = _iEncryptionService.EncryptPassword(model.PassWord, user.SecurityStamp);
            if (user.PasswordHash != checkPass)
            {
                return JsonUtil.Error("Số điện thoại hoặc mật khẩu không đúng!");
            }
            if (user.IsBlocked == true)
            {
                return JsonUtil.Error("Tài khoản đăng nhập đã bị khóa!");
            }
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.CHash, _iEncryptionService.HashSHA256(user.SecurityStamp)),
                new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
                new Claim(JwtRegisteredClaimNames.Iat, ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(), ClaimValueTypes.Integer64),
            };

            // Create the JWT security token and encode it.
            var jwt = new JwtSecurityToken(
                issuer: _jwtOptions.Issuer,
                audience: _jwtOptions.Audience,
                claims: claims,
                notBefore: _jwtOptions.NotBefore,
                expires: _jwtOptions.Expiration,
                signingCredentials: _jwtOptions.SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            // Serialize and return the response
            return JsonUtil.Success(new
            {
                userId = user.Id.ToString(),
                userName = user.UserName,
                userFullName = user.Name,
                token = encodedJwt,
                expires = (int)_jwtOptions.ValidFor.TotalSeconds,
                expiresDate = DateTime.Now.AddDays(_jwtOptions.ValidFor.Days),
                isPassWordBasic = user.IsPassWordBasic
            });
        }

        private User GetUser(int id)
        {
            return _unitOfWork.RepositoryR<User>().GetSingle(x => x.Id == id);
        }

        public ResponseViewModel GetListUserByUserTypeId(int userTypeId)
        {
            var result = _unitOfWork.RepositoryR<User>().FindBy(x => x.UserTypeId == userTypeId);
            return ResponseViewModel.CreateSuccess(result);
        }

        private UserInfoViewModel ConvertUserToUserInfoViewModel(User user)
        {
            return Mapper.Map<UserInfoViewModel>(user);
        }

        public ResponseViewModel UpdateUserSystem(UpdateAccountViewModel viewModel)
        {
            User user = _unitOfWork.RepositoryR<User>().GetSingle(viewModel.Id);
            if (user == null)
            {
                return ResponseViewModel.CreateError("Tài khoản không tồn tại");
            }

            if (viewModel.PassWord != null)
            {
                user.PasswordHash = new Encryption().EncryptPassword(viewModel.PassWord, user.SecurityStamp);
            }

            user.Code = viewModel.Code;
            user.Name = viewModel.Name;
            user.PhoneNumber = viewModel.PhoneNumber;
            user.Email = viewModel.Email;
            user.DepartmentId = viewModel.DepartmentId;
            user.Address = viewModel.Address;
            user.ProvinceId = viewModel.ProvinceId;
            user.DistrictId = viewModel.DistrictId;
            user.WardId = viewModel.WardId;
            user.UserTypeId = viewModel.UserTypeId;
            user.IdentityCard = viewModel.IdentityCard;
            user.BirthDate = viewModel.BirthDate;
            user.Gender = viewModel.Gender;
            user.IsBlocked = viewModel.IsBlocked;
            user.AvatarPath = viewModel.AvatarPath;
            user.BranchId = viewModel.BranchId;
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            _unitOfWork.Commit();

            if (viewModel.RoleIds != null && viewModel.RoleIds.Count > 0)
            {
                _unitOfWork.RepositoryCRUD<UserRole>().DeleteWhere(r => r.UserId == viewModel.Id);
                foreach (int roleId in viewModel.RoleIds)
                {
                    UserRole userRole = new UserRole();
                    userRole.UserId = user.Id;
                    userRole.RoleId = roleId;
                    _unitOfWork.RepositoryCRUD<UserRole>().Insert(userRole);
                }
                _unitOfWork.Commit();

            }

            return ResponseViewModel.CreateSuccess(user);
        }

        public ResponseViewModel CreateUser(CreateAccountViewModel viewModel)
        {
            viewModel.IsPassWordBasic = true;
            User user = Mapper.Map<User>(viewModel);
            _unitOfWork.RepositoryCRUD<User>().Insert(user);
            _unitOfWork.Commit();

            if (viewModel.RoleIds != null && viewModel.RoleIds.Count > 0)
            {
                _unitOfWork.RepositoryCRUD<UserRole>().DeleteWhere(r => r.UserId == viewModel.Id);

                foreach (int roleId in viewModel.RoleIds)
                {
                    UserRole userRole = new UserRole();
                    userRole.UserId = user.Id;
                    userRole.RoleId = roleId;
                    _unitOfWork.RepositoryCRUD<UserRole>().Insert(userRole);
                }
                _unitOfWork.Commit();
            }


            return ResponseViewModel.CreateSuccess(user);
        }

        public ResponseViewModel SendMailForgotPassword(ForgotPasswordViewModel model)
        {
            var user = _unitOfWork.RepositoryR<User>().GetSingle(x => x.Email.Equals(model.Email));

            if (user != null)
            {
                DateTime currentDate = DateTime.Now;
                var code = RandomUtil.RandomString(30, false);
                var codeResetPassWord = _iEncryptionService.HashSHA256(code.ToString());
                if (user.VerificationDateTime == null || user.VerificationCode == null)
                {
                    user.VerificationCode = codeResetPassWord;
                    user.VerificationDateTime = currentDate;
                    _unitOfWork.RepositoryCRUD<User>().Update(user);
                    _unitOfWork.CommitAsync();
                }
                else
                {
                    dynamic resetPassWordSentat = user.VerificationDateTime;
                    if (resetPassWordSentat != null)
                    {
                        TimeSpan timeConfirmResetPassWord = currentDate.Subtract(resetPassWordSentat);
                        if (timeConfirmResetPassWord != null)
                        {
                            if (timeConfirmResetPassWord.TotalMinutes <= 1)
                            {
                                return ResponseViewModel.CreateError("Bạn đang gửi mail liên tục, bạn vui lòng gửi lại sau 1 phút.");
                            }
                            else
                            {
                                user.VerificationCode = codeResetPassWord;
                                user.VerificationDateTime = currentDate;
                                _unitOfWork.RepositoryCRUD<User>().Update(user);
                                _unitOfWork.CommitAsync();
                            }
                        }
                    }
                }

                var emailRecipient = new EmailRecipient(
                       user.Id,
                       user.Email,
                       user.Name,
                       user.VerificationCode, user.PhoneNumber, ""
                   );
                var result = SendEmail(_iSendMail, emailRecipient);
                return ResponseViewModel.CreateSuccess(null, $"Đã gửi xác nhận đổi mật khẩu đến " + user.Email);
            }
            else
            {
                return ResponseViewModel.CreateError("Email không tồn tại");
            }
        }

        public string SendEmail(SendMail sendEmailOptions, EmailRecipient emailRecipient)
        {
                ServicePointManager.ServerCertificateValidationCallback =
                        delegate (
                            object s,
                            X509Certificate certificate,
                            X509Chain chain,
                            SslPolicyErrors sslPolicyErrors
                        )
                        {
                            return true;
                        };
                string content;
                string url = "/forgot-password";
                string HTMLpath = sendEmailOptions.Path;
                string subject = " Quên mật khẩu ";
                string _mailFrom = sendEmailOptions.MailFrom;

                MailMessage mess = new MailMessage();
                mess.Priority = MailPriority.High;
                mess.From = new MailAddress(_mailFrom, sendEmailOptions.MailFromDisplayName);
                mess.To.Add(new MailAddress(emailRecipient.Email));
                mess.Subject = subject;
                mess.IsBodyHtml = true;
                mess.BodyEncoding = UTF8Encoding.UTF8;
                //cc mail
                //MailAddress copy = new MailAddress("cod@jetlink.vn");
                //mess.CC.Add(copy);
                var urlConfirmResetPassWord = sendEmailOptions.Website + url + "/" + emailRecipient.Id + "/" + emailRecipient.CodeResetPassWord;
                //var aTag = "<a href=" + urlConfirmResetPassWord + ">Xác thực tài khoản</a>";
                //mess.Body = "Click vào link bên dưới để xác nhận đổi mật khẩu cho tài khoản " + "<br/>" + "Email: " + emailRecipient.Email + "<br/>" + "Tên: " + emailRecipient.Name + "<br/>" + urlConfirmResetPassWord;


                content = System.IO.File.ReadAllText(HTMLpath);
                content = content.Replace("{{Email}}", emailRecipient.Email);
                content = content.Replace("{{Name}}", emailRecipient.Name);
                content = content.Replace("{{Link}}", urlConfirmResetPassWord);
                content = content.Replace("{{SDT}}", emailRecipient.PhoneNumber);
                content = content.Replace("{{CONTENT}}", emailRecipient.Content);

                mess.Body = content;

                SmtpClient client = new SmtpClient();
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Host = sendEmailOptions.Host;
                client.Port = sendEmailOptions.Port;
                client.EnableSsl = sendEmailOptions.EnableSsl;
                client.Credentials = new NetworkCredential(sendEmailOptions.MailFrom, sendEmailOptions.PassWordMailFrom);
                client.Send(mess);
                return "TRUE";
        }

        public ResponseViewModel CheckCodeValidChangePassword(ForgotPasswordViewModel model)
        {
            var user = _unitOfWork.RepositoryR<User>().GetSingle(x => x.Id == model.UserId);
            if (user != null)
            {
                if (user.VerificationDateTime == null || user.VerificationCode == null)
                {
                    return ResponseViewModel.CreateError("Bạn chưa có yêu cầu đổi mật khẩu nào !");
                }
                DateTime currentDate = DateTime.Now;
                dynamic resetPassWordSentat = user.VerificationDateTime;
                TimeSpan timeConfirmResetPassWord = currentDate.Subtract(resetPassWordSentat);

                if (timeConfirmResetPassWord.TotalMinutes > 3)
                {
                    return ResponseViewModel.CreateError("Mã đã hết hạn sử dụng.");
                }

                if (!user.VerificationCode.Equals(model.Code))
                {
                    return ResponseViewModel.CreateError("Mã không khớp");
                }
                else
                {
                    return ResponseViewModel.CreateSuccess(null, "Xác nhận có thể đổi password");
                }
            }
            else
            {
                return ResponseViewModel.CreateError("Người dùng không tồn tại");
            }
        }

        public ResponseViewModel ChangePassWordForgotPassword(ChangePassWordViewModel model)
        {
            User user = _unitOfWork.RepositoryR<User>().GetSingle(x => x.Id == model.UserId);
            user.VerificationCode = null;
            user.VerificationDateTime = null;
            user.PasswordHash = _iEncryptionService.EncryptPassword(model.NewPassWord, user.SecurityStamp);
            _unitOfWork.RepositoryCRUD<User>().Update(user);
            _unitOfWork.Commit();
            return ResponseViewModel.CreateSuccess(null, "Đổi mật khẩu thành công");
        }
    }
}
