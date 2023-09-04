(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+TUv":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/image-viewer/image-viewer.component.ts ***!
  \**************************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_image_viewer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./image-viewer.component.html */ "IE6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let ImageViewerComponent = class ImageViewerComponent {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.configImageViewer = {
            wheelZoom: true,
            btnIcons: {
                zoomIn: 'fa fa-plus',
                zoomOut: 'fa fa-minus',
                rotateClockwise: 'fa fa-redo',
                rotateCounterClockwise: 'fa fa-undo',
                next: 'fa fa-arrow-right',
                prev: 'fa fa-arrow-left',
                fullscreen: 'fa fa-arrows-alt',
            },
        };
        this.dataImage = [];
        this.dataImage = this.navParams.get("dataImage");
    }
    ngOnInit() { }
    dismissModal() {
        this.modalController.dismiss();
    }
};
ImageViewerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
ImageViewerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-image-viewer',
        template: _raw_loader_image_viewer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ImageViewerComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\BEEPTB\BEEPTB_CUSTOMER_APP\src\main.ts */"zUnb");


/***/ }),

/***/ "3MHB":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/locals/http-interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _local_storge_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storge.service */ "kWPB");
/* harmony import */ var _msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./msg-message.service */ "6bWp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infrastructure_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../infrastructure/constant */ "WRFj");








let HttpInterceptorService = class HttpInterceptorService {
    constructor(localStorgeService, alertService, router) {
        this.localStorgeService = localStorgeService;
        this.alertService = alertService;
        this.router = router;
    }
    intercept(req, next) {
        var token = this.localStorgeService.get(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_7__["Constant"].auths.token);
        var modReq = null;
        if (token) {
            const authHeader = "Bearer " + token;
            var updUrl = { url: req.url, headers: req.headers.set('Authorization', authHeader) };
            modReq = req.clone(updUrl);
        }
        else {
            var url = { url: req.url };
            modReq = req.clone(url);
        }
        return next.handle(modReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status == 401) {
                    this.localStorgeService.clear();
                    this.router.navigate([""], { skipLocationChange: true });
                    this.alertService.error("Hết phiên làm việc");
                }
                if (err.status == 403) {
                    this.router.navigate(["403"]);
                }
                else if (err.status == 0) {
                }
                else {
                    this.alertService.error("Lỗi bất ngờ, vui lòng thử lại sau");
                }
            }
        }));
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _local_storge_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorgeService"] },
    { type: _msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HttpInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "6bWp":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/locals/msg-message.service.ts ***!
  \***************************************************************/
/*! exports provided: MsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgService", function() { return MsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let MsgService = class MsgService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    success(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: 'primary'
            });
            toast.present();
        });
    }
    warn(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: 'warning'
            });
            toast.present();
        });
    }
    error(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 5000,
                color: 'danger'
            });
            toast.present();
        });
    }
    alertOK(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Thông báo',
                message: message,
                buttons: ['Đồng ý']
            });
            yield alert.present();
        });
    }
    alertYesNo(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'Thông báo',
                    message: message,
                    buttons: [
                        {
                            text: 'Đóng',
                            role: 'cancel',
                            cssClass: 'color-gray',
                            handler: () => {
                                resolve(false);
                            }
                        }, {
                            text: 'Đồng ý',
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
    checkInfoCustomerYesNo(message, cancelName, confirmName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'Thông báo',
                    message: message,
                    buttons: [
                        {
                            text: cancelName,
                            role: 'cancel',
                            cssClass: 'color-gray',
                            handler: () => {
                                resolve(false);
                            }
                        }, {
                            text: confirmName,
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                });
                yield alert.present();
            }));
        });
    }
};
MsgService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
MsgService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MsgService);



/***/ }),

/***/ "7VEu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/otp/otp.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"otp-container\">\r\n    <ion-row class=\"otp-header\">\r\n        <ion-toolbar>\r\n          <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"close()\"></ion-icon>\r\n        </ion-toolbar>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <h1>{{'otp.title' | translate}}</h1>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <img src=\"../../../../assets/images/img_otp_update.svg\" />\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p>{{'otp.textFooter1' | translate}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"{length:4, allowNumbersOnly:true, inputStyles:{'width': '45px', 'height': '45px'}}\"></ng-otp-input>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p>{{'otp.textFooter2' | translate}} {{timeCountdown}}s</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\" style=\"margin-bottom: -3px;\">\r\n        <ion-col>\r\n            <ion-button (click)=\"save()\" fill=\"clear\" class=\"otp-continue\">{{'otp.buttonContinue' | translate}}</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <ion-button (click)=\"sendTo()\" fill=\"clear\" class=\"otp-resend\">{{'otp.resend' | translate}}</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ "AKK8":
/*!*************************************************!*\
  !*** ./src/app/shared/models/ionInput.model.ts ***!
  \*************************************************/
