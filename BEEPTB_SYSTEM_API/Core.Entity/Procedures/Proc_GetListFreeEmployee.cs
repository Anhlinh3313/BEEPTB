using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListFreeEmployee : IEntityProcView
    {
        public const string ProcName = "Proc_GetListFreeEmployee";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public int? BranchId { get; set; }

        public Proc_GetListFreeEmployee()
        {

        }

        public static IEntityProc GetEntityProcView(int? branchId)
        {
            SqlParameter BranchId = new SqlParameter("@BranchId", branchId);
            if (!branchId.HasValue)
            {
                BranchId.Value = DBNull.Value;
            }

            return new EntityProc(
                $"{ProcName} @BranchId",
                new SqlParameter[]
                {
                    BranchId
                }
            );
        }
    }
}
