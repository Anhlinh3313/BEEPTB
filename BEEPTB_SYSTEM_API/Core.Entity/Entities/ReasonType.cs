using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class ReasonType : IEntityBase
    {
        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
