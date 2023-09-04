(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-detail-customer-detail-module"],{

/***/ "+5mt":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabs/customer-detail/customer-detail.page.ts ***!
  \********************************************************************/
/*! exports provided: CustomerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailPage", function() { return CustomerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-detail.page.html */ "qw7R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/image-viewer/image-viewer.component */ "+TUv");
/* harmony import */ var src_app_shared_models_uploadImages_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/uploadImages.model */ "UO0I");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/user.model */ "KJJU");
/* harmony import */ var src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apis/customer.service */ "S/8Y");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_apis_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/apis/upload.service */ "0H3l");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");












let CustomerDetailPage = class CustomerDetailPage {
    constructor(actionSheetController, camera, customerService, localStorageService, modalController, uploadService, msgService) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.customerService = customerService;
        this.localStorageService = localStorageService;
        this.modalController = modalController;
        this.uploadService = uploadService;
        this.msgService = msgService;
        this.lstIdImg = [
            {
                id: 0,
                base64: '',
                isLoading: false
            },
            {
                id: 1,
                base64: '',
                isLoading: false
            },
        ];
        this.lstDriverCard = [
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
        this.dateFormat = 'DD/MM/YYYY';
        this.maxDate = new Date().toISOString();
    }
    ngOnInit() {
        this.getCurrentUser();
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_7__["UserModel"]();
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
            let prefix = "wwwroot";
            if (this.user) {
                if (this.user.identityImage1Path) {
                    let base64IdFront = yield this.uploadService.getImageByPath(prefix + this.user.identityImage1Path);
                    if (base64IdFront) {
                        this.lstIdImg[0].base64 = "data:image/png;base64," + base64IdFront.fileBase64String;
                    }
                }
                if (this.user.identityImage2Path) {
                    let base64IdBack = yield this.uploadService.getImageByPath(prefix + this.user.identityImage2Path);
                    if (base64IdBack) {
                        this.lstIdImg[1].base64 = "data:image/png;base64," + base64IdBack.fileBase64String;
                    }
                }
                if (this.user.driverLicenseImage1Path) {
                    let base64DvcFront = yield this.uploadService.getImageByPath(prefix + this.user.driverLicenseImage1Path);
                    if (base64DvcFront) {
                        this.lstDriverCard[0].base64 = "data:image/png;base64," + base64DvcFront.fileBase64String;
                    }
                }
                if (this.user.driverLicenseImage2Path) {
                    let base64DvcBack = yield this.uploadService.getImageByPath(prefix + this.user.driverLicenseImage2Path);
                    if (base64DvcBack) {
                        this.lstDriverCard[1].base64 = "data:image/png;base64," + base64DvcBack.fileBase64String;
                    }
                }
            }
        });
    }
    takePicture(index, listImg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = listImg.find(x => x.id === index);
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
            }, err => {
                image.isLoading = false;
            });
        });
    }
    getPicture(index, listImg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = listImg.find(x => x.id === index);
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
            }, err => {
                image.isLoading = false;
            });
        });
    }
    openModal(index, listImg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const image = listImg.find(x => x.id === index);
            const modal = yield this.modalController.create({
                component: src_app_shared_components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"],
                componentProps: {
                    'dataImage': [image.base64],
                }
            });
            modal.present();
        });
    }
    deleteImage(index, listImg) {
        const image = listImg.find(x => x.id == index);
        image.base64 = '';
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
    secondActionSheet(index, listImg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Bạn muốn thực hiện thao tác gì?',
                buttons: [
                    {
                        text: 'Xem',
                        icon: '../../../assets/icon/Viewicon.svg',
                        handler: () => {
                            this.openModal(index, listImg);
                        }
                    },
                    {
                        text: 'Chụp lại ảnh',
                        icon: '../../../assets/icon/Cameraicon.svg',
                        handler: () => {
                            this.takePicture(index, listImg);
                        }
                    },
                    {
                        text: 'Chọn lại ảnh',
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
    back() {
        window.history.back();
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
        this.uploadIdentityModel = new src_app_shared_models_uploadImages_model__WEBPACK_IMPORTED_MODULE_6__["UploadImageModel"]();
        this.uploadDriverCardModel = new src_app_shared_models_uploadImages_model__WEBPACK_IMPORTED_MODULE_6__["UploadImageModel"]();
        if (this.lstIdImg[0].base64) {
            this.uploadIdentityModel.file1st = this.base64ImageToBlob(this.lstIdImg[0].base64, 'identityFront.png');
        }
        if (this.lstIdImg[1].base64) {
            this.uploadIdentityModel.file2nd = this.base64ImageToBlob(this.lstIdImg[1].base64, 'identityBack.png');
        }
        if (this.lstDriverCard[0].base64) {
            this.uploadDriverCardModel.file1st = this.base64ImageToBlob(this.lstDriverCard[0].base64, 'driverCardFront.png');
        }
        if (this.lstDriverCard[1].base64) {
            this.uploadDriverCardModel.file2nd = this.base64ImageToBlob(this.lstDriverCard[1].base64, 'driverCardBack.png');
        }
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.checkValidSave()) {
                return;
            }
            this.user.birthDate = this.user.birthDate ? new Date(this.user.birthDate).toISOString() : '';
            yield this.uploadImage();
            Promise.all([this.uploadService.UploadIdentity(this.uploadIdentityModel),
                this.uploadService.UploadDriverCard(this.uploadDriverCardModel),
                this.customerService.updateCustomer(this.user)]).then(res => {
                if (res[0] && res[1] && res[2]) {
                    this.msgService.alertOK("Cập nhật thành công!");
                }
            });
        });
    }
    checkValidSave() {
        let regEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!this.user.name || !this.user.email || !this.user.birthDate || !this.user.identityCard) {
            this.msgService.error("Vui lòng nhập đầy đủ thông tin!");
            return false;
        }
        if (!regEmail.test(this.user.email)) {
            this.msgService.error("Vui lòng nhập Email đúng định dạng!");
            return false;
        }
        return true;
    }
};
CustomerDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorgeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_apis_upload_service__WEBPACK_IMPORTED_MODULE_10__["UploadService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_11__["MsgService"] }
];
CustomerDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-customer-detail',
        template: _raw_loader_customer_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CustomerDetailPage);



