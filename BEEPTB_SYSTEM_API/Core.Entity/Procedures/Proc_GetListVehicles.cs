using Core.Entity.Abstract;
using System;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlClient;

namespace Core.Entity.Procedures
{
    public class Proc_GetListVehicles : IEntityProcView
    {
        public const string ProcName = "Proc_GetListVehicles";
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }      
        public string LicensePlates { get; set; }
        public int? VehicleTypeId { get; set; }
        public string VehicleTypeName { get; set; }
        public int? ManufactureYear { get; set; }
        public int? VehicleStatusId { get; set; }
        public string ChassisNumber { get; set; }
        public string EngineNumber { get; set; }
        public DateTime? InspectionDate { get; set; }
        public string VehicleManufacturer { get; set; }
        public string FuelType { get; set; }
        public string Owner { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public double? Price { get; set; }
        public bool? IsNew { get; set; }
        public bool? IsActive { get; set; }
        public string ImagePath { get; set; }
        public string FilePath { get; set; }
        public int? TotalCount { get; set; }

        public Proc_GetListVehicles()
        {

        }

        public static IEntityProc GetEntityProc(int? vehicleTypeId, int? vehicleStatusId,  string searchText, int? pageNumber, int? pageSize, int? branchId)
        {
            SqlParameter _vehicleTypeId = new SqlParameter("@VehicleTypeId", vehicleTypeId);
            if (!vehicleTypeId.HasValue)
                _vehicleTypeId.Value = DBNull.Value;

            SqlParameter BranchId = new SqlParameter("@BranchId", branchId);
            if (!branchId.HasValue)
                BranchId.Value = DBNull.Value;

            SqlParameter _vehicleStatusId = new SqlParameter("@VehicleStatusId", vehicleStatusId);
            if (!vehicleStatusId.HasValue)
                _vehicleStatusId.Value = DBNull.Value;

            SqlParameter _searchText = new SqlParameter("@SearchText", searchText);
            if (string.IsNullOrWhiteSpace(searchText)) _searchText.Value = DBNull.Value;

            SqlParameter PageNumber = new SqlParameter("@PageNumber", pageNumber);
            if (!pageNumber.HasValue)
                PageNumber.Value = DBNull.Value;

            SqlParameter PageSize = new SqlParameter("@PageSize", pageSize);
            if (!pageSize.HasValue)
                PageSize.Value = DBNull.Value;

            return new EntityProc(
                $"{ProcName} @VehicleTypeId, @VehicleStatusId, @SearchText, @PageNumber, @PageSize, @BranchId",
                new SqlParameter[]
                {
                    _vehicleTypeId, _vehicleStatusId, _searchText, PageNumber, PageSize, BranchId
                }
            );
        }
    }
}
