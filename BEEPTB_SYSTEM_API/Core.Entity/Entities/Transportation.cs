using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Transportation : EntitySimple
    {
        public int VehicleTypeId { get; set; }
        public int? VehicleId { get; set; }
        public double? RentalFee { get; set; }
        public double? TotalIncurredFee { get; set; }
        public double? TotalFee { get; set; }
        public int TransportationStatusId { get; set; }
        public int? UserId { get; set; }
        public int BookingId { get; set; }
    }
}
