using System;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class PagePermission : IEntityBase
    {
        public PagePermission()
        {
        }

		public int Id { get; set; }
		public int PageId { get; set; }
		public int PageTypeId { get; set; }
		public string PageAlias { get; set; }
        public bool IsEnabled { get; set; }
    }
}
