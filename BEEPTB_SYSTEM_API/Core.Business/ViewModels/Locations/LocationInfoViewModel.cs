using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Locations
{
    public class LocationInfoViewModel
    {
        public int? ProvinceId { get; set; }
        public string ProvinceName { get; set; }
        public int? DistrictId { get; set; }
        public string DistrictName { get; set; }
        public int? WardId { get; set; }
        public string WardName { get; set; }
    }
}
