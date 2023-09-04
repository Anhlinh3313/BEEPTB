using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels.VehicleTypes
{
    public class VehicleTypeViewModel : SimpleViewModel<VehicleTypeViewModel, VehicleType>
    {
        public VehicleTypeViewModel()
        {
        }

        public int? TotalSeat { get; set; }
        public string ImagePath { get; set; }
    }
}
