using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels
{
    public class InfoLocationViewModel
    {
        public InfoLocationViewModel()
        {
        }
        public string ProvinceName { get; set; }
        public int? ProvinceId { get; set; }
        public string DistrictName { get; set; }
        public int? DistrictId { get; set; }
        public string WardName { get; set; }
        public int? WardId { get; set; }
        public int? HubId { get; set; }
    }
}
