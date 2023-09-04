using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListPriceServices : IEntityProcView
    {
        public const string ProcName = "Proc_GetListPriceServices";
        public int? Id { get; set; }
        public DateTime? CreatedWhen { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedWhen { get; set; }
        public int? ModifiedBy { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool? IsEnabled { get; set; }
        public int? ServiceId { get; set; }
        public string ServiceName { get; set; }
        public int? VehicleTypeId { get; set; }
        public string VehicleTypeName { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public int? Priority { get; set; }
        public bool? IsActive { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListPriceServices() { }

        public static IEntityProc GetEntityProc(string code = null, int? serviceId = null, int? vehicleTypeId = null, DateTime? dateFrom = null, DateTime? dateTo = null, int? pageNumber = 1, int? pageSize = 20)
        {
            SqlParameter Code = new SqlParameter("@Code", code);
            if (string.IsNullOrEmpty(code))
                Code.Value = DBNull.Value;

            SqlParameter ServiceId = new SqlParameter("@ServiceId", serviceId);
            if (!serviceId.HasValue)
                ServiceId.Value = DBNull.Value;

            SqlParameter VehicleTypeId = new SqlParameter("@VehicleTypeId", vehicleTypeId);
            if (!vehicleTypeId.HasValue)
                VehicleTypeId.Value = DBNull.Value;

            SqlParameter DateFrom = new SqlParameter("@DateFrom", dateFrom);
            if (!dateFrom.HasValue)
                DateFrom.Value = DBNull.Value;

            SqlParameter DateTo = new SqlParameter("@DateTo", dateTo);
            if (!dateTo.HasValue)
                DateTo.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Code, @ServiceId, @VehicleTypeId, @DateFrom, @DateTo, @PageNumber, @PageSize",
                new SqlParameter[] {
                    Code,
                    ServiceId,
                    VehicleTypeId,
                    DateFrom,
                    DateTo,
                    PageNumber,
                    PageSize
                }
            );
        }
    }
}
