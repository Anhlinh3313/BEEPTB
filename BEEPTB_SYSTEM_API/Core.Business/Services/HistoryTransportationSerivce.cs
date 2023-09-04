using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.HistoryTransportation;
using Core.Data.Abstract;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Core.Entity.Entities;
using AutoMapper;

namespace Core.Business.Services
{
    public class HistoryTransportationService: BaseService, IHistoryTransportationService
    {
        private readonly IUpdateTransportationStatusService _UpdateTransportationStatusService;

        public HistoryTransportationService(
            Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUpdateTransportationStatusService iUpdateTransportationStatusService,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
            _UpdateTransportationStatusService = iUpdateTransportationStatusService;
        }

        public ResponseViewModel CreateHistoryTransportation(HistoryTransportationViewModel viewModel)
        {
            if (!viewModel.TransportationId.HasValue)
            {
                return ResponseViewModel.CreateError("Chuyến xe không được để trống!");
            }
            HistoryTransportation model = Mapper.Map<HistoryTransportation>(viewModel);
            _unitOfWork.RepositoryCRUD<HistoryTransportation>().Insert(model);
            _unitOfWork.Commit();

            if(viewModel.TransportationStatusId == IdentityHelper.TransportationStatus.Done)
            {
                //var dataSupUser = _unitOfWork.RepositoryCRUD<SupplierUser>().GetSingle(x => x.Id == viewModel.SupplierUserId);

                //if (dataSupUser == null)
                //{
                //    return ResponseViewModel.CreateError("Không tìm thấy tài xế!");
                //}

                //dataSupUser.IsFree = true;
                //_unitOfWork.Commit();
            }

            _UpdateTransportationStatusService.UpdateTransportationStatus(model.TransportationId.Value, model.TransportationStatusId.Value);
            return ResponseViewModel.CreateSuccess(model);
        }
        public ResponseViewModel UpdateHistoryTransportation(HistoryTransportationViewModel viewModel)
        {
            if (!viewModel.BookingDepartureId.HasValue && !viewModel.BookingDestinationId.HasValue)
            {
                if (!viewModel.BookingDepartureId.HasValue)
                {
                    return ResponseViewModel.CreateError("Điểm đón không được phép để trống");
                }
                if (!viewModel.BookingDestinationId.HasValue)
                {
                    return ResponseViewModel.CreateError("Điểm đến không được phép để trống");
                }
            }
            if (!viewModel.TransportationId.HasValue)
            {
                return ResponseViewModel.CreateError("Chuyến xe không được để trống!");
            }

            var model = _unitOfWork.RepositoryCRUD<HistoryTransportation>().GetSingle(viewModel.Id);
            if (model != null)
            {
                model = Mapper.Map(viewModel, model);

                _unitOfWork.RepositoryCRUD<HistoryTransportation>().Update(model);
                _unitOfWork.Commit();
                return ResponseViewModel.CreateSuccess(model);
            }
            return ResponseViewModel.CreateError("Dữ liệu không tồn tại. Vui lòng kiểm tra lại!");
        }
        public ResponseViewModel DeleteHistoryTransportation(HistoryTransportationViewModel viewModel)
        {
            if (!viewModel.BookingDepartureId.HasValue && !viewModel.BookingDestinationId.HasValue)
            {
                if (!viewModel.BookingDepartureId.HasValue)
                {
                    return ResponseViewModel.CreateError("Điểm đón không được phép để trống");
                }
                if (!viewModel.BookingDestinationId.HasValue)
                {
                    return ResponseViewModel.CreateError("Điểm đến không được phép để trống");
                }
            }
            if (!viewModel.TransportationId.HasValue)
            {
                return ResponseViewModel.CreateError("Chuyến xe không được để trống!");
            }

            var model = _unitOfWork.RepositoryCRUD<HistoryTransportation>().GetSingle(viewModel.Id);
            if (model != null)
            {
                model = Mapper.Map(viewModel, model);
                model.IsEnabled = false;
                _unitOfWork.RepositoryCRUD<HistoryTransportation>().Update(model);
                _unitOfWork.Commit();
                return ResponseViewModel.CreateSuccess(model);
            }
            return ResponseViewModel.CreateError("Dữ liệu không tồn tại. Vui lòng kiểm tra lại!");
        }
    }
}
