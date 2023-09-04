(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "0H3l":
/*!********************************************************!*\
  !*** ./src/app/shared/services/apis/upload.service.ts ***!
  \********************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let UploadService = class UploadService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "Upload");
        this.http = http;
        this.alertService = alertService;
    }
    UploadIdentity(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("IdentityImage1Path", model.file1st);
            formData.append("IdentityImage2Path", model.file2nd);
            const res = yield this.postCustomApi('UploadIdentityImagePath', formData);
            return res;
        });
    }
    UploadDriverCard(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("DriverLicenseImage1Path", model.file1st);
            formData.append("DriverLicenseImage2Path", model.file2nd);
            const res = yield this.postCustomApi('UploadDriverLicenseImagePath', formData);
            return res;
        });
    }
    getImageByPath(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("imagePath", path);
            let res = yield this.getWithParams("GetImageByPath", params);
            if (!this.isValidResponse(res))
                return;
            return res.data;
        });
    }
    uploadAvatarCustomerToSave(file, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("file", file);
            formData.append("userId", userId + '');
            const res = yield this.postCustomApi('UploadAvatarCustomerToSave', formData);
            return res;
        });
    }
    deleteAvatarCustomer(file, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("file", file);
            params = params.append("userId", userId + '');
            let res = yield this.getWithParams("DeleteAvatarCustomer", params);
            return res;
        });
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
UploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadService);



/***/ }),