/*! exports provided: IonInputModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInputModel", function() { return IonInputModel; });
class IonInputModel {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    logoUrl: '../assets/images/logo.png',
    formatDateTime: "YYYY/MM/DD HH:mm",
    apiCoreUrl: "http://192.168.40.113:45455/api",
    //apiCoreUrl: "http://localhost:60000/api",
    //apiCoreUrl: "http://apisystems.beep.dev.rnt.vn/api",
    apiCoreUrlImg: "http://192.168.31.50:45455",
    keyGoogleMap: 'AIzaSyBu4Y90CByGCKL5rxjR1bfCPAKVkh5KhYA',
    eyeShow: "../assets/icon/show_eyes_svg.svg",
    eyeHide: "../assets/icon/hide_eyes_svg.svg"
};


/***/ }),

/***/ "FxCV":
/*!*******************************************************************!*\
  !*** ./src/app/shared/models-management/models/customer.model.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
class CustomerModel {
}


/***/ }),

/***/ "GJQ/":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/authLogin.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginGuard", function() { return AuthLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_apis_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apis/auth.service */ "zn/s");




let AuthLoginGuard = class AuthLoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLogged()) {
            this.router.navigate(["/tabs"]);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthLoginGuard.ctorParameters = () => [
    { type: _services_apis_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthLoginGuard);



/***/ }),

/***/ "HSls":
/*!****************************************!*\
  !*** ./src/app/pages/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "MJZ2");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "mGzF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.translate.setDefaultLang('vi');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "IE6v":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/image-viewer/image-viewer.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-text class=\"text-function mr-1\" slot=\"end\" (click)=\"dismissModal()\">\r\n      <p>Đóng </p>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ngx-image-viewer [src]=\"dataImage\" [config]=\"configImageViewer\"></ngx-image-viewer>\r\n</ion-content>");

/***/ }),

/***/ "JESq":
/*!********************************************************!*\
  !*** ./src/app/shared/models/change-password.model.ts ***!
  \********************************************************/
/*! exports provided: ChangePasswordForgotModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordForgotModel", function() { return ChangePasswordForgotModel; });
class ChangePasswordForgotModel {
}


/***/ }),

/***/ "KJJU":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var _entityBase_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entityBase.model */ "eGXf");

class UserModel extends _entityBase_model__WEBPACK_IMPORTED_MODULE_0__["EntityBaseModel"] {
}


/***/ }),

