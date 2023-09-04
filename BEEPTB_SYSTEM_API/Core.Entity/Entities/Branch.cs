using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Branch : EntitySimple
    {
        public Branch()
        {
        }

		public int WardId { get; set; }
        public string Address { get; set; }
        public Ward Ward { get; set; }
    }
}
