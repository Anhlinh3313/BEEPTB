using Core.Entity.Abstract;
using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels
{
    public class VehicleStatusViewModel : IEntityBase
    {
        public VehicleStatusViewModel()
        {

        }

        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
