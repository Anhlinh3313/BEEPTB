﻿using System;
using AutoMapper;

namespace Core.Business.ViewModels.Mappings
{
    public class AutoMapperConfiguration
    {
		public static void Configure()
		{
            Mapper.Initialize(x =>
            {
                x.AddProfile<DomainToViewModelMappingProfile>();
                x.AddProfile<ViewModelToDomainMappingProfile>();
            });
		}
    }
}
