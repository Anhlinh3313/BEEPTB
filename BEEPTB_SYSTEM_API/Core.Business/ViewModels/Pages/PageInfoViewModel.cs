using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using Core.Data.Core.Utils;
using Core.Entity.Abstract;
using Core.Entity.Entities;

namespace Core.Business.ViewModels.Pages
{
    public class PageInfoViewModel : SimpleViewModel
    {
        public PageInfoViewModel()
        {
        }

		public int? ParentPageId { get; set; }
		public string AliasPath { get; set; }
		public int ModulePageId { get; set; }
		public int PageOrder { get; set; }
		public bool IsAccess { get; set; }
		public bool IsAdd { get; set; }
		public bool IsEdit { get; set; }
		public bool IsDelete { get; set; }
        public string Icon { get; set; }
        public bool? IsLocked { get; set; }

        public ModulePage ModulePage { get; set; }
		public Page ParentPage { get; set; }
	}
}
