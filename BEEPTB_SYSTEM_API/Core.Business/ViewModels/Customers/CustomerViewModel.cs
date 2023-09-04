using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.ViewModels.Customers
{
    public class CustomerViewModel : EntitySimple
    {
        public CustomerViewModel()
        {

        }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? UserId { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string IdentityCard { get; set; }
        public DateTime? BirthDate { get; set; }
        public bool? Gender { get; set; }
        public string AvatarPath { get; set; }
        public string LinkGoogle { get; set; }
        public string LinkFacebook { get; set; }
        public string CompanyName { get; set; }
        public string TaxCode { get; set; }
        public int? UserTypeId { get; set; }
        public string AddressIssueInvoice { get; set; }
        public string IdentityImage1Path { get; set; }
        public string IdentityImage2Path { get; set; }
        public string DriverLicenseImage1Path { get; set; }
        public string DriverLicenseImage2Path { get; set; }
    }
}
