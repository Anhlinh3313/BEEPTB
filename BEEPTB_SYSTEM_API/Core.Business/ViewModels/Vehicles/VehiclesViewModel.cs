using Core.Business.ViewModels.General;
using Core.Data.Core.Utils;
using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace Core.Business.ViewModels.Vehicles
{
     public class VehiclesViewModel : EntitySimple, IValidatableObject
    {
        public VehiclesViewModel()
        {

        }
        public string LicensePlates { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? ManufactureYear { get; set; }
        public int? VehicleStatusId { get; set; }
        public string ChassisNumber { get; set; }
        public string EngineNumber { get; set; }
        public DateTime? InspectionDate { get; set; }
        public string VehicleManufacturer { get; set; }
        public string FuelType { get; set; }
        public string Owner { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? Price { get; set; }
        public bool? IsNew { get; set; }
        public bool? IsActive { get; set; }
        public string ImagePath { get; set; }
        public string FilePath { get; set; }
        public int? BranchId { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validator = new VehiclesViewModelValidator(EntityUtil.GetUnitOfWork(validationContext));
            var result = validator.Validate(this);
            return result.Errors.Select(item => new ValidationResult(item.ErrorMessage, new[] { item.PropertyName }));
        }
    }

  
}