/***/ "1vg1":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu class=\"menu\" side=\"start\" menuId=\"first\">\r\n  <ion-content>\r\n    <ion-row>\r\n      <ion-col class=\"avatar-info\" *ngFor=\"let itemAvatar of avatarImages; index as i\">\r\n        <ion-row class=\"avatar-image\"> \r\n          <ion-col>\r\n            <img class=\"avatar\" *ngIf=\"avatarImages[0].base64\" [src]=\"avatarImages[0].base64\"/>\r\n            <img class=\"camera\" src=\"../../../assets/images/camera.svg\" (click)=\"checkImgAvatar(0, avatarImages)\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"avatar-name\">\r\n          <p>{{user.name}}</p>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-menu-toggle [autoHide]=\"false\">\r\n        <ion-item detail (click)=\"goToCustomerDetail()\">\r\n          <img slot=\"start\" src=\"../../../assets/icon/personal.svg\">\r\n          <ion-label>\r\n            {{'listMenu.personalInformation' | translate}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item detail>\r\n          <img slot=\"start\" src=\"../../../assets/icon/rider.svg\">\r\n          <ion-label (click)=\"bookingHistory()\">\r\n            {{'listMenu.tripHistory' | translate}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item detail (click)=\"goToCustomerSetting()\">\r\n          <img slot=\"start\" src=\"../../../assets/icon/setting.svg\">\r\n          <ion-label>\r\n            {{'listMenu.setting' | translate}}\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"logout()\" detail>\r\n          <img slot=\"start\" src=\"../../../assets/icon/logout.svg\">\r\n          <ion-label>\r\n            {{'listMenu.logOut' | translate}}\r\n          </ion-label>\r\n        </ion-item>\r\n    </ion-menu-toggle>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n<ion-router-outlet main></ion-router-outlet>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "Gg5j":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "MM9G":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "TA0h");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "common").then(__webpack_require__.bind(null, /*! ./home/home.module */ "oj+e")).then(m => m.HomePagePageModule)
            },
            {
                path: 'customer-detail',
                loadChildren: () => __webpack_require__.e(/*! import() | customer-detail-customer-detail-module */ "customer-detail-customer-detail-module").then(__webpack_require__.bind(null, /*! ./customer-detail/customer-detail.module */ "zoHy")).then(m => m.CustomerDetailPageModule)
            },
            {
                path: 'booking',
                loadChildren: () => Promise.all(/*! import() | booking-booking-module */[__webpack_require__.e("default~booking-booking-module~booking-detail-booking-detail-module"), __webpack_require__.e("booking-booking-module")]).then(__webpack_require__.bind(null, /*! ./booking/booking.module */ "2i7p")).then(m => m.BookingPageModule)
            },
            {
                path: 'booking-success/:bookingId',
                loadChildren: () => __webpack_require__.e(/*! import() | booking-success-booking-success-module */ "booking-success-booking-success-module").then(__webpack_require__.bind(null, /*! ./booking-success/booking-success.module */ "mdIu")).then(m => m.BookingSuccessPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => __webpack_require__.e(/*! import() | setting-setting-module */ "setting-setting-module").then(__webpack_require__.bind(null, /*! ./setting/setting.module */ "2bRt")).then(m => m.SettingPageModule)
            },
            {
                path: 'booking-history',
                loadChildren: () => __webpack_require__.e(/*! import() | booking-history-booking-history-module */ "booking-history-booking-history-module").then(__webpack_require__.bind(null, /*! ./booking-history/booking-history.module */ "v/kB")).then(m => m.BookingHistoryPageModule)
            },
            {
                path: 'booking-detail/:bookingId',
                loadChildren: () => Promise.all(/*! import() | booking-detail-booking-detail-module */[__webpack_require__.e("default~booking-booking-module~booking-detail-booking-detail-module"), __webpack_require__.e("booking-detail-booking-detail-module")]).then(__webpack_require__.bind(null, /*! ./booking-detail/booking-detail.module */ "l2KG")).then(m => m.BookingDetailPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "TA0h":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "1vg1");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "Gg5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/image-viewer/image-viewer.component */ "+TUv");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apis/auth.service */ "zn/s");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user.model */ "KJJU");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/apis/customer.service */ "S/8Y");
/* harmony import */ var src_app_shared_services_apis_upload_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/apis/upload.service */ "0H3l");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");














let TabsPage = class TabsPage {
    constructor(router, actionSheetController, modalController, camera, authService, localStorageService, customerService, uploadService, msgService) {
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.camera = camera;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.customerService = customerService;
        this.uploadService = uploadService;
        this.msgService = msgService;
        this.avatarImages = [
            {
                id: 0,
                base64: '',
                isLoading: false
            }
        ];
        this.prefix = "wwwroot";
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    close() {
        this.modalController.dismiss();
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_9__["UserModel"]();
            let Id = yield this.localStorageService.get("userId");
            let res = yield this.customerService.getCurrentCustomer(Id);
            if (res.isSuccess) {
                this.user = res.data;
                this.getImageByPath();
            }
        });
    }
    getImageByPath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user) {
                if (this.user.avatarPath) {
                    let base64IdFront = yield this.uploadService.getImageByPath(this.prefix + this.user.avatarPath);
                    if (base64IdFront) {
                        this.avatarImages[0].base64 = "data:image/png;base64," + base64IdFront.fileBase64String;
                    }
                }
                else {
                    if (this.user.gender) {
                        this.avatarImages[0].base64 = "../../../../assets/images/Avatar-men.svg";
                    }
                    else {
                        this.avatarImages[0].base64 = "../../../../assets/images/Avatar-girl.svg";
                    }
                }
            }
        });
    }
    checkImgAvatar(index, avatarImages) {
        if (this.user.avatarPath) {
            this.updateAvatar(index, avatarImages);
        }
        else {
            this.presentActionSheet(index, avatarImages);
        }
    }
    goToCustomerDetail() {
        this.router.navigate(["/tabs/customer-detail"]);
    }
    goToCustomerSetting() {
        this.router.navigate(["/tabs/setting"]);
    }
    updateAvatar(index, avatarImages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Bạn muốn thực hiện thao tác gì?',
                buttons: [
                    {
                        text: 'Xem',
                        icon: '../../../assets/icon/Viewicon.svg',
                        handler: () => {
                            this.openModal(index, avatarImages);
                        }
                    },
                    {
                        text: 'Chụp lại ảnh',
                        icon: '../../../assets/icon/Cameraicon.svg',
                        handler: () => {
                            this.takePicture(index, avatarImages);
                        }
                    },
                    {
                        text: 'Chọn lại ảnh',
                        icon: '../../../assets/icon/Imageicon.svg',
                        handler: () => {
                            this.getPicture(index, avatarImages);
                        }
                    },
                    {
                        text: 'Xóa ảnh',
                        icon: '../../../assets/icon/Deleteicon.svg',
                        handler: () => {
                            this.deleteAvatar(index, avatarImages);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    presentActionSheet(index, listImg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Bạn muốn thực hiện thao tác gì?',
                buttons: [
                    {
                        text: 'Chụp ảnh',
                        icon: '../../../assets/icon/Cameraicon.svg',
                        handler: () => {
                            this.takePicture(index, listImg);
                        }
                    },
                    {
                        text: 'Chọn ảnh từ thư viện',
                        icon: '../../../assets/icon/Imageicon.svg',
                        handler: () => {
                            this.getPicture(index, listImg);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openModal(index, avatarImages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = avatarImages.find(x => x.id === index);
            const modal = yield this.modalController.create({
                component: src_app_shared_components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_6__["ImageViewerComponent"],
                componentProps: {
                    'dataImage': [image.base64],
                }
            });
            modal.present();
        });
    }
    takePicture(index, avatarImages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = avatarImages.find(x => x.id === index);
            const optionTakePictureBase64 = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: false,
                targetWidth: 600,
                encodingType: this.camera.EncodingType.PNG,
            };
            this.camera.getPicture(optionTakePictureBase64).then(data => {
                image.isLoading = true;
                image.base64 = 'data:image/png;base64,' + data;
                image.isLoading = false;
                this.save();
            }, err => {
                image.isLoading = false;
            });
        });
    }
    getPicture(index, avatarImages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = avatarImages.find(x => x.id === index);
            const optionTakePictureBase64 = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: false,
                targetWidth: 600,
                encodingType: this.camera.EncodingType.PNG,
            };
            this.camera.getPicture(optionTakePictureBase64).then(data => {
                image.isLoading = true;
                image.base64 = 'data:image/png;base64,' + data;
                image.isLoading = false;
                this.save();
            }, err => {
                image.isLoading = false;
            });
        });
    }
    deleteImage(index, avatarImages) {
        const image = avatarImages.find(x => x.id == index);
        image.base64 = '';
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.checkLogOut();
        });
    }
    bookingHistory() {
        this.router.navigate(["/tabs/booking-history"]);
    }
    base64ImageToBlob(str, filename) {
        // extract content type and base64 payload from original string
        var pos = str.indexOf(';base64,');
        var type = str.substring(5, pos);
        var b64 = str.substr(pos + 8);
        // decode base64
        var imageContent = atob(b64);
        // create an ArrayBuffer and a view (as unsigned 8-bit)
        var buffer = new ArrayBuffer(imageContent.length);
        var view = new Uint8Array(buffer);
        // fill the view, using the decoded base64
        for (var n = 0; n < imageContent.length; n++) {
            view[n] = imageContent.charCodeAt(n);
        }
        // convert ArrayBuffer to Blob
        var blob = new File([buffer], filename, { type: type });
        return blob;
    }
    uploadImage() {
        if (this.avatarImages[0].base64) {
            this.file = this.base64ImageToBlob(this.avatarImages[0].base64, 'avatar.png');
            this.userId = this.user.userId;
        }
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.uploadImage();
            Promise.all([this.uploadService.uploadAvatarCustomerToSave(this.file, this.userId),]).then(res => {
                if (res[0]) {
                    this.msgService.alertOK("Cập nhật thành công!");
                    this.getCurrentUser();
                }
            });
        });
    }
    checkLogOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resLogOut = yield this.msgService.alertYesNo("Bạn có muốn đăng xuất khỏi thiết bị");
            if (resLogOut) {
                this.authService.logout();
                this.router.navigate([""]);
            }
        });
    }
    deleteAvatar(index, avatarImages) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resDeleteAvatar = yield this.msgService.alertYesNo("Bạn có muốn Xoá Avatar");
            if (resDeleteAvatar) {
                let res = yield this.uploadService.deleteAvatarCustomer(this.prefix + this.user.avatarPath, this.user.userId);
                if (res.isSuccess) {
                    this.deleteImage(index, avatarImages);
                    this.getCurrentUser();
                }
            }
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: src_app_shared_services_apis_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorgeService"] },
    { type: src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"] },
    { type: src_app_shared_services_apis_upload_service__WEBPACK_IMPORTED_MODULE_12__["UploadService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_13__["MsgService"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "qiIP":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "MM9G");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "TA0h");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic5-star-rating */ "j7Is");











let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_9__["NgOtpInputModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_10__["StarRatingModule"]
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
        ],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        ]
    })
], TabsPageModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map