using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListBranch : IEntityProcView
    {
        public const string ProcName = "Proc_GetListBranch";
        public int Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool? IsEnabled { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Address { get; set; }
        public int WardId { get; set; }
        public int ProvinceId { get; set; }
        public int DistrictId { get; set; }
        public string ProvinceName { get; set; }
        public string DistrictName { get; set; }
        public string WardName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListBranch() { }

        public static IEntityProc GetEntityProc(int? branchId, int? districtId, int? provinceId, int? wardId, string searchText, int? pageNumber, int? pageSize)
        {
            SqlParameter BranchId = new SqlParameter("@BranchId", branchId);
            if (!branchId.HasValue)
                BranchId.Value = DBNull.Value;

            SqlParameter DistrictId = new SqlParameter("@DistrictId", districtId);
            if (!districtId.HasValue)
                DistrictId.Value = DBNull.Value;

            SqlParameter ProvinceId = new SqlParameter("@ProvinceId", provinceId);
            if (!provinceId.HasValue)
                ProvinceId.Value = DBNull.Value;

            SqlParameter WardId = new SqlParameter("@WardId", wardId);
            if (!wardId.HasValue)
                WardId.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @BranchId, @DistrictId, @ProvinceId, @WardId, @SearchText, @PageNumber, @PageSize",
                new SqlParameter[] {
                    BranchId,
                    DistrictId,
                    ProvinceId,
                    WardId,
                    SearchText,
                    PageNumber,
                    PageSize
                }
            );
        }
    }
}
