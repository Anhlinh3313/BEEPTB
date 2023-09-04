using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Transportations
{
    public class TransportationViewModel : SimpleViewModel
    {
        public int? VehicleTypeId { get; set; }
        public int? VehicleId { get; set; }
        public int? SupplierUserId { get; set; }
        public int? SupplierId { get; set; }
        public int? TotalGuest { get; set; }
        public int? ServiceId { get; set; }
        public double? RentalFee { get; set; }
        public double? TotalIncurredFee { get; set; }
        public double? TotalFee { get; set; }
        public int? TransportationStatusId { get; set; }
        public int? BookingId { get; set; }
    }
}
