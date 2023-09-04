using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListTransportations : IEntityProcView
    {
        public const string ProcName = "Proc_GetListTransportations";
        public int? Id { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public int? VehicleTypeId { get; set; }
        public string VehicleTypeName { get; set; }
        public int? VehicleId { get; set; }
        public string VehicleName { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public double? RentalFee { get; set; }
        public double? TotalIncurredFee { get; set; }
        public double? TotalFee { get; set; }
        public double? TotalPaid { get; set; }
        public int? TransportationStatusId { get; set; }
        public string TransportationStatusName { get; set; }
        public int? BookingId { get; set; }
        public string BookingCode { get; set; }
        public int? BookingStatusId { get; set; }
        public string BookingStatusName { get; set; }
        public string UserFullName { get; set; }
        public string LicensePlates { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListTransportations() { }

        public static IEntityProc GetEntityProc(int? id = null, int? bookingId = null, string code = null, int? vehicleTypeId = null, int? vehicleId = null, int? branchId = null,
            int? serviceId = null, int? transportationStatusId = null, int? pageNumber = null, int? pageSize = null, string searchText = null,int? userId = null, string transportationStatusIds = null)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue) Id.Value = DBNull.Value;

            SqlParameter BookingId = new SqlParameter("@BookingId", bookingId);
            if (!bookingId.HasValue) BookingId.Value = DBNull.Value;

            SqlParameter Code = new SqlParameter("@Code", code);
            if (string.IsNullOrWhiteSpace(code)) Code.Value = DBNull.Value;

            SqlParameter VehicleTypeId = new SqlParameter("@VehicleTypeId", vehicleTypeId);
            if (!vehicleTypeId.HasValue) VehicleTypeId.Value = DBNull.Value;

            SqlParameter VehicleId = new SqlParameter("@VehicleId", vehicleId);
            if (!vehicleId.HasValue) VehicleId.Value = DBNull.Value;

            SqlParameter BranchId = new SqlParameter("@BranchId", branchId);
            if (!branchId.HasValue) BranchId.Value = DBNull.Value;

            SqlParameter ServiceId = new SqlParameter("@ServiceId", serviceId);
            if (!serviceId.HasValue) ServiceId.Value = DBNull.Value;

            SqlParameter TransportationStatusId = new SqlParameter("@TransportationStatusId", transportationStatusId);
            if (!transportationStatusId.HasValue) TransportationStatusId.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue) PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue) PageSize.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;

            SqlParameter UserId = new SqlParameter("@UserId", userId);
            if (!userId.HasValue) UserId.Value = DBNull.Value;

            SqlParameter TransportationStatusIds = new SqlParameter("@TransportationStatusIds", transportationStatusIds);
            if (string.IsNullOrWhiteSpace(transportationStatusIds)) TransportationStatusIds.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @BookingId, @Code, @VehicleTypeId, @VehicleId, @BranchId, @ServiceId, @TransportationStatusId, @PageNumber, @PageSize, @SearchText, @UserId, @TransportationStatusIds",
                new SqlParameter[] {         
                    Id,
                    BookingId,
                    Code,
                    VehicleTypeId,
                    VehicleId,
                    BranchId,
                    ServiceId,
                    TransportationStatusId,
                    PageNumber,
                    PageSize,
                    SearchText,
                    UserId,
                    TransportationStatusIds
                }
            );            
        }
    }
}
