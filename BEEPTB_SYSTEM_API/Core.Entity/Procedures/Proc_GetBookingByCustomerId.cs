using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetBookingByCustomerId : IEntityProcView
    {
        public const string ProcName = "Proc_GetBookingByCustomerId";
        public bool? IsSuccess { get; set; }
        public int Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public double? TotalTime { get; set; }
        public int? ServiceId { get; set; }
        public int? CustomerId { get; set; }
        public int? BookingStatusId { get; set; }
        public string Note { get; set; }
        public int? ReasonId { get; set; }
        public int? BranchId { get; set; }
        public string Address { get; set; }
        public string AddressDetail { get; set; }
        public string ServiceName { get; set; }
        public string CustomerName { get; set; }
        public string BookingStatusName { get; set; }
        public string VehicleTypeName { get; set; }
        public string BranchName { get; set; }
        public string UserFullName { get; set; }
        public string ReasonName { get; set; }
        public int? LateHour { get; set; }
        public double? TotalFee { get; set; }
        public double? Price { get; set; }
        public Proc_GetBookingByCustomerId()
        {
        }
        public static IEntityProc GetEntityProc(int? customerId = null)
        {
            SqlParameter CustomerId = new SqlParameter("@CustomerId", customerId);
            if (!customerId.HasValue) CustomerId.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @CustomerId",
                new SqlParameter[]
                {
                    CustomerId
                }
            );
        }
    }
}
