using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.HistoryPayments;
using Core.Data.Abstract;
using Core.Entity.Entities;
using Core.Infrastructure.Helper;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Services
{
    public class HistoryPaymentService : BaseService, IHistoryPaymentService
    {
        public HistoryPaymentService(Microsoft.Extensions.Logging.ILogger<dynamic> logger,
            IOptions<AppSettings> optionsAccessor,
            IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel CreateHistoryPayment(HistoryPaymentViewModel viewModel)
        {
            double totalpayment = 0;
            double totalUnpaidFee = 0;
            Transportation transportation = _unitOfWork.RepositoryR<Transportation>().GetSingle(viewModel.TransportationId);
            if(transportation != null)
            {
                if(transportation.TransportationStatusId != IdentityHelper.TransportationStatus.Cancel)
                {
                    totalpayment = transportation.RentalFee.Value + transportation.TotalIncurredFee.Value;
                    totalUnpaidFee = totalpayment - transportation.TotalFee.Value;
                }
                else
                {
                    return ResponseViewModel.CreateError("Chuyến xe đã bị hủy!");
                }
            }

            HistoryPayment historyPayment = Mapper.Map<HistoryPayment>(viewModel);

            if (totalpayment >= (transportation.TotalFee + viewModel.TotalFee))
            {
                transportation.TotalFee += viewModel.TotalFee;
                _unitOfWork.RepositoryCRUD<Transportation>().Update(transportation);
                _unitOfWork.RepositoryCRUD<HistoryPayment>().Insert(historyPayment);
                _unitOfWork.Commit();
            }
            else
            {
                return ResponseViewModel.CreateError("tổng tiền chưa thanh toán là:" + totalUnpaidFee.ToString());
            }

            return ResponseViewModel.CreateSuccess(historyPayment);
        }
    }
}
