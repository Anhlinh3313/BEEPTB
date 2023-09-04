using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Bookings
{
    public class BookingFilterViewModel
    {
        public int? Id { get; set; }
        public int? ServiceId { get; set; } 
        public int? CustomerId { get; set; }
        public int? BranchId { get; set; }
        public int? BookingStatusId { get; set; }
        public string Code { get; set; }
        public string SearchText { get; set; }
        public string BookingStatusIds { get; set; }
        public string TransportationStatusIds { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? TransportationStatusId { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
    }
}
