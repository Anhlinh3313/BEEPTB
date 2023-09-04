using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Timeline : IEntityBase
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public double ValueFrom { get; set; }
        public double ValueTo { get; set; }
        public bool IsEnabled { get; set; }
    }
}