/***/ }),

/***/ "DQMq":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/customer-detail/customer-detail-routing.model.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailPageRoutingModule", function() { return CustomerDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-detail.page */ "+5mt");




const routes = [
    {
        path: '',
        component: _customer_detail_page__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailPage"]
    }
];
let CustomerDetailPageRoutingModule = class CustomerDetailPageRoutingModule {
};
CustomerDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerDetailPageRoutingModule);



/***/ }),

/***/ "UO0I":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/uploadImages.model.ts ***!
  \*****************************************************/
/*! exports provided: UploadImageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageModel", function() { return UploadImageModel; });
class UploadImageModel {
}


/***/ }),

/***/ "qw7R":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/customer-detail/customer-detail.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cus-detail-header\">\r\n    <ion-toolbar>\r\n      <ion-icon class=\"cus-info-back ion-margin-start\" name=\"arrow-back\" slot=\"start\" (click)=\"back()\"></ion-icon>\r\n      <ion-title style=\"text-align: center;\">{{'customerDetail.title' | translate}}</ion-title>\r\n      <ion-label class=\"cus-info-save ion-margin-end\" slot=\"end\" (click)=\"save()\">{{'customerDetail.save' | translate}}</ion-label>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.phoneNumber' | translate}}</ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-img src=\"../../../assets/icon/password.svg\" class=\"ion-padding-end\"></ion-img>\r\n                <ion-input [(ngModel)]=\"user.phoneNumber\" maxlength=\"11\" disabled></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.name' | translate}}</ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-img src=\"../../../assets/icon/password.svg\" style=\"padding-right: 10px;\"></ion-img>\r\n                <ion-input [(ngModel)]=\"user.name\" maxlength=\"30\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.birtDate' | translate}}</ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-img src=\"../../../assets/icon/password.svg\" style=\"padding-right: 10px;\"></ion-img>\r\n                <ion-datetime [(ngModel)]=\"user.birthDate\" [displayFormat]=\"dateFormat\" [max]=\"maxDate\"></ion-datetime>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.email' | translate}}</ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-img src=\"../../../assets/icon/password.svg\" style=\"padding-right: 10px;\"></ion-img>\r\n                <ion-input [(ngModel)]=\"user.email\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item style=\"--border-style: none;\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.gender' | translate}}</ion-label>\r\n                <ion-radio-group [(ngModel)]=\"user.gender\" style=\"display: flex;\" mode=\"md\">\r\n                    <ion-item style=\"--border-style: none;\">\r\n                        <ion-label>{{'customerDetail.male' | translate}}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"true\" style=\"--color-checked: #34A4B6;\"></ion-radio>\r\n                    </ion-item>\r\n                \r\n                    <ion-item style=\"--border-style: none;\">\r\n                        <ion-label>{{'customerDetail.female' | translate}}</ion-label>\r\n                        <ion-radio slot=\"start\" [value]=\"false\" style=\"--color-checked: #34A4B6;\"></ion-radio>\r\n                    </ion-item>\r\n                </ion-radio-group>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.Identity' | translate}}</ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-margin-bottom\">\r\n                <ion-img src=\"../../../assets/icon/password.svg\" style=\"padding-right: 10px;\"></ion-img>\r\n                <ion-input [(ngModel)]=\"user.identityCard\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row class=\"ion-margin-top\">\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                    <img *ngIf=\"lstIdImg[0].base64\" [src]=\"lstIdImg[0].base64\" (click)=\"secondActionSheet(0, lstIdImg)\" />\r\n                    <img *ngIf=\"!(lstIdImg[0].base64)\" src=\"../../../../assets/images/image-default.svg\" (click)=\"presentActionSheet(0, lstIdImg)\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                    <img *ngIf=\"lstIdImg[1].base64\" [src]=\"lstIdImg[1].base64\" (click)=\"secondActionSheet(1, lstIdImg)\"/>\r\n                    <img *ngIf=\"!(lstIdImg[1].base64)\" src=\"../../../../assets/images/image-default.svg\" (click)=\"presentActionSheet(1, lstIdImg)\"/>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-item lines=\"none\">\r\n                <ion-label style=\"opacity: 0.5;\">{{'customerDetail.driverCard' | translate}}</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-row class=\"ion-margin-top\">\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                    <img *ngIf=\"lstDriverCard[0].base64\" [src]=\"lstDriverCard[0].base64\" (click)=\"secondActionSheet(0, lstDriverCard)\"/>\r\n                    <img *ngIf=\"!(lstDriverCard[0].base64)\" src=\"../../../../assets/images/image-default.svg\" (click)=\"presentActionSheet(0, lstDriverCard)\"/>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"ion-text-center\">\r\n                    <img *ngIf=\"lstDriverCard[1].base64\" [src]=\"lstDriverCard[1].base64\"(click)=\"secondActionSheet(1, lstDriverCard)\" />\r\n                    <img *ngIf=\"!(lstDriverCard[1].base64)\" src=\"../../../../assets/images/image-default.svg\" (click)=\"presentActionSheet(1, lstDriverCard)\" />\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n  \r\n  ");

/***/ }),

/***/ "zoHy":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/customer-detail/customer-detail.module.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailPageModule", function() { return CustomerDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _customer_detail_routing_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-detail-routing.model */ "DQMq");
/* harmony import */ var _customer_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-detail.page */ "+5mt");





//




let CustomerDetailPageModule = class CustomerDetailPageModule {
};
CustomerDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _customer_detail_routing_model__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailPageRoutingModule"]
        ],
        declarations: [_customer_detail_page__WEBPACK_IMPORTED_MODULE_8__["CustomerDetailPage"]],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        ]
    })
], CustomerDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=customer-detail-customer-detail-module.js.map