using System;
using Core.Data.Abstract;
using Core.Entity.Entities;

namespace Core.Business.ViewModels.Validators
{
    public class RoleValidator : BaseValidator<Role>
    {
        public RoleValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        protected override bool IsValid(FluentValidation.Validators.PropertyValidatorContext context)
        {
            return base.IsValid(context);
        }
    }
}
