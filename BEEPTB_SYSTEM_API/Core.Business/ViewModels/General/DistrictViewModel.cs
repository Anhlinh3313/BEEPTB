using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Core.Business.ViewModels.Validators;
using Core.Data.Core.Utils;
using Core.Entity.Abstract;
using Core.Entity.Entities;

namespace Core.Business.ViewModels.General
{
    public class DistrictViewModel : SimpleViewModel<DistrictViewModel, District>
    {
        public DistrictViewModel()
        {
        }
        
        public int ProvinceId { get; set; }
        public string Level { get; set; }
        public string FullName { get; set; }
    }
}
