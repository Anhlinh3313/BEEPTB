using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListCoordinate : IEntityProcView
    {
        public const string ProcName = "Proc_GetListCoordinate";

        public int Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string ConcurrencyStamp { get; set; }
        public bool IsEnabled { get; set; }
        public string Code { get; set; }
        public string BookingCode { get; set; }
        public string Name { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? BookingId { get; set; }
        public int? ReasonId { get; set; }
        public double? TotalFee { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public string VehicleTypeName { get; set; }
        public string VehicleName { get; set; }
        public string BranchName { get; set; }
        public string UserFullName { get; set; }
        public string ReasonName { get; set; }
        public string Address { get; set; }
        public string AddressDetail { get; set; }
        public int? CustomerId { get; set; }
        public string CustomerName { get; set; }
        public int? BookingStatusId { get; set; }
        public int? TransportationStatusId { get; set; }
        public int? LateHour { get; set; }
        public string TransportationStatusName { get; set; }
        public string Note { get; set; }
        public int TotalCount { get; set; }

        public Proc_GetListCoordinate()
        {

        }

        public static IEntityProc GetEntityProc(int? id = null, int? serviceId = null, int? customerId = null, int? branchId = null, int? bookingStatusId = null,
            string code = null, int? pageNumber = null, int? pageSize = null, string searchText = null, string transportationStatusIds = null, int? vehicleTypeId = null, int? transportationStatusId = null, string fromDate = null, string toDate = null)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue) Id.Value = DBNull.Value;

            SqlParameter ServiceId = new SqlParameter("@ServiceId", serviceId);
            if (!serviceId.HasValue) ServiceId.Value = DBNull.Value;

            SqlParameter CustomerId = new SqlParameter("@CustomerId", customerId);
            if (!customerId.HasValue) CustomerId.Value = DBNull.Value;

            SqlParameter BranchId = new SqlParameter("@BranchId", branchId);
            if (!branchId.HasValue) BranchId.Value = DBNull.Value;

            SqlParameter BookingStatusId = new SqlParameter("@BookingStatusId", bookingStatusId);
            if (!bookingStatusId.HasValue) BookingStatusId.Value = DBNull.Value;

            SqlParameter Code = new SqlParameter("@Code", code);
            if (string.IsNullOrWhiteSpace(code)) Code.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue) PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue) PageSize.Value = DBNull.Value;

            SqlParameter SearchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) SearchText.Value = DBNull.Value;

            SqlParameter TransportationStatusIds = new SqlParameter("@TransportationStatusIds", transportationStatusIds);
            if (string.IsNullOrWhiteSpace(transportationStatusIds)) TransportationStatusIds.Value = DBNull.Value;

            SqlParameter VehicleTypeId = new SqlParameter("@VehicleTypeId", vehicleTypeId);
            if (!vehicleTypeId.HasValue) VehicleTypeId.Value = DBNull.Value;

            SqlParameter TransportationStatusId = new SqlParameter("@TransportationStatusId", transportationStatusId);
            if (!transportationStatusId.HasValue) TransportationStatusId.Value = DBNull.Value;

            SqlParameter FromDate = new SqlParameter("@FromDate", fromDate);
            if (string.IsNullOrWhiteSpace(fromDate)) FromDate.Value = DBNull.Value;

            SqlParameter ToDate = new SqlParameter("@ToDate", toDate);
            if (string.IsNullOrWhiteSpace(toDate)) ToDate.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @ServiceId, @CustomerId, @BranchId, @BookingStatusId, @Code, @PageNumber, @PageSize, @SearchText, @TransportationStatusIds, @VehicleTypeId, @TransportationStatusId, @FromDate, @ToDate",
                new SqlParameter[]
                {
                    Id,
                    ServiceId,
                    CustomerId,
                    BranchId,
                    BookingStatusId,
                    Code,
                    PageNumber,
                    PageSize,
                    SearchText,
                    TransportationStatusIds,
                    VehicleTypeId,
                    TransportationStatusId,
                    FromDate,
                    ToDate
                }
            );
        }
    }
}
