using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels
{
    public class BranchFilterModel : FilterViewModel
    {
        public int? BranchId { get; set; }
        public int? WardId { get; set; }
        public int? ProvinceId { get; set; }
        public int? DistrictId { get; set; }
    }
}