/***/ "LjFu":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_apis_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apis/auth.service */ "zn/s");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLogged()) {
            return true;
        }
        else {
            this.router.navigate([""]);
            return false;
        }
    }
    canActivateChild(route, state) {
        if (this.authService.isLogged()) {
            return true;
        }
        else {
            this.router.navigate([""]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_apis_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "MJZ2":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "N3up":
/*!*************************************!*\
  !*** ./src/app/pages/app.module.ts ***!
  \*************************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "lnhd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "HSls");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/components.module */ "V/fk");
/* harmony import */ var _shared_services_locals_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/locals/http-interceptor.service */ "3MHB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "ItPR");
/* harmony import */ var _signup_otp_otp_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/otp/otp.module */ "gT2U");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic5-star-rating */ "j7Is");


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_10__["NgOtpInputModule"],
            _shared_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _signup_otp_otp_module__WEBPACK_IMPORTED_MODULE_16__["OtpPageModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_17__["StarRatingModule"]
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"],
            _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["BackgroundGeolocation"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _shared_services_locals_http_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["HttpInterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "S/8Y":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/apis/customer.service.ts ***!
  \**********************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let CustomerService = class CustomerService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "Customer");
        this.http = http;
        this.alertService = alertService;
    }
    CreateCustomer(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('CreateCustomer', model);
            return res;
        });
    }
    getCurrentCustomer(Id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("userId", Id + '');
            const res = yield this.getWithParams('GetCustomerByUserId', params);
            return res;
        });
    }
    CheckPhoneNumber(phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("phoneNumber", phoneNumber + "");
            let res = yield this.getWithParams("CheckPhoneNumber", params);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    updateCustomer(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('UpdateCustomer', model);
            return res;
        });
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "T57n":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signIn/reset-password/reset-password.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"otp-container\">\r\n    <ion-row class=\"otp-header\">\r\n        <ion-toolbar>\r\n          <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"close()\"></ion-icon>\r\n        </ion-toolbar>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <img src=\"../../../assets/images/img_reset_password.svg\" />\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p class=\"forgot-password\">{{'resetPassword.resetPassWord' | translate}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"otp-content\">\r\n        <ion-col>\r\n            <p class=\"forgot-password-message\">{{'resetPassword.textFooter1' | translate}}</p>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-item class=\"input\" lines=\"inset\">\r\n        <ion-label>\r\n            <img src=\"../../../assets/images/icon_phone.svg\"/>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"changePasswordModel.newPassWord\" [type]=\"inputElementPassword.type\" placeholder=\"{{'resetPassword.textFooter1' | translate}}\">\r\n        </ion-input>\r\n        <ion-img [src]=\"inputElementPassword.src\" (click)=\"onClickPassword()\" [hidden]=\"inputElementPassword.hidden\"></ion-img>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"input\" lines=\"inset\">\r\n        <ion-label>\r\n            <img src=\"../../../assets/images/icon_phone.svg\"/>\r\n        </ion-label>\r\n        <ion-input [(ngModel)]=\"passWordConfirm\" [type]=\"inputElementConfirmPassword.type\" placeholder=\"{{'resetPassword.textFooter2' | translate}}\">\r\n        </ion-input>\r\n        <ion-img [src]=\"inputElementConfirmPassword.src\" (click)=\"onClickConfirmPassword()\" [hidden]=\"inputElementConfirmPassword.hidden\"></ion-img>\r\n    </ion-item>\r\n    \r\n    <ion-row class=\"signup-btn\">\r\n        <ion-col style=\"padding-top: 20px;\">\r\n            <ion-button (click)=\"signUp()\" fill=\"clear\" class=\"btn-login\">\r\n              <p style=\"color: #fff;\">{{'signin.confirm' | translate}}</p>\r\n            </ion-button>\r\n        </ion-col>\r\n    </ion-row> \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "V/fk":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "+TUv");
/* harmony import */ var ngx_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-viewer */ "5O08");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ImageViewerModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        entryComponents: [
            _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
        ],
        exports: [
            _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "WRFj":
/*!***************************************************!*\
  !*** ./src/app/shared/infrastructure/constant.ts ***!
  \***************************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
const Constant = {
    messageStatus: {
        success: "success",
        info: "info",
        warn: "warn",
        error: "error",
    },
    response: {
        isSuccess: "isSuccess",
        message: "message",
        data: "data",
        exception: "exception",
    },
    auths: {
        expires: 'expires',
        isLoginIn: 'loggedIn',
        token: 'token',
        tokenNIC: 'tokenNIC',
        userId: 'userId',
        userName: 'userName',
        fullName: 'fullName'
    },
    pages: {
        login: {
            alias: '',
            name: 'Đăng nhập',
        },
    }
};


/***/ }),

/***/ "ca79":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/apis/general.service.ts ***!
  \*********************************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "iZSq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GeneralService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(http, alertService, apiUrl, apiName) {
        super(http, alertService, apiUrl, apiName);
        this.http = http;
        this.alertService = alertService;
        this.apiUrl = apiUrl;
        this.apiName = apiName;
    }
    getAll(cols) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!cols)
                cols = "";
            let res = yield this.get(`GetAll?cols=${cols}`);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    getPaging(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.post("GetPaging", model);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    // async getAllSelectModel() {
    //   let data = await this.getAll();
    //   let selectModel: SelectModel[] = [
    //     { value: null, label: "Tất cả", data: null }
    //   ];
    //   data.forEach(item => {
    //     selectModel.push({ value: item.id, label: item.name, data: item })
    //   });
    //   return selectModel;
    // }
    // async getAllSelectModelWithoutSelectAll() {
    //   let data = await this.getAll();
    //   let selectModel: SelectModel[] = [];
    //   data.forEach(item => {
    //     selectModel.push({ value: item.id, label: item.name, data: item })
    //   });
    //   return selectModel;
    // }
    getByID(id, cols = "") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            params = params.append("id", id);
            params = params.append("cols", cols);
            let res = yield this.getWithParams("Get", params);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    create(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const key in model) {
                if (!model[key])
                    delete model[key];
            }
            let res = yield this.post("Create", model);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    update(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.post("Update", model);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    delete(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.post("Delete", model);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
}


/***/ }),

