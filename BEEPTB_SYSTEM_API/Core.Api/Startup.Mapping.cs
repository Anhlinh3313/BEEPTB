using System;
using Microsoft.Extensions.DependencyInjection;
using Core.Data.Abstract;
using Core.Data.Repositories;
using Core.Business.Services;
using Core.Data.Core;
using Microsoft.AspNetCore.Http;
using Core.Api.Core;
using Microsoft.AspNetCore.Authorization;
using Core.Api.Core.Sercurity;
using Core.Business.Services.Abstract;

namespace Core.Api
{
    public partial class Startup
    {
        private void MappingScopeService(IServiceCollection services)
        {
            //General
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IAuthorizationHandler, PermissionsHandler>();
            //UnitOfWork
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            //Services
            services.AddScoped(typeof(IGeneralService), typeof(GeneralService));
            services.AddScoped(typeof(IGeneralService<,>), typeof(GeneralService<,>));
            services.AddScoped(typeof(IGeneralService<,,>), typeof(GeneralService<,,>));
            services.AddScoped(typeof(IGeneralService<,,,>), typeof(GeneralService<,,,>));
            services.AddScoped<IEncryptionService, EncryptionService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IPermissionService, PermissionService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ISignalRHubService, SignalRHubService>();
            services.AddScoped<IConnectionManager, ConnectionManager>();
            services.AddScoped<IPriceServiceService, PriceServiceService>();
            services.AddScoped<IBookingService, BookingService>();
            services.AddScoped<ICustomerService, CustomerService>();
            services.AddScoped<ISupportService, SupportService>();
            services.AddScoped<IVehicleService, VehicleService>();
            services.AddScoped<IHistoryPaymentService, HistoryPaymentService>();
            services.AddScoped<ILocationService, LocationService>();
            services.AddScoped<ITransportationIncurredFeesService, TransportationIncurredFeesService>();
            services.AddScoped<IGetTransportationService, GetTransportationService>();
            services.AddScoped<IHistoryTransportationService, HistoryTransportationService>();
            services.AddScoped<IUpdateTransportationStatusService, UpdateTransportationStatusService>();
            services.AddScoped<IUploadService, UploadService>();
            services.AddScoped<ISMSService, SMSService>();
            services.AddScoped<IReasonService, ReasonService>();

            //Repository
            services.AddScoped(typeof(IEntityCRUDRepository<>), typeof(EntityCRUDRepository<>));
            services.AddScoped(typeof(IEntityRRepository<>), typeof(EntityRRepository<>));
            services.AddScoped(typeof(IEntityVPRepository<>), typeof(EntityVPRepository<>));
            services.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
