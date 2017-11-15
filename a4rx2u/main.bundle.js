webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rxlogo    img                                     {width: 130px; height: 85px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(title) {
        this.title = title;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.setTitle = function (title) {
        this.title.setTitle(title);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_request_pickup_request_pickup_component__ = __webpack_require__("../../../../../src/app/components/request-pickup/request-pickup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_status_order_status_component__ = __webpack_require__("../../../../../src/app/components/order-status/order-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_request_pickup_order_info_order_info_component__ = __webpack_require__("../../../../../src/app/components/request-pickup/order-info/order-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_request_pickup_proxy_proxy_component__ = __webpack_require__("../../../../../src/app/components/request-pickup/proxy/proxy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_request_pickup_place_order_place_order_component__ = __webpack_require__("../../../../../src/app/components/request-pickup/place-order/place-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'rxpickup', component: __WEBPACK_IMPORTED_MODULE_6__components_request_pickup_request_pickup_component__["a" /* RequestPickupComponent */] },
    { path: 'orderstatus', component: __WEBPACK_IMPORTED_MODULE_7__components_order_status_order_status_component__["a" /* OrderStatusComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'rxpickup/proxy', component: __WEBPACK_IMPORTED_MODULE_12__components_request_pickup_proxy_proxy_component__["a" /* ProxyComponent */] },
    { path: 'rxpickup/proxy/placeorder', component: __WEBPACK_IMPORTED_MODULE_13__components_request_pickup_place_order_place_order_component__["a" /* PlaceOrderComponent */] },
    { path: 'rxpickup/proxy/placeorder/orderinfo', component: __WEBPACK_IMPORTED_MODULE_9__components_request_pickup_order_info_order_info_component__["a" /* OrderInfoComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_request_pickup_request_pickup_component__["a" /* RequestPickupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_order_status_order_status_component__["a" /* OrderStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_request_pickup_order_info_order_info_component__["a" /* OrderInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_request_pickup_proxy_proxy_component__["a" /* ProxyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_request_pickup_place_order_place_order_component__["a" /* PlaceOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_users_users_component__["a" /* UsersComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_initial_data_service__["a" /* InitialDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.list {list-style-type:disc}\nli.list {list-style-type:disc}\n\n.input {height: 50px; width: 200px}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<title>About</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink={{homeRoute}}>Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"verilog\" >{{output}}</div>\n  <div id=\"loginform\" *ngIf=\"!userLoggedin\"> <!--value from dataService, which initial set to be true. !userLoggedin means true-->\n    <form name=\"login\" ngNativeValidate routerLink=\"{{route}}\">\n      User name: <br>\n      <input type=\"text\" name=\"username\" #username required><br>\n      Password: <br>\n      <input type=\"text\" name=\"password\" #password required><br>\n      <input type=\"submit\" value=\"Login\" (click)=\"validateLogin(username.value, password.value)\">\n    </form>\n  </div>\n\n  <div *ngIf=\"userLoggedin\">Welcome <output style=\"color: blue\">{{first}} {{last}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n\n      <div style=\"text-align: left; padding-left: 100px\">\n        <h2>I’ve covered Angular 4 as below: :)</h2> <br>\n        <ul class=\"list\">\n          <li *ngFor=\"let coveredMessage of coveredMessage\">\n            {{coveredMessage.message}}\n          </li>\n        </ul>\n\n        <hr>\n        <h2>Please suggest what to learn more:</h2><br>\n        <ul class=\"list\">\n          <li *ngFor=\"let suggestionMessage of suggestionMessage\">\n            {{suggestionMessage.message}} <i style=\"color: #39599F\">-{{suggestionMessage.user}}</i>\n          </li>\n        </ul>\n\n\n        <br><br>\n        <textarea class=\"input\" #suggestion></textarea><br>\n          <button class=\"button\" (click)=\"suggest(suggestion)\" >Suggest</button>\n\n\n        <br><br><br>\n        <hr>\n        <h2>Or give some comments:</h2><br>\n        <br>\n        <ul class=\"list\">\n          <li *ngFor=\"let commentMessage of commentMessage\">\n            {{commentMessage.message}} <i style=\"color: #39599F\">-{{commentMessage.user}}</i>\n          </li>\n        </ul>\n\n        <br><br>\n        <textarea class=\"input\" #comment></textarea><br>\n          <button class=\"button\" (click)=\"giveComment(comment)\" >Submit</button>\n      </div>\n\n    </div >\n\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(dataService, appComp) {
        this.dataService = dataService;
        this.appComp = appComp;
        this.route = '/about';
        this.userLoggedin = this.dataService.userLoggedin;
        this.first = this.dataService.id;
        this.last = this.dataService.pw;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getmessage('covered').subscribe(function (msg) {
            _this.coveredMessage = msg;
        });
        this.dataService.getmessage('suggestion').subscribe(function (msg) {
            _this.suggestionMessage = msg;
        });
        this.dataService.getmessage('comment').subscribe(function (msg) {
            _this.commentMessage = msg;
        });
        this.appComp.setTitle('About');
        if (this.userLoggedin) {
            this.user = this.first + this.last;
        }
        else {
            this.user = '';
        }
        this.homeRoute = this.dataService.setHome();
    };
    AboutComponent.prototype.suggest = function (msg) {
        var _this = this;
        this.dataService.putMessage(msg.value, 'suggestion', this.user).subscribe(function (tx) {
            console.log(tx);
        });
        this.dataService.getmessage('suggestion').subscribe(function (msg2) {
            _this.suggestionMessage = msg2;
        });
    };
    AboutComponent.prototype.giveComment = function (msg) {
        var _this = this;
        this.dataService.putMessage(msg.value, 'comment', this.user).subscribe(function (tx) {
            console.log(tx);
        });
        this.dataService.getmessage('comment').subscribe(function (msg2) {
            _this.commentMessage = msg2;
        });
    };
    AboutComponent.prototype.logOff = function () {
        this.userLoggedin = false; // Override value from dataservice to update directly in the component;
        this.dataService.userLoggedin = false;
    };
    AboutComponent.prototype.validateLogin = function (id, pw) {
        if (this.dataService.validateLogin(id, pw) == 0) {
            this.route = '/about';
            this.output = 'Incorrect user name and/or password. Please review and try again!';
        }
        else {
            this.route = '/users';
            this.dataService.id = id;
            this.dataService.pw = pw;
            this.dataService.userLoggedin = true;
        }
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rxlogo    img                                     {width: 130px; height: 85px; }\ndiv#loginform                                     {position: fixed; top: 0; right: 30px;}\n#verilog                                         {padding-left: 80%; color: #D60202;}\na {color: blue}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n    <div class=\"rxlogo\">\n      <img src=\"../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink=\"\">Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"verilog\" >{{output}}</div>\n  <div id=\"loginform\" *ngIf=\"!userLoggedin\"> <!--value from dataService, which initial set to be true. !userLoggedin means true-->\n    <form name=\"login\" ngNativeValidate routerLink=\"{{route}}\">\n      User name: <br>\n      <input type=\"text\" name=\"username\" #username required><br>\n      Password: <br>\n      <input type=\"text\" name=\"password\" #password required><br>\n      <input type=\"submit\" value=\"Login\" (click)=\"validateLogin(username.value, password.value)\">\n    </form>\n  </div>\n\n\n  <div *ngIf=\"userLoggedin\">Welcome <output style=\"color: blue\">{{first}} {{last}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n</div>\n\n<div id=\"header-featured\" > </div>\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n    </div >\n\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
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
    function HomeComponent(appComp, dataService) {
        this.appComp = appComp;
        this.dataService = dataService;
        this.userLoggedin = this.dataService.userLoggedin;
        this.first = this.dataService.id;
        this.last = this.dataService.pw;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.appComp.setTitle('Home');
    };
    HomeComponent.prototype.logOff = function () {
        this.userLoggedin = false; // Override value from dataservice to update directly in the component;
        this.dataService.userLoggedin = false;
    };
    HomeComponent.prototype.validateLogin = function (id, pw) {
        if (this.dataService.validateLogin(id, pw) == 0) {
            this.route = '';
            this.output = 'Incorrect user name and/or password. Please review and try again!';
        }
        else {
            this.route = '/users';
            this.dataService.id = id;
            this.dataService.pw = pw;
            this.dataService.userLoggedin = true;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_2__services_initial_data_service__["a" /* InitialDataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/order-status/order-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stat td                                         {padding: 0 30px 0 55px; text-align: center; border: 1px solid #F1F1D7; }\n.stat th                                         {padding: 0 30px 0 55px; text-align: center; background-color: #F1F1D7;}\n.stat table                                      {border: 1px solid #F1F1D7; border-collapse: collapse;}\n.stat legend                                     {font-size: 1.3em;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/order-status/order-status.component.html":
/***/ (function(module, exports) {

module.exports = "<title>Order Status</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink={{homeRoute}}>Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n\n  <div id=\"verilog\" >{{output}}</div>\n  <div id=\"loginform\" *ngIf=\"!userLoggedin\"> <!--value from dataService, which initial set to be true. !userLoggedin means true-->\n    <form name=\"login\" ngNativeValidate routerLink=\"{{route}}\">\n      User name: <br>\n      <input type=\"text\" name=\"username\" #username required><br>\n      Password: <br>\n      <input type=\"text\" name=\"password\" #password required><br>\n      <input type=\"submit\" value=\"Login\" (click)=\"validateLogin(username.value, password.value)\">\n    </form>\n  </div>\n\n  <div *ngIf=\"userLoggedin\">Welcome <output style=\"color: blue\">{{first}} {{last}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n\n      <div class=\"ebox2\">\n        <div class=\"title\">\n          <h2>Order Status:</h2>\n        </div>\n        <fieldset>\n          <div class=\"stat\">\n            <table>\n              <tr>\n                <th>\n                  Order\n                </th>\n                <th>\n                  Status\n                </th>\n                <th>\n                  Message\n                </th>\n              </tr>\n              <tr *ngFor=\"let order of orders\">\n                <td>\n                  {{order.order_num.toUpperCase()}}\n                </td>\n                <td>\n                  {{order.status}}\n                </td>\n                <td>\n                  {{order.message}}\n                </td>\n              </tr>\n            </table>\n\n          </div>\n          <button class=\"button\" routerLink={{homeRoute}}>Close</button>\n        </fieldset>\n        <div>{{status}}</div>\n        <div style=\"text-align: left\">\n          <form>\n            Enter order number: <br>\n            <input #orderNum><br>\n            <button class=\"button\" (click)=\"lookupOrder(orderNum)\">Submit</button>\n          </form>\n        </div>\n      </div>\n\n\n    </div >\n\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/order-status/order-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderStatusComponent = (function () {
    function OrderStatusComponent(dataService, appComp) {
        var _this = this;
        this.dataService = dataService;
        this.appComp = appComp;
        this.orderNum = '';
        this.status = '';
        this.route = '/orderstatus';
        this.userLoggedin = this.dataService.userLoggedin;
        this.first = this.dataService.id;
        this.last = this.dataService.pw;
        this.dataService.checkOrder().subscribe(function (order) {
            _this.orders = order;
        });
    }
    OrderStatusComponent.prototype.ngOnInit = function () {
        this.appComp.setTitle('Order Status');
        this.homeRoute = this.dataService.setHome();
    };
    OrderStatusComponent.prototype.lookupOrder = function (order) {
        var _this = this;
        this.orderNum = order.value;
        this.dataService.lookupOrder(this.orderNum).subscribe((function (lookup) {
            _this.orders = lookup;
        }));
    };
    OrderStatusComponent.prototype.logOff = function () {
        this.userLoggedin = false; // Override value from dataservice to update directly in the component;
        this.dataService.userLoggedin = false;
    };
    OrderStatusComponent.prototype.validateLogin = function (id, pw) {
        if (this.dataService.validateLogin(id, pw) == 0) {
            this.route = '/orderstatus';
            this.output = 'Incorrect user name and/or password. Please review and try again!';
        }
        else {
            this.route = '/users';
            this.dataService.id = id;
            this.dataService.pw = pw;
            this.dataService.userLoggedin = true;
        }
    };
    OrderStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-status',
            template: __webpack_require__("../../../../../src/app/components/order-status/order-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/order-status/order-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], OrderStatusComponent);
    return OrderStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/request-pickup/order-info/order-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/order-info/order-info.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink={{homeRoute}}>Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div *ngIf=\"userLoggedin\">Welcome <output style=\"color: blue\">{{first}} {{last}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n\n      <div class=\"ebox1\">\n        <div class=\"title\">\n          <h2>Your order info:</h2>\n\n          <fieldset>\n            Order number: <strong>{{orderNum.toUpperCase()}}</strong>\n            <br>\n            Name: {{fullName}}\n            <br>\n            Phone: {{phoneNum}}\n            <br><br>\n            Thanks for placing the service!\n            <br><br>\n            <button class=\"button\" routerLink=\"/orderstatus\">Close</button>\n          </fieldset>\n        </div>\n      </div>\n\n\n      <div class=\"ebox2\">\n        <div class=\"title\">\n          <span class=\"byline\" style=\"text-align: left; font-weight: 800\">We'll be in contact with your Pharmacy...</span>\n          <br><br>\n          <img src=\"../assets/templated-erubescent/images/pharmacy1.jpg\">\n        </div>\n\n      </div>\n\n\n    </div >\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/order-info/order-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderInfoComponent = (function () {
    function OrderInfoComponent(dataService, appComp) {
        this.dataService = dataService;
        this.appComp = appComp;
        this.fullName = '';
        this.phoneNum = '';
        this.orderNum = '';
        this.userLoggedin = this.dataService.userLoggedin;
        this.first = this.dataService.id;
        this.last = this.dataService.pw;
    }
    OrderInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComp.setTitle('Order Info');
        this.phoneNum = this.dataService.phone;
        if (this.phoneNum != null) {
            this.fullName = this.dataService.first + ' ' + this.dataService.last;
            this.dataService.placeOrder(this.dataService.first, this.dataService.last, this.phoneNum, this.dataService.dob, this.dataService.address, this.dataService.pharmacy).subscribe(function (order) {
                _this.orderNum = order;
            });
        }
        this.homeRoute = this.dataService.setHome();
    };
    OrderInfoComponent.prototype.logOff = function () {
        this.userLoggedin = false; // Override value from dataservice to update directly in the component;
        this.dataService.userLoggedin = false;
    };
    OrderInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-info',
            template: __webpack_require__("../../../../../src/app/components/request-pickup/order-info/order-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/request-pickup/order-info/order-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], OrderInfoComponent);
    return OrderInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/request-pickup/place-order/place-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {color: blue}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/place-order/place-order.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<title>Rx Pickup</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink={{homeRoute}}>Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <br>\n  <!--Breadscrumbs-->\n  <div style=\"padding-left: 80px\">\n    <a routerLink={{homeRoute}}> Home </a> >>\n    <a routerLink='/rxpickup'> Request Rx Pickup </a> >>\n    <a routerLink=\"/rxpickup/proxy\"> Proxy </a> >>\n    <a routerLink=\"/rxpickup/proxy/placeorder\"> Place Order </a>\n  </div>\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n      <div class=\"ebox1\" >\n        <div class=\"title\">\n          <h2>Please enter the following information:</h2>\n        </div>\n        <!--place order form section-->\n        <fieldset>\n          <form >\n            First Name: <br>\n            <input name=\"first\" [(ngModel)]=\"firstName\" #first disabled> <br>\n            Last Name: <br>\n            <input name=\"last\" [(ngModel)]=\"lastName\" #last disabled> <br>\n            Phone Number: <br>\n            <input name=\"phone\" [(ngModel)]=\"phoneNum\" #phone disabled> <br>\n            Date of Birth: <br>\n            <input type=\"date\" name=\"dob\" [(ngModel)]=\"dOb\" #dob disabled> <br>\n            Rx to pick up (optional): <br>\n            <input name=\"rx\"> <br>\n            Full Delivery Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"address\" [(ngModel)]=\"aDdress\" #address disabled></textarea><br>\n            Full Pharmacy Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"pharmacy\" [(ngModel)]=\"pHarmacy\" #pharmacy disabled></textarea><br><br>\n\n            <fieldset >\n              <legend><strong>Please confirm Proxy Agreement:</strong></legend>\n              I, <output >{{firstName}} {{lastName}}</output><br>\n              hereby agree to provide proxy to RX2U and its 3rd transportation parties\n              to provide pickup and delivery services to me.\n              <br><br>\n              <input type=\"checkbox\" checked disabled #agree> Agree\n              <br><br>\n            </fieldset>\n\n          </form>\n          <input class=\"button\" type=\"submit\" routerLink=\"/rxpickup/proxy/placeorder/orderinfo\">\n          <button class=\"button\" routerLink=\"/rxpickup/proxy\">Cancel</button>\n        </fieldset>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/place-order/place-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceOrderComponent = (function () {
    function PlaceOrderComponent(dataService) {
        this.dataService = dataService;
    }
    PlaceOrderComponent.prototype.ngOnInit = function () {
        this.phoneNum = this.dataService.phone;
        this.firstName = this.dataService.first;
        this.lastName = this.dataService.last;
        this.dOb = this.dataService.dob;
        this.aDdress = this.dataService.address;
        this.pHarmacy = this.dataService.pharmacy;
        this.homeRoute = this.dataService.setHome();
    };
    PlaceOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-place-order',
            template: __webpack_require__("../../../../../src/app/components/request-pickup/place-order/place-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/request-pickup/place-order/place-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */]])
    ], PlaceOrderComponent);
    return PlaceOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/request-pickup/proxy/proxy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {color: blue}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/proxy/proxy.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<title>Rx Pickup</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink=\"\">Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <br>\n  <!--Breadscrumbs-->\n  <div style=\"padding-left: 80px\">\n    <a routerLink={{homeRoute}}> Home </a> >>\n    <a routerLink='/rxpickup'> Request Rx Pickup </a> >>\n    <a routerLink=\"/rxpickup/proxy\"> Proxy </a> >>\n  </div>\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n      <div class=\"ebox1\" >\n        <div class=\"title\">\n          <h2>Please enter the following information:</h2>\n        </div>\n        <!--place order form section-->\n        <fieldset>\n          <form >\n            First Name: <br>\n            <input name=\"first\" [(ngModel)]=\"firstName\" #first disabled> <br>\n            Last Name: <br>\n            <input name=\"last\" [(ngModel)]=\"lastName\" #last disabled> <br>\n            Phone Number: <br>\n            <input name=\"phone\" [(ngModel)]=\"phoneNum\" #phone disabled> <br>\n            Date of Birth: <br>\n            <input type=\"date\" name=\"dob\" [(ngModel)]=\"dOb\" #dob disabled> <br>\n            Rx to pick up (optional): <br>\n            <input name=\"rx\" disabled> <br>\n            Full Delivery Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"address\" [(ngModel)]=\"aDdress\" #address disabled></textarea><br>\n            Full Pharmacy Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"pharmacy\" [(ngModel)]=\"pHarmacy\" #pharmacy disabled></textarea><br><br>\n\n            <fieldset >\n              <legend><strong>Please confirm Proxy Agreement:</strong></legend>\n              I, <output >{{firstName}} {{lastName}}</output><br>\n              hereby agree to provide proxy to RX2U and its 3rd transportation parties\n              to provide pickup and delivery services to me.\n              <br><br>\n              <input type=\"checkbox\" routerLink='/rxpickup/proxy/placeorder' #agree> Agree\n              <br><br>\n            </fieldset>\n\n          </form>\n          <button class=\"button\" routerLink=\"/rxpickup\">Cancel</button>\n        </fieldset>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/proxy/proxy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProxyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProxyComponent = (function () {
    function ProxyComponent(dataService) {
        this.dataService = dataService;
    }
    ProxyComponent.prototype.ngOnInit = function () {
        this.phoneNum = this.dataService.phone;
        this.firstName = this.dataService.first;
        this.lastName = this.dataService.last;
        this.dOb = this.dataService.dob;
        this.aDdress = this.dataService.address;
        this.pHarmacy = this.dataService.pharmacy;
        this.homeRoute = this.dataService.setHome();
    };
    ProxyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-proxy',
            template: __webpack_require__("../../../../../src/app/components/request-pickup/proxy/proxy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/request-pickup/proxy/proxy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */]])
    ], ProxyComponent);
    return ProxyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/request-pickup/request-pickup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#breadscrumbs a {color: blue}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/request-pickup.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<title>Rx Pickup</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink={{homeRoute}}>Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"verilog\" >{{output}}</div>\n  <div id=\"loginform\" *ngIf=\"!userLoggedin\"> <!--value from dataService, which initial set to be true. !userLoggedin means true-->\n    <form name=\"login\" ngNativeValidate routerLink=\"{{route}}\">\n      User name: <br>\n      <input type=\"text\" name=\"username\" #username required><br>\n      Password: <br>\n      <input type=\"text\" name=\"password\" #password required><br>\n      <input type=\"submit\" value=\"Login\" (click)=\"validateLogin(username.value, password.value)\">\n    </form>\n  </div>\n\n  <div *ngIf=\"userLoggedin\">Welcome <output style=\"color: blue\">{{id}} {{pw}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n  </div>\n</div>\n\n<div id=\"wrapper\">\n  <br>\n  <!--Breadscrumbs-->\n  <div style=\"padding-left: 80px\" id=\"breadscrumbs\">\n    <a routerLink={{homeRoute}}> Home </a> >>\n    <a routerLink='/rxpickup'> Request Rx Pickup </a> >>\n  </div>\n  <!--Left component-->\n  <div id=\"featured-wrapper\">\n    <div class=\"extra2 margin-btm container\">\n      <div class=\"ebox1\">\n        <div class=\"title\">\n          <h2>Please enter the following information:</h2>\n        </div>\n        <!--place order form section-->\n        <fieldset>\n          <form ngNativeValidate routerLink={{route}}>\n            First Name: <br>\n            <input type=\"text\" name=\"first\" value={{profile[0].first}} #first required><br>\n            Last Name: <br>\n            <input type=\"text\" name=\"last\" value={{profile[0].last}} #last required>  <br>\n            Phone Number: <br>\n            <input type=\"text\" name=\"phone\" value={{profile[0].cust_phone}} #phone required>\n            <br>\n            Date of Birth: <br>\n            <input type=\"date\" name=\"dob\" value={{profile[0].dob}} #dob required >\n\n            <br>\n            Rx to pick up (optional): <br>\n            <input type=\"text\" name=\"rx\" id=\"rx\" > <br>\n            Full Delivery Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"address\" value={{profile[0].address}} #address required></textarea><br>\n            Full Pharmacy Address: <br>\n            <textarea rows=\"3\" cols=\"30\" name=\"pharmacy\" value={{profile[0].pharmacy}} #pharmacy required></textarea><br><br>\n\n            <input type=\"submit\" class=\"button\" value=\"Continue\" (click)=\"clickContinueButton(first.value, last.value, phone.value, dob.value, address.value, pharmacy.value)\">\n            <button class=\"button\" routerLink={{homeRoute}}>Cancel</button>\n          </form>\n        </fieldset>\n\n      </div>\n    </div >\n  </div>\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/request-pickup/request-pickup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPickupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestPickupComponent = (function () {
    function RequestPickupComponent(dataService, appComp) {
        this.dataService = dataService;
        this.appComp = appComp;
        this.route = '/rxpickup';
        this.userLoggedin = this.dataService.userLoggedin;
        this.id = this.dataService.id;
        this.pw = this.dataService.pw;
        if (this.userLoggedin) {
            this.getUserProfile();
        }
    }
    RequestPickupComponent.prototype.ngOnInit = function () {
        this.appComp.setTitle('Rx Pickup');
        this.homeRoute = this.dataService.setHome();
    };
    RequestPickupComponent.prototype.clickContinueButton = function (first, last, phone, dob, address, pharmacy) {
        if (first !== '' && last !== '' && phone !== '' && dob !== '' && address !== '' && pharmacy !== '') {
            this.dataService.first = first;
            this.dataService.last = last;
            this.dataService.phone = phone;
            this.dataService.dob = dob;
            this.dataService.address = address;
            this.dataService.pharmacy = pharmacy;
            this.route = '/rxpickup/proxy';
        }
        else {
        }
    };
    RequestPickupComponent.prototype.logOff = function () {
        this.userLoggedin = false; // Override value from dataservice to update directly in the component;
        this.dataService.userLoggedin = false;
    };
    RequestPickupComponent.prototype.validateLogin = function (id, pw) {
        if (this.dataService.validateLogin(id, pw) == 0) {
            this.route = '';
            this.output = 'Incorrect user name and/or password. Please review and try again!';
        }
        else {
            this.route = '/users';
            this.dataService.id = id;
            this.dataService.pw = pw;
            this.dataService.userLoggedin = true;
        }
    };
    RequestPickupComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.dataService.getUserProfile(this.id, this.pw).subscribe(function (profile) {
            _this.profile = profile;
        });
    };
    RequestPickupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request-pickup',
            template: __webpack_require__("../../../../../src/app/components/request-pickup/request-pickup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/request-pickup/request-pickup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], RequestPickupComponent);
    return RequestPickupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fill-table                                      {width: 100%; margin: auto auto 30px auto;}\n#fill-table th                                   {border: 1px solid black;  text-align: center; background-color: #FFCC99;}\n#fill-table td                                   {text-align: center;}\n#tbldiv                                          {margin: auto auto 50px auto;}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<title>Rx Pickup</title>\n<div id=\"header-wrapper\">\n  <div id=\"header\" class=\"container\">\n\n    <div class=\"rxlogo\">\n      <img src=\"../../../a4rx2u/assets/templated-erubescent/images/rx2ulogo.png\">\n    </div>\n    <div id=\"logo\">\n      <strong style=\"font-family: 'Comic Sans MS'; color: #ED7070;;font-weight: bolder; font-size: 45px\"> Rx2U </strong><br>\n    </div>\n\n    <div id=\"menu\">\n      <ul>\n        <li><a routerLink=\"/users\">Home</a></li>\n        <li><a routerLink=\"/rxpickup\">Request Rx Pickup</a></li>\n        <li><a routerLink=\"/orderstatus\" >Check Order Status</a></li>\n        <li><a routerLink=\"/about\" >About</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div>Welcome <output style=\"color: blue\">{{first}} {{last}}</output>!\n    <a (click)=\"logOff()\" routerLink=\"\"> Log off </a> </div>\n  <br>\n\n</div>\n\n<div id=\"banner-wrapper\">\n  <div id=\"banner\" class=\"container\">\n    <i style=\"font-weight: normal; font-size: large; font-family: fantasy\">Prescriptions on wheels conveniently to you</i><br><br>\n      </div>\n    </div>\n\n    <div id=\"wrapper\">\n\n      <!--Left component-->\n      <div id=\"featured-wrapper\">\n        <div class=\"extra2 margin-btm container\">\n\n          <!--fill order section-->\n          <div id=\"tbldiv\">\n            <table id=\"fill-table\">\n              <tr>\n                <th>\n                  Date\n                </th>\n                <th>\n                  Order Number\n                </th>\n                <th>\n                  First Name\n                </th>\n                <th>\n                  Last Name\n                </th>\n                <th>\n                  Phone\n                </th>\n                <th>\n                  Status\n                </th>\n                <th>\n                  Message\n                </th>\n                <th>\n                  Action\n                </th>\n              </tr>\n\n              <tr *ngFor=\"let order of order\">\n                <td>\n                  {{order.order_date}}\n                </td>\n                <td>\n                  {{order.order_num.toUpperCase()}}\n                </td>\n                <td>\n                  {{order.first}}\n                </td>\n                <td>\n                  {{order.last}}\n                </td>\n                <td>\n                  {{order.cust_phone}}\n                </td>\n                <td >\n                   {{order.status}}\n                </td>\n                <td >\n                  {{order.message}}\n                </td>\n                <td>\n                  <input type=\"submit\" [value]=\"order.status !== 'Arrived' ? '' : 'Receive'\"\n                         (click)=\"receive(order.order_num)\" [disabled]=\"order.status !== 'Arrived'\">\n                </td>\n              </tr>\n            </table>\n          </div>\n    </div>\n  </div>\n\n</div>\n\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Untitled. All rights reserved. | Photos by <a href=\"https://images.google.com/\">GoogleImage</a> | Design by <a href=\"http://templated.co\" rel=\"nofollow\">TEMPLATED</a>.</p>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__ = __webpack_require__("../../../../../src/app/services/initial-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(dataService, appComp) {
        this.dataService = dataService;
        this.appComp = appComp;
        this.userLoggedin = true;
        this.first = this.dataService.id;
        this.last = this.dataService.pw;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.appComp.setTitle('User Home');
        this.userLoggedin = true;
        this.getOrder();
    };
    UsersComponent.prototype.logOff = function () {
        this.userLoggedin = false;
        this.dataService.userLoggedin = false;
    };
    UsersComponent.prototype.receive = function (ord) {
        this.dataService.userReceive(ord).subscribe(function (res) {
            console.log(res);
        });
        this.getOrder();
    };
    UsersComponent.prototype.getOrder = function () {
        var _this = this;
        this.dataService.getUserProfile(this.dataService.id, this.dataService.pw).subscribe(function (orderObj) {
            return _this.order = orderObj;
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_initial_data_service__["a" /* InitialDataService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/initial-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InitialDataService = (function () {
    function InitialDataService(http) {
        this.http = http;
        this.id = '';
        this.pw = '';
        this.userLoggedin = false;
        // proxy = 'https://cors-anywhere.herokuapp.com/';
        // homeNet = '10.0.0.41';
        // workNet = '10.227.212.187';
        this.workNet2 = '10.227.212.53';
        this.network = this.workNet2;
    }
    InitialDataService.prototype.placeOrder = function (first, last, phone, dob, address, pharmacy) {
        return this.http.get('http://' + this.network + '/rx2u/placeorder.php?action=placeorder&first='
            + first + '&last=' + last + '&phone=' + phone + '&dob=' + dob + '&address=' + address + '&pharmacy=' + pharmacy)
            .map(function (res) { return res.text(); });
    };
    InitialDataService.prototype.placeOrder2 = function (first, last, phone, dob, address, pharmacy) {
        return this.http.post('http://' + this.network + '/rx2u/placeorder.php', {
            action: 'placeorder',
            first: first,
            last: last,
            phone: phone,
            dob: dob,
            address: address,
            pharmacy: pharmacy
        })
            .map(function (res) { return res.text(); });
    };
    InitialDataService.prototype.getmessage = function (indicator) {
        return this.http.get('http://' + this.network + '/rx2u/getmessage.php?action=getmsg' + '&indicator=' + indicator)
            .map(function (res) { return res.json(); });
    };
    InitialDataService.prototype.putMessage = function (msg, indicator, user) {
        return this.http.get('http://' + this.network + '/rx2u/getmessage.php?action=putmsg&msg=' + msg + '&indicator='
            + indicator + '&user=' + user)
            .map(function (res) { return res.text(); });
    };
    InitialDataService.prototype.checkOrder = function () {
        return this.http.get('http://' + this.network + '/rx2u/checkOrder.php').map(function (res) { return res.json(); });
    };
    InitialDataService.prototype.lookupOrder = function (order) {
        return this.http.get('http://' + this.network + '/rx2u/orderlookup.php?ordernum=' + order)
            .map(function (res) { return res.json(); });
    };
    InitialDataService.prototype.verifyLogin = function (id, pw) {
        return this.http.get('http://' + this.network + '/rx2u/login.php?username=' + id + '&password=' + pw).map(function (res) { return res.text(); });
    };
    InitialDataService.prototype.getUserProfile = function (id, pw) {
        return this.http.get('http://' + this.network + '/rx2u/user_profile.php?action=getorder&first=' + id + '&last=' + pw)
            .map(function (res) { return res.json(); });
    };
    InitialDataService.prototype.userReceive = function (order) {
        return this.http.get('http://' + this.network + '/rx2u/user_profile.php?action=receive&ordnum=' + order).map(function (res) { return res.text(); });
    };
    InitialDataService.prototype.validateLogin = function (id, pw) {
        this.xhttp = new XMLHttpRequest();
        this.xhttp.open('GET', 'http://' + this.network + '/rx2u/login.php?username=' + id + '&password=' + pw, false);
        this.xhttp.send(null);
        if (this.xhttp.status == 200) {
            return this.response = this.xhttp.responseText;
        }
    };
    InitialDataService.prototype.setHome = function () {
        if (this.userLoggedin) {
            return this.homeRoute = '/users';
        }
        else {
            return this.homeRoute = '';
        }
    };
    InitialDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], InitialDataService);
    return InitialDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map