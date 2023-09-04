using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Supports
{
     public class SupportsViewModel : EntitySimple
    {
        public SupportsViewModel()
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
