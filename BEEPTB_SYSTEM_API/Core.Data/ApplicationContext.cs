using System;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Core.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        public ApplicationContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Connection.Instance.GetConnectionString());
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // --------- ENTITY ---------
            modelBuilder.Entity<District>().ToTable("Beep_Districts");
            modelBuilder.Entity<Page>().ToTable("Beep_Pages");
            modelBuilder.Entity<PagePermission>().ToTable("Beep_PagePermissions");
            modelBuilder.Entity<PageType>().ToTable("Beep_PageTypes");
            modelBuilder.Entity<Province>().ToTable("Beep_Provinces");
            modelBuilder.Entity<Role>().ToTable("Beep_Roles");
            modelBuilder.Entity<RolePage>().ToTable("Beep_RolePages");
            modelBuilder.Entity<User>().ToTable("Beep_Users");
            modelBuilder.Entity<UserType>().ToTable("Beep_UserTypes");
            modelBuilder.Entity<UserRole>().ToTable("Beep_RoleUsers");
            modelBuilder.Entity<Ward>().ToTable("Beep_Wards");
            modelBuilder.Entity<ModulePage>().ToTable("Beep_ModulePages");
            modelBuilder.Entity<NotificationType>().ToTable("Beep_NotificationTypes");
            modelBuilder.Entity<Notification>().ToTable("Beep_Notifications");
            modelBuilder.Entity<GeneralInfo>().ToTable("Beep_GeneralInfos");
            modelBuilder.Entity<Department>().ToTable("Beep_Departments");
            modelBuilder.Entity<Service>().ToTable("Beep_Services");
            modelBuilder.Entity<VehicleType>().ToTable("Beep_VehicleTypes");
            modelBuilder.Entity<IncurredFee>().ToTable("Beep_IncurredFees");
            modelBuilder.Entity<TermsCondition>().ToTable("Beep_TermsConditions");
            modelBuilder.Entity<Vehicle>().ToTable("Beep_Vehicles");
            modelBuilder.Entity<VehicleStatus>().ToTable("Beep_VehicleStatus");
            modelBuilder.Entity<PriceService>().ToTable("Beep_PriceServices");
            modelBuilder.Entity<PriceServiceDetail>().ToTable("Beep_PriceServiceDetails");
            modelBuilder.Entity<PriceFormula>().ToTable("Beep_PriceFormulas");
            modelBuilder.Entity<Booking>().ToTable("Beep_Bookings");
            modelBuilder.Entity<Support>().ToTable("Beep_Supports");
            modelBuilder.Entity<SupportType>().ToTable("Beep_SupportTypes");
            modelBuilder.Entity<SupportStatus>().ToTable("Beep_SupportStatus");
            modelBuilder.Entity<Transportation>().ToTable("Beep_Transportations");
            modelBuilder.Entity<Customer>().ToTable("Beep_Customers");
            modelBuilder.Entity<HistoryPayment>().ToTable("Beep_HistoryPayments");
            modelBuilder.Entity<TransportationStatus>().ToTable("Beep_TransportationStatus");
            modelBuilder.Entity<BookingStatus>().ToTable("Beep_BookingStatus");
            modelBuilder.Entity<TransportationIncurredFees>().ToTable("Beep_TransportationIncurredFees");
            modelBuilder.Entity<HistoryTransportation>().ToTable("Beep_HistoryTransportations");
            modelBuilder.Entity<TransportationIncurredFeesImages>().ToTable("Beep_TransportationIncurredFeesImages");
            modelBuilder.Entity<IncurredFeeImages>().ToTable("Beep_IncurredFeeImages");
            modelBuilder.Entity<Branch>().ToTable("Beep_Branch");
            modelBuilder.Entity<ServiceTypes>().ToTable("Beep_ServiceTypes");
            modelBuilder.Entity<SMS>().ToTable("Beep_SMS");
            modelBuilder.Entity<Timeline>().ToTable("Beep_Timeline");
            modelBuilder.Entity<Reason>().ToTable("Beep_Reason");
            modelBuilder.Entity<ReasonDetail>().ToTable("Beep_ReasonDetail");
            modelBuilder.Entity<ReasonType>().ToTable("Beep_ReasonType");

            // --------- PROC -------------
            modelBuilder.Entity<Proc_UpdateLocationUser>().ToTable(Proc_UpdateLocationUser.ProcName);
            modelBuilder.Entity<Proc_GetMenuByUser>().ToTable(Proc_GetMenuByUser.ProcName);
            modelBuilder.Entity<Proc_GetListPages>().ToTable(Proc_GetListPages.ProcName);
            modelBuilder.Entity<Proc_SearchEntityByValue>().ToTable(Proc_SearchEntityByValue.ProcName);
            modelBuilder.Entity<Proc_Permission>().ToTable(Proc_Permission.ProcName);
            modelBuilder.Entity<Proc_PermissionDetail>().ToTable(Proc_PermissionDetail.ProcName);
            modelBuilder.Entity<Proc_GetSupplierInfor>().ToTable(Proc_GetSupplierInfor.ProcName);
            modelBuilder.Entity<Proc_UpdatePermission>().ToTable(Proc_UpdatePermission.Procname);
            modelBuilder.Entity<Proc_GetListSuppliers>().ToTable(Proc_GetListSuppliers.ProcName);
            modelBuilder.Entity<Proc_GetListSupplierUser>().ToTable(Proc_GetListSupplierUser.ProcName);
            modelBuilder.Entity<Proc_GetListUser>().ToTable(Proc_GetListUser.ProcName);
            modelBuilder.Entity<Proc_GetListServices>().ToTable(Proc_GetListServices.ProcName);
            modelBuilder.Entity<Proc_GetListTypeVehicle>().ToTable(Proc_GetListTypeVehicle.ProcName);
            modelBuilder.Entity<Proc_GetListVehicleManufacturers>().ToTable(Proc_GetListVehicleManufacturers.ProcName);
            modelBuilder.Entity<Proc_GetListVehicleVignettes>().ToTable(Proc_GetListVehicleVignettes.ProcName);
            modelBuilder.Entity<Proc_GetListIncurredFees>().ToTable(Proc_GetListIncurredFees.ProcName);
            modelBuilder.Entity<Proc_GetListTermsConditions>().ToTable(Proc_GetListTermsConditions.ProcName);
            modelBuilder.Entity<Proc_GetListProvinces>().ToTable(Proc_GetListProvinces.ProcName);
            modelBuilder.Entity<Proc_GetListRole>().ToTable(Proc_GetListRole.ProcName);
            modelBuilder.Entity<Proc_GetListDepartment>().ToTable(Proc_GetListDepartment.ProcName);
            modelBuilder.Entity<Proc_GetListDistricts>().ToTable(Proc_GetListDistricts.ProcName);
            modelBuilder.Entity<Proc_GetListWards>().ToTable(Proc_GetListWards.ProcName);
            modelBuilder.Entity<Proc_GetListVehicles>().ToTable(Proc_GetListVehicles.ProcName);
            modelBuilder.Entity<Proc_GetListPriceServices>().ToTable(Proc_GetListPriceServices.ProcName);
            modelBuilder.Entity<Proc_GetListPriceServiceDetails>().ToTable(Proc_GetListPriceServiceDetails.ProcName);
            modelBuilder.Entity<Proc_PriceService>().ToTable(Proc_PriceService.ProcName);
            modelBuilder.Entity<Proc_GetListSupport>().ToTable(Proc_GetListSupport.ProcName);
            modelBuilder.Entity<Proc_GetListLicenseType>().ToTable(Proc_GetListLicenseType.ProcName);
            modelBuilder.Entity<Proc_GetListBookings>().ToTable(Proc_GetListBookings.ProcName);
            modelBuilder.Entity<Proc_GetListTransportations>().ToTable(Proc_GetListTransportations.ProcName);
            modelBuilder.Entity<Proc_GetListCustomer>().ToTable(Proc_GetListCustomer.ProcName);
            modelBuilder.Entity<Proc_GetListIncurredFeesByTransportationId>().ToTable(Proc_GetListIncurredFeesByTransportationId.ProcName);
            modelBuilder.Entity<Proc_GetListNotification>().ToTable(Proc_GetListNotification.ProcName);
            modelBuilder.Entity<Proc_GetListTransportationIncurredFees>().ToTable(Proc_GetListTransportationIncurredFees.ProcName);
            //modelBuilder.Entity<Proc_GetListBookingDepartures>().ToTable(Proc_GetListBookingDepartures.ProcName);
            //modelBuilder.Entity<Proc_GetListBookingDestinations>().ToTable(Proc_GetListBookingDestinations.ProcName);
            modelBuilder.Entity<Proc_GetTransportationHistoryBySupplierUserId>().ToTable(Proc_GetTransportationHistoryBySupplierUserId.ProcName);
            modelBuilder.Entity<Proc_GetListBranch>().ToTable(Proc_GetListBranch.ProcName);
            modelBuilder.Entity<Proc_CheckPhoneNumber>().ToTable(Proc_CheckPhoneNumber.ProcName);
            modelBuilder.Entity<Proc_GetListReason>().ToTable(Proc_GetListReason.ProcName);
            modelBuilder.Entity<Proc_GetListCoordinate>().ToTable(Proc_GetListCoordinate.ProcName);
            modelBuilder.Entity<Proc_GetListFreeEmployee>().ToTable(Proc_GetListFreeEmployee.ProcName);

            modelBuilder.Entity<Proc_GetListCurrentTransportationsApp>().ToTable(Proc_GetListCurrentTransportationsApp.ProcName);
            modelBuilder.Entity<Proc_GetBookingByCustomerId>().ToTable(Proc_GetBookingByCustomerId.ProcName);
        }

        internal object Entry<T>()
        {
            throw new NotImplementedException();
        }
    }
}
