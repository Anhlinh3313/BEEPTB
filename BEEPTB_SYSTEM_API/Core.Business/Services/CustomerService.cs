using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Customers;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Security;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.ComponentModel.DataAnnotations;

namespace Core.Business.Services
{
    public class CustomerService : BaseService, ICustomerService
    {
        public CustomerService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel CreateCustomer(CustomerViewModel viewModel)
        {
            if (string.IsNullOrEmpty(viewModel.PhoneNumber))
            {
                return ResponseViewModel.CreateError("SĐT không được để trống!");
            }

            if (string.IsNullOrEmpty(viewModel.Name))
            {
                return ResponseViewModel.CreateError("Tên người dùng không được để trống!");
            }

            if (!(new EmailAddressAttribute().IsValid(viewModel.Email)) && !string.IsNullOrEmpty(viewModel.Email))
            {
                return ResponseViewModel.CreateError("Email không đúng định dạng!");
            }

            bool checkPhone = _unitOfWork.RepositoryR<Customer>().Any(x => x.PhoneNumber.Equals(viewModel.PhoneNumber));
            if (checkPhone)
            {
                return ResponseViewModel.CreateError("Số điện thoại đã tồn tại!");
            }

            bool checkEmail = _unitOfWork.RepositoryR<Customer>().Any(x => x.Email.Equals(viewModel.Email));
            if (checkEmail && !string.IsNullOrEmpty(viewModel.Email))
            {
                return ResponseViewModel.CreateError("Email đã tồn tại!");
            }

            User user = new User();
            user.Code = viewModel.Code;
            user.Name = viewModel.Name;
            user.UserTypeId = UserTypeHelper.NSD;
            user.UserName = viewModel.PhoneNumber;

            if (user.SecurityStamp == null)
            {
                user.SecurityStamp = Guid.NewGuid().ToString();
            }
            user.PasswordHash = new Encryption().EncryptPassword(viewModel.Password, user.SecurityStamp);

            _unitOfWork.RepositoryCRUD<User>().Insert(user);
            _unitOfWork.Commit();

            user.Code = RandomUtil.GetCodeNumber(user.Id, 7);
            _unitOfWork.RepositoryCRUD<User>().Update(user);

            Customer customer = Mapper.Map<Customer>(viewModel);
            customer.UserId = user.Id;
            customer.Code = user.Code;
            _unitOfWork.RepositoryCRUD<Customer>().Insert(customer);
            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess(customer);
        }

        public ResponseViewModel UpdateCustomer(CustomerViewModel viewModel)
        {
            Customer customer = _unitOfWork.RepositoryR<Customer>().GetSingle(viewModel.Id);

            if (viewModel.UserId == null || customer == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy khách hàng");
            }

            if (string.IsNullOrEmpty(viewModel.Name))
            {
                return ResponseViewModel.CreateError("Tên người dùng không được để trống!");
            }

            if (string.IsNullOrEmpty(viewModel.IdentityCard))
            {
                return ResponseViewModel.CreateError("CMND không được để trống!");
            }

            if (!new EmailAddressAttribute().IsValid(viewModel.Email) && !string.IsNullOrEmpty(viewModel.Email))
            {
                return ResponseViewModel.CreateError("Email không đúng định dạng!");
            }

            bool checkEmail = _unitOfWork.RepositoryR<Customer>().Any(x => x.Email.Equals(viewModel.Email) && x.Id != viewModel.Id);
            if (checkEmail && !string.IsNullOrEmpty(viewModel.Email))
            {
                return ResponseViewModel.CreateError("Email đã tồn tại!");
            }

            User user = _unitOfWork.RepositoryR<User>().GetSingle(viewModel.UserId.Value);
            user.AvatarPath = viewModel.AvatarPath;
            if (viewModel.Password != null)
            {
                user.PasswordHash = new Encryption().EncryptPassword(viewModel.Password, user.SecurityStamp);
            }
            _unitOfWork.RepositoryCRUD<User>().Update(user);

            customer.Name = viewModel.Name;
            customer.Email = viewModel.Email;
            customer.IdentityCard = viewModel.IdentityCard;
            customer.BirthDate = viewModel.BirthDate;
            customer.Gender = viewModel.Gender;
            customer.AvatarPath = viewModel.AvatarPath;
            customer.TaxCode = viewModel.TaxCode;
            customer.CompanyName = viewModel.CompanyName;
            customer.AddressIssueInvoice = viewModel.AddressIssueInvoice;
            customer.IdentityImage1Path = viewModel.IdentityImage1Path;
            customer.IdentityImage2Path = viewModel.IdentityImage2Path;
            customer.DriverLicenseImage1Path = viewModel.DriverLicenseImage1Path;
            customer.DriverLicenseImage2Path = viewModel.DriverLicenseImage2Path;
            _unitOfWork.RepositoryCRUD<Customer>().Update(customer);
            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess(customer);
        }

        public ResponseViewModel GetCustomerByUserId(int userId)
        {
            var customer = _unitOfWork.RepositoryCRUD<Customer>().GetSingle(x => x.UserId == userId);
            return ResponseViewModel.CreateSuccess(customer);
        }
    }
}
