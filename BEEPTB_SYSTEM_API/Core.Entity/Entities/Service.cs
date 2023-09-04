using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Service :  EntitySimple
    {
        public Service()
        {
        }
        public bool? IsAllowTwoWay { get; set; }
        public bool? IsAllowDayOfWeek { get; set; }
        public int?  ServiceTypeId { get; set; }
    }
}
