(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "2bRt":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/setting/setting.module.ts ***!
  \******************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.page */ "hu0M");
/* harmony import */ var _setting_routing_modult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting-routing.modult */ "vsOB");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting.page */ "TFKV");




//





let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _setting_routing_modult__WEBPACK_IMPORTED_MODULE_7__["SettingPageRoutingModule"]
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_8__["SettingPage"], _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]],
        providers: []
    })
], SettingPageModule);



/***/ }),

/***/ "KrIF":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/setting/change-password/change-password.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cus-detail-header\">\r\n    <ion-toolbar>\r\n      <ion-icon class=\"cus-info-back ion-margin-start\" name=\"arrow-back\" slot=\"start\" (click)=\"back()\"></ion-icon>\r\n      <ion-title style=\"text-align: center;padding-top: 5px;\">{{'changePassword.changePassword' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item>\r\n        <ion-img src=\"../../../assets/icon/password.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input [type]=\"inputElementCurrentPassWord.type\" [(ngModel)]=\"changePasswordModel.currentPassWord\" placeholder=\"{{'changePassword.currentPassword' | translate}}\"></ion-input>\r\n        <ion-img [src]=\"inputElementCurrentPassWord.src\" (click)=\"onClickCurrentPassWord()\" [hidden]=\"inputElementCurrentPassWord.hidden\"></ion-img>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-img src=\"../../../assets/icon/password.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input [type]=\"inputElementPassword.type\" [(ngModel)]=\"changePasswordModel.newPassWord\" placeholder=\"{{'changePassword.newPassword' | translate}}\"></ion-input>\r\n        <ion-img [src]=\"inputElementPassword.src\" (click)=\"onClickPassword()\" [hidden]=\"inputElementPassword.hidden\"></ion-img>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-img src=\"../../../assets/icon/password.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input [type]=\"inputElementConfirmPassword.type\" [(ngModel)]=\"confirmPass\" placeholder=\"{{'changePassword.ConfirmNewPassword' | translate}}\"></ion-input>\r\n        <ion-img [src]=\"inputElementConfirmPassword.src\" (click)=\"onClickConfirmPassword()\" [hidden]=\"inputElementConfirmPassword.hidden\"></ion-img>\r\n\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col style=\"text-align: center;\">\r\n      <ion-button class=\"btn-setting-save\" (click)=\"save()\">{{'changePassword.completed' | translate}}</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ }),

/***/ "NOkb":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/setting/setting.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cus-detail-header\">\r\n    <ion-toolbar>\r\n      <ion-icon class=\"cus-info-back ion-margin-start\" name=\"arrow-back\" slot=\"start\" (click)=\"back()\"></ion-icon>\r\n      <ion-title style=\"text-align: center;\">{{'setting.setting' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-label class=\"label-setting ion-margin-start\" position=\"stacked\">{{'setting.password' | translate}}</ion-label>\r\n            <ion-item class=\"ion-margin-bottom\" detail (click)=\"goToChangePass()\">\r\n                <img slot=\"start\" src=\"../../../../assets/icon/password.svg\">\r\n                <ion-label>\r\n                  {{'setting.changePassword' | translate}}\r\n                </ion-label>\r\n            </ion-item>\r\n            \r\n            <ion-label class=\"label-setting ion-margin-start\" position=\"stacked\">{{'setting.language' | translate}}</ion-label>\r\n            <ion-item class=\"ion-margin-bottom\" detail>\r\n                <img slot=\"start\" src=\"../../../../assets/icon/language.svg\">\r\n                <ion-select [(ngModel)]=\"language\" (ionChange)=\"changeLanguage()\" [interfaceOptions]=\"customAlertOptions\" interface=\"alert\" cancelText=\"Đóng\" okText=\"Chọn\">\r\n                  <ion-select-option value=\"vi\">Tiếng Việt</ion-select-option>\r\n                  <ion-select-option value=\"en\">English</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            \r\n            <ion-label class=\"label-setting ion-margin-start\" position=\"stacked\">{{'setting.customerCareCenter' | translate}}</ion-label>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <img slot=\"start\" src=\"../../../../assets/icon/telephone.svg\">\r\n                <ion-label>\r\n                  18001900\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <img slot=\"start\" src=\"../../../../assets/icon/email.svg\">\r\n                <ion-label>\r\n                  info@beep.vn\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <img slot=\"start\" src=\"../../../../assets/icon/facebook.svg\">\r\n                <ion-label>\r\n                  facebook.com/beepvn\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n  \r\n  ");

/***/ }),

/***/ "TFKV":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/setting/setting.page.ts ***!
  \****************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./setting.page.html */ "NOkb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password/change-password.page */ "hu0M");







