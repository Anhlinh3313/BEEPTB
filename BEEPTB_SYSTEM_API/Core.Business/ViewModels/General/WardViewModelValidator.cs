using System;
using Core.Business.ViewModels.Validators;
using Core.Data.Abstract;
using Core.Entity.Entities;
using FluentValidation;

namespace Core.Business.ViewModels.General
{
    public class WardViewModelValidator : GeneralAbstractValidator<WardViewModel, Ward>
	{
		public WardViewModelValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            var esvDistrict = new EntitySimpleValidator<District>(_unitOfWork);

            RuleFor(x => x.DistrictId)
                .NotEmpty().WithMessage(ValidatorMessage.District.NameNotEmpty)
                .Must(esvDistrict.Exist).WithMessage(ValidatorMessage.District.NotExist);
		}
	}
}
