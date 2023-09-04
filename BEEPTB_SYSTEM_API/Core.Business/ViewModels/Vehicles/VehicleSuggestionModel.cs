using Core.Entity.Entities;
using Core.Entity.Procedures;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Vehicles
{
    public class VehicleSuggestionModel
    {
        public Proc_GetListTransportations Transportation { get; set; }
        public List<Proc_GetListVehicles> Vehicles { get; set; }
    }
}
