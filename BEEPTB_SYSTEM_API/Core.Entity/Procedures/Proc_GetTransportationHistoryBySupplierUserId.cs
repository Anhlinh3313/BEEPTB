using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetTransportationHistoryBySupplierUserId : IEntityProcView
    {
        public const string ProcName = "Proc_GetTransportationHistoryBySupplierUserId";
        public int? Id { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public int? SupplierUserId { get; set; }
        public string SupplierUserName { get; set; }
        public int? TotalGuest { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public double? RentalFee { get; set; }
        public double? TotalIncurredFee { get; set; }
        public double? TotalFee { get; set; }
        public int? TransportationStatusId { get; set; }
        public string TransportationStatusName { get; set; }
        public int? BookingId { get; set; }
        public string BookingCode { get; set; }
        public int? BookingStatusId { get; set; }
        public string BookingStatusName { get; set; }
        public int? BookingDepartureId { get; set; }
        public int? BookingDestinationId { get; set; }
        public string BookingDepartures { get; set; }
        public string BookingDestinations { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool? IsTwoWay { get; set; }
        public string VehicleTypeName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetTransportationHistoryBySupplierUserId() { }

        public static IEntityProc GetEntityProc(int? id, int? userId = null, string transportationStatusIds = null, int? pageNumber = null, int? pageSize = null)
        {

            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue) Id.Value = DBNull.Value;

            SqlParameter UserId = new SqlParameter("@UserId", userId);
            if (!userId.HasValue) UserId.Value = DBNull.Value;

            SqlParameter TransportationStatusIds = new SqlParameter("@TransportationStatusIds", transportationStatusIds);
            if (string.IsNullOrWhiteSpace(transportationStatusIds)) TransportationStatusIds.Value = DBNull.Value;


            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue) PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue) PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @UserId, @TransportationStatusIds, @PageNumber, @PageSize",
                new SqlParameter[] {
                    Id,
                    UserId,
                    TransportationStatusIds,
                    PageNumber,
                    PageSize
                }
            );            
        }
    }
}
