using Core.Business.ViewModels;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface IReasonService
    {
        ResponseViewModel CreateReason(ReasonViewModel viewModel);
        ResponseViewModel UpdateReason(ReasonViewModel viewModel);
    }
}
