using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Pages
{
    public class PageFilterViewModel
    {
        public int? ModulePageId { get; set; }
        public string SearchText { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
    }
}
