using System;
using Core.Business.ViewModels.Validators;
using Core.Data.Abstract;
using Core.Entity.Entities;
using FluentValidation;

namespace Core.Business.ViewModels.General
{
    public class DistrictViewModelValidator : GeneralAbstractValidator<DistrictViewModel, District>
    {
        public DistrictViewModelValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            var esvDistrict = new EntitySimpleValidator<District>(_unitOfWork);
			var esvProvince = new EntitySimpleValidator<Province>(_unitOfWork);

            RuleFor(x => x.ProvinceId)
                .NotEmpty().WithMessage(ValidatorMessage.Province.NameNotEmpty)
				.Must(esvProvince.Exist).WithMessage(ValidatorMessage.Province.NotExist);
        }
	}
}
