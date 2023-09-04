(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "UUSl":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "eOyQ");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "XHxw");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _otp_otp_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./otp/otp.module */ "gT2U");











let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_8__["NgOtpInputModule"],
            _otp_otp_module__WEBPACK_IMPORTED_MODULE_10__["OtpPageModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
        ]
    })
], SignUpPageModule);



/***/ }),

/***/ "XHxw":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "vfPX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_management_models_customer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models-management/models/customer.model */ "FxCV");
/* harmony import */ var src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/ionInput.model */ "AKK8");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/apis/customer.service */ "S/8Y");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _otp_otp_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./otp/otp.page */ "uazN");













let SignUpPage = class SignUpPage {
    constructor(msgService, router, nav, modalController, actionSheetController, camera, customerService, authService) {
        this.msgService = msgService;
        this.router = router;
        this.nav = nav;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.customerService = customerService;
        this.authService = authService;
        this.errorPhone = true;
        this.checkPhone = true;
        this.errorPassword = true;
        this.errorPasswordLength = true;
        this.errorEmail = true;
        this.checkEmailInput = true;
        this.errorBirthday = true;
        this.checkBirthdayInput = true;
        this.checkName = true;
        this.errorName = true;
        this.gender = true;
        this.customerModel = new src_app_shared_models_management_models_customer_model__WEBPACK_IMPORTED_MODULE_6__["CustomerModel"]();
        this.inputElementPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_7__["IonInputModel"]();
        this.eyeShow = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].eyeShow;
        this.eyeHide = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].eyeHide;
        this.lstImages = [
            {
                id: 0,
                base64: '',
                isLoading: false
            },
            {
                id: 1,
                base64: '',
                isLoading: false
            }
        ];
    }
    ngOnInit() {
        this.inputElementPassword.src = this.eyeHide;
        this.inputElementPassword.type = 'password';
    }
    signIn() {
        this.router.navigate(["/signIn"]);
    }
    inputPhone() {
        if (this.phoneNumber) {
            this.errorPhone = true;
            this.checkPhoneNumber();
            return;
        }
        this.errorPhone = false;
        this.checkPhone = false;
    }
    checkPhoneNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.customerService.CheckPhoneNumber(this.phoneNumber);
            if (res[0].isSuccess) {
                this.checkPhone = false;
            }
            else {
                this.checkPhone = true;
            }
        });
    }
    inputPass() {
        if (this.passWord) {
            this.errorPassword = true;
            if (this.passWord.length < 6) {
                this.errorPasswordLength = false;
            }
            else {
                this.errorPasswordLength = true;
            }
            return;
        }
        this.errorPassword = false;
        this.errorPasswordLength = false;
    }
    inputEmail() {
        if (this.email) {
            this.errorEmail = true;
            this.checkEmail(this.email);
            return;
        }
        this.errorEmail = false;
        this.checkEmailInput = false;
    }
    checkEmail(item) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(item).toLowerCase())) {
            this.checkEmailInput = false;
        }
        else {
            this.checkEmailInput = true;
        }
    }
    inputBirthDate() {
        if (this.birthDate) {
            this.errorBirthday = true;
            this.checkBirthday();
            return;
        }
        this.errorBirthday = false;
        this.checkBirthdayInput = false;
    }
    checkBirthday() {
        let checkBirthDate = new Date(this.birthDate).getTime();
        let dateNow = new Date().getTime();
        if (checkBirthDate > dateNow) {
            this.checkBirthdayInput = false;
        }
        else {
            this.checkBirthdayInput = true;
        }
    }
    inputName() {
        if (this.name) {
            this.errorName = true;
            this.checkNameInput();
            return;
        }
        this.errorName = false;
        this.checkName = false;
    }
    checkNameInput() {
        if (this.name.length > 30) {
            this.checkName = false;
        }
        else {
            this.checkName = true;
        }
    }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            this.customerModel.phoneNumber = this.phoneNumber.trim();
            this.customerModel.passWord = this.passWord.trim();
            if (this.email) {
                this.customerModel.email = this.email.trim();
            }
            if (this.birthDate) {
                this.customerModel.birthDate = new Date(this.birthDate);
            }
            if (this.phoneNumber) {
                this.customerModel.name = this.phoneNumber.trim();
            }
            this.customerModel.gender = this.gender;
            //open OTP page
            this.laodOTP();
        });
    }
    laodOTP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            let res = yield this.authService.creeateCustomerSendSMS(this.phoneNumber);
            if (res.isSuccess) {
                this.openModalOTP(this.customerModel, res.data.content);
                this.msgService.success("OTP đã được gửi đến số điện thoại đăng kí");
            }
            else {
                this.msgService.error("Không thể gửi OTP về số điện thoại đăng kí");
            }
        });
    }
    openModalOTP(item, content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_12__["OTPPage"],
                componentProps: {
                    "customerModel": item,
                    "checkCreate": true,
                    "content": content,
                }
            });
            modal.present();
        });
    }
    isValidData() {
        let checkBirthDate = new Date(this.birthDate).getTime();
        let dateNow = new Date().getTime();
        if (checkBirthDate > dateNow) {
            this.msgService.error("ngày sinh không được lớn hơn ngày hiện tại");
            return false;
        }
        if (!this.phoneNumber || !this.passWord || !this.email || !this.birthDate || !this.name) {
            this.msgService.error("Vui lòng nhập đầy đủ thông tin!");
            return false;
        }
        if (!this.errorPhone) {
            return false;
        }
        if (!this.checkPhone && this.errorPhone) {
            return false;
        }
        if (!this.errorPassword) {
            return false;
        }
        if (!this.errorPasswordLength && this.errorPassword) {
            return false;
        }
        if (!this.errorEmail) {
            return false;
        }
        if (!this.checkEmailInput && this.errorEmail) {
            return false;
        }
        if (!this.errorBirthday) {
            return false;
        }
        if (!this.checkBirthdayInput && this.errorBirthday) {
            return false;
        }
        if (!this.errorName) {
            return false;
        }
        return true;
    }
    onClickPassword() {
        if (this.inputElementPassword.src === this.eyeShow) {
            this.inputElementPassword.src = this.eyeHide;
            this.inputElementPassword.type = 'password';
        }
        else if (this.inputElementPassword.src === this.eyeHide) {
            this.inputElementPassword.src = this.eyeShow;
            this.inputElementPassword.type = 'text';
        }
    }
};
SignUpPage.ctorParameters = () => [
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_10__["MsgService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], SignUpPage);



/***/ }),

