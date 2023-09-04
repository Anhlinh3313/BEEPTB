using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Customers;
using Core.Business.ViewModels.TransportationIncurredFees;
using Core.Business.ViewModels.Transportations;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Security;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services
{
    public class GetTransportationService : BaseService, IGetTransportationService
    {
        public GetTransportationService(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel GetCurrentTransportation(int currentUserId)
        {
            var transportationStatusIds = new List<int>() {
                IdentityHelper.TransportationStatus.Processed,
                //IdentityHelper.TransportationStatus.Picking,
                //IdentityHelper.TransportationStatus.Coming,
                //IdentityHelper.TransportationStatus.Arrived,
                //IdentityHelper.TransportationStatus.CommingBack,
                //IdentityHelper.TransportationStatus.Dropping,
                //IdentityHelper.TransportationStatus.ArrivedDestination,
                //IdentityHelper.TransportationStatus.ArrviedDrop
            };

            var data = _unitOfWork.Repository<Proc_GetListTransportations>()
                .ExecProcedureSingle(Proc_GetListTransportations.GetEntityProc(
                    userId: currentUserId,
                    transportationStatusIds: String.Join(",", transportationStatusIds)
                 ));


            return ResponseViewModel.CreateSuccess();
        }
        public ResponseViewModel GetListCurrentTransportationApp(CurrentTransportationAppFilterViewModel filterViewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListCurrentTransportationsApp>()
                .ExecProcedure(Proc_GetListCurrentTransportationsApp.GetEntityProc(
                    transportationId: filterViewModel.TransportationId,
                    transportationStatusId: filterViewModel.TransportationStatusId,
                    userId: filterViewModel.UserId,
                    transportationStatusIds: filterViewModel.TransportationStatusIds,
                    pageNumber: filterViewModel.PageNumber,
                    pageSize: filterViewModel.PageSize,
                    searchText: filterViewModel.SearchText
                 ));
            return ResponseViewModel.CreateSuccess(data);
        }
        public ResponseViewModel GetCurrentTransportationDetailApp(CurrentTransportationAppFilterViewModel filterViewModel)
        {
            var data = _unitOfWork.Repository<Proc_GetListCurrentTransportationsApp>()
                .ExecProcedureSingle(Proc_GetListCurrentTransportationsApp.GetEntityProc(
                    transportationId: filterViewModel.TransportationId,
                    transportationStatusId: filterViewModel.TransportationStatusId,
                    userId: filterViewModel.UserId,
                    transportationStatusIds: filterViewModel.TransportationStatusIds,
                    pageNumber: filterViewModel.PageNumber,
                    pageSize: filterViewModel.PageSize,
                    searchText: filterViewModel.SearchText
                 ));
            return ResponseViewModel.CreateSuccess(data);
        }
    }
}
