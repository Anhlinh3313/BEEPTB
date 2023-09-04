using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListPages : IEntityProcView
    {
        public const string ProcName = "Proc_GetListPages";

        public int? Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public int? ParentPageId { get; set; }
        public string ParentPageName { get; set; }
        public string AliasPath { get; set; }
        public int ModulePageId { get; set; }
        public string ModulePageName { get; set; }
        public int PageOrder { get; set; }
        public bool IsAccess { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public bool? IsLocked { get; set; }
        public string Icon { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListPages()
        {

        }

        public static IEntityProc GetEntityProc(int? moduleId, string searchText, int? pageNum, int? pageSize)
        {
            SqlParameter ModuleId = new SqlParameter("@ModuleId", moduleId);
            if (!moduleId.HasValue)
            {
                ModuleId.Value = DBNull.Value;
            }

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText))
            {
                SearchText.Value = DBNull.Value;
            }

            SqlParameter PageNum = new SqlParameter("@PageNum", pageNum);
            if (!pageNum.HasValue)
            {
                PageNum.Value = DBNull.Value;
            }

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
            {
                PageSize.Value = DBNull.Value;
            }

            return new EntityProc(
                $"{ProcName} @ModuleId, @SearchText, @PageNum, @PageSize",
                new SqlParameter[]
                {
                    ModuleId,
                    SearchText,
                    PageNum,
                    PageSize
                }
            );
        }
    }
}
