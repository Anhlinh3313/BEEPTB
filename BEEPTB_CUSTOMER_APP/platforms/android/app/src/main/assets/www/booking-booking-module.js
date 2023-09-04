(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-booking-module"],{

/***/ "+2Hc":
/*!******************************************************!*\
  !*** ./src/app/shared/infrastructure/gmap.helper.ts ***!
  \******************************************************/
/*! exports provided: GMapHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMapHelper", function() { return GMapHelper; });
class GMapHelper {
}
GMapHelper.STREET_NUMBER = 'street_number';
GMapHelper.ROUTE = 'route';
GMapHelper.SUBLOCALITY_LEVEL_1 = 'sublocality_level_1';
GMapHelper.SUBLOCALITY = 'sublocality';
GMapHelper.POLITICAL = 'political';
GMapHelper.LOCALITY = 'locality';
GMapHelper.ADMINISTRATIVE_AREA_LEVEL_3 = 'administrative_area_level_3';
GMapHelper.ADMINISTRATIVE_AREA_LEVEL_2 = 'administrative_area_level_2';
GMapHelper.ADMINISTRATIVE_AREA_LEVEL_1 = 'administrative_area_level_1';
GMapHelper.COUNTRY = 'country';


/***/ }),

/***/ "+2KF":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/calculateAll.model.ts ***!
  \*****************************************************/
/*! exports provided: CalculateAllModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateAllModel", function() { return CalculateAllModel; });
class CalculateAllModel {
}


/***/ }),

/***/ "+e7T":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/apis/district.service.ts ***!
  \**********************************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let DistrictService = class DistrictService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "District");
        this.http = http;
        this.alertService = alertService;
    }
    getDistrictByNameDaLat(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('GetListDistricts', model);
            return res;
        });
    }
};
DistrictService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
DistrictService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DistrictService);



/***/ }),

/***/ "/GfK":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/apis/priceService.service.ts ***!
  \**************************************************************/
/*! exports provided: PriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceService", function() { return PriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "ca79");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locals/msg-message.service */ "6bWp");






let PriceService = class PriceService extends _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] {
    constructor(http, alertService) {
        super(http, alertService, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiCoreUrl, "PriceService");
        this.http = http;
        this.alertService = alertService;
    }
    calculate(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('Calculate', model);
            return res;
        });
    }
    calculateAll(model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.postCustomApi('CalculateAll', model);
            return res;
        });
    }
};
PriceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _locals_msg_message_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"] }
];
PriceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PriceService);



/***/ }),

/***/ "2i7p":
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/booking/booking.module.ts ***!
  \******************************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _booking_completed_booking_completed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-completed/booking-completed.page */ "g6ax");
/* harmony import */ var _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking-map/booking-map.page */ "yT9f");
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-routing.module */ "FE7N");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking.page */ "tkyx");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "ItPR");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "7itd");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__);




//











let BookingPageModule = class BookingPageModule {
};
BookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_8__["BookingRoutingModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__["GooglePlaceModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].keyGoogleMap,
                libraries: ["places"]
            })
        ],
        declarations: [
            _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_7__["BookingMapPage"],
            _booking_completed_booking_completed_page__WEBPACK_IMPORTED_MODULE_6__["BookingCompletedPage"],
            _booking_page__WEBPACK_IMPORTED_MODULE_9__["BookingPage"]
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"],
            _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["BackgroundGeolocation"],
        ]
    })
], BookingPageModule);



/***/ }),

/***/ "7itd":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(__webpack_require__(/*! @angular/core */ "fXoL"),exports, __webpack_require__(/*! @angular/core */ "fXoL")) :
	undefined;
}(this, (function (ɵngcc0,exports,_angular_core) { 'use strict';

var Options = (function () {
    /**
     * @param {?=} opt
     */
    function Options(opt) {
        if (!opt)
            return;
        Object.assign(this, opt);
    }
    return Options;
}());

var GooglePlaceDirective = (function () {
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    function GooglePlaceDirective(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.onAddressChange = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.ngAfterViewInit = function () {
        if (!this.options)
            this.options = new Options();
        this.initialize();
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.isGoogleLibExists = function () {
        return !(!google || !google.maps || !google.maps.places);
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.initialize = function () {
        var _this = this;
        if (!this.isGoogleLibExists())
            throw new Error("Google maps library can not be found");
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        if (!this.autocomplete)
            throw new Error("Autocomplete is not initialized");
        if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
                _this.handleChangeEvent();
            });
        }
        this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
                return;
            }
            var /** @type {?} */ key = event.key.toLowerCase();
            if (key == 'enter' && event.target === _this.el.nativeElement) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487
        if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
                var /** @type {?} */ containers = document.getElementsByClassName('pac-container');
                if (containers) {
                    var /** @type {?} */ arr = Array.from(containers);
                    if (arr) {
                        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            var container = arr_1[_i];
                            if (!container)
                                continue;
                            container.addEventListener('touchend', function (e) {
                                e.stopImmediatePropagation();
                            });
                        }
                    }
                }
            }, 500);
        }
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.reset = function () {
        this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);
        this.autocomplete.setTypes(this.options.types);
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.handleChangeEvent = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();
            if (_this.place) {
                _this.onAddressChange.emit(_this.place);
            }
        });
    };
    /**
     * @nocollapse
     */
    GooglePlaceDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    GooglePlaceDirective.propDecorators = {
        'options': [{ type: _angular_core.Input, args: ['options',] },],
        'onAddressChange': [{ type: _angular_core.Output },],
    };
GooglePlaceDirective.ɵfac = function GooglePlaceDirective_Factory(t) { return new (t || GooglePlaceDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
GooglePlaceDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GooglePlaceDirective, selectors: [["", "ngx-google-places-autocomplete", ""]], inputs: { options: "options" }, outputs: { onAddressChange: "onAddressChange" }, exportAs: ["ngx-places"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GooglePlaceDirective, [{
        type: _angular_core.Directive,
        args: [{
                selector: '[ngx-google-places-autocomplete]',
                exportAs: 'ngx-places'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onAddressChange: [{
            type: _angular_core.Output
        }], options: [{
            type: _angular_core.Input,
            args: ['options']
        }] }); })();
    return GooglePlaceDirective;
}());

var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    /**
     * @nocollapse
     */
    GooglePlaceModule.ctorParameters = function () { return []; };
GooglePlaceModule.ɵfac = function GooglePlaceModule_Factory(t) { return new (t || GooglePlaceModule)(); };
GooglePlaceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GooglePlaceModule });
GooglePlaceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GooglePlaceModule, { declarations: [GooglePlaceDirective], exports: [GooglePlaceDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GooglePlaceModule, [{
        type: _angular_core.NgModule,
        args: [{
                declarations: [GooglePlaceDirective],
                exports: [GooglePlaceDirective]
            }]
    }], function () { return []; }, null); })();
    return GooglePlaceModule;
}());

exports.GooglePlaceModule = GooglePlaceModule;
exports.GooglePlaceDirective = GooglePlaceDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlLnVtZC5qcyIsInNvdXJjZXMiOlsibmd4LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlLnVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlHQUF3RTtBQUN4RSxzRUFBc0Q7QUFDdEQseUJBQVU7QUFDViwwQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQU1NO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7b0JBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FNTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztnREFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdAYW5ndWxhci9jb3JlJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdAYW5ndWxhci9jb3JlJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5uZyA9IGdsb2JhbC5uZyB8fCB7fSwgZ2xvYmFsLm5nWyduZ3gtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGUnXSA9IGdsb2JhbC5uZ1snbmd4LWdvb2dsZS1wbGFjZXMtYXV0b2NvbXBsZXRlJ10gfHwge30pLGdsb2JhbC5uZy5jb3JlKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cyxfYW5ndWxhcl9jb3JlKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIE9wdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IG9wdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9wdGlvbnMob3B0KSB7XG4gICAgICAgIGlmICghb3B0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdCk7XG4gICAgfVxuICAgIHJldHVybiBPcHRpb25zO1xufSgpKTtcblxudmFyIEdvb2dsZVBsYWNlRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGVsXG4gICAgICogQHBhcmFtIHs/fSBuZ1pvbmVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBHb29nbGVQbGFjZURpcmVjdGl2ZShlbCwgbmdab25lKSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XG4gICAgICAgIHRoaXMub25BZGRyZXNzQ2hhbmdlID0gbmV3IF9hbmd1bGFyX2NvcmUuRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgR29vZ2xlUGxhY2VEaXJlY3RpdmUucHJvdG90eXBlLm5nQWZ0ZXJWaWV3SW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgR29vZ2xlUGxhY2VEaXJlY3RpdmUucHJvdG90eXBlLmlzR29vZ2xlTGliRXhpc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISghZ29vZ2xlIHx8ICFnb29nbGUubWFwcyB8fCAhZ29vZ2xlLm1hcHMucGxhY2VzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgR29vZ2xlUGxhY2VEaXJlY3RpdmUucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc0dvb2dsZUxpYkV4aXN0cygpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR29vZ2xlIG1hcHMgbGlicmFyeSBjYW4gbm90IGJlIGZvdW5kXCIpO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1dG9jb21wbGV0ZSBpcyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGUuYWRkTGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyID0gdGhpcy5hdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50LmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGtleSA9PSAnZW50ZXInICYmIGV2ZW50LnRhcmdldCA9PT0gX3RoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2Nob2Vub2JhdGVzL2VmNTc4YTAyYWM4YWI2NzI2NDg3XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYWMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYXJyID0gQXJyYXkuZnJvbShjb250YWluZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhcnJfMSA9IGFycjsgX2kgPCBhcnJfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gYXJyXzFbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlLnNldENvbXBvbmVudFJlc3RyaWN0aW9ucyh0aGlzLm9wdGlvbnMuY29tcG9uZW50UmVzdHJpY3Rpb25zKTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUuc2V0VHlwZXModGhpcy5vcHRpb25zLnR5cGVzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgR29vZ2xlUGxhY2VEaXJlY3RpdmUucHJvdG90eXBlLmhhbmRsZUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucGxhY2UgPSBfdGhpcy5hdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wbGFjZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQWRkcmVzc0NoYW5nZS5lbWl0KF90aGlzLnBsYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tuZ3gtZ29vZ2xlLXBsYWNlcy1hdXRvY29tcGxldGVdJyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ3gtcGxhY2VzJ1xuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ1pvbmUsIH0sXG4gICAgXTsgfTtcbiAgICBHb29nbGVQbGFjZURpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgJ29wdGlvbnMnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ29wdGlvbnMnLF0gfSxdLFxuICAgICAgICAnb25BZGRyZXNzQ2hhbmdlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQgfSxdLFxuICAgIH07XG4gICAgcmV0dXJuIEdvb2dsZVBsYWNlRGlyZWN0aXZlO1xufSgpKTtcblxudmFyIEdvb2dsZVBsYWNlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHb29nbGVQbGFjZU1vZHVsZSgpIHtcbiAgICB9XG4gICAgR29vZ2xlUGxhY2VNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtHb29nbGVQbGFjZURpcmVjdGl2ZV0sXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtHb29nbGVQbGFjZURpcmVjdGl2ZV1cbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgR29vZ2xlUGxhY2VNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICByZXR1cm4gR29vZ2xlUGxhY2VNb2R1bGU7XG59KCkpO1xuXG5leHBvcnRzLkdvb2dsZVBsYWNlTW9kdWxlID0gR29vZ2xlUGxhY2VNb2R1bGU7XG5leHBvcnRzLkdvb2dsZVBsYWNlRGlyZWN0aXZlID0gR29vZ2xlUGxhY2VEaXJlY3RpdmU7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iXX0=

