using System;
using Core.Business.ViewModels.Validators;
using Core.Business.ViewModels.Vehicles;
using Core.Data.Abstract;
using Core.Entity.Entities;
using FluentValidation;

namespace Core.Business.ViewModels.General
{
    public class VehiclesViewModelValidator : BaseCRUDAbstractValidator<VehiclesViewModel, Vehicle>
	{
		public VehiclesViewModelValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            VehicleValidator esvVehicle = new VehicleValidator(_unitOfWork);

            RuleFor(x => x)
                .Must(esvVehicle.UniqueCode).WithMessage(ValidatorMessage.Vehicle.UniqueCode);
            RuleFor(x => x)
                .Must(esvVehicle.UniqueLicensePlate).WithMessage(ValidatorMessage.Vehicle.UniqueLicensePlate);

        }

	}
}
