using Core.Entity.Entities;
using Core.Entity.Procedures;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Bookings
{
    public class BookingViewModel : EntitySimple
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public int? CustomerId { get; set; }
        public string Note { get; set; }
        public string Address { get; set; }
        public string AddressDetail { get; set; }

    }
}
