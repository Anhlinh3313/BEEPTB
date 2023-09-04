(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-history-booking-history-module"],{

/***/ "/SQt":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking-history/booking-history.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"cus-detail-header\" >\r\n  <ion-toolbar>\r\n    <ion-icon class=\"cus-info-back\" name=\"arrow-back\" slot=\"start\" (click)=\"back()\"></ion-icon>\r\n    <ion-title style=\"text-align: center;\">{{'bookingHistory.bookingHistory' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- history-data -->\r\n<ion-content class=\"otp-container\" *ngIf=\"historyData\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <label class=\"booking-label\">{{'bookingHistory.statusShipment' | translate}}</label>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/status-shipment.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select [(ngModel)]=\"bookingStatusId\" mode=\"md\" placeholder=\"Chọn trạng thái\" (ionChange)=\"changeBookingStatus()\">\r\n          <ion-select-option *ngFor=\"let item of bookingStatus\" [value]=\"item.id\">{{item.name}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col>\r\n      <label class=\"booking-label\">{{'bookingHistory.pay' | translate}}</label>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/booking-payment.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select mode=\"md\" placeholder=\"Tất cả\" (ionChange)=\"changeBookinPay()\">\r\n          <ion-select-option [value]=\"1\">Đã thanh toán</ion-select-option>\r\n          <ion-select-option [value]=\"0\">Chưa thanh toán</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"lits-datetime\">\r\n    <ion-col>\r\n      <label class=\"booking-date\">{{'bookingHistory.month' | translate}} 3/2021</label>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row class=\"lits-datetime\"  *ngFor=\"let itembooking of booking\">\r\n    <ion-col class=\"label-list-history\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-col size=\"2\">\r\n              <img [src]=\"itembooking.iconType\"/> \r\n            </ion-col>\r\n            <ion-col size=\"10\">\r\n              <p class=\"booking-list-date\">{{itembooking.startDate | date:'dd/MM/yyyy HH:mm'}} - {{itembooking.endDate | date:'dd/MM/yyyy HH:mm'}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-col size=\"1\">\r\n              <img src=\"../../../assets/icon/ion-map.svg\" />\r\n            </ion-col>\r\n            <ion-col size=\"11\">\r\n              <p class=\"booking-history-address\">{{itembooking.address}}</p>\r\n            </ion-col>\r\n            <p [ngClass]=\"itembooking.colorStatus\" class=\"booking-history-onfirmation\">{{itembooking.bookingStatusName}}</p>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<!--end history-data -->\r\n\r\n<!-- history-not-data -->\r\n<ion-content class=\"otp-container\" *ngIf=\"historyNotData\">\r\n    <ion-row style=\"padding: 20px 40px;\">\r\n      <ion-col>\r\n        <ion-img src=\"../../../assets/images/history_booking.svg\" class=\"pr-10\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>  \r\n\r\n    <ion-row style=\"padding: 0px 16px;\">\r\n      <ion-col>\r\n        <p style=\"margin: 0px;\">{{'bookingHistory.textFooter1' | translate}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"signup-btn\">\r\n      <ion-button fill=\"clear\" class=\"btn-login\" (click)=\"boking()\">\r\n          <p>{{'bookingHistory.booking' | translate}}</p>\r\n      </ion-button>\r\n    </ion-row>\r\n</ion-content>\r\n<!--end history-not-data -->\r\n");

/***/ }),

/***/ "5+mJ":
/*!******************************************************!*\
  !*** ./src/app/shared/models/bookingFilter.model.ts ***!
  \******************************************************/
/*! exports provided: BookingFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFilterModel", function() { return BookingFilterModel; });
class BookingFilterModel {
}


/***/ }),

/***/ "7Tq2":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabs/booking-history/booking-history.page.ts ***!
  \********************************************************************/
/*! exports provided: BookingHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryPage", function() { return BookingHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-history.page.html */ "/SQt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_models_bookingFilter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/bookingFilter.model */ "5+mJ");
/* harmony import */ var src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/apis/booking.service */ "8QHk");
/* harmony import */ var src_app_shared_services_apis_bookingStatus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/apis/bookingStatus.service */ "kws2");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");









