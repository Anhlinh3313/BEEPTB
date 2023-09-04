using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListDistricts : IEntityProcView
    {
        public const string ProcName = "Proc_GetListDistricts";
        public int? Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public int? ProvinceId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public string FullName { get; set; }
        public string Level { get; set; }
        public string ProvinceName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListDistricts() { }

        public static IEntityProc GetEntityProc(int? id, int? provinceId, string searchText, int? pageNumber, int? pageSize)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue)
                Id.Value = DBNull.Value;

            SqlParameter ProvinceId = new SqlParameter("@ProvinceId", provinceId);
            if (!provinceId.HasValue)
                ProvinceId.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @ProvinceId, @SearchText, @PageNumber, @PageSize",
                new SqlParameter[] {
                    Id,
                    ProvinceId,
                    SearchText,
                    PageNumber,
                    PageSize
                }
            );
        }
    }
}
