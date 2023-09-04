using Core.Entity.Abstract;
using System;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListIncurredFeesByTransportationId : IEntityProcView
    {
        public const string ProcName = "Proc_GetListIncurredFeesByTransportationId";

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public double IncurredFee { get; set; }
        public string Note { get; set; }

        public Proc_GetListIncurredFeesByTransportationId()
        {

        }

        public static IEntityProc GetEntityProc(int? transportationId = null, string listTransportationIds = null)
        {
            SqlParameter TransportationId = new SqlParameter("@TransportationId", transportationId);
            if (transportationId == null) TransportationId.Value = DBNull.Value;

            SqlParameter ListTransportationIds = new SqlParameter("@ListTransportationIds", listTransportationIds);
            if (string.IsNullOrEmpty(listTransportationIds)) ListTransportationIds.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @TransportationId, @ListTransportationIds",
                new SqlParameter[]
                {
                    TransportationId,
                    ListTransportationIds
                }
            );
        }
    }
}
