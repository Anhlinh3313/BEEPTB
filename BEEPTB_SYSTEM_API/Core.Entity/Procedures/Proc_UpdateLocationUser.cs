using Core.Entity.Abstract;
using Core.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_UpdateLocationUser : IEntityProcView
    {
        public const string ProcName = "Proc_UpdateLocationUser";

        [Key]
        public virtual int Id { get; set; }
        public virtual DateTime? CreatedWhen { get; set; }
        public virtual int? CreatedBy { get; set; }
        public virtual DateTime? ModifiedWhen { get; set; }
        public virtual int? ModifiedBy { get; set; }
        public virtual string ConcurrencyStamp { get; set; }
        public virtual bool IsEnabled { get; set; }
        public bool IsBlocked { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public string Code { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string AvatarPath { get; set; }
        public string IdentityCard { get; set; }
        public string SecurityStamp { get; set; } = Guid.NewGuid().ToString();
        public double? CurrentLat { get; set; }
        public double? CurrentLng { get; set; }
        public DateTime? LastUpdateLocationTime { get; set; }
        public string FireBaseToken { get; set; }
        public bool? IsPassWordBasic { get; set; }
        public double? X { get; set; }
        public double? Y { get; set; }
        public double? Z { get; set; }

        public Proc_UpdateLocationUser()
        {
        }

        public static IEntityProc GetEntityProc(int userId, double? lat, double? lng, double x, double y, double z)
        {

            SqlParameter UserId = new SqlParameter(
            "@UserId", userId);

            SqlParameter Lat = new SqlParameter(
           "@Lat", lat);
            if (!lat.HasValue)
                Lat.Value = DBNull.Value;

            SqlParameter Lng = new SqlParameter(
           "@Lng", lng);
            if (!lng.HasValue)
                Lng.Value = DBNull.Value;

            SqlParameter X = new SqlParameter("@X", x);
            SqlParameter Y = new SqlParameter("@Y", y);
            SqlParameter Z = new SqlParameter("@Z", z);

            return new EntityProc(
                $"{ProcName} @UserId,@Lat,@Lng,@X,@Y,@Z",
                new SqlParameter[] {
                    UserId,Lat,Lng,X,Y,Z
                }
            );
        }
    }
}