/***/ "eGXf":
/*!***************************************************!*\
  !*** ./src/app/shared/models/entityBase.model.ts ***!
  \***************************************************/
/*! exports provided: EntityBaseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityBaseModel", function() { return EntityBaseModel; });
class EntityBaseModel {
}


/***/ }),

/***/ "gT2U":
/*!************************************************!*\
  !*** ./src/app/pages/signup/otp/otp.module.ts ***!
  \************************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./otp.page */ "uazN");








let OtpPageModule = class OtpPageModule {
};
OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_6__["NgOtpInputModule"]
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_7__["OTPPage"]],
        exports: [
            _otp_page__WEBPACK_IMPORTED_MODULE_7__["OTPPage"]
        ]
    })
], OtpPageModule);



/***/ }),

/***/ "iZSq":
/*!******************************************************!*\
  !*** ./src/app/shared/services/apis/base.service.ts ***!
  \******************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class BaseService {
    constructor(httpClient, alertService, apiUrl, apiName) {
        this.httpClient = httpClient;
        this.alertService = alertService;
        this.apiUrl = apiUrl;
        this.apiName = apiName;
    }
    get(method) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(`${this.apiUrl}/${this.apiName}/${method}`).toPromise();
        });
    }
    getWithParams(method, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.get(`${this.apiUrl}/${this.apiName}/${method}`, { params: params }).toPromise();
        });
    }
    post(method, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`${this.apiUrl}/${this.apiName}/${method}`, model).toPromise();
        });
    }
    Post(apiUrl, method, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`${this.apiUrl}/${this.apiName}/${method}`, model).toPromise();
        });
    }
    postCustomApi(apiMethod, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`${this.apiUrl}/${this.apiName}/${apiMethod}`, model).toPromise();
        });
    }
    isValidResponse(res) {
        if (res.isSuccess) {
            return res;
        }
        else {
            this.alertService.error(res.message || "Có lỗi xảy ra, vui lòng thử lại sau");
            return false;
        }
    }
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kWPB":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/locals/local-storge.service.ts ***!
  \****************************************************************/
/*! exports provided: LocalStorgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorgeService", function() { return LocalStorgeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LocalStorgeService = class LocalStorgeService {
    constructor() { }
    set(key, value) {
        localStorage.setItem(key, value);
    }
    get(key) {
        return localStorage.getItem(key);
    }
    clear() {
        localStorage.clear();
    }
    singleClear(key) {
        localStorage.removeItem(key);
    }
};
LocalStorgeService.ctorParameters = () => [];
LocalStorgeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorgeService);



/***/ }),

