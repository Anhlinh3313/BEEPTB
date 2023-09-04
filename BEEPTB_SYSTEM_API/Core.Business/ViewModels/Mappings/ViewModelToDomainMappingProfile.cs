using System;
using System.Linq;
using System.Security.Claims;
using AutoMapper;
using Core.Business.Core.Extensions;
using Core.Business.ViewModels.Accounts;
using Core.Business.ViewModels.Bookings;
using Core.Business.ViewModels.BookingStatuss;
using Core.Business.ViewModels.Customers;
using Core.Business.ViewModels.Departments;
using Core.Business.ViewModels.General;
using Core.Business.ViewModels.HistoryPayments;
using Core.Business.ViewModels.Pages;
using Core.Business.ViewModels.PriceServices;
using Core.Business.ViewModels.Supports;
using Core.Business.ViewModels.Vehicles;
using Core.Business.ViewModels.VehicleTypes;
using Core.Entity.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Extensions;
using Core.Infrastructure.Http;
using Core.Infrastructure.Security;
using Core.Infrastructure.Utils;

namespace Core.Business.ViewModels.Mappings
{
    public class ViewModelToDomainMappingProfile : Profile
    {
        public ViewModelToDomainMappingProfile()
        {
            //Account
            CreateMap<CreateAccountViewModel, User>()
                .AfterMap((src, dest) =>
                {
                    SetGeneralColsCreate(dest);
                    dest.SecurityStamp = Guid.NewGuid().ToString();
                    dest.PasswordHash = new Encryption().EncryptPassword(src.PassWord, dest.SecurityStamp);
                }).ReverseMap();

            CreateMap<UpdateAccountViewModel, User>()
                .AfterMap((src, dest) =>
                {
                    SetGeneralColsUpdate(dest);
                    if (!Util.IsNull(src.PassWord))
                    {
                        dest.SecurityStamp = Guid.NewGuid().ToString();
                        dest.PasswordHash = new Encryption().EncryptPassword(src.PassWord, dest.SecurityStamp);
                    }
                }).ReverseMap();

            CreateMap<ChangePassWordViewModel, User>()
                .AfterMap((src, dest) =>
                {
                    SetGeneralColsUpdate(dest);
                    if (!Util.IsNull(src.NewPassWord))
                    {
                        dest.SecurityStamp = Guid.NewGuid().ToString();
                        dest.PasswordHash = new Encryption().EncryptPassword(src.NewPassWord, dest.SecurityStamp);
                    }
                }).ReverseMap();
            CreateMap<VehiclesViewModel, Vehicle>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<SupportsViewModel, Vehicle>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            //General
            CreateMap<ProvinceViewModel, Province>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<DistrictViewModel, District>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<WardViewModel, Ward>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<DepartmentViewModel, Department>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<RoleViewModel, Role>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<PageViewModel, Page>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<ServiceViewModel, Service>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<VehicleTypeViewModel, VehicleType>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<IncurredFeesViewModel, IncurredFee>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<TermsConditionsViewModel, TermsCondition>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<PriceServiceViewModel, PriceService>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<BookingViewModel, Booking>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<CustomerViewModel, Customer>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<SupportsViewModel, Support>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            //CreateMap<CreateAccountViewModel, SupplierUser>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            //CreateMap<UpdateAccountViewModel, SupplierUser>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<BookingStatusViewModel, BookingStatus>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<HistoryPaymentViewModel, HistoryPayment>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            //CreateMap<SupplierUserViewModel, User>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<NotificationViewModel, Notification>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<BranchViewModel, Branch>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();
            CreateMap<ReasonViewModel, Reason>().AfterMap((src, dest) => { if (src.Id > 0) SetGeneralColsUpdate(dest); else SetGeneralColsCreate(dest); }).ReverseMap();

            CreateMap<ChangePassWordViewModel, User>()
                .AfterMap((src, dest) =>
                {
                    SetGeneralColsUpdate(dest);
                    if (!Util.IsNull(src.NewPassWord))
                    {
                        dest.SecurityStamp = Guid.NewGuid().ToString();
                        dest.PasswordHash = new Encryption().EncryptPassword(src.NewPassWord, dest.SecurityStamp);
                    }
                }).ReverseMap();            
        }

        public void SetGeneralColsCreate(IEntityBasic data)
        {
            var currentDate = DateTime.Now;
            var currentUserId = HttpContext.CurrentUserId;

            data.Id = 0;
            data.ConcurrencyStamp = Guid.NewGuid().ToString();
            data.CreatedWhen = currentDate;
            data.CreatedBy = currentUserId;
            data.ModifiedWhen = currentDate;
            data.ModifiedBy = currentUserId;
            data.IsEnabled = true;
        }

        public void SetGeneralColsUpdate(IEntityBasic data)
        {
            data.ConcurrencyStamp = Guid.NewGuid().ToString();
            data.ModifiedWhen = DateTime.Now;
            data.ModifiedBy = HttpContext.CurrentUserId;
        }
    }
}
