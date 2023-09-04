using System;
namespace Core.Business.ViewModels
{
    public static class ValidatorMessage
    {
        public static class General
        {
			public static readonly string NotExist = "Dữ liệu không tồn tại";
			public static readonly string NotDestroy = "Dữ liệu đã được sử dụng, không thể xoá";
            public static readonly string ConcurrencyStamp = "Dữ liệu đã được người khác sử dụng";
			public static readonly string NameNotEmpty = "Tên không được để trống";
			public static readonly string CodeNotEmpty = "Mã không được để trống";
			public static readonly string UniqueName = "Tên đã tồn tại";
			public static readonly string UniqueCode = "Mã đã tồn tại";
			public static readonly string EmailInvalid = "Email không đúng định dạng";
        }

        public static class Account
        {
            public static readonly string NotExist = "Tài khoản không tồn tại";
			public static readonly string UserNameNotEmpty = "Tên đăng nhập không được để trống";
			public static readonly string FullNameNotEmpty = "Họ tên không được để trống";
            public static readonly string EmailInvalid = "Email không đúng định dạng";
            public static readonly string UniqueUserName = "Tên đăng nhập đã tồn tại";
            public static readonly string CodeNotEmpty = "Mã không được để trống";
            public static readonly string UniqueCode = "Mã đã tồn tại";
            public static readonly string PassWordNotEmpty = "Mật khẩu không được để trống";
            public static readonly string InvalidUserNamePassWord = "Tên đăng nhập hoặc mật khẩu không chính xác";
			public static readonly string AccountHasBeenBlock = "Tài khoản của bạn đã bị khoá";
			public static readonly string IdentityCardInvalid = "CMND không hợp lệ";
			public static readonly string CurrentPassWordNotEmpty = "Mật khẩu hiện tại không được để trống";
			public static readonly string CurrentPassWordInValid = "Mật khẩu hiện tại không chính xác";
			public static readonly string NewPassWordNotEmpty = "Mật khẩu mới không được để trống";
            public static readonly string UniqueEmail = "Email đã tồn tại";
            public static readonly string EmailNotEmpty = "Email không được để trống";
            public static readonly string UniquePhone = "Số điện thoại đã tồn tại";
            public static readonly string PhonenumberNotEmpty = "Số điện thoại không được để trống";
        }

		public static class Department
		{
            public static readonly string NotExist = "Phòng ban không tồn tại";
			public static readonly string NameNotEmpty = "Tên phòng ban không được để trống";
			public static readonly string CodeNotEmpty = "Mã phòng ban không được để trống";
			public static readonly string UniqueName = "Tên phòng ban đã tồn tại";
			public static readonly string UniqueCode = "Mã phòng ban đã tồn tại";
		}

        public static class Hub
        {
			public static readonly string NotExist = "Hub không tồn tại";
			public static readonly string CenterNotExist = "Trung tâm không tồn tại";
			public static readonly string PONotExist = "Chi nhánh không tồn tại";
            public static readonly string NameNotEmpty = "Tên Hub không được để trống";
            public static readonly string CodeNotEmpty = "Mã Hub không được để trống";
			public static readonly string UniqueName = "Tên Hub đã tồn tại";
			public static readonly string UniqueCode = "Mã Hub đã tồn tại";
        }

        public static class StationHub
        {
            public static readonly string NotExist = "Trạm không tồn tại";
            public static readonly string NotEmpty = "Trạm không được để trống";
        }

		public static class Role
		{
            public static readonly string NotExist = "Chức vụ không tồn tại";
            public static readonly string NameNotEmpty = "Tên chức vụ không được để trống";
            public static readonly string CodeNotEmpty = "Mã chức vụ không được để trống";
			public static readonly string UniqueName = "Tên chức vụ đã tồn tại";
			public static readonly string UniqueCode = "Mã chức vụ đã tồn tại";
		}

		public static class Country
		{
			public static readonly string NotExist = "Quốc gia không tồn tại";
			public static readonly string NameNotEmpty = "Tên quốc gia không được để trống";
			public static readonly string CodeNotEmpty = "Mã quốc gia không được để trống";
			public static readonly string UniqueName = "Tên quốc gia đã tồn tại";
			public static readonly string UniqueCode = "Mã quốc gia đã tồn tại";
		}

		public static class Province
		{
			public static readonly string NotExist = "Tỉnh/thành không tồn tại";
			public static readonly string NameNotEmpty = "Tên tỉnh/thành không được để trống";
			public static readonly string CodeNotEmpty = "Mã tỉnh/thành không được để trống";
			public static readonly string UniqueName = "Tên tỉnh/thành đã tồn tại";
			public static readonly string UniqueCode = "Mã tỉnh/thành đã tồn tại";
		}

		public static class District
		{
			public static readonly string NotExist = "Quận/huyện không tồn tại";
			public static readonly string NameNotEmpty = "Tên quận/huyện không được để trống";
			public static readonly string CodeNotEmpty = "Mã quận/huyện không được để trống";
			public static readonly string UniqueName = "Tên quận/huyện đã tồn tại";
			public static readonly string UniqueCode = "Mã quận/huyện đã tồn tại";
		}

		public static class Ward
		{
			public static readonly string NotExist = "Phường/xã không tồn tại";
            public static readonly string WardListNotEmpty = "Chưa chọn quận/huyện";
			public static readonly string NameNotEmpty = "Tên phường/xã không được để trống";
			public static readonly string CodeNotEmpty = "Mã phường/xã không được để trống";
			public static readonly string UniqueName = "Tên phường/xã đã tồn tại";
			public static readonly string UniqueCode = "Mã phường/xã đã tồn tại";
		}

        public static class Vehicle
        {
            public static readonly string UniqueCode = "Mã xe đã tồn tại";
            public static readonly string UniqueLicensePlate = "Biển số đã tồn tại";
        }
    }
}
