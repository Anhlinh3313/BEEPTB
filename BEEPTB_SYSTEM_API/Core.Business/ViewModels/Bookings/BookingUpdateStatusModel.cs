using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Bookings
{
    public class BookingUpdateStatusModel
    {
        public int BookingId { get; set; }
        public int? ReasonId { get; set; }
    }
}
