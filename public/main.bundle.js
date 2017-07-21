webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_all_all_component__ = __webpack_require__("../../../../../src/app/components/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__ = __webpack_require__("../../../../../src/app/components/find/find.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_update_update_component__ = __webpack_require__("../../../../../src/app/components/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_updated_updated_component__ = __webpack_require__("../../../../../src/app/components/updated/updated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'find', component: __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__["a" /* FindComponent */] },
    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_14__components_all_all_component__["a" /* AllComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'all/:user', component: __WEBPACK_IMPORTED_MODULE_14__components_all_all_component__["a" /* AllComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'update', component: __WEBPACK_IMPORTED_MODULE_16__components_update_update_component__["a" /* UpdateComponent */] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_update_update_component__["a" /* UpdateComponent */] },
    { path: 'updated', component: __WEBPACK_IMPORTED_MODULE_17__components_updated_updated_component__["a" /* UpdatedComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_all_all_component__["a" /* AllComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_find_find_component__["a" /* FindComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_update_update_component__["a" /* UpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_updated_updated_component__["a" /* UpdatedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_storage_service__["a" /* StorageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/all/all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nh2 {\r\n  cursor: pointer; \r\n  cursor: hand;\r\n}\r\n\r\n.label-padding{\r\n  padding:9px;\r\n  margin:0px;  \r\n}\r\n\r\n.header-margin{\r\n  margin:20px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"result\" class=\"col-md-7 col-md-offset-3\">\r\n    \r\n  <div *ngFor=\"let client of result, let i = index\" >\r\n    \r\n    <h2 class=\"page-header col-sm-12 header-margin\" (click)=\"clicked(clint,i)\">{{client.firstname}} {{client.lastname}}</h2>\r\n    <div  [@clientState]=\"client.state || 'hide'\">\r\n    \r\n        <label  for=\"policy\" class=\"col-sm-2 control-label label-padding\">Polisa:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\" name=\"policy\">\r\n            {{client.policy.describe}}\r\n        </div>    \r\n    \r\n        <label  for=\"value\" class=\"col-sm-2 control-label label-padding\">Vrednost:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.policy.value}}\r\n        </div>\r\n\r\n        <label  for=\"payday\" class=\"col-sm-2 control-label label-padding\">Dan uplate:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.policy.payday}}\r\n        </div>\r\n    \r\n        <label  for=\"warning\" class=\"col-sm-2 control-label label-padding\">Upozorenje:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.policy.warning}}\r\n        </div>\r\n\r\n        <label  for=\"recommendation\" class=\"col-sm-2 control-label label-padding\">Preporuka:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.recommendation}}\r\n        </div>\r\n\r\n        <label  for=\"phone\" class=\"col-sm-2 control-label label-padding\">Telefon:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.phone}}\r\n        </div>\r\n        <label  for=\"city\" class=\"col-sm-2 control-label label-padding\">Grad:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.address.city}}\r\n        </div>\r\n\r\n        <label  for=\"payday\" class=\"col-sm-2 control-label label-padding\">Ulica:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.address.street}}\r\n        </div>\r\n\r\n        <label  for=\"note\" class=\"col-sm-2 control-label label-padding\">Zabeleska:</label>\r\n        <div class=\"col-sm-9 well well-sm white field-margin\">\r\n            {{client.note}}\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllComponent = (function () {
    function AllComponent(authService, router, route, storageService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.storageService = storageService;
        this.client = {
            state: "hide"
        };
    }
    //  const id = this.route.snapshot.params['id']
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.owner = this.storageService.getStorage();
        this.authService.getAll(this.owner)
            .subscribe(function (result) { return _this.result = result; });
    };
    AllComponent.prototype.clicked = function (client, index) {
        this.result[index].state = (this.result[index].state === 'show' ? 'hide' : 'show');
    };
    return AllComponent;
}());
AllComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-all',
        template: __webpack_require__("../../../../../src/app/components/all/all.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/all/all.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('clientState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(+100%)',
                    display: 'none',
                    opacity: '0'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    transform: 'translateY(0)',
                    display: 'block',
                    opacity: '1'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('hide => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('show => hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])('300ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
], AllComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=all.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".move-left {\r\n    \r\n    width: 100%;\r\n    float:right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 col-lg-offset-2\"> \n<form class=\"form-horizontal\" (submit)=\"onAddSubmit()\">\n  \n  <fieldset>\n      <h2 class=\"page-header\">DODAJ KLIJENTA</h2>\n      \n      <div class=\"form-group\">\n        <label for=\"firstname\" class=\"col-sm-2 control-label text-left\">Ime</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"Ime\">\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\" class=\"col-sm-2 control-label text-left\">Prezime</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\" id=\"lastname\" placeholder=\"Prezime\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phone\" class=\"col-sm-2 control-label \">Telefon</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" class=\"form-control\" id=\"phone\" placeholder=\"Telefon\">      \n    </div>    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"street\" class=\"col-sm-2 control-label \">Ulica</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"street\" name=\"street\" class=\"form-control\" id=\"street\" placeholder=\"Ulica\">      \n    </div>    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"city\" class=\"col-sm-2 control-label \">Grad</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"form-control\" id=\"city\" placeholder=\"Grad\">      \n    </div>    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"describe\" class=\"col-sm-2 control-label \">Polisa</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"describe\" name=\"describe\" class=\"form-control\" id=\"describe\" placeholder=\"Polisa\">      \n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"value\" class=\"col-sm-2 control-label \">Vrednost</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"value\" name=\"value\" class=\"form-control\" id=\"value\" placeholder=\"Vrednost\">      \n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"payday\" class=\"col-sm-2 control-label \">Dan uplate</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"payday\" name=\"payday\" class=\"form-control\" id=\"payday\" placeholder=\"Dan uplate\">      \n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"warning\" class=\"col-sm-2 control-label \">Upozorenje</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"warning\" name=\"warning\" class=\"form-control\" id=\"warning\" placeholder=\"Upozorenje\">      \n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"recommendation\" class=\"col-sm-2 control-label \">Preporuka</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"recommendation\" name=\"recommendation\" class=\"form-control\" id=\"recommendation\" placeholder=\"Preporuka\">      \n    </div>    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"note\" class=\"col-sm-2 control-label \">Zabeleska</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"note\" name=\"note\" class=\"form-control\" id=\"note\" placeholder=\"Zabeleska\">      \n    </div>    \n    </div>        \n  </fieldset>\n  <div>\n    <input type=\"submit\" class=\"btn btn-primary center-block\">\n  </div>  \n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(validateService, authService, flashMessage, router, storageService) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.storageService = storageService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.owner = this.storageService.getStorage();
    };
    DashboardComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var client = {
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            street: this.street,
            city: this.city,
            describe: this.describe,
            value: this.value,
            payday: this.payday,
            warning: this.warning,
            recommendation: this.recommendation,
            note: this.note,
            owner: this.owner
        };
        this.authService.addClient(client).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('User added', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/all/' + _this.owner]);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/find/find.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hand {\r\n  cursor: pointer; \r\n  cursor: hand;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/find/find.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"col-md-8 col-md-offset-2\"> \n<form class=\"form-horizontal\" (submit)=\"onFindSubmit()\">\n  \n  <fieldset>\n      <h2 class=\"page-header\">PRETRAGA KLIJENATA</h2>\n      \n      <div class=\"form-group\">\n        <label for=\"firstname\" class=\"col-sm-2 control-label text-left\">Ime</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"Ime\">\n        </div>\n      </div>\n          \n  </fieldset>\n  <div>\n    <input type=\"submit\" value=\"  Trazi   \"\n    class=\"btn btn-primary center-block\"\n    \n    >\n  </div>  \n</form>\n</div>\n<div *ngIf=\"result\">\n \n<div *ngFor=\"let client of result\" [@itemAnim]> \n   <h2 class=\"page-header col-md-8 col-md-offset-3\" >{{client.firstname}} {{client.lastname}}</h2>\n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin \">\n        Polisa:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.policy.describe}}\n      </div>\n    </div>\n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Vrednost:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.policy.value}}\n      </div>\n    </div>\n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Dan uplate:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.policy.payday}}\n      </div>\n    </div>\n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Upozorenje:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.policy.warning}}\n      </div>\n    </div>\n      <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Preporuka:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.recommendation}}\n      </div>\n    </div>  \n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Telefon:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.phone}}\n      </div>\n    </div>\n    \n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Grad:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.address.city}}\n      </div>\n    </div>\n    \n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Ulica:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.address.street}}\n      </div>\n    </div>\n      \n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        Zabeleska:\n      </div>\n      <div class=\"col-md-6 well well-sm white field-margin\">\n         {{client.note}}\n      </div>\n    </div>\n    <div class=\"col-md-8 col-md-offset-3\"> \n      <div class=\"col-md-2 well well-sm black field-margin\">\n        id:\n      </div>\n      <div class=\"col-md-6 well well-sm hand white field-margin\" (click)=\"onSelect(client)\"\n      data-toggle=\"tooltip\" data-placement=\"top\" title=\"Izmeni Klijenta\"\n      >\n         {{client._id}}         \n      </div>\n          \n    </div>\n  \n</div>\n</div>\n</div>\n<script>\n  $(document).ready(function(){\n      $('[data-toggle=\"tooltip\"]').tooltip() \n      }) \n  </script>\n"

/***/ }),

