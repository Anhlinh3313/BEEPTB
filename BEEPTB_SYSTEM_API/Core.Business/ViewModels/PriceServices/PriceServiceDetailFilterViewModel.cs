using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.PriceServices
{
    public class PriceServiceDetailFilterViewModel
    {
        public int? PriceServiceId { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
