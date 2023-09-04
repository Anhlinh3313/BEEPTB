using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_PriceService : IEntityProcView
    {
        public const string ProcName = "Proc_PriceService";

        [Key]
        public int? PriceServiceDetailId { get; set; }
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int? ServiceId { get; set; }
        public int? VehicleTypeId { get; set; }
        public string VehicleTypeName { get; set; }
        public int? PriceFormulaId { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public int? Priority { get; set; }
        public double? Value { get; set; }
        public double? ValueFrom { get; set; }
        public double? ValueTo { get; set; }
        public double? ValuePlus { get; set; }
        public double? Price { get; set; }

        public Proc_PriceService()
        {

        }

        public static IEntityProc GetEntityProc(int? id = null, int? serviceId = null, int? vehicleTypeId = null, DateTime? startDate = null, DateTime? endDate = null, bool? isPlus = null)
        {
            SqlParameter Id = new SqlParameter("@Id", id);
            if (!id.HasValue)
                Id.Value = DBNull.Value;

            SqlParameter ServiceId = new SqlParameter("@ServiceId", serviceId);
            if (!serviceId.HasValue)
                ServiceId.Value = DBNull.Value;

            SqlParameter VehicleTypeId = new SqlParameter("@VehicleTypeId", vehicleTypeId);
            if (!vehicleTypeId.HasValue)
                VehicleTypeId.Value = DBNull.Value;

            SqlParameter StartDate = new SqlParameter("@StartDate", startDate);
            if (!startDate.HasValue)
                StartDate.Value = DBNull.Value;

            SqlParameter EndDate = new SqlParameter("@EndDate", endDate);
            if (!endDate.HasValue)
                EndDate.Value = DBNull.Value;

            SqlParameter IsPlus = new SqlParameter("@IsPlus", isPlus);
            if (!isPlus.HasValue)
                IsPlus.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @Id, @ServiceId, @VehicleTypeId, @StartDate, @EndDate, @IsPlus",
                new SqlParameter[]
                    {
                        Id, ServiceId, VehicleTypeId, StartDate, EndDate, IsPlus
                    }
                );
        }
    }
}
