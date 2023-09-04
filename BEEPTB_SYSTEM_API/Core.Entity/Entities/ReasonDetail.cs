using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class ReasonDetail : IEntityBase
    {
        public int Id { get; set; }
        public bool IsEnabled { get; set; }
        public int ReasonId { get; set; }
        public int ReasonTypeId { get; set; }
    }
}
