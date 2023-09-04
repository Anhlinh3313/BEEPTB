using System;
using System.Threading.Tasks;
using Core.Business.Services.Models;
using Core.Business.ViewModels;
using Core.Business.ViewModels.Accounts;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;

namespace Core.Business.Services.Abstract
{
    public interface IAccountService
    {
		Task<dynamic> CreateAccount(CreateAccountViewModel model);
		Task<dynamic> UpdateAccount(UpdateAccountViewModel model); 
        Task<dynamic> ChangePassWord(ChangePassWordViewModel model);
        Task<dynamic> DeleteAccount(BasicViewModel model);
		dynamic GetAccountInfo(int id);
		dynamic GetAccountList();
		Task<dynamic> SignIn(SignInViewModel model);
        ResponseViewModel UpdateUserSystem(UpdateAccountViewModel model);
        ResponseViewModel GetListUserByUserTypeId(int userTypeId);
        ResponseViewModel CreateUser(CreateAccountViewModel viewModel);
        ResponseViewModel SendMailForgotPassword(ForgotPasswordViewModel model);
        ResponseViewModel CheckCodeValidChangePassword(ForgotPasswordViewModel model);
        ResponseViewModel ChangePassWordForgotPassword(ChangePassWordViewModel model);
    }
}
