(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signIn-signIn-module"],{

/***/ "0jIY":
/*!*******************************************************!*\
  !*** ./src/app/pages/signIn/signIn-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signIn_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signIn.page */ "ZxKZ");




const routes = [
    {
        path: '', component: _signIn_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "BfWG":
/*!**********************************************************************!*\
  !*** ./src/app/pages/signIn/forgot-password/forgot-password.page.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "hs2F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var _signup_otp_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../signup/otp/otp.page */ "uazN");







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(modalController, authService, msgService) {
        this.modalController = modalController;
        this.authService = authService;
        this.msgService = msgService;
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss();
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            let res = yield this.authService.sendSMSUser(this.phoneNumber);
            if (res.isSuccess) {
                this.close();
                yield this.goToOTPPage(res.data);
            }
            else {
                this.msgService.error(res.message || "Số điện thoại không chính sách lui lòng kiểm tra lại");
            }
        });
    }
    isValidData() {
        if (!this.phoneNumber) {
            this.msgService.error("Vui lòng nhập số điện thoại");
            return false;
        }
        return true;
    }
    goToOTPPage(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _signup_otp_otp_page__WEBPACK_IMPORTED_MODULE_6__["OTPPage"],
                componentProps: {
                    "OTP": item.content,
                    "PhoneNumber": item.phoneNumber,
                    "checkForgotPassWord": true,
                }
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ForgotPasswordPage);



/***/ }),

/***/ "SH2V":
/*!*****************************************************************!*\
  !*** ./src/app/shared/models-management/models/signIn.model.ts ***!
  \*****************************************************************/
/*! exports provided: SignInModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModel", function() { return SignInModel; });
class SignInModel {
}


/***/ }),

/***/ "TYXA":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signIn/signIn.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"login-bg\">\r\n    <ion-row class=\"signup-logo\">\r\n      <img src=\"../../../assets/images/img_beep_logo.png\"/>\r\n    </ion-row>\r\n    <ion-row class=\"signup-title\">\r\n        <ion-col>\r\n            <h1 class=\"login-signin\">{{'signin.login' | translate}}</h1>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"signin-bg\">\r\n      <ion-card class=\"signin-card\">\r\n        <ion-item class=\"input\" lines=\"inset\">\r\n          <ion-label>\r\n            <img src=\"../../../assets/icon/icon_phone_update.svg\"/>\r\n          </ion-label>\r\n          <ion-input [(ngModel)]=\"userName\" type=\"tel\" placeholder=\"{{'signin.phone' | translate}}\">\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"input\" lines=\"inset\">\r\n          <ion-label>\r\n            <img src=\"../../../assets/icon/icon_passWord_update.svg\"/>\r\n          </ion-label>\r\n          <ion-input [type]=\"inputElementPassword.type\" [(ngModel)]=\"passWord\" placeholder=\"{{'signin.passWord' | translate}}\">\r\n          </ion-input>\r\n          <ion-img [src]=\"inputElementPassword.src\" (click)=\"onClickPassword()\" [hidden]=\"inputElementPassword.hidden\"></ion-img>\r\n        </ion-item> \r\n\r\n        <ion-row class=\"register-btn\">\r\n          <ion-button (click)=\"signIn()\" fill=\"clear\" class=\"signin-button\">\r\n            <p>{{'signin.login' | translate}}</p>\r\n          </ion-button>\r\n        </ion-row> \r\n\r\n        <ion-row class=\"signin-register\">\r\n          <p (click)=\"forgotPassword()\">{{'signin.forgotPassword' | translate}}</p>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"signin-row-img\">\r\n          <ion-row class=\"signin-img\">\r\n            <img src=\"../../../assets/images/img_signIn_update.svg\" />\r\n          </ion-row>\r\n          <ion-row class=\"signin-create-signup\">\r\n            <p>{{'signin.textFooter1' | translate}}<span (click)=\"signup()\" style=\"color: #34A4B6;\"> {{'signin.textFooter2' | translate}}</span></p>\r\n          </ion-row>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "TcyS":
/*!***********************************************!*\
  !*** ./src/app/pages/signIn/signIn.module.ts ***!
  \***********************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _signup_otp_otp_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../signup/otp/otp.module */ "gT2U");
