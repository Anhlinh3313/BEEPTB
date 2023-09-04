using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListSupport : IEntityProcView
    {
        public const string ProcName = "Proc_GetListSupport";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string ContentSupport { get; set; }
        public string ContentHandle { get; set; }
        public int? SupportTypeId { get; set; }
        public string SupportTypeName { get; set; }
        public int? CustomerId { get; set; }
        public string CustomerName { get; set; }
        public int? EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int? SupportStatusId { get; set; }
        public string SupportStatusName { get; set; }
        public int? SupplierId { get; set; }
        public string SupplierName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListSupport()
        {

        }

        public static IEntityProc GetEntityProcView(int? curentUserId, string code, int? supplierId, int? customerId, int? employeeId, int? supportStatusId, int? supportTypeId, int? pageNum, int? pageSize)
        {
            SqlParameter Code = new SqlParameter("@Code", code);
            if (string.IsNullOrWhiteSpace(code))
            {
                Code.Value = DBNull.Value;
            }

            SqlParameter CurrentUserId = new SqlParameter("@CurrentUserId", curentUserId);
            if (!curentUserId.HasValue)
            {
                CurrentUserId.Value = DBNull.Value;
            }

            SqlParameter SupplierId = new SqlParameter("@SupplierId", supplierId);
            if (!supplierId.HasValue)
            {
                SupplierId.Value = DBNull.Value;
            }

            SqlParameter CustomerId = new SqlParameter("@CustomerId", customerId);
            if (!customerId.HasValue)
            {
                CustomerId.Value = DBNull.Value;
            }

            SqlParameter EmployeeId = new SqlParameter("@EmployeeId", employeeId);
            if (!employeeId.HasValue)
            {
                EmployeeId.Value = DBNull.Value;
            }

            SqlParameter SupportStatusId = new SqlParameter("@SupportStatusId", supportStatusId);
            if (!supportStatusId.HasValue)
            {
                SupportStatusId.Value = DBNull.Value;
            }

            SqlParameter SupportTypeId = new SqlParameter("@SupportTypeId", supportTypeId);
            if (!supportTypeId.HasValue)
            {
                SupportTypeId.Value = DBNull.Value;
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
                $"{ProcName} @CurrentUserId, @Code, @SupplierId, @CustomerId, @EmployeeId, @SupportStatusId, @SupportTypeId, @PageNum, @PageSize",
                new SqlParameter[]
                {
                    CurrentUserId,
                    Code,
                    SupplierId,
                    CustomerId,
                    EmployeeId,
                    SupportStatusId,
                    SupportTypeId,
                    PageNum,
                    PageSize
                }
                );
        }
    }
}
