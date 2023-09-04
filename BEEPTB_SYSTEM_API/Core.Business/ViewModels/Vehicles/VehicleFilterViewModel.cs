using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Vehicles
{
    public class VehicleFilterViewModel
    {
        public int? VehicleTypeId { get; set; } 
        public int? VehicleStatusId { get; set; }
        public string SearchText { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public int? BranchId { get; set; }
    }
}
