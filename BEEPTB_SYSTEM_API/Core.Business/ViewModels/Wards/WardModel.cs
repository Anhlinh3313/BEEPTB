using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels
{
    public class WardModel: FilterViewModel
    {
        public int? DistrictId { get; set; }
        public int? ProvinceId { get; set; }
    }
}
