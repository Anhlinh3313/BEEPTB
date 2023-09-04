using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListUser : IEntityProcView
    {
        public const string ProcName = "Proc_GetListUser";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string ConcurrencyStamp { get; set; }
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
        public string AvatarPath { get; set; }
        public bool? IsBlocked { get; set; }
        public int? BranchId { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListUser()
        {

        }

        public static IEntityProc GetEntityProc(int? id = null, string searchText = null, int? provinceId = null, int? districtId = null, int? wardId = null, int? departmentId = null,
            int? roleId = null, int? userTypeId = null, int? pageNum = 1, int? pageSize = 20)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue)
            {
                Id.Value = DBNull.Value;
            }

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText))
            {
                SearchText.Value = DBNull.Value;
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

            SqlParameter RoleId = new SqlParameter("@RoleId", roleId);
            if (!roleId.HasValue)
            {
                RoleId.Value = DBNull.Value;
            }

            SqlParameter UserTypeId = new SqlParameter("@UserTypeId", userTypeId);
            if (!userTypeId.HasValue)
            {
                UserTypeId.Value = DBNull.Value;
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
                $"{ProcName} @Id, @SearchText, @ProvinceId, @DistrictId, @WardId, @DepartmentId, @RoleId, @UserTypeId, @PageNum, @PageSize",
                    new SqlParameter[]
                    {
                        Id,
                        SearchText,
                        ProvinceId,
                        DistrictId,
                        WardId,
                        DepartmentId,
                        RoleId,
                        UserTypeId,
                        PageNum,
                        PageSize
                    }
                );
        }
    }
}