/* harmony import */ var _tabs_home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabs/home/home.module */ "oj+e");
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.page */ "BfWG");
/* harmony import */ var _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.page */ "n6D4");
/* harmony import */ var _signIn_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signIn-routing.module */ "0jIY");
/* harmony import */ var _signIn_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signIn.page */ "ZxKZ");













let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signIn_routing_module__WEBPACK_IMPORTED_MODULE_11__["SignInPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_6__["NgOtpInputModule"],
            _tabs_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomePagePageModule"],
            _signup_otp_otp_module__WEBPACK_IMPORTED_MODULE_7__["OtpPageModule"]
        ],
        declarations: [
            _signIn_page__WEBPACK_IMPORTED_MODULE_12__["SignInPage"],
            _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordPage"],
            _reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordPage"],
        ]
    })
], SignInPageModule);



/***/ }),

/***/ "ZxKZ":
/*!*********************************************!*\
  !*** ./src/app/pages/signIn/signIn.page.ts ***!
  \*********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signIn_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signIn.page.html */ "TYXA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_management_models_signIn_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models-management/models/signIn.model */ "SH2V");
/* harmony import */ var src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/ionInput.model */ "AKK8");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password/forgot-password.page */ "BfWG");











let SignInPage = class SignInPage {
    constructor(router, nav, authService, msgService, modalController) {
        this.router = router;
        this.nav = nav;
        this.authService = authService;
        this.msgService = msgService;
        this.modalController = modalController;
        this.signInModel = new src_app_shared_models_management_models_signIn_model__WEBPACK_IMPORTED_MODULE_5__["SignInModel"]();
        this.inputElementPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.eyeShow = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].eyeShow;
        this.eyeHide = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].eyeHide;
    }
    ngOnInit() {
        this.inputElementPassword.src = this.eyeHide;
        this.inputElementPassword.type = 'password';
    }
    signup() {
        this.authService.logout();
        this.router.navigate(["/signup"]);
    }
    signIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            this.signInModel.userName = this.userName.trim();
            this.signInModel.passWord = this.passWord.trim();
            let res = yield this.authService.login(this.signInModel);
            if (res.isSuccess) {
                this.router.navigate(["/tabs/home"]);
                this.msgService.success("Đăng nhập thành công");
            }
            else {
                this.msgService.error(res.message || "Đăng nhập thất bại");
            }
        });
    }
    isValidData() {
        if (!this.userName) {
            this.msgService.error("Vui lòng nhập số điện thoại");
            return false;
        }
        if (this.userName.length > 11) {
            this.msgService.error("Số điện thoại không lớn hơn 11 kí tự");
            return false;
        }
        if (!this.passWord) {
            this.msgService.error("Vui lòng nhập mật khẩu");
            return false;
        }
        if (this.passWord.length < 6) {
            this.msgService.error("Mật khẩu phải lớn hơn 6 kí tự");
            return false;
        }
        return true;
    }
    forgotPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordPage"],
                componentProps: {}
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
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
SignInPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__["MsgService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signIn',
        template: _raw_loader_signIn_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SignInPage);



/***/ }),

/***/ "hs2F":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signIn/forgot-password/forgot-password.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"otp-container\">\r\n    <ion-row class=\"otp-header\">\r\n        <ion-toolbar style=\"--background: #fff;\">\r\n          <ion-icon style=\"color: #000\" name=\"arrow-back\" slot=\"start\" (click)=\"close()\"></ion-icon>\r\n        </ion-toolbar>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <img src=\"../../../assets/images/img_forgot_passWord_update.svg\" />\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p class=\"forgot-password\">{{'signin.forgotPassword1' | translate}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p class=\"forgot-password-message\">{{'signin.textFooter3' | translate}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-item class=\"input\" lines=\"inset\">\r\n        <ion-label>\r\n            <img src=\"../../../assets/icon/icon_phone_update.svg\"/>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"phoneNumber\" type=\"tel\" placeholder=\"{{'signin.phone' | translate}}\">\r\n        </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-row class=\"signup-btn\">\r\n        <ion-col style=\"padding-top: 20px;\">\r\n            <ion-button (click)=\"signUp()\" fill=\"clear\" class=\"btn-login\">\r\n              <p style=\"color: #fff;\">{{'signin.confirm' | translate}}</p>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row> \r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=signIn-signIn-module.js.map