/***/ }),

/***/ "8ydy":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking/booking.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- booking theo ngày -->\r\n<ion-content class=\"otp-container\" *ngIf=\"checkBookingDate\">\r\n  <ion-row class=\"otp-header\">\r\n      <ion-toolbar class=\"update-toolbar\">\r\n        <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"closeUpdateInfo()\"></ion-icon>\r\n        <p style=\"text-align: center;\">{{'booking.booking' | translate}}</p>\r\n      </ion-toolbar>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.packagetype' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\" detail>\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select class=\"booking-select\" value=\"{{serviceId}}\" (ionChange)=\"changeService($event)\" [interfaceOptions]=\"customAlertOptions\" cancelText=\"Đóng\" okText=\"Chọn\">\r\n          <ion-select-option value=\"10\">Theo ngày</ion-select-option>\r\n          <ion-select-option value=\"12\">Theo tháng</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.startingTime' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime (ionChange)=\"changeStartDate()\" [(ngModel)]=\"startDate\"  class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n     \r\n    <ion-col *ngIf=\"checkBookingMonth\">\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.numberOfMonths' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime (ionChange)=\"getDateByMonth()\" [(ngModel)]=\"startMonths\" class=\"booking-datetime\" displayFormat=\"M\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.Endtime' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime (ionChange)=\"getDateByEndDate()\" [(ngModel)]=\"endDate\" [disabled]=\"checkBookingMonth\" class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.Endtime' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"booking-text-info\">\r\n    <p class=\"text-info-booking\">{{'booking.selectVehicleType' | translate}}</p>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"check-motorcycle\">\r\n      <ion-col class=\"check-motorcycle-col\" (click)=\"motorcycleNumber()\" [style]=\"borderMotorcycleNumber\" [hidden]=\"motorcycleNumberkHidden\">\r\n        <p class=\"name-number\">{{'booking.motorcycleNumber' | translate}}</p>\r\n        <img class=\"booking-img\" src=\"../../../assets/icon/number_motorcycle.svg\" />\r\n        <p class=\"number-booking\">{{priceMotorcycleNumber}}</p>\r\n        <p class=\"number-money\">{{'booking.MinimumPrice' | translate}}</p>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"check-motorcycle-col\" (click)=\"acceleratorMotorcycle()\" [style]=\"borderAcceleratorMotorcycle\" [hidden]=\"acceleratorMotorcycleHidden\">\r\n        <p class=\"name-number\">{{'booking.acceleratorMotorcycle' | translate}}</p>\r\n        <img class=\"booking-img\" src=\"../../../assets/icon/accelerator_motorcycle.svg\" />\r\n        <p class=\"number-booking\">{{priceAcceleratorMotorcycle}}</p>\r\n        <p class=\"number-money\">{{'booking.MinimumPrice' | translate}}</p>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"check-motorcycle-col\" (click)=\"clutchMotorcycle()\" [style]=\"borderClutchMotorcycle\" [hidden]=\"clutchMotorcycleHidden\">\r\n        <p class=\"name-number\">{{'booking.clutchMotorcycle' | translate}}</p>\r\n        <img class=\"booking-img\" src=\"../../../assets/icon/clutch_motorcycle.svg\" />\r\n        <p class=\"number-booking\">{{priceClutchMotorcycle}}</p>\r\n        <p class=\"number-money\">{{'booking.MinimumPrice' | translate}}</p>\r\n      </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"signup-btn\" style=\"padding-top: 16px;\">\r\n    <ion-button style=\"background: #34A4B6;\" fill=\"clear\" class=\"btn-login\" (click)=\"calculateBookingMap()\">\r\n        <p>{{'booking.next' | translate}}</p>\r\n      </ion-button>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n<!-- end booking theo ngày -->");

/***/ }),

/***/ "FE7N":
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/booking/booking-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: BookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingRoutingModule", function() { return BookingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.page */ "tkyx");




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }
];
let BookingRoutingModule = class BookingRoutingModule {
};
BookingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingRoutingModule);



/***/ }),

/***/ "GkRt":
/*!****************************************************!*\
  !*** ./src/app/shared/models/filterModel.model.ts ***!
  \****************************************************/
/*! exports provided: FilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModel", function() { return FilterModel; });
class FilterModel {
}


/***/ }),

/***/ "etAH":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking/booking-map/booking-map.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row class=\"otp-header\">\r\n    <ion-toolbar class=\"update-toolbar\">\r\n      <ion-icon class=\"icon-back\" name=\"arrow-back\" slot=\"start\" (click)=\"closeUpdateInfo()\"></ion-icon>\r\n      <p class=\"text-booking\">{{'booking.booking' | translate}}</p>\r\n    </ion-toolbar>\r\n  </ion-row>\r\n\r\n  <ion-grid class=\"booking-map-grid\">\r\n    <ion-row class=\"booking-map-row\">\r\n      <ion-col>\r\n        <ion-row class=\"booking-map\">\r\n          <ion-col size=\"1\">\r\n            <ion-img class=\"booking-map-img\" src=\"../../../assets/icon/ion-map.svg\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"11\"class=\"booking-test\" >\r\n            <input class=\"search-gg\" #address id=\"address\" ngx-google-places-autocomplete [options]='options' [(ngModel)]=\"inputAddress\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event, address)\" placeholder=\"{{'booking.enterAnAddress' | translate}}\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col style=\"padding: 0px;\">\r\n        <agm-map\r\n        [style.height.px]=\"height\"\r\n        [latitude]=\"lat\"\r\n        [longitude]=\"lng\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n        </agm-map>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"booking-map-btn\" style=\"padding-top: 16px;\">\r\n      <ion-button fill=\"clear\" class=\"booking-map-login\" (click)=\"bookingMap()\">\r\n          <p>{{'booking.next' | translate}}</p>\r\n        </ion-button>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "g6ax":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tabs/booking/booking-completed/booking-completed.page.ts ***!
  \********************************************************************************/
/*! exports provided: BookingCompletedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCompletedPage", function() { return BookingCompletedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_completed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-completed.page.html */ "uORk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/calculate.model */ "pzF/");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/booking.service */ "8QHk");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/user.model */ "KJJU");
/* harmony import */ var src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/locals/local-storge.service */ "kWPB");
/* harmony import */ var src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/apis/customer.service */ "S/8Y");
/* harmony import */ var _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../booking-map/booking-map.page */ "yT9f");












let BookingCompletedPage = class BookingCompletedPage {
    constructor(modalController, router, msgService, navParams, bookingService, localStorageService, customerService) {
        this.modalController = modalController;
        this.router = router;
        this.msgService = msgService;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.localStorageService = localStorageService;
        this.customerService = customerService;
        this.dataBookingModel = new src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_5__["CalculateModel"]();
        this.createBooking = new src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_5__["CalculateModel"]();
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_8__["UserModel"]();
        this.dataBookingModel = this.navParams.get('dataBoking');
        this.startMonths = this.navParams.get('month');
        this.address = this.navParams.get('address');
        this.priceVehicle = this.navParams.get('priceVehicle');
        this.vehicleName = this.navParams.get('vehicleName');
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.serviceId = this.dataBookingModel.serviceId;
        this.startDate = this.dataBookingModel.startDate;
        this.endDate = this.dataBookingModel.endDate;
        this.vehicleTypeId = this.dataBookingModel.vehicleTypeId;
        this.priceTable = this.priceVehicle;
        this.checkBookingMonthTable();
        this.getCurrentUser();
    }
    getCurrentUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Id = yield this.localStorageService.get("userId");
            let res = yield this.customerService.getCurrentCustomer(Id);
            if (res.isSuccess) {
                this.user = res.data;
            }
        });
    }
    checkBookingDateTable() {
        this.checkBookingMonth = true;
        this.serviceId = 12;
    }
    checkBookingMonthTable() {
        if (this.serviceId == 10) {
            this.checkBookingDate = true;
            this.checkBookingMonth = false;
        }
        else {
            this.checkBookingDate = false;
            this.checkBookingMonth = true;
        }
    }
    closeUpdateInfo() {
        this.modalController.dismiss();
        this.bookingMap();
    }
    bookingMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_11__["BookingMapPage"],
                componentProps: {
                    "dataBoking": this.dataBookingModel,
                    "month": this.startMonths,
                    "priceVehicle": this.priceVehicle,
                    "vehicleName": this.vehicleName,
                }
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
    }
    bookingsSuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.createBooking.serviceId = this.serviceId;
            this.createBooking.startDate = this.startDate;
            this.createBooking.endDate = this.endDate;
            this.createBooking.vehicleTypeId = this.vehicleTypeId;
            this.createBooking.customerId = this.user.id;
            this.createBooking.address = this.address;
            let res = yield this.bookingService.createBooking(this.createBooking);
            if (res.data) {
                this.msgService.success("Đặt xe thành công");
                this.modalController.dismiss();
                //let a = 
                this.router.navigateByUrl("/tabs/booking-success" + "/?bookingId=" + res.data.id);
            }
            else {
                this.msgService.error(res.message || "Đặt xe không thành công");
            }
        });
    }
};
BookingCompletedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_6__["MsgService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_shared_services_apis_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"] },
    { type: src_app_shared_services_locals_local_storge_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorgeService"] },
    { type: src_app_shared_services_apis_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"] }
];
BookingCompletedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking-completed',
        template: _raw_loader_booking_completed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], BookingCompletedPage);



