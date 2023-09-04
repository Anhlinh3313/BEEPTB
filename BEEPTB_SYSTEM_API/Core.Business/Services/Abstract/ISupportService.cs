using Core.Business.ViewModels.Supports;
using Core.Business.ViewModels.Vehicles;
using Core.Entity.Entities;
using Core.Infrastructure.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Business.Services.Abstract
{
    public interface ISupportService
    {
        ResponseViewModel CreateSupport(SupportsViewModel supports);        
    }
}
