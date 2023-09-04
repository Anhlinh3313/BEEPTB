(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-success-booking-success-module"],{

/***/ "cdUu":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking-success/booking-success.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"otp-container\">\r\n  <ion-row class=\"otp-header\">\r\n      <ion-toolbar class=\"update-toolbar\">\r\n        <p class=\"text-booking\">{{'booking.startingTime' | translate}}</p>\r\n      </ion-toolbar>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"booking-success-p\">\r\n    <ion-col>\r\n        <p>{{'booking.successfullyBooking' | translate}}</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row class=\"otp-content\">\r\n    <ion-col>\r\n        <img src=\"../../../assets/images/img-booking-success.svg\" />\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"otp-content\">\r\n      <ion-col>\r\n          <p class=\"forgot-password-message\">{{'booking.text1' | translate}}</p>\r\n      </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"booking-success-btn\">\r\n      <ion-col style=\"padding-top: 20px;\">\r\n          <ion-button fill=\"clear\" class=\"btn-login\" (click)=\"bookingDetail()\">\r\n            <p style=\"color: #fff;\">{{'booking.viewOrderDetails' | translate}}</p>\r\n          </ion-button>\r\n      </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row class=\"booking-success-btn\">\r\n    <ion-col>\r\n        <ion-button (click)=\"home()\" fill=\"clear\" class=\"booking-success-login\">\r\n          <p style=\"color: #34A4B6;\">{{'booking.onTheHomepage' | translate}}</p>\r\n        </ion-button>\r\n    </ion-col>\r\n</ion-row> \r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "mdIu":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/booking-success/booking-success.module.ts ***!
  \**********************************************************************/
/*! exports provided: BookingSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSuccessPageModule", function() { return BookingSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _booking_success_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-success-routing.module */ "xHJL");
/* harmony import */ var _booking_success_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-success.page */ "qTPA");




//




let BookingSuccessPageModule = class BookingSuccessPageModule {
};
BookingSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _booking_success_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingSuccessPageRoutingModule"],
        ],
        declarations: [_booking_success_page__WEBPACK_IMPORTED_MODULE_7__["BookingSuccessPage"]]
    })
], BookingSuccessPageModule);



/***/ }),

/***/ "qTPA":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabs/booking-success/booking-success.page.ts ***!
  \********************************************************************/
/*! exports provided: BookingSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSuccessPage", function() { return BookingSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_success_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-success.page.html */ "cdUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let BookingSuccessPage = class BookingSuccessPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.bookingId = JSON.parse(params.bookingId);
            }
        });
    }
    home() {
        this.router.navigate(["/tabs/home"]);
    }
    bookingDetail() {
        this.router.navigateByUrl("/tabs/booking-detail" + "/?bookingId=" + this.bookingId);
    }
};
BookingSuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BookingSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking-success',
        template: _raw_loader_booking_success_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BookingSuccessPage);



/***/ }),

/***/ "xHJL":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tabs/booking-success/booking-success-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: BookingSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSuccessPageRoutingModule", function() { return BookingSuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-success.page */ "qTPA");




const routes = [
    {
        path: '',
        component: _booking_success_page__WEBPACK_IMPORTED_MODULE_3__["BookingSuccessPage"]
    }
];
let BookingSuccessPageRoutingModule = class BookingSuccessPageRoutingModule {
};
BookingSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingSuccessPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=booking-success-booking-success-module.js.map