/***/ }),

/***/ "pxUr":
/*!******************************************************************!*\
  !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
  \******************************************************************/
/*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl, CircleManager, DataLayerManager, FitBoundsAccessor, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, coreDirectives, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function() { return AgmBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFullscreenControl", function() { return AgmFullscreenControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function() { return AgmGeocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMapTypeControl", function() { return AgmMapTypeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPanControl", function() { return AgmPanControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return AgmPolylineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRotateControl", function() { return AgmRotateControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmScaleControl", function() { return AgmScaleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmStreetViewControl", function() { return AgmStreetViewControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return AgmTransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmZoomControl", function() { return AgmZoomControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FitBoundsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AgmMapControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BROWSER_GLOBALS_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["*"];
class MapsAPILoader {
}
MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) { return new (t || MapsAPILoader)(); };
MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapsAPILoader, factory: MapsAPILoader.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();

/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
class GoogleMapsAPIWrapper {
    constructor(_loader, _zone) {
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise((resolve) => { this._mapResolver = resolve; });
    }
    createMap(el, mapOptions) {
        return this._zone.runOutsideAngular(() => {
            return this._loader.load().then(() => {
                const map = new google.maps.Map(el, mapOptions);
                this._mapResolver(map);
                return;
            });
        });
    }
    setMapOptions(options) {
        return this._zone.runOutsideAngular(() => {
            this._map.then((m) => { m.setOptions(options); });
        });
    }
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options = {}, addToMap = true) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (addToMap) {
                    options.map = map;
                }
                return new google.maps.Marker(options);
            });
        });
    }
    createInfoWindow(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(() => new google.maps.InfoWindow(options));
        });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Circle(options);
            });
        });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Rectangle(options);
            });
        });
    }
    createPolyline(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                const line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
            });
        });
    }
    createPolygon(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                const polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
            });
        });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(m => {
                const data = new google.maps.Data(options);
                data.setMap(m);
                return data;
            });
        });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @returns a new transit layer object
     */
    createTransitLayer() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                const newLayer = new google.maps.TransitLayer();
                newLayer.setMap(map);
                return newLayer;
            });
        });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @returns a new bicycling layer object
     */
    createBicyclingLayer() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                const newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(map);
                return newLayer;
            });
        });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng, polygon) {
        return this._map.then(() => google.maps.geometry.poly.containsLocation(latLng, polygon));
    }
    subscribeToMapEvent(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._map.then(m => m.addListener(eventName, () => this._zone.run(() => observer.next(arguments[0]))));
        });
    }
    clearInstanceListeners() {
        return this._zone.runOutsideAngular(() => {
            this._map.then((map) => {
                google.maps.event.clearInstanceListeners(map);
            });
        });
    }
    setCenter(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setCenter(latLng));
        });
    }
    getZoom() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getZoom());
        });
    }
    getBounds() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getBounds());
        });
    }
    getMapTypeId() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getMapTypeId());
        });
    }
    setZoom(zoom) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setZoom(zoom));
        });
    }
    getCenter() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getCenter());
        });
    }
    panTo(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panTo(latLng));
        });
    }
    panBy(x, y) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panBy(x, y));
        });
    }
    fitBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.fitBounds(latLng, padding));
        });
    }
    panToBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panToBounds(latLng, padding));
        });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap() { return this._map; }
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName) {
        return this._map.then((m) => google.maps.event.trigger(m, eventName));
    }
}
GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) { return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleMapsAPIWrapper, factory: GoogleMapsAPIWrapper.ɵfac });
GoogleMapsAPIWrapper.ctorParameters = () => [
    { type: MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: MapsAPILoader }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class CircleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    addCircle(circle) {
        this._apiWrapper.getNativeMap().then(() => this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: google.maps.StrokePosition[circle.strokePosition],
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex,
        })));
    }
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle) {
        return this._circles.get(circle).then((c) => {
            c.setMap(null);
            this._circles.delete(circle);
        });
    }
    setOptions(circle, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._circles.get(circle).then((c) => {
                const actualParam = options.strokePosition;
                options.strokePosition = google.maps.StrokePosition[actualParam];
                c.setOptions(options);
            });
        });
    }
    getBounds(circle) {
        return this._circles.get(circle).then((c) => c.getBounds());
    }
    getCenter(circle) {
        return this._circles.get(circle).then((c) => c.getCenter());
    }
    getRadius(circle) {
        return this._circles.get(circle).then((c) => c.getRadius());
    }
    setCenter(circle) {
        return this._circles.get(circle).then(c => c.setCenter({ lat: circle.latitude, lng: circle.longitude }));
    }
    setEditable(circle) {
        return this._circles.get(circle).then(c => c.setEditable(circle.editable));
    }
    setDraggable(circle) {
        return this._circles.get(circle).then(c => c.setDraggable(circle.draggable));
    }
    setVisible(circle) {
        return this._circles.get(circle).then(c => c.setVisible(circle.visible));
    }
    setRadius(circle) {
        return this._circles.get(circle).then(c => c.setRadius(circle.radius));
    }
    getNativeCircle(circle) {
        return this._circles.get(circle);
    }
    createEventObservable(eventName, circle) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            let listener = null;
            this._circles.get(circle).then((c) => {
                listener = c.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
CircleManager.ɵfac = function CircleManager_Factory(t) { return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CircleManager, factory: CircleManager.ɵfac });
CircleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * Manages all Data Layers for a Google Map instance.
 */
class DataLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer) {
        const newLayer = this._wrapper.createDataLayer({
            style: layer.style,
        })
            .then(d => {
            if (layer.geoJson) {
                // NOTE: accessing "features" on google.maps.Data is undocumented
                this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    }
    deleteDataLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    updateGeoJson(layer, geoJson) {
        this._layers.get(layer).then(l => {
            l.forEach(feature => {
                l.remove(feature);
                // NOTE: accessing "features" on google.maps.Data is undocumented
                const index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            this.getDataFeatures(l, geoJson).then(features => l.features = features);
        });
    }
    setDataOptions(layer, options) {
        this._layers.get(layer).then(l => {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((d) => {
                d.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d, geoJson) {
        return new Promise((resolve, reject) => {
            if (typeof geoJson === 'object') {
                try {
                    const features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject(`Impossible to extract features from geoJson: wrong argument type`);
            }
        });
    }
}
DataLayerManager.ɵfac = function DataLayerManager_Factory(t) { return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataLayerManager, factory: DataLayerManager.ɵfac });
DataLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
class FitBoundsAccessor {
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
class FitBoundsService {
    constructor(loader) {
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(() => this._includeInBounds$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(time => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(includeInBounds => this._generateBounds(includeInBounds)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    _generateBounds(includeInBounds) {
        const bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(b => bounds.extend(b));
        return bounds;
    }
    addToBounds(latLng) {
        const id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        const boundsMap = this._includeInBounds$.value;
        boundsMap.set(id, latLng);
        this._includeInBounds$.next(boundsMap);
    }
    removeFromBounds(latLng) {
        const boundsMap = this._includeInBounds$.value;
        boundsMap.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(boundsMap);
    }
    changeFitBoundsChangeSampleTime(timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    }
    getBounds$() {
        return this.bounds$;
    }
    _createIdentifier(latLng) {
        return `${latLng.lat}+${latLng.lng}`;
    }
}
FitBoundsService.ɵfac = function FitBoundsService_Factory(t) { return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader)); };
FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FitBoundsService, factory: FitBoundsService.ɵfac });
FitBoundsService.ctorParameters = () => [
    { type: MapsAPILoader }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();

class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this._createGeocoder()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
        return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([results, status]) => {
            if (status === google.maps.GeocoderStatus.OK) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
}
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) { return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader)); };
AgmGeocoder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();

class WindowRef {
    getNativeWindow() { return window; }
}
class DocumentRef {
    getNativeDocument() { return document; }
}
const BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];

var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
const LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
class LazyMapsAPILoader extends MapsAPILoader {
    constructor(config = null, w, d, localeId) {
        super();
        this.localeId = localeId;
        this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        this.callbackName = `agmLazyMapsAPILoader`;
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    load() {
        const window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        const scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        const script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    }
    _assignScriptLoadingPromise(scriptElem) {
        this._scriptLoadingPromise = new Promise((resolve, reject) => {
            this._windowRef.getNativeWindow()[this.callbackName] = () => {
                resolve();
            };
            scriptElem.onerror = (error) => {
                reject(error);
            };
        });
    }
    _getScriptSrc(callbackName) {
        const protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        let protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        const hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        const queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || (this.localeId !== 'en-US' ? this.localeId : null),
        };
        const params = Object.keys(queryParams)
            .filter((k) => queryParams[k] != null)
            .filter((k) => {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map((k) => {
            // join arrays as comma seperated strings
            const i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map((entry) => {
            return `${entry.key}=${entry.value}`;
        })
            .join('&');
        return `${protocol}//${hostAndPath}?${params}`;
    }
}
LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) { return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LazyMapsAPILoader, factory: LazyMapsAPILoader.ɵfac });
LazyMapsAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LAZY_MAPS_API_CONFIG,] }] },
    { type: WindowRef },
    { type: DocumentRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [LAZY_MAPS_API_CONFIG]
            }] }, { type: WindowRef }, { type: DocumentRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();

class MarkerManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    convertAnimation(uiAnim) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (uiAnim === null) {
                return null;
            }
            else {
                return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
            }
        });
    }
    deleteMarker(markerDirective) {
        const markerPromise = this._markers.get(markerDirective);
        if (markerPromise == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return markerPromise.then((marker) => {
            return this._zone.run(() => {
                marker.setMap(null);
                this._markers.delete(markerDirective);
            });
        });
    }
    updateMarkerPosition(marker) {
        return this._markers.get(marker).then((m) => m.setPosition({ lat: marker.latitude, lng: marker.longitude }));
    }
    updateTitle(marker) {
        return this._markers.get(marker).then((m) => m.setTitle(marker.title));
    }
    updateLabel(marker) {
        return this._markers.get(marker).then((m) => { m.setLabel(marker.label); });
    }
    updateDraggable(marker) {
        return this._markers.get(marker).then((m) => m.setDraggable(marker.draggable));
    }
    updateIcon(marker) {
        return this._markers.get(marker).then((m) => m.setIcon(marker.iconUrl));
    }
    updateOpacity(marker) {
        return this._markers.get(marker).then((m) => m.setOpacity(marker.opacity));
    }
    updateVisible(marker) {
        return this._markers.get(marker).then((m) => m.setVisible(marker.visible));
    }
    updateZIndex(marker) {
        return this._markers.get(marker).then((m) => m.setZIndex(marker.zIndex));
    }
    updateClickable(marker) {
        return this._markers.get(marker).then((m) => m.setClickable(marker.clickable));
    }
    updateAnimation(marker) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const m = yield this._markers.get(marker);
            m.setAnimation(yield this.convertAnimation(marker.animation));
        });
    }
    addMarker(marker) {
        const markerPromise = new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: yield this.convertAnimation(marker.animation),
            }).then(resolve);
        }));
        this._markers.set(marker, markerPromise);
    }
    getNativeMarker(marker) {
        return this._markers.get(marker);
    }
    createEventObservable(eventName, marker) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this._markers.get(marker).then(m => m.addListener(eventName, e => this._zone.run(() => observer.next(e))));
        });
    }
}
MarkerManager.ɵfac = function MarkerManager_Factory(t) { return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MarkerManager, factory: MarkerManager.ɵfac });
MarkerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    deleteInfoWindow(infoWindow) {
        const iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then((i) => {
            return this._zone.run(() => {
                i.close();
                this._infoWindows.delete(infoWindow);
            });
        });
    }
    setPosition(infoWindow) {
        return this._infoWindows.get(infoWindow).then((i) => i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude,
        }));
    }
    setZIndex(infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then((i) => i.setZIndex(infoWindow.zIndex));
    }
    open(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => {
            if (infoWindow.hostMarker != null) {
                return this._markerManager.getNativeMarker(infoWindow.hostMarker).then((marker) => {
                    return this._mapsWrapper.getNativeMap().then((map) => w.open(map, marker));
                });
            }
            return this._mapsWrapper.getNativeMap().then((map) => w.open(map));
        });
    }
    close(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => w.close());
    }
    setOptions(infoWindow, options) {
        return this._infoWindows.get(infoWindow).then((i) => i.setOptions(options));
    }
    addInfoWindow(infoWindow) {
        const options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable(eventName, infoWindow) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._infoWindows.get(infoWindow).then((i) => {
                i.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) { return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager)); };
InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfoWindowManager, factory: InfoWindowManager.ɵfac });
InfoWindowManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: MarkerManager }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: MarkerManager }]; }, null); })();

/**
 * Manages all KML Layers for a Google Map instance.
 */
class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) { return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KmlLayerManager, factory: KmlLayerManager.ɵfac });
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer) {
        const newLayer = this._wrapper.createTransitLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer) {
        const newLayer = this._wrapper.createBicyclingLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
}
LayerManager.ɵfac = function LayerManager_Factory(t) { return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper)); };
LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LayerManager, factory: LayerManager.ɵfac });
LayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }]; }, null); })();

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
class NoOpMapsAPILoader {
    load() {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    }
}

function createMVCEventObservable(array) {
    const eventNames = ['insert_at', 'remove_at', 'set_at'];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(handler => eventNames.map(eventName => array.addListener(eventName, (index, previous) => handler.apply(array, [{ newArr: array.getArray(), eventName, index, previous }]))), (_handler, evListeners) => evListeners.forEach(evListener => evListener.remove()));
}
class MvcArrayMock {
    constructor() {
        this.vals = [];
        this.listeners = {
            remove_at: [],
            insert_at: [],
            set_at: [],
        };
    }
    clear() {
        for (let i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    }
    getArray() {
        return [...this.vals];
    }
    getAt(i) {
        return this.vals[i];
    }
    getLength() {
        return this.vals.length;
    }
    insertAt(i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.forEach(listener => listener(i));
    }
    pop() {
        const deleted = this.vals.pop();
        this.listeners.remove_at.forEach(listener => listener(this.vals.length, deleted));
        return deleted;
    }
    push(elem) {
        this.vals.push(elem);
        this.listeners.insert_at.forEach(listener => listener(this.vals.length - 1));
        return this.vals.length;
    }
    removeAt(i) {
        const deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.forEach(listener => listener(i, deleted));
        return deleted;
    }
    setAt(i, elem) {
        const deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.forEach(listener => listener(i, deleted));
    }
    forEach(callback) {
        this.vals.forEach(callback);
    }
    addListener(eventName, handler) {
        const listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: () => {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            },
        };
    }
    bindTo() { throw new Error('Not implemented'); }
    changed() { throw new Error('Not implemented'); }
    get() { throw new Error('Not implemented'); }
    notify() { throw new Error('Not implemented'); }
    set() { throw new Error('Not implemented'); }
    setValues() { throw new Error('Not implemented'); }
    unbind() { throw new Error('Not implemented'); }
    unbindAll() { throw new Error('Not implemented'); }
}

class PolygonManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    addPolygon(path) {
        const polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    }
    updatePolygon(polygon) {
        const m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => { l.setPaths(polygon.paths); }));
    }
    setPolygonOptions(path, options) {
        return this._polygons.get(path).then((l) => { l.setOptions(options); });
    }
    deletePolygon(paths) {
        const m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polygons.delete(paths);
            });
        });
    }
    getPath(polygonDirective) {
        return this._polygons.get(polygonDirective)
            .then((polygon) => polygon.getPath().getArray());
    }
    getPaths(polygonDirective) {
        return this._polygons.get(polygonDirective)
            .then((polygon) => polygon.getPaths().getArray().map((p) => p.getArray()));
    }
    createEventObservable(eventName, path) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polygons.get(path).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(agmPolygon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polygon = yield this._polygons.get(agmPolygon);
            const paths = polygon.getPaths();
            const pathsChanges$ = createMVCEventObservable(paths);
            return pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ newArr: paths.getArray() }), // in order to subscribe to them all
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(parentMVEvent => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(... // rest parameter
            parentMVEvent.newArr.map((chMVC, index) => createMVCEventObservable(chMVC)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(chMVCEvent => ({ parentMVEvent, chMVCEvent, pathIndex: index })))))
                .pipe(// start the merged ob with an event signinifing change to parent
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ parentMVEvent, chMVCEvent: null, pathIndex: null }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ parentMVEvent, chMVCEvent, pathIndex }) => {
                let retVal;
                if (!chMVCEvent) {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        eventName: parentMVEvent.eventName,
                        index: parentMVEvent.index,
                    };
                    if (parentMVEvent.previous) {
                        retVal.previous = parentMVEvent.previous.getArray();
                    }
                }
                else {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        pathIndex,
                        eventName: chMVCEvent.eventName,
                        index: chMVCEvent.index,
                    };
                    if (chMVCEvent.previous) {
                        retVal.previous = chMVCEvent.previous;
                    }
                }
                return retVal;
            }));
        });
    }
}
PolygonManager.ɵfac = function PolygonManager_Factory(t) { return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PolygonManager, factory: PolygonManager.ɵfac });
PolygonManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class PolylineManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    static _convertPoints(line) {
        const path = line._getPoints().map((point) => {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    }
    static _convertPath(path) {
        const symbolPath = google.maps.SymbolPath[path];
        if (typeof symbolPath === 'number') {
            return symbolPath;
        }
        else {
            return path;
        }
    }
    static _convertIcons(line) {
        const icons = line._getIcons().map(agmIcon => ({
            fixedRotation: agmIcon.fixedRotation,
            offset: agmIcon.offset,
            repeat: agmIcon.repeat,
            icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight,
            },
        }));
        // prune undefineds;
        icons.forEach(icon => {
            Object.entries(icon).forEach(([key, val]) => {
                if (typeof val === 'undefined') {
                    delete icon[key];
                }
            });
            if (typeof icon.icon.anchor.x === 'undefined' ||
                typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
            }
        });
        return icons;
    }
    addPolyline(line) {
        const polylinePromise = this._mapsWrapper.getNativeMap()
            .then(() => [PolylineManager._convertPoints(line),
            PolylineManager._convertIcons(line)])
            .then(([path, icons]) => this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path,
            icons,
        }));
        this._polylines.set(line, polylinePromise);
    }
    updatePolylinePoints(line) {
        const path = PolylineManager._convertPoints(line);
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => l.setPath(path)));
    }
    updateIconSequences(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._mapsWrapper.getNativeMap();
            const icons = PolylineManager._convertIcons(line);
            const m = this._polylines.get(line);
            if (m == null) {
                return;
            }
            return m.then(l => this._zone.run(() => l.setOptions({ icons })));
        });
    }
    setPolylineOptions(line, options) {
        return this._polylines.get(line).then((l) => { l.setOptions(options); });
    }
    deletePolyline(line) {
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polylines.delete(line);
            });
        });
    }
    getMVCPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polyline = yield this._polylines.get(agmPolyline);
            return polyline.getPath();
        });
    }
    getPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getMVCPath(agmPolyline)).getArray();
        });
    }
    createEventObservable(eventName, line) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polylines.get(line).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mvcPath = yield this.getMVCPath(line);
            return createMVCEventObservable(mvcPath);
        });
    }
}
PolylineManager.ɵfac = function PolylineManager_Factory(t) { return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PolylineManager, factory: PolylineManager.ɵfac });
PolylineManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._apiWrapper.getNativeMap().then(() => this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: google.maps.StrokePosition[rectangle.strokePosition],
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        })));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => {
            const actualStrokePosition = options.strokePosition;
            options.strokePosition = google.maps.StrokePosition[actualStrokePosition];
            r.setOptions(options);
        });
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((subsrciber) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => subsrciber.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
RectangleManager.ɵfac = function RectangleManager_Factory(t) { return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RectangleManager, factory: RectangleManager.ɵfac });
RectangleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

let layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */
class AgmBicyclingLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addBicyclingLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmBicyclingLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) { return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager)); };
AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmBicyclingLayer, selectors: [["agm-bicycling-layer"]], inputs: { visible: "visible" } });
AgmBicyclingLayer.ctorParameters = () => [
    { type: LayerManager }
];
AgmBicyclingLayer.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-bicycling-layer'
            }]
    }], function () { return [{ type: LayerManager }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class AgmCircle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        // tslint:enable: no-string-literal
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmCircle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager.getRadius(this).then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager.getCenter(this).then((center) => eventEmitter.emit({ lat: center.lat(), lng: center.lng() }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() { return this._manager.getBounds(this); }
    getCenter() { return this._manager.getCenter(this); }
}
AgmCircle.ɵfac = function AgmCircle_Factory(t) { return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager)); };
AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmCircle, selectors: [["agm-circle"]], inputs: { clickable: "clickable", draggable: ["circleDraggable", "draggable"], editable: "editable", radius: "radius", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", latitude: "latitude", longitude: "longitude", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { centerChange: "centerChange", circleClick: "circleClick", circleDblClick: "circleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", radiusChange: "radiusChange", rightClick: "rightClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable',
];
AgmCircle.ctorParameters = () => [
    { type: CircleManager }
];
AgmCircle.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['circleDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    centerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    circleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    circleDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    radiusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-circle'
            }]
    }], function () { return [{ type: CircleManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['circleDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], circleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], radiusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
class AgmDataLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmDataLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        // tslint:disable-next-line: no-string-literal
        const geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        const dataOptions = AgmDataLayer._dataOptionsAttributes.reduce((options, k) => options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k], {});
        this._manager.setDataOptions(this, dataOptions);
    }
}
AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) { return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager)); };
AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmDataLayer, selectors: [["agm-data-layer"]], inputs: { geoJson: "geoJson", style: "style" }, outputs: { layerClick: "layerClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.ctorParameters = () => [
    { type: DataLayerManager }
];
AgmDataLayer.propDecorators = {
    layerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    geoJson: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-data-layer'
            }]
    }], function () { return [{ type: DataLayerManager }]; }, { layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], geoJson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
}
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) { return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService)); };
AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmFitBounds, selectors: [["", "agmFitBounds", ""]], inputs: { agmFitBounds: "agmFitBounds" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: FitBoundsService }
];
AgmFitBounds.propDecorators = {
    agmFitBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[agmFitBounds]'
            }]
    }], function () { return [{ type: FitBoundsAccessor, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: FitBoundsService }]; }, { agmFitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmInfoWindow {
    constructor(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    ngOnInit() {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    }
    // tslint:enable: no-string-literal
    _registerEventListeners() {
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
            this.isOpen = false;
            this.infoWindowClose.emit();
        });
    }
    _updateOpenState() {
        this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open() { return this._infoWindowManager.open(this); }
    /**
     * Closes the info window.
     */
    close() {
        return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmInfoWindow-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() { this._infoWindowManager.deleteInfoWindow(this); }
}
AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) { return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgmInfoWindow, selectors: [["agm-info-window"]], inputs: { isOpen: "isOpen", latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth" }, outputs: { infoWindowClose: "infoWindowClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "agm-info-window-content"]], template: function AgmInfoWindow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.ctorParameters = () => [
    { type: InfoWindowManager },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AgmInfoWindow.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disableAutoPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    infoWindowClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'agm-info-window',
                template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: InfoWindowManager }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], infoWindowClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disableAutoPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$2 = 0;
class AgmKmlLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    }
    _updatePolygonOptions(changes) {
        const options = Object.keys(changes)
            .filter(k => AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
            { name: 'defaultviewport_changed', handler: () => this.defaultViewportChange.emit() },
            { name: 'status_changed', handler: () => this.statusChange.emit() },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmKmlLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}
AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) { return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager)); };
AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmKmlLayer, selectors: [["agm-kml-layer"]], inputs: { clickable: "clickable", preserveViewport: "preserveViewport", screenOverlays: "screenOverlays", suppressInfoWindows: "suppressInfoWindows", url: "url", zIndex: "zIndex" }, outputs: { layerClick: "layerClick", defaultViewportChange: "defaultViewportChange", statusChange: "statusChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.ctorParameters = () => [
    { type: KmlLayerManager }
];
AgmKmlLayer.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preserveViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    screenOverlays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    suppressInfoWindows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    layerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    defaultViewportChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    statusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-kml-layer'
            }]
    }], function () { return [{ type: KmlLayerManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preserveViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], screenOverlays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], suppressInfoWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], defaultViewportChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], statusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

class AgmMapControl {
}
AgmMapControl.ɵfac = function AgmMapControl_Factory(t) { return new (t || AgmMapControl)(); };
AgmMapControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMapControl, inputs: { position: "position" } });
AgmMapControl.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], null, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class AgmFullscreenControl extends AgmMapControl {
    getOptions() {
        return {
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmFullscreenControl.ɵfac = function AgmFullscreenControl_Factory(t) { return ɵAgmFullscreenControl_BaseFactory(t || AgmFullscreenControl); };
AgmFullscreenControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmFullscreenControl, selectors: [["agm-fullscreen-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmFullscreenControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmFullscreenControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFullscreenControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-fullscreen-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]
            }]
    }], null, null); })();
class AgmMapTypeControl extends AgmMapControl {
    getOptions() {
        return {
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.MapTypeControlStyle[this.style],
                mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(mapTypeId => google.maps.MapTypeId[mapTypeId]),
            },
        };
    }
}
AgmMapTypeControl.ɵfac = function AgmMapTypeControl_Factory(t) { return ɵAgmMapTypeControl_BaseFactory(t || AgmMapTypeControl); };
AgmMapTypeControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMapTypeControl, selectors: [["agm-map-type-control"]], inputs: { mapTypeIds: "mapTypeIds", style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
AgmMapTypeControl.propDecorators = {
    mapTypeIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵAgmMapTypeControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmMapTypeControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapTypeControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-map-type-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]
            }]
    }], null, { mapTypeIds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class AgmPanControl extends AgmMapControl {
    getOptions() {
        return {
            panControl: true,
            panControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmPanControl.ɵfac = function AgmPanControl_Factory(t) { return ɵAgmPanControl_BaseFactory(t || AgmPanControl); };
AgmPanControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPanControl, selectors: [["agm-pan-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmPanControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmPanControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmPanControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPanControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-pan-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmPanControl }]
            }]
    }], null, null); })();
class AgmRotateControl extends AgmMapControl {
    getOptions() {
        return {
            rotateControl: true,
            rotateControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmRotateControl.ɵfac = function AgmRotateControl_Factory(t) { return ɵAgmRotateControl_BaseFactory(t || AgmRotateControl); };
AgmRotateControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmRotateControl, selectors: [["agm-rotate-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmRotateControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmRotateControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmRotateControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRotateControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-rotate-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmRotateControl }]
            }]
    }], null, null); })();
class AgmScaleControl extends AgmMapControl {
    getOptions() {
        return {
            scaleControl: true,
        };
    }
}
AgmScaleControl.ɵfac = function AgmScaleControl_Factory(t) { return ɵAgmScaleControl_BaseFactory(t || AgmScaleControl); };
AgmScaleControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmScaleControl, selectors: [["agm-scale-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmScaleControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmScaleControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmScaleControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmScaleControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-scale-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmScaleControl }]
            }]
    }], null, null); })();
class AgmStreetViewControl extends AgmMapControl {
    getOptions() {
        return {
            streetViewControl: true,
            streetViewControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmStreetViewControl.ɵfac = function AgmStreetViewControl_Factory(t) { return ɵAgmStreetViewControl_BaseFactory(t || AgmStreetViewControl); };
AgmStreetViewControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmStreetViewControl, selectors: [["agm-street-view-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmStreetViewControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmStreetViewControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmStreetViewControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-street-view-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]
            }]
    }], null, null); })();
