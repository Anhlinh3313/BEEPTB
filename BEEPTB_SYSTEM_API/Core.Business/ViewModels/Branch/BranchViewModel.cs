using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels
{
    public class BranchViewModel : SimpleViewModel<BranchViewModel, Branch>
    {
        public string Address { get; set; }
        public int? WardId { get; set; }
        public int? ProvinceId { get; set; }
        public int? DistrictId { get; set; }
        public string SearchText { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
