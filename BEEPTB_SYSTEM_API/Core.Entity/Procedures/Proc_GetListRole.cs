using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListRole : IEntityProcView
    {
        public const string ProcName = "Proc_GetListRole";

        public int Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? UserTypeId { get; set; }
        public string UserTypeName { get; set; }
        public int TotalCount { get; set; }

        public Proc_GetListRole()
        {

        }

        public static IEntityProc GetEntityProc(int? userTypeId, string searchText, int? pageNum, int? pageSize)
        {
            SqlParameter UserTypeId = new SqlParameter("@UserTypeId", userTypeId);
            if (!userTypeId.HasValue)
            {
                UserTypeId.Value = DBNull.Value;
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
                $"{ProcName} @UserTypeId, @SearchText, @PageNum, @PageSize",
                new SqlParameter[]
                {
                    UserTypeId,
                    SearchText,
                    PageNum,
                    PageSize
                }
            );
        }
    }
}
