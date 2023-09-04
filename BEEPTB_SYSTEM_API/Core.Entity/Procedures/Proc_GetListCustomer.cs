using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListCustomer : IEntityProcView
    {
        public const string ProcName = "Proc_GetListCustomer";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string IdentityCard { get; set; }
        public DateTime? BirthDate { get; set; }
        public bool? Gender { get; set; }
        public string AvatarPath { get; set; }
        public int? UserId { get; set; }
        public string TaxCode { get; set; }
        public string AddressIssueInvoice { get; set; }
        public string CompanyName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListCustomer()
        {

        }

        public static IEntityProc GetEntityProc(int? id, string searchText, int? pageNum, int? pageSize, string identityCard = null, string phoneNumber = null)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue)
                Id.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText))
                SearchText.Value = DBNull.Value;
  
            SqlParameter PageNum = new SqlParameter("@pageNum", pageNum);
            if (!pageNum.HasValue)
                PageNum.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@pageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            SqlParameter IdentityCard = new SqlParameter("@IdentityCard", identityCard);
            if (string.IsNullOrWhiteSpace(identityCard))
                IdentityCard.Value = DBNull.Value;

            SqlParameter PhoneNumber = new SqlParameter("@PhoneNumber", phoneNumber);
            if (string.IsNullOrWhiteSpace(phoneNumber))
                PhoneNumber.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @SearchText, @PageNum, @PageSize, @IdentityCard, @PhoneNumber",
                new SqlParameter[]
                {
                    Id,
                    SearchText,
                    PageNum,
                    PageSize,
                    IdentityCard,
                    PhoneNumber
                }
            );
        }
    }
}
