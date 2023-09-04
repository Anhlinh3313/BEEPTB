using System;
using Core.Business.ViewModels.Validators;
using Core.Business.ViewModels.Validators.Properties;
using Core.Data.Abstract;
using Core.Entity.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace Core.Business.ViewModels.Accounts
{
    public class ChangePassWordViewModelValidator : BaseCRUDAbstractValidator<ChangePassWordViewModel, User>
    {
        public ChangePassWordViewModelValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            var av = new AccountValidator(_unitOfWork);

            RuleFor(x => x.UserId).Must(EntityExist).WithMessage(ValidatorMessage.Account.NotExist);

            When(x => EntityExist(x.UserId), () =>
            {
                RuleFor(x => x.CurrentPassWord).NotEmpty().WithMessage(ValidatorMessage.Account.CurrentPassWordNotEmpty);
                RuleFor(x => x.NewPassWord).NotEmpty().WithMessage(ValidatorMessage.Account.NewPassWordNotEmpty);
                RuleFor(x => x).Must(av.PassWordValid).WithMessage(ValidatorMessage.Account.CurrentPassWordInValid);
            });
        }
    }
}