/***/ "../../../../../src/app/components/find/find.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindComponent = (function () {
    function FindComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent.prototype.onFindSubmit = function () {
        var _this = this;
        var search = {
            firstname: this.firstname
        };
        this.authService.postFind(search)
            .subscribe(function (result) { return _this.result = result; });
    };
    FindComponent.prototype.onSelect = function (client) {
        //  console.log(client._id)
        this.router.navigate(['/update', client._id]);
    };
    FindComponent.prototype.ngAfterViewInit = function () {
    };
    return FindComponent;
}());
FindComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-find',
        template: __webpack_require__("../../../../../src/app/components/find/find.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/find/find.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('itemAnim', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])(350)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])('0.2s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                            transform: 'translate(1150px,25px)'
                        })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])('0.5s 0.2s ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                            opacity: 0
                        }))
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FindComponent);

var _a, _b;
//# sourceMappingURL=find.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron text-center\">\n  <h1>GENERALI Životno Osiguranje</h1>\n  <p class=\"lead\">Baza podataka osiguranika</p> \n  <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Regstruj se</a>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Loguj se</a>\n</div>\n<div class=\"container miidle-top\">\n  <div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n      <h3>Jedinstvena baza osiguranika</h3>\n      <p>Sve na jednom mestu</p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n      <h3>Bezbednost podataka</h3>\n      <p>Sigurnost zagarantovana</p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n      <h3>Maksimalna brzina odziva</h3>\n      <p>Brzo i efikasno</p>\n    </div>    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"onLoginSubmit()\">\n  <fieldset>\n    <legend>Logovanje</legend>\n      <div class=\"form-group\">\n      <label for=\"inputUsername\" class=\"col-sm-2 control-label text-left\">Username</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"col-sm-2 control-label \">Password</label>\n      <div class=\"col-sm-8\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">      \n    </div>    \n    </div>    \n  </fieldset>\n  <div>\n    <input type=\"submit\" class=\"btn btn-primary center-block\">\n  </div>  \n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router, storageService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.storageService = storageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are loged in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.storageService.getStorage();
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">GENERALI</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/']\">Home</a></li>                      \n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n             <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/all']\" (click)=\"Refresh()\">Klijenti</a></li>\n             <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/find']\">Trazi</a></li>\n             <!--<li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/search']\">Proba</a></li>  -->\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/profile']\">Profile</a></li>            \n            <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/login']\">LogIn</a></li>\n            <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogoutClick()\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router, storageService) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.storageService = storageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.owner = this.storageService.getStorage();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.storageService.getStorage();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"\"list-group>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>    \n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" (submit)=\"onRegisterSubmit()\">\n  <fieldset>\n    <legend>Registracija</legend>\n     <div class=\"form-group\">\n      <label for=\"inputName\" class=\"col-sm-2 control-label\">Name</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputUsername\" class=\"col-sm-2 control-label text-left\">Username</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\" id=\"inputUsername\" placeholder=\"Username\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"col-sm-2 control-label \">Password</label>\n      <div class=\"col-sm-8\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">      \n    </div>    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n      </div>\n    </div>   \n  </fieldset>\n  <div>\n    <input type=\"submit\" class=\"btn btn-primary center-block\">\n  </div>\n  \n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            password: this.password,
            email: this.email
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email //
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email address', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // register User //
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now reistered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.white {\r\n background-color: white;\r\n color:black;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"client\">\n\n  <h2 class=\"page-header col-lg-8 col-lg-offset-3\">{{client.firstname}} {{client.lastname}}</h2>\n  \n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Telefon:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.phone}}\n      </div>\n    </div>\n    \n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Grad:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.city}}\n      </div>\n    </div>\n    \n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Ulica:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.street}}\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Polisa:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.describe}}\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Vrefnost:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.value}}\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Dan uplate:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.payday}}\n      </div>\n    </div><div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Upozorenje:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.warning}}\n      </div>\n    </div><div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Preporuka:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.recommendation}}\n      </div>\n    </div>    \n    <div class=\"col-lg-8 col-lg-offset-3\"> \n      <div class=\"col-lg-2 well well-sm white\">\n        Zabeleska:\n      </div>\n      <div class=\"col-lg-6 well well-sm white\">\n         {{client.note}}\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getSearch().subscribe(function (data) {
            _this.client = data.client;
            _this.client.firstname = data.client.firstname;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8 col-lg-offset-2\">\r\n<form [formGroup]=\"updateForm\" class=\"form-horizontal\" \r\n (submit)=\"onSubmit()\" novalidate>\r\n  <fieldset>\r\n    <h2 class=\"page-header\">PROMENI PODATKE</h2>\r\n    <div *ngIf=\"result\">  \r\n    <div *ngFor=\"let client of result\">\r\n      <div class=\"form-group\">\r\n        <label  class=\"col-sm-2 control-label text-left\">Ime</label>\r\n        <div class=\"col-sm-8\">\r\n          <input class=\"form-control\"  formControlName=\"firstname\">          \r\n        </div>\r\n         <!--<div [hidden]=\"firstname.valid || firstname.pristine\"\r\n             class=\"alert alert-danger\">\r\n          Name is required\r\n        </div>-->\r\n       \r\n      </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lastname\" class=\"col-sm-2 control-label text-left\">Prezime</label>\r\n      <div class=\"col-sm-8\">      \r\n        <input class=\"form-control\" formControlName=\"lastname\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\" class=\"col-sm-2 control-label \">Telefon</label>\r\n      <div class=\"col-sm-8\">\r\n        <input formControlName=\"phone\" class=\"form-control\">      \r\n      </div>    \r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"address\">\r\n      <label for=\"street\" class=\"col-sm-2 control-label \">Ulica</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"street\">      \r\n      </div>    \r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"address\">\r\n      <label for=\"city\" class=\"col-sm-2 control-label \">Grad</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"city\">      \r\n    </div>    \r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"policy\">\r\n      <label for=\"describe\" class=\"col-sm-2 control-label \">Polisa</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"describe\">      \r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"policy\">\r\n      <label for=\"values\" class=\"col-sm-2 control-label \">Vrednost</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"values\">      \r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"policy\">\r\n      <label for=\"payday\" class=\"col-sm-2 control-label \">Dan uplate</label>\r\n      <div class=\"col-sm-8\">\r\n      <input class=\"form-control\"  formControlName=\"payday\">      \r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" formGroupName=\"policy\">\r\n      <label for=\"warning\" class=\"col-sm-2 control-label \">Upozorenje</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"warning\">      \r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"recommendation\" class=\"col-sm-2 control-label \">Preporuka</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"recommendation\">      \r\n    </div>    \r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"note\" class=\"col-sm-2 control-label \">Zabeleska</label>\r\n      <div class=\"col-sm-8\">\r\n        <input class=\"form-control\" formControlName=\"note\">      \r\n        <input id=\"clientID\" type=\"hidden\" class=\"form-control\" formControlName=\"id\">      \r\n        \r\n    </div>    \r\n    </div> \r\n    </div>\r\n    </div>        \r\n  </fieldset>\r\n  <div> \r\n   \r\n   <input type=\"submit\" value=\"Promeni\" class=\"btn btn-primary center-block\">\r\n   \r\n  </div> \r\n \r\n</form>\r\n<br>\r\n<button id=\"delete\"  class=\"btn btn-primary center-block btn-danger\" (click)=deleteClient()>Obrisi Korisnika</button>\r\n <!--<script>\r\n  $(document).ready(function(){\r\n    $('#delete').click( function(){\r\n       alert(\"The paragraph was clicked.\");\r\n      // const id = $('#idClient').val()\r\n      // console.log(id)   \r\n  // $.ajax({\r\n  //   type: 'DELETE',\r\n  //   url:'/update/' + id,\r\n  //   success: function(response){\r\n\r\n  //   }\r\n  // })\r\n  })\r\n  }) \r\n</script> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateComponent = (function () {
    function UpdateComponent(authService, route, router, fb, flashMessage, http, storageService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.flashMessage = flashMessage;
        this.http = http;
        this.storageService = storageService;
        this.createForm();
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent.prototype.createForm = function () {
        var _this = this;
        this.updateForm = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            lastname: '',
            phone: '',
            address: this.fb.group({
                street: '',
                city: ''
            }),
            policy: this.fb.group({
                describe: '',
                values: '',
                payday: '',
                warning: ''
            }),
            recommendation: '',
            note: '',
            id: ''
        });
        var id = this.route.snapshot.params['id'];
        this.authService.getUpdate(id)
            .subscribe(function (res) {
            _this.result = res;
            _this.updateForm.patchValue({
                firstname: _this.result[0].firstname,
                lastname: _this.result[0].lastname,
                phone: _this.result[0].phone,
                address: {
                    street: _this.result[0].address.street,
                    city: _this.result[0].address.city
                },
                policy: {
                    describe: _this.result[0].policy.describe,
                    values: _this.result[0].policy.value,
                    payday: _this.result[0].policy.payday,
                    warning: _this.result[0].policy.warning
                },
                recommendation: _this.result[0].recommendation,
                note: _this.result[0].note,
                id: id
            });
        });
    };
    UpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var firstname2 = this.updateForm.get('firstname');
        var lastname2 = this.updateForm.get('lastname');
        var phone2 = this.updateForm.get('phone');
        var street2 = this.updateForm.get('address.street');
        var city2 = this.updateForm.get('address.city');
        var describe2 = this.updateForm.get('policy.describe');
        var values2 = this.updateForm.get('policy.values');
        var warning2 = this.updateForm.get('policy.warning');
        var payday2 = this.updateForm.get('policy.payday');
        var recommendation2 = this.updateForm.get('recommendation');
        var note2 = this.updateForm.get('note');
        var newClient = {
            firstname: firstname2.value,
            lastname: lastname2.value,
            phone: phone2.value,
            street: street2.value,
            city: city2.value,
            describe: describe2.value,
            values: values2.value,
            warning: warning2.value,
            payday: payday2.value,
            recommendation: recommendation2.value,
            note: note2.value,
            owner: this.storageService.getStorage(),
            _id: id
        };
        this.authService.updateClient(id, newClient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Promenjeni podaci', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/all/']);
            }
            else {
                _this.flashMessage.show('Promena nije uspela', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    UpdateComponent.prototype.deleteClient = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var success = Boolean;
        this.http.delete('http://localhost:3000/clients/update/' + id).subscribe(function (res) {
            if (res.status) {
                _this.flashMessage.show('Obrisan Korisnik', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/all/']);
            }
            else {
                _this.flashMessage.show('Brisanje nije uspelo', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return UpdateComponent;
}());
UpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update',
        template: __webpack_require__("../../../../../src/app/components/update/update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/update/update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_storage_service__["a" /* StorageService */]) === "function" && _g || Object])
], UpdateComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=update.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/updated/updated.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/updated/updated.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-lg-8 col-lg-offset-2\"> \n<!--<form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #updated=\"ngForm\"  >-->\n <form [formGroup]=\"updateForm\" class=\"form-horizontal\" \n (submit)=\"onSubmit2()\" novalidate>\n  <fieldset>\n    <h2 class=\"page-header\">PROMENI PODATKE</h2>\n    <div *ngFor=\"let client of result\">\n      <div class=\"form-group\">\n        <label  class=\"col-sm-2 control-label text-left\">Ime</label>\n        <div class=\"col-sm-8\">\n          <input class=\"form-control\"  formControlName=\"firstname\">          \n        </div>\n         <!--<div [hidden]=\"firstname.valid || firstname.pristine\"\n             class=\"alert alert-danger\">\n          Name is required\n        </div>-->\n       \n      </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastname\" class=\"col-sm-2 control-label text-left\">Prezime</label>\n      <div class=\"col-sm-8\">      \n        <input class=\"form-control\" formControlName=\"lastname\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\" class=\"col-sm-2 control-label \">Telefon</label>\n      <div class=\"col-sm-8\">\n        <input formControlName=\"phone\" class=\"form-control\">      \n      </div>    \n    </div>\n\n    <div class=\"form-group\" formGroupName=\"address\">\n      <label for=\"street\" class=\"col-sm-2 control-label \">Ulica</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"street\">      \n      </div>    \n    </div>\n\n    <div class=\"form-group\" formGroupName=\"address\">\n      <label for=\"city\" class=\"col-sm-2 control-label \">Grad</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"city\">      \n    </div>    \n    </div>\n\n    <div class=\"form-group\" formGroupName=\"policy\">\n      <label for=\"describe\" class=\"col-sm-2 control-label \">Polisa</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"describe\">      \n    </div>\n    </div>\n\n    <div class=\"form-group\" formGroupName=\"policy\">\n      <label for=\"values\" class=\"col-sm-2 control-label \">Vrednost</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"values\">      \n    </div>\n    </div>\n\n    <div class=\"form-group\" formGroupName=\"policy\">\n      <label for=\"payday\" class=\"col-sm-2 control-label \">Dan uplate</label>\n      <div class=\"col-sm-8\">\n      <input class=\"form-control\"  formControlName=\"payday\">      \n    </div>\n    </div>\n\n    <div class=\"form-group\" formGroupName=\"policy\">\n      <label for=\"warning\" class=\"col-sm-2 control-label \">Upozorenje</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"warning\">      \n    </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"recommendation\" class=\"col-sm-2 control-label \">Preporuka</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"recommendation\">      \n    </div>    \n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"note\" class=\"col-sm-2 control-label \">Zabeleska</label>\n      <div class=\"col-sm-8\">\n        <input class=\"form-control\" formControlName=\"note\">      \n    </div>    \n    </div> \n    </div>       \n  </fieldset>\n  <div> \n   \n   <input type=\"submit\" class=\"btn btn-primary center-block\">\n  \n  </div>  \n</form>\n</div>\n<p>Form value: {{ updateForm.value | json }}</p>\n<p>Form status: {{ updateForm.status | json }}</p>\n<p>Name value: {{ updateForm.get('firstname').value }}</p>\n<p>Street value: {{ updateForm.get('address.street').value}}</p>\n <button (click)=\"onSubmit2(result)\" class=\"btn btn-primary\">change</button>\n\n<!--<h2>Hero Detail</h2>\n<h3><i>FormControl in a FormGroup</i></h3>\n<form [formGroup]=\"updateForm\" novalidate>\n  <div class=\"form-group\">\n    <label class=\"center-block\">Name:\n      <input class=\"form-control\" formControlName=\"firstname\">\n    </label>\n  </div>\n</form>\n<p>Form value: {{ updateForm.value | json }}</p>\n<p>Form status: {{ updateForm.status | json }}</p>-->"

/***/ }),

/***/ "../../../../../src/app/components/updated/updated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatedComponent = (function () {
    function UpdatedComponent(authService, route, flashMessage, router, fb) {
        this.authService = authService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    UpdatedComponent.prototype.ngOnInit = function () {
        var id = "591eb767013c380b5cf7deaf";
    };
    UpdatedComponent.prototype.createForm = function () {
        var _this = this;
        this.updateForm = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            lastname: '',
            phone: '',
            address: this.fb.group({
                street: '',
                city: ''
            }),
            policy: this.fb.group({
                describe: '',
                values: '',
                payday: '',
                warning: ''
            }),
            recommendation: '',
            note: '',
        });
        var id = "591eb767013c380b5cf7deaf";
        this.authService.getUpdate(id)
            .subscribe(function (res) {
            // console.log(res),
            _this.result = res;
            // console.log(this.result[0].firstname),
            // console.log(this.result[0].address.street)
            _this.updateForm.patchValue({
                firstname: _this.result[0].firstname,
                lastname: _this.result[0].lastname,
                phone: _this.result[0].phone,
                address: {
                    street: _this.result[0].address.street,
                    city: _this.result[0].address.city
                },
                policy: {
                    describe: _this.result[0].policy.describe,
                    values: _this.result[0].policy.value,
                    payday: _this.result[0].policy.payday,
                    warning: _this.result[0].policy.warning
                },
                recommendation: _this.result[0].recommendation,
                note: _this.result[0].note,
            });
        });
    };
    UpdatedComponent.prototype.onSubmit2 = function (client) {
        var _this = this;
        var firstname2 = this.updateForm.get('firstname');
        var lastname2 = this.updateForm.get('lastname');
        var phone2 = this.updateForm.get('phone');
        var street2 = this.updateForm.get('address.street');
        var city2 = this.updateForm.get('address.city');
        var describe2 = this.updateForm.get('policy.describe');
        var values2 = this.updateForm.get('policy.values');
        var warning2 = this.updateForm.get('policy.warning');
        var payday2 = this.updateForm.get('policy.payday');
        var recommendation2 = this.updateForm.get('recommendation');
        var note2 = this.updateForm.get('note');
        var newClient = {
            firstname: firstname2.value,
            lastname: lastname2.value,
            phone: phone2.value,
            street: street2.value,
            city: city2.value,
            describe: describe2.value,
            values: values2.value,
            warning: warning2.value,
            payday: payday2.value,
            recommendation: recommendation2.value,
            note: note2.value,
            _id: "591eb767013c380b5cf7deaf"
        };
        this.authService.updateClient2(newClient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Promenjeni podaci', { cssClass: 'alert-success', timeout: 3000 });
                // this.router.navigate(['/all'])  
            }
            else {
                _this.flashMessage.show('Promena nije uspela', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        // console.log(client.firstname)
    };
    UpdatedComponent.prototype.onSubmit = function (client) {
        var _this = this;
        console.log("Milan");
        var newclient = {
            firstname: client.firstname,
            lastname: client.lastname,
            phone: client.phone,
            street: client.address.street,
            city: client.address.city,
            describe: client.policy.describe,
            value: client.policy.values,
            payday: client.policy.payday,
            warning: client.policy.warning,
            recommendation: client.recommendation,
            note: client.note,
            id: "591eb767013c380b5cf7deaf"
        };
        console.log(newclient.firstname);
        console.log(this.updateForm.get('firstname').value);
        this.authService.updateClient2(newclient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Promenjeni podaci', { cssClass: 'alert-success', timeout: 3000 });
                // this.router.navigate(['/all'])  
            }
            else {
                _this.flashMessage.show('Promena nije uspela', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return UpdatedComponent;
}());
UpdatedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-updated',
        template: __webpack_require__("../../../../../src/app/components/updated/updated.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/updated/updated.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _e || Object])
], UpdatedComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=updated.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('clients/dashboard', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // updateClient(client) {
    //   let headers = new Headers()
    //   headers.append('Content-Type', 'application/json')
    //   return this.http.post('clients/rewrite', client, {headers: headers})
    //     .map(res => res.json())
    // }
    AuthService.prototype.updateClient = function (id, client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('clients/update/' + id, client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteClient = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('clients/update/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateClient2 = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('clients/updated', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postFind = function (search) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken()
        // headers.append('Authorization', this.authToken)
        headers.append('Content-Type', 'application/json');
        return this.http.post('clients/find', search, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUpdate = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // this.loadToken()
        // headers.append('Authorization', this.authToken)
        headers.append('Content-Type', 'application/json');
        return this.http.get('clients/update/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSearch = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('clients/search', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAll = function (login) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('clients/all/' + login, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])("id_token");
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
        this.userData = localStorage.getItem("user");
        this.userJson = JSON.parse(this.userData);
    }
    StorageService.prototype.getStorage = function () {
        if (this.userJson == null) {
            this.user = "ja";
        }
        else {
            this.user = this.userJson.username;
        }
        return this.user;
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined
            || user.password == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map