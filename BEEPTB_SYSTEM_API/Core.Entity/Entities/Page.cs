using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class Page : EntitySimple
    {
        public Page()
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
