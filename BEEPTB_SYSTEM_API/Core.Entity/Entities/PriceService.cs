using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class PriceService : EntitySimple
    {
        public PriceService()
        {

        }

        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? Priority { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public bool? IsActive { get; set; }
    }
}
