using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListTransportationIncurredFees : IEntityProcView
    {
        public const string ProcName = "Proc_GetListTransportationIncurredFees";

        public int Id { get; set; }
        public double? IncurredFee { get; set; }
        public string Note { get; set; }
        public int? IncurredFeeId { get; set; }
        public string IncurredFeeName { get; set; }
        public string IncurredFeeCode { get; set; }
        public int? TransportationId { get; set; }
        public string TransportationCode { get; set; }
        public double? TotalIncurredFee { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListTransportationIncurredFees() { }

        public static IEntityProc GetEntityProc(int transportationId, int? incurredFeeId = null, int? pageNumber = null, int? pageSize = null)
        {
            SqlParameter TransportationId = new SqlParameter("@TransportationId", transportationId);

            SqlParameter IncurredFeeId = new SqlParameter("@IncurredFeeId", incurredFeeId);
            if (!incurredFeeId.HasValue)
            {
                IncurredFeeId.Value = DBNull.Value;
            }

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
            {
                PageNumber.Value = DBNull.Value;
            }

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
            {
                PageSize.Value = DBNull.Value;
            }

            return new EntityProc(
                $"{ProcName} @TransportationId, @IncurredFeeId, @PageNumber, @PageSize",
                new SqlParameter[]
                {
                    TransportationId,
                    IncurredFeeId,
                    PageNumber,
                    PageSize
                }
            );
        }
    }
}
