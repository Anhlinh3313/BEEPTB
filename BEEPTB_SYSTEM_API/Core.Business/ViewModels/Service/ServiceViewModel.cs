using System;
using Core.Entity.Entities;

namespace Core.Business.ViewModels
{
    public class ServiceViewModel : SimpleViewModel<ServiceViewModel, Service>
    {
        public ServiceViewModel()
        {
        }
        public bool? IsAllowTwoWay { get; set; }
        public bool? IsAllowDayOfWeek { get; set; }
        public int? ServiceTypeId { get; set; }
    }
}
