using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListTypeVehicle : IEntityProcView
    {
        public const string ProcName = "Proc_GetListTypeVehicle";
        public int? Id { get; set; }      
        public string Code { get; set; }
        public string Name { get; set; }
        public int? TotalSeat { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListTypeVehicle() { }

        public static IEntityProc GetEntityProc(string searchText, string ids = null, int? pageNumber = null, int? pageSize = null)
        {
            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) 
                SearchText.Value = DBNull.Value;

            SqlParameter Ids = new SqlParameter("@Ids", ids);
            if (string.IsNullOrWhiteSpace(ids))
                Ids.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @SearchText, @Ids, @PageNumber, @PageSize",
                new SqlParameter[] {         
                    SearchText,
                    Ids,
                    PageNumber,
                    PageSize
                }
            );            
        }
    }
}
