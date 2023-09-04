using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListProvinces : IEntityProcView
    {
        public const string ProcName = "Proc_GetListProvinces";
        public int? Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public int? CountryId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public string FullName { get; set; }
        public string Level { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListProvinces() { }

        public static IEntityProc GetEntityProc(string searchText, int? pageNumber, int? pageSize)
        {
            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;            

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @SearchText, @PageNumber, @PageSize",
                new SqlParameter[] {         
                    SearchText,
                    PageNumber,
                    PageSize
                }
            );            
        }
    }
}
