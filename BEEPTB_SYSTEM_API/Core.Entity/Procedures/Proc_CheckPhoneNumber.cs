using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_CheckPhoneNumber : IEntityProcView
    {
        public const string ProcName = "Proc_CheckPhoneNumber";
        [Key]
        public Boolean IsSuccess { get; set; }

        public Proc_CheckPhoneNumber() { }
        public static IEntityProc GetEntityProc(string phoneNumber)
        {
            SqlParameter PhoneNumber = new SqlParameter("@PhoneNumber", phoneNumber);
            if (string.IsNullOrWhiteSpace(phoneNumber)) PhoneNumber.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @PhoneNumber",
                new SqlParameter[] {
                    PhoneNumber
                }
            );
        }
    }
}
