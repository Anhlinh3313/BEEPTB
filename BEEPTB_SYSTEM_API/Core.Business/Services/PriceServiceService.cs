using AutoMapper;
using Core.Business.Services.Abstract;
using Core.Business.Services.Models;
using Core.Business.ViewModels.PriceServices;
using Core.Data;
using Core.Data.Abstract;
using Core.Data.Core;
using Core.Entity.Entities;
using Core.Entity.Procedures;
using Core.Infrastructure.Helper;
using Core.Infrastructure.ViewModels;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Core.Business.Services
{
    public partial class PriceServiceService : BaseService, IPriceServiceService
    {
        public PriceServiceService(Microsoft.Extensions.Logging.ILogger<dynamic> logger, IOptions<AppSettings> optionsAccessor, IUnitOfWork unitOfWork) : base(logger, optionsAccessor, unitOfWork)
        {
        }

        public ResponseViewModel Create(PriceServiceViewModel model)
        {
            // Validate
            if (string.IsNullOrWhiteSpace(model.Code))
            {
                return ResponseViewModel.CreateError("Vui lòng nhập mã bảng giá");
            }

            if (!model.ServiceId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập dịch vụ");
            }

            if (!model.VehicleTypeId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập loại xe");
            }

            for (int i = 0; i < model.PriceServiceDetails.Count; i++)
            {
                var priceDetail = model.PriceServiceDetails[i];
                if (!priceDetail.PriceFormulaId.HasValue || (priceDetail.PriceFormulaId == IdentityHelper.Formula.PlusPrice && !priceDetail.ValuePlus.HasValue) || !priceDetail.ValueFrom.HasValue || !priceDetail.ValueTo.HasValue || !priceDetail.Price.HasValue)
                {
                    return ResponseViewModel.CreateError("Vui lòng nhập đầy đủ thông tin chi tiết bảng giá");
                }
            }

            // Kiểm tra bảng giá đã tồn tại
            bool isExistPriceService = _unitOfWork.RepositoryR<PriceService>().Any(x => x.Code == model.Code);
            if (isExistPriceService)
            {
                return ResponseViewModel.CreateError("Mã bảng giá đã tồn tại");
            }

            // Gán giá trị mặc định
            if (string.IsNullOrEmpty(model.Name))
                model.Name = model.Code;

            if (!model.Priority.HasValue)
                model.Priority = 5;

            // Insert bảng giá
            PriceService priceService = Mapper.Map<PriceService>(model);
            _unitOfWork.RepositoryCRUD<PriceService>().Insert(priceService);
            _unitOfWork.Commit();

            // Insert bảng giá chi tiết
            foreach (var priceDetail in model.PriceServiceDetails)
            {
                priceDetail.PriceServiceId = priceService.Id;
                _unitOfWork.RepositoryCRUD<PriceServiceDetail>().Insert(priceDetail);
            }
            _unitOfWork.Commit();

            return ResponseViewModel.CreateSuccess(model);
        }

        public ResponseViewModel Update(PriceServiceViewModel model)
        {
            // Validate
            if (string.IsNullOrWhiteSpace(model.Code))
            {
                return ResponseViewModel.CreateError("Vui lòng nhập mã bảng giá");
            }

            if (!model.ServiceId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập dịch vụ");
            }

            if (!model.VehicleTypeId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập loại xe");
            }

            for (int i = 0; i < model.PriceServiceDetails.Count; i++)
            {
                var priceDetail = model.PriceServiceDetails[i];
                if (!priceDetail.PriceFormulaId.HasValue || (priceDetail.PriceFormulaId == IdentityHelper.Formula.PlusPrice && !priceDetail.ValuePlus.HasValue) || !priceDetail.ValueFrom.HasValue || !priceDetail.ValueTo.HasValue || !priceDetail.Price.HasValue)
                {
                    return ResponseViewModel.CreateError("Vui lòng nhập đầy đủ thông tin chi tiết bảng giá");
                }
            }

            // Kiểm tra bảng giá có tồn tại
            PriceService priceService = _unitOfWork.RepositoryR<PriceService>().GetSingle(model.Id);
            if (priceService == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy bảng giá");
            }

            bool isExistPriceServiceCode = _unitOfWork.RepositoryR<PriceService>().Any(x => x.Id != priceService.Id && x.Code == model.Code);
            if (isExistPriceServiceCode)
            {
                return ResponseViewModel.CreateError("Mã bảng giá đã tồn tại");
            }

            // Gán giá trị mặc định
            if (string.IsNullOrEmpty(model.Name))
                model.Name = model.Code;

            if (!model.Priority.HasValue)
                model.Priority = 0;

            // Update bảng giá
            priceService = Mapper.Map(model, priceService);
            _unitOfWork.RepositoryCRUD<PriceService>().Update(priceService);
            _unitOfWork.Commit();

            // Xóa bảng giá chi tiết
            _unitOfWork.RepositoryCRUD<PriceServiceDetail>().DeleteWhere(x => x.PriceServiceId == priceService.Id);
            _unitOfWork.Commit();

            // Insert bảng giá chi tiết
            foreach (var priceDetail in model.PriceServiceDetails)
            {
                priceDetail.Id = 0;
                priceDetail.PriceServiceId = priceService.Id;
                _unitOfWork.RepositoryCRUD<PriceServiceDetail>().Insert(priceDetail);
                _unitOfWork.Commit();
            }

            return ResponseViewModel.CreateSuccess(model);
        }

        public double CalculateWorkDays(DateTime? startDate, DateTime? endDate, int? daysOfWeekId)
        {
            if (daysOfWeekId == null || daysOfWeekId == 3)
            {
                return Math.Round((endDate.Value - startDate.Value).TotalDays);
            }
            else
            {
                double workDays = 0;
                switch (daysOfWeekId)
                {
                    case 1:
                        {
                            while (startDate.Value.Date <= endDate.Value.Date)
                            {
                                if (startDate.Value.DayOfWeek != DayOfWeek.Saturday && startDate.Value.DayOfWeek != DayOfWeek.Sunday)
                                {
                                    workDays++;
                                }

                                startDate = startDate.Value.AddDays(1);
                            }
                            break;
                        }

                    case 2:
                        {
                            while (startDate.Value.Date <= endDate.Value.Date)
                            {
                                if (startDate.Value.DayOfWeek != DayOfWeek.Sunday)
                                {
                                    workDays++;
                                }

                                startDate = startDate.Value.AddDays(1);
                            }
                            break;
                        }
                }
                return workDays;
            }
        }

        public ResponseViewModel Calculate(CalculateFilterViewModel model)
        {
            // Validate
            if (!model.ServiceId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập dịch vụ");
            }

            if (!model.VehicleTypeId.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập loại xe");
            }

            if (!model.StartDate.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập ngày bắt đầu");
            }

            if (!model.EndDate.HasValue)
            {
                return ResponseViewModel.CreateError("Vui lòng nhập ngày kết thúc");
            }

            // Tìm bảng giá
            var priceService = _unitOfWork.Repository<Proc_PriceService>().ExecProcedureSingle(Proc_PriceService.GetEntityProc(null, model.ServiceId, model.VehicleTypeId, model.StartDate, model.EndDate, false));

            if (priceService == null)
            {
                return ResponseViewModel.CreateError("Không tìm thấy giá dịch vụ");
            }
            else
            {
                // Tính giá theo công thức
                if (priceService.PriceFormulaId == IdentityHelper.Formula.PlusPrice)
                {
                    var _valuePlus = priceService.Value - priceService.ValueFrom;
                    priceService.Price = (_valuePlus / priceService.ValuePlus * priceService.Price);

                    var listPricePlusService = _unitOfWork.Repository<Proc_PriceService>().ExecProcedure(Proc_PriceService.GetEntityProc(priceService.Id, model.ServiceId, model.VehicleTypeId, model.StartDate, model.EndDate, true)).OrderByDescending(x => x.PriceServiceDetailId).ToList();
                    for (int i = 0; i < listPricePlusService.Count(); i++)
                    {
                        var pricePlusService = listPricePlusService[i];
                        if (priceService.PriceServiceDetailId != pricePlusService.PriceServiceDetailId)
                        {
                            if (pricePlusService.PriceFormulaId == IdentityHelper.Formula.StandardPrice)
                            {
                                priceService.Price += pricePlusService.Price * pricePlusService.ValueTo;
                                break;
                            }
                            else if (pricePlusService.PriceFormulaId == IdentityHelper.Formula.PlusPrice)
                            {
                                var valuePlus = pricePlusService.ValueTo - pricePlusService.ValueFrom;
                                priceService.Price += (valuePlus / pricePlusService.ValuePlus * pricePlusService.Price);
                            }
                        }
                    }
                }
                else
                {
                    priceService.Price = priceService.Price * priceService.Value;
                }
            }

            return ResponseViewModel.CreateSuccess(priceService);
        }

        public ResponseViewModel CalculateAll(CalculateFilterViewModel model)
        {
            List<Proc_PriceService> priceServices = new List<Proc_PriceService>();
            var vehicleTypes = _unitOfWork.RepositoryR<Vehicle>().GetAll();

            foreach (var vehicleType in vehicleTypes)
            {
                model.VehicleTypeId = vehicleType.Id;
                var res = Calculate(model);
                if (res.IsSuccess)
                {
                    priceServices.Add(res.Data);
                }
            }

            return ResponseViewModel.CreateSuccess(priceServices);
        }
    }
}
