using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.PriceServices
{
    public class PriceServiceInfoViewModel : SimpleViewModel
    {
        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? Priority { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public bool? IsActive { get; set; }

        public List<PriceServiceDetail> PriceServiceDetails { get; set; }
    }
}