class AgmZoomControl extends AgmMapControl {
    getOptions() {
        return {
            zoomControl: true,
            zoomControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.ZoomControlStyle[this.style],
            },
        };
    }
}
AgmZoomControl.ɵfac = function AgmZoomControl_Factory(t) { return ɵAgmZoomControl_BaseFactory(t || AgmZoomControl); };
AgmZoomControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmZoomControl, selectors: [["agm-zoom-control"]], inputs: { style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmZoomControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
AgmZoomControl.propDecorators = {
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵAgmZoomControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmZoomControl);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmZoomControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-zoom-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmZoomControl }]
            }]
    }], null, { style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMap {
    constructor(_elem, _mapsWrapper, 
    // tslint:disable-next-line: ban-types
    _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'ROADMAP';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        // tslint:disable-next-line: max-line-length
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** @internal */
    ngAfterContentInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            mapTypeId: this.mapTypeId.toLocaleLowerCase(),
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
        this._handleControlChange();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // tslint:enable: no-string-literal
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        const newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(e => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([event]) => {
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (event.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(event);
            });
            this._observableSubscriptions.push(s);
        });
    }
    _handleControlChange() {
        this._setControls();
        this.mapControls.changes.subscribe(() => this._setControls());
    }
    _setControls() {
        const controlOptions = {
            fullscreenControl: !this.disableDefaultUI,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: !this.disableDefaultUI,
            zoomControl: !this.disableDefaultUI,
        };
        this._mapsWrapper.getNativeMap().then(() => {
            this.mapControls.forEach(control => Object.assign(controlOptions, control.getOptions()));
            this._mapsWrapper.setMapOptions(controlOptions);
        });
    }
}
AgmMap.ɵfac = function AgmMap_Factory(t) { return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgmMap, selectors: [["agm-map"]], contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmMapControl, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapControls = _t);
    } }, inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", draggable: ["mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", keyboardShortcuts: "keyboardShortcuts", styles: "styles", usePanning: "usePanning", fitBounds: "fitBounds", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", fitBoundsPadding: "fitBoundsPadding", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]], template: function AgmMap_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"] });
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons',
    'gestureHandling', 'tilt', 'restriction',
];
AgmMap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: GoogleMapsAPIWrapper },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: FitBoundsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AgmMap.propDecorators = {
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    controlSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mapDraggable',] }],
    disableDoubleClickZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disableDefaultUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollwheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggableCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggingCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keyboardShortcuts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    usePanning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fitBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fitBoundsPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mapTypeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickableIcons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showDefaultInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    gestureHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tilt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    restriction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    centerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    boundsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapTypeIdChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    idle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    zoomChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    tilesLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmMapControl,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'agm-map',
                providers: [
                    CircleManager,
                    DataLayerManager,
                    DataLayerManager,
                    FitBoundsService,
                    GoogleMapsAPIWrapper,
                    InfoWindowManager,
                    KmlLayerManager,
                    LayerManager,
                    MarkerManager,
                    PolygonManager,
                    PolylineManager,
                    RectangleManager,
                ],
                template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
                styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: FitBoundsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mapDraggable']
        }], disableDoubleClickZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disableDefaultUI: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollwheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keyboardShortcuts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], usePanning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickableIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDefaultInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gestureHandling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tilt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapTypeIdChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tilesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], minZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], controlSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggableCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggingCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fitBoundsPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], restriction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmMapControl]
        }] }); })();

let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMarker {
    constructor(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         */
        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */
        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    ngAfterContentInit() {
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(marker => {
            marker.hostMarker = this;
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this._fitBoundsDetails$.asObservable();
    }
    _updateFitBoundsDetails() {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    }
    _addEventListeners() {
        const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
            if (this.openInfoWindow) {
                this.infoWindow.forEach(infoWindow => infoWindow.open());
            }
            this.markerClick.emit(this);
        });
        this._observableSubscriptions.push(cs);
        const dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
            this.markerDblClick.emit(null);
        });
        this._observableSubscriptions.push(dcs);
        const rc = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
            this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        const ds = this._markerManager.createEventObservable('dragstart', this)
            .subscribe(e => this.dragStart.emit(e));
        this._observableSubscriptions.push(ds);
        const d = this._markerManager.createEventObservable('drag', this)
            .subscribe(e => this.drag.emit(e));
        this._observableSubscriptions.push(d);
        const de = this._markerManager.createEventObservable('dragend', this)
            .subscribe(e => this.dragEnd.emit(e));
        this._observableSubscriptions.push(de);
        const mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(e => this.mouseOver.emit(e));
        this._observableSubscriptions.push(mover);
        const mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(e => this.mouseOut.emit(e));
        this._observableSubscriptions.push(mout);
        const anChng = this._markerManager.createEventObservable('animation_changed', this)
            .subscribe(() => {
            this.animationChange.emit(this.animation);
        });
        this._observableSubscriptions.push(anChng);
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmMarker-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
}
AgmMarker.ɵfac = function AgmMarker_Factory(t) { return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager)); };
AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMarker, selectors: [["agm-marker"]], contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
    } }, inputs: { draggable: ["markerDraggable", "draggable"], visible: "visible", openInfoWindow: "openInfoWindow", opacity: "opacity", zIndex: "zIndex", clickable: ["markerClickable", "clickable"], latitude: "latitude", longitude: "longitude", title: "title", label: "label", iconUrl: "iconUrl", animation: "animation" }, outputs: { animationChange: "animationChange", markerClick: "markerClick", markerDblClick: "markerDblClick", markerRightClick: "markerRightClick", dragStart: "dragStart", drag: "drag", dragEnd: "dragEnd", mouseOver: "mouseOver", mouseOut: "mouseOut" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmMarker) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmMarker.ctorParameters = () => [
    { type: MarkerManager }
];
AgmMarker.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['markerDraggable',] }],
    iconUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    openInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['markerClickable',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    infoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmInfoWindow,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-marker',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmMarker) },
                ]
            }]
    }], function () { return [{ type: MarkerManager }]; }, { draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerDraggable']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerClickable']
        }], animationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], infoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmInfoWindow]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: LatLngLiteral[] = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: LatLngLiteral[][] = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
class AgmPolygon {
    constructor(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    ngAfterContentInit() {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    }
    ngOnChanges(changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.polyClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.polyDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.polyDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.polyDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.polyDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.polyMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.polyMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.polyMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.polyMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.polyMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.polyRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(paths$ => {
            const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    _updatePolygonOptions(changes) {
        return Object.keys(changes)
            .filter(k => AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    getPath() {
        return this._polygonManager.getPath(this);
    }
    getPaths() {
        return this._polygonManager.getPaths(this);
    }
}
AgmPolygon.ɵfac = function AgmPolygon_Factory(t) { return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager)); };
AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolygon, selectors: [["agm-polygon"]], inputs: { clickable: "clickable", draggable: ["polyDraggable", "draggable"], editable: "editable", geodesic: "geodesic", paths: "paths", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { polyClick: "polyClick", polyDblClick: "polyDblClick", polyDrag: "polyDrag", polyDragEnd: "polyDragEnd", polyDragStart: "polyDragStart", polyMouseDown: "polyMouseDown", polyMouseMove: "polyMouseMove", polyMouseOut: "polyMouseOut", polyMouseOver: "polyMouseOver", polyMouseUp: "polyMouseUp", polyRightClick: "polyRightClick", polyPathsChange: "polyPathsChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible',
];
AgmPolygon.ctorParameters = () => [
    { type: PolygonManager }
];
AgmPolygon.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['polyDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    geodesic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    polyClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyPathsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polygon'
            }]
    }], function () { return [{ type: PolygonManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polyDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], polyClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyPathsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 */
class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
}
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) { return new (t || AgmPolylineIcon)(); };
AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } });
AgmPolylineIcon.propDecorators = {
    fixedRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    repeat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    anchorX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    anchorY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], null, { fixedRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], repeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], anchorX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], anchorY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this.positionChanged.emit({
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            });
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ lat: this.latitude, lng: this.longitude }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(position => ({ latLng: position })));
    }
}
AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) { return new (t || AgmPolylinePoint)(); };
AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolylinePoint, selectors: [["agm-polyline-point"]], inputs: { latitude: "latitude", longitude: "longitude" }, outputs: { positionChanged: "positionChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmPolylinePoint) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolylinePoint.ctorParameters = () => [];
AgmPolylinePoint.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polyline-point',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmPolylinePoint) },
                ]
            }]
    }], function () { return []; }, { positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmPolyline {
    constructor(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */
        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    ngAfterContentInit() {
        if (this.points.length) {
            this.points.forEach((point) => {
                const s = point.positionChanged.subscribe(() => { this._polylineManager.updatePolylinePoints(this); });
                this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        const pointSub = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
        this._subscriptions.push(pointSub);
        this._polylineManager.updatePolylinePoints(this);
        const iconSub = this.iconSequences.changes.subscribe(() => this._polylineManager.updateIconSequences(this));
        this._subscriptions.push(iconSub);
    }
    ngOnChanges(changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach(k => options[k] = changes[k].currentValue);
        this._polylineManager.setPolylineOptions(this, options);
    }
    getPath() {
        return this._polylineManager.getPath(this);
    }
    _init() {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.lineClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.lineDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.lineDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.lineDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.lineDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.lineMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.lineMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.lineMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.lineMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.lineMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.lineRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polylineManager.createPathEventObservable(this).then((ob$) => {
            const os = ob$.subscribe(pathEvent => this.polyPathChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    _getPoints() {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    }
    _getIcons() {
        if (this.iconSequences) {
            return this.iconSequences.toArray();
        }
        return [];
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
}
AgmPolyline.ɵfac = function AgmPolyline_Factory(t) { return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager)); };
AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolyline, selectors: [["agm-polyline"]], contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
    } }, inputs: { clickable: "clickable", draggable: ["polylineDraggable", "draggable"], editable: "editable", geodesic: "geodesic", visible: "visible", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", zIndex: "zIndex" }, outputs: { lineClick: "lineClick", lineDblClick: "lineDblClick", lineDrag: "lineDrag", lineDragEnd: "lineDragEnd", lineDragStart: "lineDragStart", lineMouseDown: "lineMouseDown", lineMouseMove: "lineMouseMove", lineMouseOut: "lineMouseOut", lineMouseOver: "lineMouseOver", lineMouseUp: "lineMouseUp", lineRightClick: "lineRightClick", polyPathChange: "polyPathChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex',
];
AgmPolyline.ctorParameters = () => [
    { type: PolylineManager }
];
AgmPolyline.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['polylineDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    geodesic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    lineClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyPathChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    points: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmPolylinePoint,] }],
    iconSequences: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmPolylineIcon,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polyline'
            }]
    }], function () { return [{ type: PolylineManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polylineDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyPathChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylinePoint]
        }], iconSequences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylineIcon]
        }] }); })();

