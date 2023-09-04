using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetSupplierInfor :IEntityProcView
    {
        public const string ProcName = "Proc_GetSupplierInforByUserId";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string CompanyName { get; set; }
        public string TaxCode { get; set; }
        public string AddressIssueInvoice { get; set; }
        public string RoleIds { get; set; }

        public Proc_GetSupplierInfor()
        {

        }

        public static IEntityProc GetEntityProc(int userId)
        {
            SqlParameter UserId = new SqlParameter("@UserId", userId);

            return new EntityProc(
                $"{ProcName} @UserId",
                new SqlParameter[]
                {
                    UserId
                }
                );
        }
    }
}
