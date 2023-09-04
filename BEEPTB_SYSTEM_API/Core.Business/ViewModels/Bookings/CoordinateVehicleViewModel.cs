using System;
using System.Collections.Generic;
using System.Text;
using Core.Entity.Entities;

namespace Core.Business.ViewModels.Bookings
{
    public class CoordinateVehicleViewModel
    {
        public int BookingId { get; set; }
        public Transportation Transportation { get; set; }
    }
}
