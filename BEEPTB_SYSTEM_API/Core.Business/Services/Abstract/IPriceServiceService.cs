using Core.Business.ViewModels.PriceServices;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface IPriceServiceService
    {
        ResponseViewModel Create(PriceServiceViewModel model);
        ResponseViewModel Update(PriceServiceViewModel model);
        ResponseViewModel Calculate(CalculateFilterViewModel model);
        ResponseViewModel CalculateAll(CalculateFilterViewModel model);
    }
}