/***/ "eOyQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "XHxw");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "vfPX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>   \r\n    <ion-row class=\"login-bg\">\r\n        <ion-row class=\"signup-logo\">\r\n            <img src=\"../../../assets/images/img_beep_logo.png\"/>\r\n        </ion-row>\r\n        <ion-row class=\"signup-title\">\r\n            <ion-col>\r\n                <h1>{{'signup.title' | translate}}</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n            <ion-row class=\"signup-form\">\r\n                <ion-col>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item [ngClass]=\"errorPhone || checkPhone ? 'signup-item' : 'signup-item-error'\" style=\"margin-top: 30px; margin-bottom: 5px;\">\r\n                                <ion-img [hidden]=\"!errorPhone || !checkPhone\" src=\"../../../assets/icon/icon_phone_update.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-img [hidden]=\"errorPhone && checkPhone\" src=\"../../../assets/icon/Vector-red.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-input [ngClass]=\"errorPhone ? '' : 'input-error'\" [(ngModel)]=\"phoneNumber\" type=\"tel\" placeholder=\"{{'signup.phone' | translate}} *\" (ionBlur)=\"inputPhone()\" maxLength=\"11\"></ion-input>\r\n                            </ion-item>\r\n                            <span class=\"error-text\" *ngIf=\"!errorPhone\">\r\n                                Số điện thoại là bắt buộc.\r\n                            </span>\r\n                            <span class=\"error-text\" *ngIf=\"!checkPhone && errorPhone\">\r\n                                Số điện thoại đã tồn tại.\r\n                            </span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item [ngClass]=\"errorPassword || errorPasswordLength ? 'signup-item' : 'signup-item-error'\" class=\"signup-item\" style=\"margin-bottom: 5px;\">\r\n                                <ion-img [hidden]=\"!errorPassword || !errorPasswordLength\" src=\"../../../assets/icon/password.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-img [hidden]=\"errorPassword && errorPasswordLength\" src=\"../../../assets/icon/password-red.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-input [ngClass]=\"errorPassword ? '' : 'input-error'\" [(ngModel)]=\"passWord\" [type]=\"inputElementPassword.type\" placeholder=\"{{'signup.password' | translate}} *\" (ionBlur)=\"inputPass()\"></ion-input>\r\n                                <ion-img [src]=\"inputElementPassword.src\" (click)=\"onClickPassword()\" [hidden]=\"inputElementPassword.hidden\"></ion-img>\r\n                            </ion-item>\r\n                            <span class=\"error-text\" *ngIf=\"!errorPassword\">\r\n                                Mật khẩu là bắt buộc.\r\n                            </span>\r\n                            <span class=\"error-text\" *ngIf=\"!errorPasswordLength && errorPassword\">\r\n                                Mật khẩu không nhỏ hơn 6 kí tự.\r\n                            </span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item [ngClass]=\"errorEmail || checkEmailInput ? 'signup-item' : 'signup-item-error'\" class=\"signup-item\" style=\"margin-bottom: 5px;\">\r\n                                <ion-img [hidden]=\"!errorEmail || !checkEmailInput\" src=\"../../../assets/icon/email.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-img [hidden]=\"errorEmail && checkEmailInput\" src=\"../../../assets/icon/email-red.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-input [ngClass]=\"errorEmail ? '' : 'input-error'\" [(ngModel)]=\"email\" placeholder=\"{{'signup.email' | translate}} *\" (ionBlur)=\"inputEmail()\"></ion-input>\r\n                            </ion-item>\r\n                            <span class=\"error-text\" *ngIf=\"!errorEmail\">\r\n                                Email là bắt buộc.\r\n                            </span>\r\n                            <span class=\"error-text\" *ngIf=\"!checkEmailInput && errorEmail\">\r\n                                Email không đúng định dạng.\r\n                            </span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item [ngClass]=\"errorBirthday || checkBirthdayInput ? 'signup-item' : 'signup-item-error'\" class=\"signup-item\" style=\"margin-bottom: 5px;\">\r\n                                <ion-img [hidden]=\"!errorBirthday || !checkBirthdayInput\" src=\"../../../assets/icon/icon_birthday_update.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-img [hidden]=\"errorBirthday && checkBirthdayInput\" src=\"../../../assets/icon/birthday-red.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-datetime [ngClass]=\"errorBirthday ? '' : 'input-error'\" [(ngModel)]=\"birthDate\" displayFormat=\"DD/MM/YYYY\" placeholder=\"{{'signup.birthday' | translate}} *\" (ionBlur)=\"inputBirthDate()\"></ion-datetime>\r\n                            </ion-item>\r\n                            <span class=\"error-text\" *ngIf=\"!errorBirthday\">\r\n                                Ngày sinh là bắt buộc.\r\n                            </span>\r\n                            <span class=\"error-text\" *ngIf=\"!checkBirthdayInput && errorBirthday\">\r\n                                ngày sinh không được lớn hơn ngày hiện tại.\r\n                            </span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item [ngClass]=\"errorName || checkName? 'signup-item' : 'signup-item-error'\" class=\"signup-item\" style=\"margin-bottom: 5px;\">\r\n                                <ion-img [hidden]=\"!errorName || !checkName\" src=\"../../../assets/icon/icon_name_update.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-img [hidden]=\"errorName && checkName\" src=\"../../../assets/icon/name-red.svg\" class=\"pr-10\"></ion-img>\r\n                                <ion-input [ngClass]=\"errorName ? '' : 'input-error'\" [(ngModel)]=\"name\" placeholder=\"{{'signup.name' | translate}} *\" (ionBlur)=\"inputName()\"></ion-input>\r\n                            </ion-item>\r\n                            <span class=\"error-text\" *ngIf=\"!errorName\">\r\n                                Họ tên là bắt buộc.\r\n                            </span>\r\n                            <span class=\"error-text\" *ngIf=\"!checkName && errorName\">\r\n                                Họ tên không được quá 30 ký tự\r\n                            </span>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row style=\"display: inline-flex; width: 100%;\">\r\n                        <ion-col>\r\n                            <ion-item class=\"signup-item no-border\">\r\n                                <ion-label class=\"check-gende\">\r\n                                    {{'signup.gender' | translate}}\r\n                                </ion-label>\r\n                                <ion-radio-group [(ngModel)]=\"gender\" [value]=\"true\" style=\"display: flex;\" mode=\"md\">\r\n                                    <ion-item>\r\n                                        <ion-label>{{'signup.male' | translate}}</ion-label>\r\n                                        <ion-radio slot=\"start\" [value]=\"true\" style=\"--color-checked: #34A4B6;\"></ion-radio>\r\n                                    </ion-item>\r\n                                \r\n                                    <ion-item>\r\n                                        <ion-label>{{'signup.female' | translate}}</ion-label>\r\n                                        <ion-radio slot=\"start\" [value]=\"false\" style=\"--color-checked: #34A4B6;\"></ion-radio>\r\n                                    </ion-item>\r\n                                </ion-radio-group>\r\n                            </ion-item> \r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row class=\"signup-btn\">\r\n                        <ion-col>\r\n                            <ion-button fill=\"clear\" class=\"btn-login\" (click)=\"signup()\">\r\n                                <p>{{'login.signup' | translate}}</p>\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n    \r\n                    <ion-row class=\"signup-text-contain\">\r\n                        <ion-col>\r\n                            <p class=\"signup-text\">{{'signup.textFooter1' | translate}} <a (click)=\"signIn()\" style=\"color: #34A4B6\">{{'signup.textFooter2' | translate}}</a></p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n    </ion-row>\r\n</ion-content> ");

/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map