using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.Customers;
using Core.Business.ViewModels.TransportationIncurredFees;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.Security;
using Core.Infrastructure.Utils;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Business.Services
{
    public class TransportationIncurredFeesService : BaseService, ITransportationIncurredFeesService
    {
        public TransportationIncurredFeesService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel Create(TransportationIncurredFeesViewModel viewModel)
        {
            if (!viewModel.IncurredFeeId.HasValue)
            {
                return ResponseViewModel.CreateError("Loại phí không được để trống!");
            }
            if (!viewModel.TransportationId.HasValue)
            {
                return ResponseViewModel.CreateError("Chuyến xe không được để trống!");
            }
            if (!viewModel.IncurredFee.HasValue)
            {
                return ResponseViewModel.CreateError("Chi phí không được để trống!");
            }

            TransportationIncurredFees transportationIncurredFees = new TransportationIncurredFees();
            transportationIncurredFees.TransportationId = viewModel.TransportationId;
            transportationIncurredFees.IncurredFeeId = viewModel.IncurredFeeId;
            transportationIncurredFees.IncurredFee = viewModel.IncurredFee;
            transportationIncurredFees.Note = viewModel.Note;
            transportationIncurredFees.IsEnabled = true;

            _unitOfWork.RepositoryCRUD<TransportationIncurredFees>().Insert(transportationIncurredFees);
            _unitOfWork.Commit();

            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(viewModel.TransportationId.Value);
            if (transportation != null)
            {

                transportation.TotalIncurredFee = transportation.TotalIncurredFee + viewModel.IncurredFee;
                _unitOfWork.RepositoryCRUD<Transportation>().Update(transportation);
                _unitOfWork.Commit();
            }
            return ResponseViewModel.CreateSuccess(transportationIncurredFees, message: "Khai báo chi phí thành công!");
        }

        public ResponseViewModel Update(TransportationIncurredFeesViewModel viewModel)
        {
            if (!viewModel.IncurredFeeId.HasValue)
            {
                return ResponseViewModel.CreateError("Loại phí không được để trống!");
            }
            if (!viewModel.TransportationId.HasValue)
            {
                return ResponseViewModel.CreateError("Chuyến xe không được để trống!");
            }
            if (!viewModel.IncurredFee.HasValue)
            {
                return ResponseViewModel.CreateError("Chi phí không được để trống!");
            }

            TransportationIncurredFees transportationIncurredFees = _unitOfWork.RepositoryR<TransportationIncurredFees>().GetSingle(viewModel.Id);
            if (transportationIncurredFees == null)
            {
                return ResponseViewModel.CreateError("Dữ liệu không tồn tại!");
            }
            double? incurredFeeAfterChange = 0;
            incurredFeeAfterChange = viewModel.IncurredFee - transportationIncurredFees.IncurredFee;
            transportationIncurredFees.IncurredFee = viewModel.IncurredFee;
            transportationIncurredFees.IncurredFeeId = viewModel.IncurredFeeId;
            transportationIncurredFees.TransportationId = viewModel.TransportationId;
            transportationIncurredFees.Note = viewModel.Note;
            transportationIncurredFees.IsEnabled = true;

            _unitOfWork.RepositoryCRUD<TransportationIncurredFees>().Update(transportationIncurredFees);
            _unitOfWork.Commit();


            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(viewModel.TransportationId.Value);
            if (transportation != null)
            {

                transportation.TotalIncurredFee = transportation.TotalIncurredFee + incurredFeeAfterChange;
                _unitOfWork.RepositoryCRUD<Transportation>().Update(transportation);
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(transportationIncurredFees, message: "Cập nhật khai báo chi phí thành công!");
        }

        public ResponseViewModel Delete(int? id)
        {
            TransportationIncurredFees transportationIncurredFees = _unitOfWork.RepositoryR<TransportationIncurredFees>().GetSingle(id.Value);
            if (transportationIncurredFees == null)
            {
                return ResponseViewModel.CreateError("Dữ liệu không tồn tại!");
            }
            double? incurredFeeAfterChange = 0;
            incurredFeeAfterChange = transportationIncurredFees.IncurredFee;

            transportationIncurredFees.IsEnabled = false;
            _unitOfWork.RepositoryCRUD<TransportationIncurredFees>().Update(transportationIncurredFees);
            _unitOfWork.Commit();


            var transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(transportationIncurredFees.TransportationId.Value);
            if (transportation != null)
            {
                transportation.TotalIncurredFee = transportation.TotalIncurredFee - incurredFeeAfterChange;
                _unitOfWork.RepositoryCRUD<Transportation>().Update(transportation);
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(transportationIncurredFees, message: "Xoá khai báo chi phí thành công!");
        }
    }
}
