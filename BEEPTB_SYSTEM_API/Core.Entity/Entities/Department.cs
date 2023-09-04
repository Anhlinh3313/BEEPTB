using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Department : EntitySimple
    {
        public Department()
        {
            
        }

        public int? UserTypeId { get; set; }
    }
}