let BookingHistoryPage = class BookingHistoryPage {
    constructor(router, bookingStatusService, bookingService, msgService, localStorageService) {
        this.router = router;
        this.bookingStatusService = bookingStatusService;
        this.bookingService = bookingService;
        this.msgService = msgService;
        this.localStorageService = localStorageService;
        this.historyData = true;
        this.historyNotData = true;
        this.bookingStatus = [];
        this.bookingFilter = new src_app_shared_models_bookingFilter_model__WEBPACK_IMPORTED_MODULE_4__["BookingFilterModel"]();
        this.booking = [];
        this.colorArr = {
            1: "#34A4B6",
            2: "#02A512",
            3: "red",
            4: "#777777",
            5: "#1673FE",
        };
        this.imgArr = {
            1: "../../../assets/icon/icon_motorcycleNumber.svg",
            2: "../../../assets/icon/icon_acceleratorMotorcycle.svg",
            3: "../../../assets/icon/icon_clutchMotorcycle.svg",
        };
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.historyNotData = false;
        this.laodBookingStatus();
        this.laodBookingHistory();
    }
    laodBookingStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bookingStatus = yield this.bookingStatusService.getAll();
        });
    }
    boking() {
        this.router.navigate(["/tabs/home"]);
    }
    back() {
        window.history.back();
    }
    laodBookingHistory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let customerId = yield this.localStorageService.get("id");
            this.bookingFilter.CustomerId = parseInt(customerId);
            let res = yield this.bookingService.getListBookingsByCurrentCustomer(this.bookingFilter);
            if (res.isSuccess) {
                this.booking = res.data;
                yield this.checkBookingStatus(res.data);
                yield this.checkVehiclesType(res.data);
            }
            else {
                this.booking = [];
                this.historyNotData = true;
                this.historyData = false;
                this.msgService.error(res.message || "không tìm thấy danh sách đặt xe");
            }
        });
    }
    checkBookingStatus(item) {
        item.forEach(e => {
            if (e.bookingStatusId == 1) {
                e.colorStatus = this.colorArr[1];
            }
            else if (e.bookingStatusId == 2) {
                e.colorStatus = this.colorArr[2];
            }
            else if (e.bookingStatusId == 3) {
                e.colorStatus = this.colorArr[2];
            }
            else if (e.bookingStatusId == 4) {
                e.colorStatus = this.colorArr[3];
            }
            else if (e.bookingStatusId == 5) {
                e.colorStatus = this.colorArr[4];
            }
            else if (e.bookingStatusId == 6) {
                e.colorStatus = this.colorArr[3];
            }
            else if (e.bookingStatusId == 10) {
                e.colorStatus = this.colorArr[5];
            }
        });
    }
    checkVehiclesType(vehicles) {
        vehicles.forEach(e => {
            if (e.vehicleTypeName == "Xe máy") {
                e.iconType = this.imgArr[1];
            }
            else if (e.vehicleTypeName == "Xe gaaa") {
                e.iconType = this.imgArr[2];
            }
            else if (e.vehicleTypeName == "Xe côn") {
                e.iconType = this.imgArr[3];
            }
        });
    }
};
BookingHistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_apis_bookingStatus_service__WEBPACK_IMPORTED_MODULE_6__["BookingStatusService"] },
    { type: src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__["MsgService"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorgeService"] }
];
BookingHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking-history',
        template: _raw_loader_booking_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BookingHistoryPage);



/***/ }),

/***/ "8QHk":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/apis/booking.service.ts ***!
  \*********************************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let BookingService = class BookingService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "Booking");
        this.http = http;
        this.alertService = alertService;
    }
    createBooking(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('Create', model);
            return res;
        });
    }
    getBookingDetail(bookingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
            params = params.append("bookingId", bookingId + '');
            const res = yield this.getWithParams('GetBookingDetail', params);
            return res;
        });
    }
    customerCancel(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('CustomerCancel', model);
            return res;
        });
    }
    getListBookingsByCurrentCustomer(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('GetListBookingsByCurrentCustomer', model);
            return res;
        });
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
BookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookingService);



/***/ }),

/***/ "JBLV":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/booking-history/booking-history-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: BookingHistoryRoutingModulee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryRoutingModulee", function() { return BookingHistoryRoutingModulee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-history.page */ "7Tq2");




const routes = [
    {
        path: '',
        component: _booking_history_page__WEBPACK_IMPORTED_MODULE_3__["BookingHistoryPage"]
    }
];
let BookingHistoryRoutingModulee = class BookingHistoryRoutingModulee {
};
BookingHistoryRoutingModulee = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingHistoryRoutingModulee);



/***/ }),

/***/ "kws2":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/apis/bookingStatus.service.ts ***!
  \***************************************************************/
/*! exports provided: BookingStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingStatusService", function() { return BookingStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let BookingStatusService = class BookingStatusService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "BookingStatus");
        this.http = http;
        this.alertService = alertService;
    }
};
BookingStatusService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
BookingStatusService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookingStatusService);



/***/ }),

/***/ "v/kB":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/booking-history/booking-history.module.ts ***!
  \**********************************************************************/
/*! exports provided: BookingHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingHistoryPageModule", function() { return BookingHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _booking_history_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-history-routing.module */ "JBLV");
/* harmony import */ var _booking_history_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-history.page */ "7Tq2");




//




let BookingHistoryPageModule = class BookingHistoryPageModule {
};
BookingHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _booking_history_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingHistoryRoutingModulee"],
        ],
        declarations: [_booking_history_page__WEBPACK_IMPORTED_MODULE_7__["BookingHistoryPage"]]
    })
], BookingHistoryPageModule);



/***/ })

}]);
//# sourceMappingURL=booking-history-booking-history-module.js.map