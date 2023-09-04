using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class PriceServiceDetail : IEntityBase
    {
        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public int? PriceServiceId { get; set; }
        public int? PriceFormulaId { get; set; }
        public double? ValueFrom { get; set; }
        public double? ValueTo { get; set; }
        public double? ValuePlus { get; set; }
        public double? Price { get; set; }
        public int? TimelineId { get; set; }
    }
}
