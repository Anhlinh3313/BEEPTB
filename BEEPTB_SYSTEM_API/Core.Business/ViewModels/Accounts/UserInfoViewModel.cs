using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Core.Business.ViewModels.General;
using Core.Entity.Abstract;

namespace Core.Entity.Entities
{
    public class UserInfoViewModel : EntitySimple
    {
        public UserInfoViewModel()
        {
        }

        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public int? ProvinceId { get; set; }
        public int? DistrictId { get; set; }
        public int? WardId { get; set; }
        public string IdentityCard { get; set; }
        public DateTime? BirthDate { get; set; }
        public bool? Gender { get; set; }
        public int? DepartmentId { get; set; }
        public int? UserTypeId { get; set; }
        public string AvatarPath { get; set; }
        public string PasswordHash { get; set; }
        public string UserName { get; set; }
        public string SecurityStamp { get; set; }
        public string FireBaseToken { get; set; }
        public bool? IsPassWordBasic { get; set; }
        public bool? IsBlocked { get; set; }
        public int[] RoleIds { get; set; }
        public int? SupplierId { get; set; }
        public int? BranchId { get; set; }
    }
}
