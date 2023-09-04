using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Core.Data.Core.Utils;

namespace Core.Business.ViewModels.Accounts
{
    public class SignInViewModel : IValidatableObject
    {
        public SignInViewModel()
        {
            
        }

		public string UserName { get; set; }
		public string PassWord { get; set; }
        public int? HourLogin { get; set; }
        public int? MinuteLogin { get; set; }
        public int? UserTypeId { get; set; }
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
		{
            var validator = new SignInViewModelValidator(EntityUtil.GetUnitOfWork(validationContext));
			var result = validator.Validate(this);
			return result.Errors.Select(item => new ValidationResult(item.ErrorMessage, new[] { item.PropertyName }));
		}
    }
}
