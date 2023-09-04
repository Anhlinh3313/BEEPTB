using Core.Business.ViewModels.VehicleTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.PriceServices
{
    public class CalculateFilterViewModel
    {
        public int? Id { get; set; }
        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
