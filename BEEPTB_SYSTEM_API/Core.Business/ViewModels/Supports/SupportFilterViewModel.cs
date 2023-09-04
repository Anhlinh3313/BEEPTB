using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Supports
{
    public class SupportFilterViewModel
    {
        public string Code { get; set; }
        public int? SupportTypeId { get; set; }
        public int? CustomerId { get; set; }
        public int? SupportStatusId { get; set; }
        public int? SupplierId { get; set; }
        public int? EmployeeId { get; set; }
        public int? PageNum { get; set; }
        public int? PageSize { get; set; }
    }
}
