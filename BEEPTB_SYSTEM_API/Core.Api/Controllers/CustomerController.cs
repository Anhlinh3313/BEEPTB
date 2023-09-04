using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Accounts;
using Core.Business.ViewModels.Customers;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Collections.Generic;

namespace Core.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : GeneralController<CustomerViewModel, Customer>
    {
        private readonly ICustomerService _iCustomerService;
        public CustomerController(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IOptions<JwtIssuerOptions> jwtOptions,
            IUnitOfWork unitOfWork,
            ICustomerService iCustomerService,
            IGeneralService<CustomerViewModel, Customer> iGeneralService) : base(logger, optionsAccessor, jwtOptions, unitOfWork, iGeneralService)
        {
            _iCustomerService = iCustomerService;
        }

        [AllowAnonymous]
        [HttpPost("CreateCustomer")]
        public JsonResult CreateCustomer([FromBody] CustomerViewModel viewModel)
        {
            return JsonUtil.Create(_iCustomerService.CreateCustomer(viewModel));
        }

        [HttpPost("UpdateCustomer")]
        public JsonResult UpdateCustomer([FromBody] CustomerViewModel viewModel)
        {
            return JsonUtil.Create(_iCustomerService.UpdateCustomer(viewModel));
        }

        [HttpPost("GetListCustomer")]
        public JsonResult GetListCustomer([FromBody] SearchViewModel model)
        {
            var result = _unitOfWork.Repository<Proc_GetListCustomer>().
                ExecProcedure(Proc_GetListCustomer.GetEntityProc(model.Id, model.SearchText, model.PageNumber, model.PageSize, model.IdentityCard, model.PhoneNumber));
            return JsonUtil.Success(result);
        }

        [HttpGet("GetCustomerByUserId")]
        public JsonResult GetCustomerByUserId(int userId)
        {
            return JsonUtil.Create(_iCustomerService.GetCustomerByUserId(userId));
        }

        [HttpGet("UpdateCustomerImagePath")]
        public JsonResult UpdateCustomerImagePath(List<string> paths, int userId)
        {
            var customer = _unitOfWork.RepositoryR<Customer>().GetSingle(userId);
            if (customer == null) return JsonUtil.Error("Tài khoản không tồn tại");
            else
            {
                foreach (var item in paths)
                {
                    if (item.Contains("identity1"))
                    {
                        customer.IdentityImage1Path = item;
                    }

                    if (item.Contains("identity2"))
                    {
                        customer.IdentityImage2Path = item;
                    }

                    if (item.Contains("driverLicense1"))
                    {
                        customer.DriverLicenseImage1Path = item;
                    }

                    if (item.Contains("driverLicense2"))
                    {
                        customer.DriverLicenseImage2Path = item;
                    }

                    if (item.Contains("avatar"))
                    {
                        customer.AvatarPath = item;
                    }
                }
                _unitOfWork.Commit();
                return JsonUtil.Success(customer);
            }
        }

        [AllowAnonymous]
        [HttpGet("CheckPhoneNumber")]
        public JsonResult CheckPhoneNumber(string phoneNumber)
        {
            var result = _unitOfWork.Repository<Proc_CheckPhoneNumber>().
                ExecProcedure(Proc_CheckPhoneNumber.GetEntityProc(phoneNumber));
            return JsonUtil.Success(result);
        }
    }
}