(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-detail-booking-detail-module"],{

/***/ "5h3U":
/*!************************************************************!*\
  !*** ./src/app/shared/models/bookingUpdateStatus.model.ts ***!
  \************************************************************/
/*! exports provided: BookingUpdateStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingUpdateStatus", function() { return BookingUpdateStatus; });
class BookingUpdateStatus {
}


/***/ }),

/***/ "DdNc":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tabs/booking-detail/booking-detail-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BookingDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailRoutingModule", function() { return BookingDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-detail.page */ "JguZ");




const routes = [
    {
        path: '',
        component: _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__["BookingDetailPage"]
    }
];
let BookingDetailRoutingModule = class BookingDetailRoutingModule {
};
BookingDetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingDetailRoutingModule);



/***/ }),

/***/ "JguZ":
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/booking-detail/booking-detail.page.ts ***!
  \******************************************************************/
/*! exports provided: BookingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailPage", function() { return BookingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-detail.page.html */ "TvwA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_models_bookingDetail_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/bookingDetail.model */ "KLxJ");
/* harmony import */ var src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/apis/booking.service */ "8QHk");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_models_bookingUpdateStatus_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/bookingUpdateStatus.model */ "5h3U");










let BookingDetailPage = class BookingDetailPage {
    constructor(route, bookingService, msgService, router) {
        this.route = route;
        this.bookingService = bookingService;
        this.msgService = msgService;
        this.router = router;
        this.bookingDetail = new src_app_shared_models_bookingDetail_model__WEBPACK_IMPORTED_MODULE_4__["BookingDetailModel"]();
        this.bookingUpdateStatus = new src_app_shared_models_bookingUpdateStatus_model__WEBPACK_IMPORTED_MODULE_9__["BookingUpdateStatus"]();
        this.bookingCancelAndContact = true;
        this.bookingReset = true;
        this.evaluate = false;
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.loadParamBookingId();
        this.loadBookingDetail();
        this.bookingReset = false;
        this.evaluate = true;
    }
    loadParamBookingId() {
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.bookingId = JSON.parse(params.bookingId);
            }
        });
    }
    loadBookingDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.bookingService.getBookingDetail(67);
            if (res.isSuccess) {
                this.bookingDetail = res.data;
                this.loadDataTable(this.bookingDetail);
            }
            else {
                this.bookingDetail = null;
                this.msgService.error(res.message);
            }
        });
    }
    loadDataTable(item) {
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(item.startDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].formatDateTime);
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(item.endDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].formatDateTime);
    }
    bookingsCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bookingUpdateStatus.bookingId = this.bookingId;
            let res = yield this.bookingService.customerCancel(this.bookingUpdateStatus);
            if (res.isSuccess) {
                this.msgService.success("huỹ đơn thành công");
                this.bookingCancelAndContact = false;
                this.bookingReset = true;
            }
            else {
                this.msgService.error(res.message || "huỹ đơn không thành công");
            }
        });
    }
    checkBookingsCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resLogOut = yield this.msgService.alertYesNo("Bạn có muốn huỹ đơn");
            if (resLogOut) {
                this.bookingsCancel();
            }
        });
    }
    closeUpdateInfo() {
        this.router.navigate(["/tabs/home"]);
    }
    onRatingChange(rating) {
        console.log('The evaluation was modified and now its value is: ', rating);
        // do your stuff
    }
};
BookingDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_6__["MsgService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BookingDetailPage.propDecorators = {
    rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['rating',] }]
};
BookingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking-detail',
        template: _raw_loader_booking_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BookingDetailPage);



/***/ }),

/***/ "KLxJ":
/*!******************************************************!*\
  !*** ./src/app/shared/models/bookingDetail.model.ts ***!
  \******************************************************/
/*! exports provided: BookingDetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailModel", function() { return BookingDetailModel; });
/* harmony import */ var _entityBase_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entityBase.model */ "eGXf");

class BookingDetailModel extends _entityBase_model__WEBPACK_IMPORTED_MODULE_0__["EntityBaseModel"] {
}


/***/ }),

