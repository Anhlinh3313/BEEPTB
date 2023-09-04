using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Vehicle : EntitySimple
    {
        public Vehicle()
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

    }
}
