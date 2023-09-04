using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Ward : EntitySimple
    {
        public Ward()
        {
        }

		public int DistrictId { get; set; }
        public string Level { get; set; }
        public string FullName { get; set; }
        public District District { get; set; }
    }
}
