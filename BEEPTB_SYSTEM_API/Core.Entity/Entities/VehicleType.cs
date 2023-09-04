using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class VehicleType : EntitySimple
    {
        public VehicleType()
        {
        }

        public int? TotalSeat { get; set; }
        public string ImagePath { get; set; }

    }
}
