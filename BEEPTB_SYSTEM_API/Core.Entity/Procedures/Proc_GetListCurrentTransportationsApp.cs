using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListCurrentTransportationsApp : IEntityProcView
    {
        public const string ProcName = "Proc_GetListCurrentTransportationsApp";
        public int? Id { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public int? VehicleTypeId { get; set; }
        public string VehicleTypeName { get; set; }
        public int? VehicleId { get; set; }
        public string VehicleName { get; set; }
        public double? RentalFee { get; set; }
        public double? TotalIncurredFee { get; set; }
        public double? TotalFee { get; set; }
        public int? TransportationStatusId { get; set; }
        public int? BookingId { get; set; }
        public string BookingCode { get; set; }
        public int? BookingStatusId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Address { get; set; }
        public string AddressDetail { get; set; }
        public double? TotalTime { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string LicensePlates { get; set; }
        public string TransportationStatusName { get; set; }
        public string BookingStatusName { get; set; }
        public int? TotalPaid { get; set; }
        public string UserFullName { get; set; }
        public int? CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPhoneNumber { get; set; }
        public string IdentityImage1Path { get; set; }
        public string IdentityImage2Path { get; set; }
        public string DriverLicenseImage1Path { get; set; }
        public string DriverLicenseImage2Path { get; set; }
        public int? ServiceTypeId { get; set; }
        public string ServiceTypeName { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListCurrentTransportationsApp() { }

        public static IEntityProc GetEntityProc(int? transportationId = null, int? transportationStatusId = null, string transportationStatusIds = null, int? userId = null, int? pageNumber = null, int? pageSize = null, string searchText = null)
        {
            SqlParameter TransportationId = new SqlParameter("@TransportationId", transportationId);
            if (!transportationId.HasValue) TransportationId.Value = DBNull.Value;

            SqlParameter TransportationStatusId = new SqlParameter("@TransportationStatusId", transportationStatusId);
            if (!transportationStatusId.HasValue) TransportationStatusId.Value = DBNull.Value;

            SqlParameter TransportationStatusIds = new SqlParameter("@TransportationStatusIds", transportationStatusIds);
            if (string.IsNullOrWhiteSpace(transportationStatusIds)) TransportationStatusIds.Value = DBNull.Value;

            SqlParameter UserId = new SqlParameter("@UserId", userId);
            if (!userId.HasValue) UserId.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue) PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue) PageSize.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @TransportationId, @TransportationStatusId, @TransportationStatusIds, @UserId, @PageNumber, @PageSize, @SearchText",
                new SqlParameter[] {
                    TransportationId,
                    TransportationStatusId,
                    TransportationStatusIds,
                    UserId,
                    PageNumber,
                    PageSize,
                    SearchText
                }
            );            
        }
    }
}
