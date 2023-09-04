using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Core.Data.Core.Utils;

namespace Core.Business.ViewModels.General
{
    public class WardViewModel : SimpleViewModel, IValidatableObject
    {
        public WardViewModel()
        {
        }

        public int DistrictId { get; set; }
        public string Level { get; set; }
        public string FullName { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validator = new WardViewModelValidator(EntityUtil.GetUnitOfWork(validationContext));
			var result = validator.Validate(this);
			return result.Errors.Select(item => new ValidationResult(item.ErrorMessage, new[] { item.PropertyName }));
        }
    }
}
