using System;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Abstract;
using Core.Infrastructure.Extensions;
using Core.Business.ViewModels.Vehicles;

namespace Core.Business.ViewModels.Validators
{
    public class VehicleValidator : BaseValidator<Vehicle>
    {
        public VehicleValidator(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public bool UniqueLicensePlate(string licensePlate)
        {
            return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.LicensePlates.EqualsIgnoreCase(licensePlate));
        }

        public bool UniqueLicensePlate(VehiclesViewModel model)
        {
            if (model.Id == 0)
                return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.LicensePlates.EqualsIgnoreCase(model.LicensePlates));
            else
                return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.LicensePlates.EqualsIgnoreCase(model.LicensePlates) && x.Id != model.Id);
        }

        public bool UniqueCode(string code)
        {
            return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.Code.EqualsIgnoreCase(code));
        }

        public bool UniqueCode(VehiclesViewModel model)
        {
            if (model.Id == 0)
                return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.Code.EqualsIgnoreCase(model.Code));
            else
                return !_unitOfWork.RepositoryR<Vehicle>().Any(x => x.Code.EqualsIgnoreCase(model.Code) && x.Id != model.Id);
        }
    }
}
