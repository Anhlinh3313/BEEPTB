using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Booking : EntitySimple
    {
        public Booking()
        {
        }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public double? TotalTime { get; set; }
        public int? ServiceId { get; set; }
        public int? CustomerId { get; set; }
        public int BookingStatusId { get; set; }
        public string Note { get; set; }
        public int? ReasonId { get; set; }
        public int? BranchId { get; set; }
        public string Address { get; set; }
        public string AddressDetail { get; set; }

    }
}
