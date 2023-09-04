using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entity.Entities
{
    public class Customer : EntitySimple
    {
        public Customer()
        {
        }

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
        public int? UserId { get; set; }
        public string AddressIssueInvoice { get; set; }
        public string IdentityImage1Path { get; set; }
        public string IdentityImage2Path { get; set; }
        public string DriverLicenseImage1Path { get; set; }
        public string DriverLicenseImage2Path { get; set; }
    }
}
