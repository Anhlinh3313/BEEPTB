using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.PriceServices
{
    public class PriceServiceFilterViewModel
    {
        public string Code { get; set; }
        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
