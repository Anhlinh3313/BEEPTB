using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Support: EntitySimple
    {
        public Support()
        {

        }

        public int SupportTypeId { get; set; }
        public string ContentSupport { get; set; }
        public int CustomerId { get; set; }
        public int SupportStatusId { get; set; }
        public string ContentHandle { get; set; }
        public int SupplierId { get; set; }
        public int? EmployeeId { get; set; }
    }
}