/***/ "lnhd":
/*!*********************************************!*\
  !*** ./src/app/pages/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "LjFu");
/* harmony import */ var _shared_guards_authLogin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guards/authLogin.guard */ "GJQ/");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "F4UR")).then(m => m.LoginPageModule), canActivate: [_shared_guards_authLogin_guard__WEBPACK_IMPORTED_MODULE_4__["AuthLoginGuard"]]
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("default~signup-signup-module~tabs-tabs-module"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "UUSl")).then(m => m.SignUpPageModule), canActivate: [_shared_guards_authLogin_guard__WEBPACK_IMPORTED_MODULE_4__["AuthLoginGuard"]]
    },
    {
        path: 'signIn',
        loadChildren: () => Promise.all(/*! import() | signIn-signIn-module */[__webpack_require__.e("common"), __webpack_require__.e("signIn-signIn-module")]).then(__webpack_require__.bind(null, /*! ./signIn/signIn.module */ "TcyS")).then(m => m.SignInPageModule), canActivate: [_shared_guards_authLogin_guard__WEBPACK_IMPORTED_MODULE_4__["AuthLoginGuard"]]
    },
    {
        path: 'tabs', loadChildren: () => Promise.all(/*! import() | tabs-tabs-module */[__webpack_require__.e("default~signup-signup-module~tabs-tabs-module"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "qiIP")).then(m => m.TabsPageModule), canActivateChild: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "mGzF":
/*!******************************************!*\
  !*** ./src/app/pages/app.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "n6D4":
/*!********************************************************************!*\
  !*** ./src/app/pages/signIn/reset-password/reset-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password.page.html */ "T57n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_change_password_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/change-password.model */ "JESq");
/* harmony import */ var src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/ionInput.model */ "AKK8");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let ResetPasswordPage = class ResetPasswordPage {
    constructor(modalController, navParams, msgService, authService, router) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.msgService = msgService;
        this.authService = authService;
        this.router = router;
        this.changePasswordModel = new src_app_shared_models_change_password_model__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordForgotModel"]();
        this.eyeShow = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].eyeShow;
        this.eyeHide = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].eyeHide;
        this.inputElementPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.inputElementConfirmPassword = new src_app_shared_models_ionInput_model__WEBPACK_IMPORTED_MODULE_6__["IonInputModel"]();
        this.userId = this.navParams.get('userId');
    }
    ngOnInit() {
        this.inputElementPassword.src = this.eyeHide;
        this.inputElementPassword.type = 'password';
        this.inputElementConfirmPassword.src = this.eyeHide;
        this.inputElementConfirmPassword.type = 'password';
    }
    close() {
        this.modalController.dismiss();
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            this.changePasswordModel.userId = this.userId;
            this.changePasswordModel.newPassWord = this.changePasswordModel.newPassWord.trim();
            let res = yield this.authService.changePassWordForgotPassword(this.changePasswordModel);
            if (res.isSuccess) {
                this.close();
                this.msgService.success("Đổi mật khẩu thành công");
                this.goToSigIn();
            }
        });
    }
    isValidData() {
        if (this.changePasswordModel.newPassWord.length < 6) {
            this.msgService.error("Vui lòng nhập mật khẩu mới lớn hơn 6 kí tự");
            return false;
        }
        if (!this.changePasswordModel.newPassWord) {
            this.msgService.error("Vui lòng nhập mật khẩu mới");
            return false;
        }
        if (!this.passWordConfirm) {
            this.msgService.error("Vui lòng nhập mật khẩu xác nhận");
            return false;
        }
        if (this.passWordConfirm != this.changePasswordModel.newPassWord) {
            this.msgService.error("Mật khẩu xác nhận không chính xác");
            return false;
        }
        return true;
    }
    goToSigIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(["/signIn"]);
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
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__["MsgService"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], ResetPasswordPage);



/***/ }),

/***/ "uazN":
/*!**********************************************!*\
  !*** ./src/app/pages/signup/otp/otp.page.ts ***!
  \**********************************************/
/*! exports provided: OTPPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTPPage", function() { return OTPPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./otp.page.html */ "7VEu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_management_models_customer_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models-management/models/customer.model */ "FxCV");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/user.model */ "KJJU");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apis/customer.service */ "S/8Y");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var _signIn_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../signIn/reset-password/reset-password.page */ "n6D4");