/***/ "TvwA":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking-detail/booking-detail.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-backdrop *ngIf=\"evaluate\"></ion-backdrop>\r\n<!-- Bookings Cancel and contact -->\r\n<ion-content class=\"otp-container\" *ngIf=\"bookingCancelAndContact\">\r\n  <ion-row class=\"otp-header\">\r\n      <ion-toolbar class=\"update-toolbar\">\r\n        <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"closeUpdateInfo()\"></ion-icon>\r\n        <p class=\"text-booking\">{{'booking.booking' | translate}}</p>\r\n      </ion-toolbar>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"booking-code\">\r\n      {{'booking.bookingCode' | translate}}: {{bookingDetail.code}}\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.packagetype' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\" detail>\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select [disabled]=\"true\" class=\"booking-select\" value=\"{{bookingDetail.serviceId}}\" [interfaceOptions]=\"customAlertOptions\" cancelText=\"Đóng\" okText=\"Chọn\">\r\n          <ion-select-option value=\"10\">Theo ngày</ion-select-option>\r\n          <ion-select-option value=\"12\">Theo tháng</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.startingTime' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startDate\"  class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n     \r\n    <ion-col *ngIf=\"checkBookingMonth\">\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.numberOfMonths' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startMonths\" class=\"booking-datetime\" displayFormat=\"MM\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.Endtime' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [(ngModel)]=\"endDate\" disabled class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.Endtime' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.selectVehicleType' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/vehicle.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{bookingDetail.vehicleTypeName}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.VehicleDeliveryAddress' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{bookingDetail.address}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-row>\r\n          <ion-col>\r\n            <label class=\"booking-label\">{{'booking.Intomoney' | translate}}</label>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <label class=\"booking-total-money\">{{bookingDetail.price}}</label>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col style=\"text-align: center;\">\r\n      <label class=\"booking-detail-message\">{{bookingDetail.bookingStatusName}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"boking-detail-btn\">\r\n    <ion-button fill=\"clear\" class=\"btn-bottom\" (click)=\"bookingsSuccess()\">\r\n        <p class=\"test-bottom\">{{'booking.button1' | translate}}</p>\r\n      </ion-button>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"boking-detail-call-btn\">\r\n    <ion-button fill=\"clear\" class=\"btn-call\" (click)=\"checkBookingsCancel()\">\r\n        <p class=\"test-bottom\">{{'booking.button2' | translate}}</p>\r\n      </ion-button>\r\n  </ion-row>\r\n</ion-content>\r\n<!--End Bookings Cancel and contact -->\r\n\r\n<!-- Bookings reset -->\r\n<ion-content class=\"otp-container\" *ngIf=\"bookingReset\">\r\n  <ion-row class=\"otp-header\">\r\n      <ion-toolbar class=\"update-toolbar\">\r\n        <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"closeUpdateInfo()\"></ion-icon>\r\n        <p class=\"text-booking\">{{'booking.booking' | translate}}</p>\r\n      </ion-toolbar>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col class=\"booking-code\">\r\n      {{'booking.bookingCode' | translate}}: {{bookingDetail.code}}\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.packagetype' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\" detail>\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select [disabled]=\"true\" class=\"booking-select\" value=\"{{bookingDetail.serviceId}}\" [interfaceOptions]=\"customAlertOptions\" cancelText=\"Đóng\" okText=\"Chọn\">\r\n          <ion-select-option value=\"10\">Theo ngày</ion-select-option>\r\n          <ion-select-option value=\"12\">Theo tháng</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.startingTime' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startDate\"  class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n     \r\n    <ion-col *ngIf=\"checkBookingMonth\">\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.numberOfMonths' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startMonths\" class=\"booking-datetime\" displayFormat=\"MM\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.Endtime' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [(ngModel)]=\"endDate\" disabled class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.Endtime' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.selectVehicleType' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/vehicle.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{bookingDetail.vehicleTypeName}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.VehicleDeliveryAddress' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{bookingDetail.address}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-row>\r\n          <ion-col>\r\n            <label class=\"booking-label\">{{'booking.Intomoney' | translate}}</label>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <label class=\"booking-total-money\">{{bookingDetail.price}}</label>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col style=\"text-align: center;\">\r\n      <label class=\"booking-detail-message\">{{bookingDetail.bookingStatusName}}</label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"boking-detail-btn\">\r\n    <ion-button fill=\"clear\" class=\"btn-bottom-reset\" (click)=\"bookingReset()\">\r\n        <p class=\"test-bottom-reset\">{{'booking.reset' | translate}}</p>\r\n      </ion-button>\r\n  </ion-row>\r\n</ion-content>\r\n<!--End Bookings reset -->\r\n\r\n<!-- evaluate -->\r\n<ion-card class=\"content-evaluate\" *ngIf=\"evaluate\">\r\n  <ion-row>\r\n    <ion-col class=\"img-evaluate\">\r\n      <img class=\"icon-evaluate\" src=\"../../../assets/icon/icon_evaluate.svg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <h1 class=\"evaluate\">ĐÁNH GIÁ</h1>\r\n      <p class=\"text-evaluate\">Bạn cảm thấy như thế nào về dịch vụ này, hãy cho chúng tôi biết để phục vụ bạn tốt hơn</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col class=\"star\">\r\n      <ionic5-star-rating #rating \r\n          activeIcon = \"star\"\r\n          defaultIcon = \"star-outline\"\r\n          activeColor = \"#FFCE63\" \r\n          defaultColor = \"#FFCE63\"\r\n          readonly=\"false\"\r\n          rating=\"5\"\r\n          fontSize = \"32px\">\r\n      </ionic5-star-rating>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">Chi tiết</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-input style=\"text-overflow: ellipsis;\" class=\"booking-datetime\" placeholder=\"Nhập nội dung\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"boking-detail-btn\">\r\n    <ion-button fill=\"clear\" class=\"btn-bottom-reset\" (click)=\"sendEvaluate()\">\r\n        <p class=\"test-bottom-reset\">GỬI ĐÁNH GIÁ</p>\r\n      </ion-button>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"boking-detail-btn\">\r\n    <ion-button fill=\"clear\" class=\"btn-bottom\" (click)=\"checkCancel()\">\r\n        <p class=\"test-bottom\">BỎ QUA</p>\r\n      </ion-button>\r\n  </ion-row>\r\n</ion-card>\r\n<!-- end evaluate -->\r\n\r\n\r\n");

/***/ }),

/***/ "l2KG":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabs/booking-detail/booking-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: BookingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailPageModule", function() { return BookingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic5-star-rating */ "j7Is");
/* harmony import */ var _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-detail-routing.module */ "DdNc");
/* harmony import */ var _booking_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-detail.page */ "JguZ");




//





let BookingDetailPageModule = class BookingDetailPageModule {
};
BookingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["BookingDetailRoutingModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_6__["StarRatingModule"],
        ],
        declarations: [_booking_detail_page__WEBPACK_IMPORTED_MODULE_8__["BookingDetailPage"]]
    })
], BookingDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=booking-detail-booking-detail-module.js.map