let SettingPage = class SettingPage {
    constructor(modalController, localStorageService, translate) {
        this.modalController = modalController;
        this.localStorageService = localStorageService;
        this.translate = translate;
        this.language = 'vi';
        this.customAlertOptions = {
            header: "Chọn ngôn ngữ",
        };
    }
    ngOnInit() {
        this.getCurrentLanguale();
    }
    back() {
        window.history.back();
    }
    goToChangePass() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _change_password_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"],
                componentProps: {}
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
    }
    getCurrentLanguale() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.language = yield this.translate.getDefaultLang();
        });
    }
    changeLanguage() {
        this.localStorageService.set("language", this.language);
        this.translate.setDefaultLang(this.language);
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorgeService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SettingPage);



/***/ }),

/***/ "hu0M":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/setting/change-password/change-password.page.ts ***!
  \****************************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.page.html */ "KrIF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_changePassword_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/changePassword.model */ "lQGi");
/* harmony import */ var src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/ionInput.model */ "AKK8");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let ChangePasswordPage = class ChangePasswordPage {
    constructor(router, modalController, authService, localStorageService, msgService) {
        this.router = router;
        this.modalController = modalController;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.msgService = msgService;
        this.eyeShow = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].eyeShow;
        this.eyeHide = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].eyeHide;
        this.inputElementPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.inputElementConfirmPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.inputElementCurrentPassWord = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.changePasswordModel = new src_app_shared_models_changePassword_model__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordModel"]();
        this.userId = this.localStorageService.get("userId");
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.inputElementPassword.src = this.eyeHide;
        this.inputElementPassword.type = 'password';
        this.inputElementConfirmPassword.src = this.eyeHide;
        this.inputElementConfirmPassword.type = 'password';
        this.inputElementCurrentPassWord.src = this.eyeHide;
        this.inputElementCurrentPassWord.type = 'password';
    }
    back() {
        this.modalController.dismiss();
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            this.changePasswordModel.userId = this.userId;
            let res = yield this.authService.changePassword(this.changePasswordModel);
            if (res.isSuccess) {
                this.msgService.success("Đổi mật khẩu thành công");
                this.back();
                this.router.navigate(["/tabs/home"]);
            }
            else {
                let a = Object.values(res.data);
                this.msgService.error(a.toString() || "Không tìm thấy vị trí hiện tại");
            }
            return true;
        });
    }
    isValidData() {
        if (!this.changePasswordModel.currentPassWord) {
            this.msgService.error("Vui lòng nhập mật khẩu hiện tại");
            return false;
        }
        if (!this.changePasswordModel.newPassWord) {
            this.msgService.error("Vui lòng nhập mật khẩu mới");
            return false;
        }
        if (this.changePasswordModel.newPassWord.length < 6) {
            this.msgService.error("Vui lòng nhập mật khẩu mới lớn hoặc bằng 6 kí tự");
            return false;
        }
        if (!this.confirmPass) {
            this.msgService.error("Vui lòng nhập mật khẩu xác nhận");
            return false;
        }
        if (this.confirmPass.length < 6) {
            this.msgService.error("Vui lòng nhập mật khẩu xác nhận lớn hoặc bằng 6 kí tự");
            return false;
        }
        if (this.confirmPass != this.changePasswordModel.newPassWord) {
            this.msgService.error("Mật khẩu xác nhận không chính xác");
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
    onClickConfirmPassword() {
        if (this.inputElementConfirmPassword.src === this.eyeShow) {
            this.inputElementConfirmPassword.src = this.eyeHide;
            this.inputElementConfirmPassword.type = 'password';
        }
        else if (this.inputElementConfirmPassword.src === this.eyeHide) {
            this.inputElementConfirmPassword.src = this.eyeShow;
            this.inputElementConfirmPassword.type = 'text';
        }
    }
    onClickCurrentPassWord() {
        if (this.inputElementCurrentPassWord.src === this.eyeShow) {
            this.inputElementCurrentPassWord.src = this.eyeHide;
            this.inputElementCurrentPassWord.type = 'password';
        }
        else if (this.inputElementCurrentPassWord.src === this.eyeHide) {
            this.inputElementCurrentPassWord.src = this.eyeShow;
            this.inputElementCurrentPassWord.type = 'text';
        }
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorgeService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_9__["MsgService"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChangePasswordPage);



/***/ }),

/***/ "lQGi":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/changePassword.model.ts ***!
  \*******************************************************/
/*! exports provided: ChangePasswordModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return ChangePasswordModel; });
class ChangePasswordModel {
}


/***/ }),

/***/ "vsOB":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/setting/setting-routing.modult.ts ***!
  \**************************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "TFKV");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module.js.map