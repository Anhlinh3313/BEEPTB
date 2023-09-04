using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListSupplierUser : IEntityProcView
    {
        public const string ProcName = "Proc_GetListSupplierUser";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public int? ProvinceId { get; set; }
        public string ProvinceName { get; set; }
        public int? DistrictId { get; set; }
        public string DistrictName { get; set; }
        public int? WardId { get; set; }
        public string WardName { get; set; }
        public string IdentityCard { get; set; }
        public DateTime? BirthDate { get; set; }
        public bool? Gender { get; set; }
        public int? DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string RoleName { get; set; }
        public string LicenseTypeName { get; set; }
        public int? TotalSeat { get; set; }
        public string AvatarPath { get; set; }
        public int? SupplierId { get; set; }
        public int? UserId { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListSupplierUser()
        {

        }

        public static IEntityProc GetEntityProc(int? supplierUserId, string code, string searchText, int? supplierId, int? provinceId, int? districtId, int? wardId, int? departmentId, int? totalSeat,
            int? roleId, int? pageNum, int? pageSize, bool? isFree = null)
        {
            SqlParameter SupplierUserId = new SqlParameter("@SupplierUserId", supplierUserId);
            if (!supplierUserId.HasValue)
            {
                SupplierUserId.Value = DBNull.Value;
            }

            SqlParameter Code = new SqlParameter("@Code", code);
            if (string.IsNullOrWhiteSpace(code))
            {
                Code.Value = DBNull.Value;
            }

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText))
            {
                SearchText.Value = DBNull.Value;
            }

            SqlParameter SupplierId = new SqlParameter("@SupplierId", supplierId);
            if (!supplierId.HasValue)
            {
                SupplierId.Value = DBNull.Value;
            }

            SqlParameter ProvinceId = new SqlParameter("@ProvinceId", provinceId);
            if (!provinceId.HasValue)
            {
                ProvinceId.Value = DBNull.Value;
            }

            SqlParameter DistrictId = new SqlParameter("@DistrictId", districtId);
            if (!districtId.HasValue)
            {
                DistrictId.Value = DBNull.Value;
            }

            SqlParameter WardId = new SqlParameter("@WardId", wardId);
            if (!wardId.HasValue)
            {
                WardId.Value = DBNull.Value;
            }

            SqlParameter DepartmentId = new SqlParameter("@DepartmentId", departmentId);
            if (!departmentId.HasValue)
            {
                DepartmentId.Value = DBNull.Value;
            }

            SqlParameter TotalSeat = new SqlParameter("@TotalSeat", totalSeat);
            if (!totalSeat.HasValue)
            {
                TotalSeat.Value = DBNull.Value;
            }

            SqlParameter RoleId = new SqlParameter("@RoleId", roleId);
            if (!roleId.HasValue)
            {
                RoleId.Value = DBNull.Value;
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

            SqlParameter IsFree = new SqlParameter("@IsFree", isFree);
            if (!isFree.HasValue)
            {
                IsFree.Value = DBNull.Value;
            }

            return new EntityProc(
                $"{ProcName} @SupplierUserId, @Code, @SearchText, @SupplierId, @ProvinceId, @DistrictId, @WardId, @DepartmentId, @RoleId, @TotalSeat, @PageNum, @PageSize, @IsFree",
                new SqlParameter[]
                {
                    SupplierUserId,
                    Code,
                    SearchText,
                    SupplierId,
                    ProvinceId,
                    DistrictId,
                    WardId,
                    DepartmentId,
                    RoleId,
                    TotalSeat,
                    PageNum,
                    PageSize,
                    IsFree
                }
                );
        }
    }
}
