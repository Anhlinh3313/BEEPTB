using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.VehicleTypes
{
    public class FindVehicleTypeModel
    {
        public int? TotalSeat { get; set; }
        public int? TotalVehicleType { get; set; }
        public int? VehicleTypeId { get; set; }
    }
}
