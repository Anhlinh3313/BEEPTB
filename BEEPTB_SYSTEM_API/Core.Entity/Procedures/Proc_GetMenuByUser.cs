using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetMenuByUser : IEntityProcView
    {
        public const string ProcName = "Proc_GetMenuByUser";
        public int Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ParentPageId { get; set; }
        public string AliasPath { get; set; }
        public int PageOrder { get; set; }
        public bool IsAccess { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public int ModulePageId { get; set; }
        public string Icon { get; set; }

        public Proc_GetMenuByUser() { }

        public static IEntityProc GetEntityProc(int moduleId,int userId)
        {
            return new EntityProc(
                $"{ProcName} @ModuleId, @UserId",
                new SqlParameter[] {
                    new SqlParameter("@ModuleId", moduleId),
                    new SqlParameter("@UserId", userId)
                }
            );
        }
    }
}