class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        // tslint:enable: no-string-literal
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
}
AgmRectangle.ɵfac = function AgmRectangle_Factory(t) { return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager)); };
AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmRectangle, selectors: [["agm-rectangle"]], inputs: { clickable: "clickable", draggable: ["rectangleDraggable", "draggable"], editable: "editable", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", north: "north", east: "east", south: "south", west: "west", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { boundsChange: "boundsChange", rectangleClick: "rectangleClick", rectangleDblClick: "rectangleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", rightClick: "rightClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.ctorParameters = () => [
    { type: RectangleManager }
];
AgmRectangle.propDecorators = {
    north: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    east: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    south: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    west: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['rectangleDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    boundsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rectangleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rectangleDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-rectangle'
            }]
    }], function () { return [{ type: RectangleManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['rectangleDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rectangleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], north: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], east: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], south: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], west: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
class AgmTransitLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmTransitLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) { return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager)); };
AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmTransitLayer, selectors: [["agm-transit-layer"]], inputs: { visible: "visible" } });
AgmTransitLayer.ctorParameters = () => [
    { type: LayerManager }
];
AgmTransitLayer.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-transit-layer'
            }]
    }], function () { return [{ type: LayerManager }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @internal
 */
function coreDirectives() {
    return [
        AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmFullscreenControl,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMapTypeControl,
        AgmMarker,
        AgmPanControl,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmRotateControl,
        AgmScaleControl,
        AgmStreetViewControl,
        AgmTransitLayer,
        AgmZoomControl,
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS, { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
            ],
        };
    }
}
AgmCoreModule.ɵfac = function AgmCoreModule_Factory(t) { return new (t || AgmCoreModule)(); };
AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AgmCoreModule });
AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, { declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl], exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{ declarations: coreDirectives(), exports: coreDirectives() }]
    }], null, null); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=agm-core.js.map

/***/ }),

/***/ "pzF/":
/*!**************************************************!*\
  !*** ./src/app/shared/models/calculate.model.ts ***!
  \**************************************************/
/*! exports provided: CalculateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateModel", function() { return CalculateModel; });
class CalculateModel {
}


/***/ }),

/***/ "tkyx":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/booking/booking.page.ts ***!
  \****************************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking.page.html */ "8ydy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-map/booking-map.page */ "yT9f");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/calculate.model */ "pzF/");
/* harmony import */ var src_app_shared_services_apis_priceService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/apis/priceService.service */ "/GfK");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_app_shared_models_calculateAll_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models/calculateAll.model */ "+2KF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");












let BookingPage = class BookingPage {
    constructor(modalController, priceService, msgService, router) {
        this.modalController = modalController;
        this.priceService = priceService;
        this.msgService = msgService;
        this.router = router;
        this.startDate = new Date();
        this.calculateModel = new src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_7__["CalculateModel"]();
        this.borderCheck = "border: 2px solid #34a4b6;";
        this.borderNotCheck = "border: none";
        this.price = new src_app_shared_models_calculateAll_model__WEBPACK_IMPORTED_MODULE_10__["CalculateAllModel"]();
        this.motorcycleNumberkHidden = false;
        this.acceleratorMotorcycleHidden = false;
        this.clutchMotorcycleHidden = false;
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.checkBookingMonthtable();
        this.intDateNow();
        this.motorcycleNumber();
    }
    intDateNow() {
        let dataNow = new Date();
        let minutesNow = dataNow.getMinutes();
        if (minutesNow > 0) {
            // xét phút lớn hơn cộng thêm giờ một đơn vị
            let getDateNow = new Date(dataNow.getFullYear(), dataNow.getMonth(), dataNow.getDate(), dataNow.getHours() + 1);
            if (dataNow.getHours() == 23) {
                let getDateNowMinuteEndDate = new Date(getDateNow.getFullYear(), getDateNow.getMonth(), getDateNow.getDate(), dataNow.getHours() + 1);
                this.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNow).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNow).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNowMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            }
            else {
                let getDateNowMinuteEndDate = new Date(getDateNow.getFullYear(), getDateNow.getMonth(), getDateNow.getDate() + 1, dataNow.getHours() + 1);
                this.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNow).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNow).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateNowMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            }
        }
        else if (minutesNow == 0) {
            let getDateByMinute = new Date(dataNow.getFullYear(), dataNow.getMonth(), dataNow.getDate(), dataNow.getHours());
            let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, dataNow.getHours());
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
        }
        this.startMonths = moment__WEBPACK_IMPORTED_MODULE_6__(dataNow.setMonth(0)).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
    }
    checkBookingDateTable() {
        this.checkBookingMonth = true;
        this.serviceId = 12;
    }
    closeUpdateInfo() {
        this.router.navigate(["/tabs/home"]);
    }
    checkBookingMonthtable() {
        this.checkBookingDate = true;
        this.checkBookingMonth = false;
        this.serviceId = 10;
    }
    bookingMonth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //open modal
            const modal = yield this.modalController.create({
                component: _booking_map_booking_map_page__WEBPACK_IMPORTED_MODULE_5__["BookingMapPage"],
                componentProps: {
                    "dataBoking": this.calculateModel,
                    "month": this.getMonth,
                    "priceVehicle": this.priceVehicle,
                    "vehicleName": this.vehicleName,
                }
            });
            // close modal
            modal.onDidDismiss().then((res) => {
            });
            return yield modal.present();
        });
    }
    changeService(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.serviceId = event.detail.value;
            if (this.serviceId == 12) {
                this.checkBookingDateTable();
            }
            else {
                this.checkBookingMonthtable();
                this.calculateBooking();
            }
        });
    }
    changeStartDate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.checkBookingMonth) {
                this.getDateByStartDate();
            }
            else {
                this.getDateByMonth();
            }
            yield this.calculateBooking();
        });
    }
    //chọn ngày bắt đầu
    getDateByStartDate() {
        const date = new Date(this.startDate);
        let minutesNow = date.getMinutes();
        if (minutesNow > 0) {
            // xét phút lớn hơn cộng thêm giờ một đơn vị
            let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
            if (date.getHours() == 23) {
                let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate(), date.getHours() + 1);
                this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            }
            else {
                let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, date.getHours() + 1);
                this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            }
        }
        else if (minutesNow == 0) {
            let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
            let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth(), getDateByMinute.getDate() + 1, date.getHours());
            this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
        }
    }
    //chọn ngày kêt thúc theo tháng
    getDateByMonth() {
        if (this.startDate) {
            const date = new Date(this.startDate);
            let minutesNow = date.getMinutes();
            let checkMonth = new Date(this.startMonths);
            if (this.startMonths) {
                this.getMonth = checkMonth.getMonth() + 1;
            }
            else {
                this.getMonth = 0;
            }
            if (minutesNow > 0) {
                // xét phút lớn hơn cộng thêm giờ một đơn vị
                let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 1);
                if (date.getHours() == 23) {
                    let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate(), date.getHours() + 1);
                    this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                    this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                }
                else {
                    let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate() + 1, date.getHours() + 1);
                    this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                    this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                }
            }
            else if (minutesNow == 0) {
                let getDateByMinute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
                let getDateByMinuteEndDate = new Date(getDateByMinute.getFullYear(), getDateByMinute.getMonth() + this.getMonth, getDateByMinute.getDate(), date.getHours());
                this.roundingStartDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinute).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(getDateByMinuteEndDate).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
            }
        }
        else {
            this.msgService.error("Vui lòng chọn ngày bắt đầu");
        }
    }
    //chọn ngày kêt thúc theo ngày
    getDateByEndDate() {
        let checkStartDate = Date.parse((new Date(this.startDate)).toString());
        let checkEndDate = Date.parse((new Date(this.endDate)).toString());
        if (checkStartDate < checkEndDate) {
            const date = new Date(this.endDate);
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_6__(date).format(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].formatDateTime);
        }
        else {
            this.msgService.error("Vui lòng chọn ngày kết thúc lớn hơn ngày hiện tại");
        }
        this.calculateBooking();
    }
    motorcycleNumber() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vehicleTypeId = 16;
            this.borderMotorcycleNumber = this.borderCheck;
            this.borderAcceleratorMotorcycle = this.borderNotCheck;
            this.borderClutchMotorcycle = this.borderNotCheck;
            yield this.calculateBooking();
            this.priceVehicle = this.priceMotorcycleNumber;
            this.vehicleName = "Xe số";
        });
    }
    acceleratorMotorcycle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vehicleTypeId = 17;
            this.borderAcceleratorMotorcycle = this.borderCheck;
            this.borderMotorcycleNumber = this.borderNotCheck;
            this.borderClutchMotorcycle = this.borderNotCheck;
            yield this.calculateBooking();
            this.priceVehicle = this.priceAcceleratorMotorcycle;
            this.vehicleName = "Xe ga";
        });
    }
    clutchMotorcycle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vehicleTypeId = 18;
            this.borderClutchMotorcycle = this.borderCheck;
            this.borderAcceleratorMotorcycle = this.borderNotCheck;
            this.borderMotorcycleNumber = this.borderNotCheck;
            yield this.calculateBooking();
            this.priceVehicle = this.priceClutchMotorcycle;
            this.vehicleName = "Xe côn";
        });
    }
    calculateBooking() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.calculateModel.serviceId = this.serviceId;
            this.calculateModel.startDate = this.roundingStartDate;
            this.calculateModel.endDate = this.endDate;
            this.calculateModel.vehicleTypeId = this.vehicleTypeId;
            let res = yield this.priceService.calculateAll(this.calculateModel);
            if (res.data.length > 0) {
                this.price = res.data;
                this.laodPriceVehicle(this.price);
                this.checkPriceVehicle();
            }
            else {
                this.priceMotorcycleNumber = 0;
                this.priceAcceleratorMotorcycle = 0;
                this.priceClutchMotorcycle = 0;
                this.priceVehicle = 0;
                this.msgService.error(res.message || "Không tìm thấy bảng giá đặt xe");
            }
        });
    }
    loadPriceCompleted(item) {
    }
    //hiển thị bảng giá cho từng loại xe
    laodPriceVehicle(price) {
        for (let i = 0; i < price.length; i++) {
            if (price[i].vehicleTypeId == 16) {
                this.priceMotorcycleNumber = price[i].price ? this.formatMoney(price[i].price) : 0;
            }
            else if (price[i].vehicleTypeId == 17) {
                this.priceAcceleratorMotorcycle = price[i].price ? this.formatMoney(price[i].price) : 0;
            }
            else if (price[i].vehicleTypeId == 18) {
                this.priceClutchMotorcycle = price[i].price ? this.formatMoney(price[i].price) : 0;
            }
        }
    }
    checkPriceVehicle() {
        if (!this.priceMotorcycleNumber) {
            this.motorcycleNumberkHidden = true;
        }
        if (!this.priceAcceleratorMotorcycle) {
            this.acceleratorMotorcycleHidden = true;
        }
        if (!this.priceClutchMotorcycle) {
            this.clutchMotorcycleHidden = true;
        }
    }
    calculateBookingMap() {
        this.bookingMonth();
    }
    formatMoney(item) {
        let money = parseInt(item);
        return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
};
BookingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_shared_services_apis_priceService_service__WEBPACK_IMPORTED_MODULE_8__["PriceService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_9__["MsgService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
BookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking',
        template: _raw_loader_booking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BookingPage);



