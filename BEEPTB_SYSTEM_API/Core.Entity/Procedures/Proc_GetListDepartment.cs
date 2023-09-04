using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListDepartment : IEntityProcView
    {
        public const string ProcName = "Proc_GetListDepartment";

        public int Id { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int TotalCount { get; set; }

        public Proc_GetListDepartment()
        {

        }

        public static IEntityProc GetEntityProc(string searchText, int? pageNum, int? pageSize)
        {
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
                $"{ProcName} @SearchText, @PageNum, @PageSize",
                new SqlParameter[]
                {
                    SearchText,
                    PageNum,
                    PageSize
                }
            );
        }
    }
}
