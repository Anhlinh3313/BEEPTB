using Core.Entity.Abstract;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Core.Entity.Procedures
{
    public class Proc_GetListPriceServiceDetails : IEntityProcView
    {
        public const string ProcName = "Proc_GetListPriceServiceDetails";
        public int? Id { get; set; }
        public bool? IsEnabled { get; set; }
        public int? PriceServiceId { get; set; }
        public int? PriceFormulaId { get; set; }
        public double? ValueFrom { get; set; }
        public double? ValueTo { get; set; }
        public double? ValuePlus { get; set; }
        public double? Price { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListPriceServiceDetails() { }

        public static IEntityProc GetEntityProc(int? priceServiceId = null, int? pageNumber = 1, int? pageSize = 20)
        {
            SqlParameter PriceServiceId = new SqlParameter("@PriceServiceId", priceServiceId);
            if (!priceServiceId.HasValue)
                PriceServiceId.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @PriceServiceId, @PageNumber, @PageSize",
                new SqlParameter[] {
                    PriceServiceId,
                    PageNumber,
                    PageSize
                }
            );
        }
    }
}