/***/ }),

/***/ "uORk":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/booking/booking-completed/booking-completed.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"otp-container\">\r\n  <ion-row class=\"otp-header\">\r\n      <ion-toolbar class=\"update-toolbar\">\r\n        <ion-icon name=\"arrow-back\" slot=\"start\" (click)=\"closeUpdateInfo()\"></ion-icon>\r\n        <p class=\"text-booking\">{{'booking.booking' | translate}}</p>\r\n      </ion-toolbar>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.packagetype' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\" detail>\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-select [disabled]=\"true\" class=\"booking-select\" value=\"{{serviceId}}\" [interfaceOptions]=\"customAlertOptions\" cancelText=\"Đóng\" okText=\"Chọn\">\r\n          <ion-select-option value=\"10\">Theo ngày</ion-select-option>\r\n          <ion-select-option value=\"12\">Theo tháng</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.startingTime' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startDate\"  class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n     \r\n    <ion-col *ngIf=\"checkBookingMonth\">\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.numberOfMonths' | translate}}</label>\r\n      </ion-col>\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [disabled]=\"true\" [(ngModel)]=\"startMonths\" class=\"booking-datetime\" displayFormat=\"MM\" placeholder=\"{{'booking.today' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.Endtime' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-datetime [(ngModel)]=\"endDate\" disabled class=\"booking-datetime\" displayFormat=\"DD/MM/YYYY HH:mm\" placeholder=\"{{'booking.Endtime' | translate}}\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.selectVehicleType' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/vehicle.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{vehicleName}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-col>\r\n        <label class=\"booking-label\">{{'booking.VehicleDeliveryAddress' | translate}}</label>\r\n      </ion-col>\r\n\r\n      <ion-item class=\"booking-input\">\r\n        <ion-img style=\"padding-right: 8px;\" src=\"../../../assets/icon/icon_booking_date.svg\" class=\"pr-10\"></ion-img>\r\n        <ion-input style=\"text-overflow: ellipsis;\" disabled class=\"booking-datetime\">{{address}}</ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-row>\r\n          <ion-col>\r\n            <label class=\"booking-label\">{{'booking.Intomoney' | translate}}</label>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <label class=\"booking-total-money\">{{priceTable}}</label>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"signup-btn\" style=\"padding-top: 16px;\">\r\n    <ion-button fill=\"clear\" class=\"btn-login\" (click)=\"bookingsSuccess()\">\r\n        <p>{{'booking.Completed' | translate}}</p>\r\n      </ion-button>\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "yT9f":
/*!********************************************************************!*\
  !*** ./src/app/pages/tabs/booking/booking-map/booking-map.page.ts ***!
  \********************************************************************/
/*! exports provided: BookingMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingMapPage", function() { return BookingMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-map.page.html */ "etAH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _booking_completed_booking_completed_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booking-completed/booking-completed.page */ "g6ax");
/* harmony import */ var src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/calculate.model */ "pzF/");
/* harmony import */ var src_app_shared_infrastructure_gmap_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/infrastructure/gmap.helper */ "+2Hc");
/* harmony import */ var src_app_shared_services_apis_district_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/apis/district.service */ "+e7T");
/* harmony import */ var src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/locals/msg-message.service */ "6bWp");
/* harmony import */ var src_app_shared_models_filterModel_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/filterModel.model */ "GkRt");










let BookingMapPage = class BookingMapPage {
    constructor(modalController, navCtrl, platform, zone, navParams, districtService, msgService) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.zone = zone;
        this.navParams = navParams;
        this.districtService = districtService;
        this.msgService = msgService;
        this.options = {
            types: [],
            componentRestrictions: { country: 'VN' }
        };
        this.title = 'My first AGM project';
        this.height = 0;
        this.geocoder = new google.maps.Geocoder();
        this.dataBookingModel = new src_app_shared_models_calculate_model__WEBPACK_IMPORTED_MODULE_5__["CalculateModel"]();
        this.filterModel = new src_app_shared_models_filterModel_model__WEBPACK_IMPORTED_MODULE_9__["FilterModel"]();
        this.height = platform.height() - 56;
        this.dataBookingModel = this.navParams.get('dataBoking');
        this.startMonths = this.navParams.get('month');
        this.priceVehicle = this.navParams.get('priceVehicle');
        this.vehicleName = this.navParams.get('vehicleName');
    }
    ngOnInit() {
        this.intData();
    }
    intData() {
        this.setCurrentPosition();
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    closeUpdateInfo() {
        this.modalController.dismiss();
    }
    bookingMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.inputAddress) {
                this.closeUpdateInfo();
                //open modal
                const modal = yield this.modalController.create({
                    component: _booking_completed_booking_completed_page__WEBPACK_IMPORTED_MODULE_4__["BookingCompletedPage"],
                    componentProps: {
                        "address": this.inputAddress,
                        "dataBoking": this.dataBookingModel,
                        "month": this.startMonths,
                        "priceVehicle": this.priceVehicle,
                        "vehicleName": this.vehicleName,
                    }
                });
                // close modal
                modal.onDidDismiss().then((res) => {
                });
                return yield modal.present();
            }
            else {
                this.msgService.error("Vui lòng chọn khu vực phụ vụ");
            }
        });
    }
    handleAddressChange(address, inputAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedAddressItem(address, inputAddress);
        });
    }
    selectedAddressItem(prediction, inputAddress) {
        if (inputAddress.id === 'address') {
            this.inputAddress = prediction.formatted_address;
        }
        this.geocoder.geocode({ placeId: prediction.place_id }, (resultsPlaceId, statusPlaceId) => {
            if (statusPlaceId === 'OK' && resultsPlaceId[0]) {
                const latlng = resultsPlaceId[0].geometry.location;
                this.geocoder.geocode({ placeId: resultsPlaceId[0].place_id }, (resultsLatLng, statusLatLng) => {
                    if (statusLatLng === 'OK' && resultsLatLng[0]) {
                        this.loadInitMap(resultsLatLng, inputAddress);
                    }
                });
            }
        });
    }
    loadInitMap(resultsLatLng, inputAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const results = resultsLatLng[0];
            this.lat = null;
            this.lng = null;
            this.setCurrentPositionOutPut(results.geometry.location.lat(), results.geometry.location.lng());
            let provinceName;
            let districtName;
            results.address_components.map(element => {
                //
                if (element.types.indexOf(src_app_shared_infrastructure_gmap_helper__WEBPACK_IMPORTED_MODULE_6__["GMapHelper"].ADMINISTRATIVE_AREA_LEVEL_1) !== -1) {
                    provinceName = element.long_name;
                }
                else if (element.types.indexOf(src_app_shared_infrastructure_gmap_helper__WEBPACK_IMPORTED_MODULE_6__["GMapHelper"].ADMINISTRATIVE_AREA_LEVEL_2) !== -1) {
                    districtName = element.long_name;
                }
                else if (element.types.indexOf(src_app_shared_infrastructure_gmap_helper__WEBPACK_IMPORTED_MODULE_6__["GMapHelper"].LOCALITY) !== -1
                    && element.types.indexOf(src_app_shared_infrastructure_gmap_helper__WEBPACK_IMPORTED_MODULE_6__["GMapHelper"].ADMINISTRATIVE_AREA_LEVEL_2) === -1) {
                    districtName = element.long_name;
                }
            });
            if (inputAddress.id === 'address') {
                this.zone.run(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (districtName == "Thành phố Đà Lạt" || districtName == "Dalat") {
                        this.filterModel.PageNumber = 1;
                        this.filterModel.PageSize = 1;
                        this.filterModel.SearchText = "Đà Lạt";
                        const res = yield this.districtService.getDistrictByNameDaLat(this.filterModel);
                        if (res.data.length == 0 || res.data[0].id != 1215) {
                            this.checkDistrictDaLat();
                        }
                    }
                    else {
                        this.checkDistrictDaLat();
                    }
                }));
            }
        });
    }
    checkDistrictDaLat() {
        this.inputAddress = null;
        this.lat = null;
        this.lng = null;
        this.msgService.error("Vui lòng chọn khu vực phụ vụ Đà lạt");
        return;
    }
    setCurrentPositionOutPut(itemLat, itemLng) {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = itemLat;
                this.lng = itemLng;
            });
        }
    }
};
BookingMapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: src_app_shared_services_apis_district_service__WEBPACK_IMPORTED_MODULE_7__["DistrictService"] },
    { type: src_app_shared_services_locals_msg_message_service__WEBPACK_IMPORTED_MODULE_8__["MsgService"] }
];
BookingMapPage.propDecorators = {
    placesRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['placesRef',] }]
};
BookingMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking-map',
        template: _raw_loader_booking_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], BookingMapPage);



/***/ })

}]);
//# sourceMappingURL=booking-booking-module.js.map