let OTPPage = class OTPPage {
    constructor(modalController, localStorageService, navParams, authService, msgService, customerService, router) {
        this.modalController = modalController;
        this.localStorageService = localStorageService;
        this.navParams = navParams;
        this.authService = authService;
        this.msgService = msgService;
        this.customerService = customerService;
        this.router = router;
        this.userModel = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.customerModel = new src_app_shared_models_management_models_customer_model__WEBPACK_IMPORTED_MODULE_5__["CustomerModel"]();
        this.checkCreate = false;
        this.checkForgotPassWord = false;
        this.timeCountdown = 60;
        this.OTP = this.navParams.get('OTP');
        this.phoneNumber = this.navParams.get('PhoneNumber');
        this.checkForgotPassWord = this.navParams.get('checkForgotPassWord');
        this.customerModel = this.navParams.get('customerModel');
        this.checkCreate = this.navParams.get('checkCreate');
        this.content = this.navParams.get('content');
    }
    ngOnInit() {
        this.resendOTP();
    }
    close() {
        this.modalController.dismiss();
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isValidData())
                return;
            let localOTP = this.localStorageService.get("otp");
            if (this.inputOTP == localOTP) {
                if (this.checkForgotPassWord) {
                    this.userModel = yield this.authService.getUserByPhoneNumber(this.phoneNumber);
                    this.goToResetPassword(this.userModel);
                }
                if (this.checkCreate) {
                    let res = yield this.customerService.CreateCustomer(this.customerModel);
                    if (res.isSuccess) {
                        this.msgService.success("Đăng kí thành công");
                        this.goToHome();
                    }
                    else {
                        this.msgService.error(res.message || "Đăng kí không thành công");
                    }
                }
                this.localStorageService.singleClear("otp");
                this.close();
            }
            else {
                this.msgService.error("Mã OTP không khớp");
            }
            //remoce otp
            this.removeExpireOPT();
        });
    }
    isValidData() {
        if (!this.inputOTP) {
            this.msgService.error("Vui lòng nhập mã OTP");
            return false;
        }
        return true;
    }
    resendOTP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.checkForgotPassWord) {
                this.localStorageService.set("otp", this.OTP);
            }
            if (this.checkCreate) {
                this.localStorageService.set("otp", this.content);
            }
            this.removeExpireOPT();
            this.CountTime();
        });
    }
    removeExpireOPT() {
        this.initTimeout = setTimeout(() => {
            this.localStorageService.singleClear("otp");
        }, 60000);
    }
    CountTime() {
        this.timeCountdown = 60;
        this.interVal = setInterval(() => {
            this.timeCountdown--;
            if (this.timeCountdown == 0) {
                clearInterval(this.interVal);
            }
        }, 1000);
    }
    goToResetPassword(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _signIn_reset_password_reset_password_page__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordPage"],
                componentProps: {
                    "userId": item.id,
                }
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
    }
    onOtpChange(event) {
        this.inputOTP = event;
    }
    goToHome() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/signin']);
        });
    }
    sendTo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            clearInterval(this.interVal);
            clearTimeout(this.initTimeout);
            if (this.checkForgotPassWord) {
                let res = yield this.authService.sendSMSUser(this.phoneNumber);
                if (res.isSuccess) {
                    this.OTP = res.data.content;
                    this.resendOTP();
                }
            }
            if (this.checkCreate) {
                let res = yield this.authService.creeateCustomerSendSMS(this.customerModel.phoneNumber);
                if (res.isSuccess) {
                    this.content = res.data.content;
                    this.resendOTP();
                }
            }
        });
    }
};
OTPPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorgeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_10__["MsgService"] },
    { type: src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OTPPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-otp',
        template: _raw_loader_otp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], OTPPage);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_pages_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/pages/app.module */ "N3up");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_pages_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn/s":
/*!******************************************************!*\
  !*** ./src/app/shared/services/apis/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_local_storge_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/local-storge.service */ "kWPB");
/* harmony import */ var _infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../infrastructure/constant */ "WRFj");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");








let AuthService = class AuthService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService, localStorgeService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "Account");
        this.http = http;
        this.alertService = alertService;
        this.localStorgeService = localStorgeService;
    }
    isLogged() {
        var isLogged = this.localStorgeService.get(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.isLoginIn);
        if (isLogged === 'true') {
            return true;
        }
        return false;
    }
    login(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('SignIn', model);
            if (res.isSuccess) {
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.expires, res.data.expires);
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.isLoginIn, 'true');
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.userId, res.data.userId);
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.userName, res.data.userName);
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.token, res.data.token);
                this.localStorgeService.set(_infrastructure_constant__WEBPACK_IMPORTED_MODULE_6__["Constant"].auths.tokenNIC, res.data.tokenNIC);
            }
            return res;
        });
    }
    changePassword(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('ChangePassWord', model);
            return res;
        });
    }
    logout() {
        this.localStorgeService.clear();
    }
    sendSMSUser(phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("phoneNumber", phoneNumber + '');
            const res = yield this.getWithParams('SendSMSUser', params);
            return res;
        });
    }
    creeateCustomerSendSMS(phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("phoneNumber", phoneNumber + '');
            const res = yield this.getWithParams('CreeateCustomerSendSMS', params);
            return res;
        });
    }
    getUserByPhoneNumber(phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("phoneNumber", phoneNumber + "");
            let res = yield this.getWithParams("GetUserByPhoneNumber", params);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    changePassWordForgotPassword(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('ChangePassWordForgotPassword', model);
            return res;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_7__["MsgService"] },
    { type: _locals_local_storge_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorgeService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map