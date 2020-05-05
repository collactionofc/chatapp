(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Topbar  -->\n<mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"drawer.toggle()\">\n    <mat-icon matSuffix>menu</mat-icon>\n  </button>\n  <span>welcome {{ api.currentUser?.name }}</span>\n  <button mat-icon-button (click)=\"open(list)\" class=\"end\">\n    <mat-icon matSuffix>person_add</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"logoutModal(logoutContent)\" class=\"end\">\n    <mat-icon matSuffix>exit_to_app</mat-icon>\n  </button>\n</mat-toolbar>\n\n<!-- Conversations sidebar - start -->\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened>\n    <mat-form-field>\n      <input matInput placeholder=\"Search Conversations\"  \n      [(ngModel)]=\"userFilter.name\"\n      />\n    </mat-form-field>\n\n    <mat-list\n      cdk-virtual-scroll-viewport\n      itemSize=\"50\"\n      *ngIf=\"api.currentUser && api.currentUser.conversations\"\n    >\n      <mat-list-item\n        *ngFor=\"let x of api.currentUser.conversations | filterBy: userFilter\"\n        (click)=\"selectUser(x)\"\n      >\n        <mat-icon matListIcon >folder</mat-icon>\n        <h3 matLine class=\"text-primary\">{{ x?.name }}</h3>\n        <p matLine>\n          \n          <span class=\"demo-2 text-muted small\">\n            {{ x.timestamp?.toDate() | date: \"dd MMM hh:mm\" }}</span\n          >\n        </p>\n      </mat-list-item>\n    </mat-list>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <div class=\"mesgs\" id=\"container\">\n      <cdk-virtual-scroll-viewport\n        itemSize=\"40\"\n        class=\"msg_history \"\n        *ngIf=\"showMessages\"\n      >\n        <div *cdkVirtualFor=\"let x of messages; let i = index\">\n          <div class=\"incoming_msg\" *ngIf=\"x.senderId !== api.currentUser.uid\">\n            <div class=\"incoming_msg_img\">\n              <img\n                src=\"https://ptetutorials.com/images/user-profile.png\"\n                alt=\"sunil\"\n              />\n            </div>\n            <div class=\"received_msg\">\n              <div class=\"received_withd_msg\">\n                <p>{{ x.content }}</p>\n                <span\n                  class=\"time_date\"\n                  id=\"{{ i == messages.length - 3 ? 'destination' : 'abc' }}\"\n                >\n                  {{ x.timestamp.toDate() | date: \"dd MMM hh:mm\" }}</span\n                >\n              </div>\n            </div>\n          </div>\n\n          <div class=\"outgoing_msg\" *ngIf=\"x.senderId == api.currentUser.uid\">\n            <div class=\"sent_msg\">\n              <p>{{ x.content }}</p>\n              <span\n                class=\"time_date\"\n                id=\"{{ i == messages.length - 3 ? 'destination' : 'abc' }}\"\n              >\n                {{ x.timestamp.toDate() | date: \"dd MMM hh:mm\" }}</span\n              >\n            </div>\n          </div>\n        </div>\n      </cdk-virtual-scroll-viewport>\n\n      <div class=\"type_msg\" *ngIf=\"showMessages\">\n        <div class=\"input_msg_write\">\n          <input\n            mat-input\n            type=\"text\"\n            placeholder=\"Type a message\"\n            [(ngModel)]=\"message\"\n            (keydown.enter)=\"sendMessage()\"\n          />\n          <button\n            class=\"msg_send_btn\"\n            type=\"button\"\n            (click)=\"sendMessage()\"\n            (keydown.enter)=\"sendMessage()\"\n          >\n            <mat-icon matSuffix>send</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-drawer-container>\n<!-- Conversations sidebar - ends -->\n\n\n<!-- user-list template - start -->\n<ng-template #list>\n  <mat-list role=\"list\" cdk-virtual-scroll-viewport itemSize=\"10\" *ngIf=\"users\">\n    <mat-list-item\n      role=\"listitem\"\n      *ngFor=\"let x of users \"\n      (click)=\"selectUser(x)\">\n      <div>\n      {{ x?.name }}\n    </div>\n    </mat-list-item>\n  </mat-list>\n</ng-template>\n<!-- user-list template - ends -->\n\n\n<!-- logout-content - start -->\n<ng-template #logoutContent>\n  Are you sure you want to Log out? <br />\n  <br />\n  <button mat-button mat-raised-button color=\"warn\" (click)=\"logout()\">\n    LOGOUT\n  </button>\n  <button mat-button (click)=\"closeModal()\">cancel</button>\n</ng-template>\n<!-- logout-content - start -->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Login</span>\n    </mat-toolbar-row>\n  \n  </mat-toolbar>\n  \n  \n  <div class=\"container\" style=\"margin-top:10px\">\n    <div class=\"row text-center\" style=\"margin-top:30px\">\n      <div class=\"col-md-12\">\n        <h1>Login</h1>\n      </div>\n      <div class=\"col-md-6\">\n          <img src=\"https://image.shutterstock.com/image-vector/lock-vector-icon-260nw-558636553.jpg\" width=\"100%\">\n      </div>\n        <div class=\"col-md-6\">\n                <form class=\"example-form\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n                          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                            Please enter a valid email address\n                          </mat-error>\n                          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                            Email is <strong>required</strong>\n                          </mat-error>\n                        </mat-form-field>\n                        <br> <br>\n                        <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"passwordFormControl\">\n                                <mat-error *ngIf=\"passwordFormControl.hasError('minlength') && !passwordFormControl.hasError('required')\">\n                                  Password must be minimum 6 characters.\n                                </mat-error>\n                                <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                                  Password is <strong>required</strong>\n                                </mat-error>\n                              </mat-form-field>\n                              <br> <br> \n                              <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\n                      </form>   \n                      \n                      <div class=\"col-md-12 text-center clearfix\" style=\"margin-top: 20px\">\n                        <p> Don't have an account? <button mat-raised-button color=\"accent\" routerLink=\"/signup\">Register </button></p>\n                      </div>\n        </div>\n     \n    </div>\n \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Register</span>\n    </mat-toolbar-row>\n  \n  </mat-toolbar>\n  \n<div class=\"container\" style=\"margin-top:20px\">\n  <ngx-spinner></ngx-spinner>\n  <!-- https://github.com/collactionofc/Chatapplication.git -->\n        <div class=\"row text-center\">\n          <div class=\"col-md-12\">\n            <h1>Registration</h1>\n          </div>\n          <div class=\"col-md-6\">\n              <img src=\"https://image.shutterstock.com/image-vector/membership-contract-certificate-flat-illustration-600w-1404259949.jpg\">\n          </div>\n            <div class=\"col-md-6\" style=\"margin-top:100px\">\n                    <form class=\"example-form\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Full Name\" [formControl]=\"nameFormControl\">\n                            <mat-error *ngIf=\"nameFormControl.hasError('minlength') && !nameFormControl.hasError('required')\">\n                              Name must be minimum 3 characters \n                            </mat-error>\n                            <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n                              Name is <strong>required</strong>\n                            </mat-error>\n                            <p style=\"color:red\" *ngIf=\"samename\">\n                              Name is  <strong> Already exist</strong>\n                            </p>\n                          </mat-form-field>\n                          <br><br>\n                            <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n                              <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                Please enter a valid email address\n                              </mat-error>\n                              <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                Email is <strong>required</strong>\n                              </mat-error>\n                            </mat-form-field>\n                            <br> <br>\n                            <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"passwordFormControl\">\n                                    <mat-error *ngIf=\"passwordFormControl.hasError('minlength') && !passwordFormControl.hasError('required')\">\n                                      Password must be minimum 6 characters.\n                                    </mat-error>\n                                    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                                      Password is <strong>required</strong>\n                                    </mat-error>\n                                  </mat-form-field>\n                                  <br> <br> \n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"image url\" [formControl]=\"imageFormControl\">\n                                    <mat-error *ngIf=\"imageFormControl.hasError('image') && !imageFormControl.hasError('required')\">\n                                      Please enter image url\n                                    </mat-error>\n                                    <mat-error *ngIf=\"imageFormControl.hasError('image')\">\n                                      Email is <strong>required</strong>\n                                    </mat-error>\n                                  </mat-form-field>\n                                  <br> <br> \n                                  <button mat-raised-button color=\"primary\" (click)=\"register()\">Register</button>\n                          </form>                  \n                          <div class=\"clearfix\" style=\"margin-top: 40px\">\n                            <p> Already registered? <button mat-raised-button color=\"accent\" routerLink=\"/login\">Login </button></p>\n                          </div>\n            </div>\n         \n        </div>\n     \n    </div>\n    \n    ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");







const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: auto;\n  height: 600px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dzbC9EZXNrdG9wL0NoYXRhcHBsaWNhdGlvbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDo2MDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chat app';
        this.showFiller = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");








//modules



//material















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        ],
        imports: [
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestoreModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_21__["ScrollToModule"].forRoot(),
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.452);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\n.end {\n  margin-left: auto;\n}\n\n.container {\n  max-width: 1170px;\n  margin: auto;\n}\n\nimg {\n  max-width: 90%;\n}\n\n.inbox_people {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n\n.inbox_msg {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n}\n\n.top_spac {\n  margin: 20px 0 0;\n}\n\n.recent_heading {\n  float: left;\n  width: 40%;\n}\n\n.srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n\n.headind_srch {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto;\n}\n\n.srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n\n.srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n\n.srch_bar .input-group-addon {\n  margin: 0 0 0 -27px;\n}\n\n.chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n\n.chat_ib h5 span {\n  font-size: 13px;\n  float: right;\n}\n\n.chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n\n.chat_img {\n  float: left;\n  width: 11%;\n}\n\n.chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n\n.chat_people {\n  overflow: hidden;\n  clear: both;\n}\n\n.chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n\n.inbox_chat {\n  height: 550px;\n  overflow-y: scroll;\n}\n\n.active_chat {\n  background: #ebebeb;\n}\n\n.incoming_msg_img {\n  display: inline-block;\n  width: 6%;\n}\n\n.received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n\n.received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n\n.received_withd_msg {\n  width: 57%;\n}\n\n.mesgs {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 60%;\n}\n\n.sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n\n.sent_msg {\n  float: right;\n  width: 46%;\n}\n\n.input_msg_write input {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%;\n}\n\n.type_msg {\n  border-top: 1px solid #c4c4c4;\n  position: relative;\n}\n\n.msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px;\n}\n\n.messaging {\n  padding: 0 0 50px 0;\n}\n\n.msg_history {\n  height: 516px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dzbC9EZXNrdG9wL0NoYXRhcHBsaWNhdGlvbi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtFO0VBQ0UsYUFBQTtBQ0ZKOztBRE1FO0VBQ0UsaUJBQUE7QUNISjs7QURnQkM7RUFBVyxpQkFBQTtFQUFrQixZQUFBO0FDWDlCOztBRFlBO0VBQUssY0FBQTtBQ1JMOztBRFNBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQVksK0JBQUE7QUNMZDs7QURPQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSkY7O0FETUE7RUFBVyxnQkFBQTtBQ0ZYOztBREtBO0VBQWlCLFdBQUE7RUFBYSxVQUFBO0FDQTlCOztBRENBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUFlLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLGdDQUFBO0FDSzdEOztBREhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTUY7O0FESkE7RUFBaUIseUJBQUE7RUFBMEIsdUJBQUE7RUFBd0IsVUFBQTtFQUFXLHNCQUFBO0VBQXVCLGdCQUFBO0FDWXJHOztBRFhBO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2NGOztBRFpBO0VBQStCLG1CQUFBO0FDZ0IvQjs7QURkQTtFQUFhLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGlCQUFBO0FDb0I1Qzs7QURuQkE7RUFBa0IsZUFBQTtFQUFnQixZQUFBO0FDd0JsQzs7QUR2QkE7RUFBWSxlQUFBO0VBQWdCLGNBQUE7RUFBZSxZQUFBO0FDNkIzQzs7QUQ1QkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQytCRjs7QUQ3QkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDZ0NGOztBRDdCQTtFQUFjLGdCQUFBO0VBQWlCLFdBQUE7QUNrQy9COztBRGpDQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDb0NGOztBRGxDQTtFQUFjLGFBQUE7RUFBZSxrQkFBQTtBQ3VDN0I7O0FEckNBO0VBQWMsbUJBQUE7QUN5Q2Q7O0FEdkNBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0FDMENGOztBRHhDQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUMyQ0Y7O0FEekNDO0VBQ0MsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQzRDRjs7QUQxQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDNkNGOztBRDNDQTtFQUFzQixVQUFBO0FDK0N0Qjs7QUQ5Q0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDaURGOztBRDlDQztFQUNDLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUFXLFdBQUE7RUFDWCwwQkFBQTtFQUNBLFdBQUE7QUNrREY7O0FEaERBO0VBQWUsZ0JBQUE7RUFBaUIsbUJBQUE7QUNxRGhDOztBRHBEQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDdURGOztBRHJEQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3dERjs7QURyREE7RUFBVyw2QkFBQTtFQUE4QixrQkFBQTtBQzBEekM7O0FEekRBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDNERGOztBRDFEQTtFQUFhLG1CQUFBO0FDOERiOztBRDdEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ2dFRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC40NTIpO1xuICAgIFxuICB9XG5cblxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cblxuICAuZW5ke1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuIH0gXG5cblxuXG5cblxuXG5cbiBcblxuXG5cbiAuY29udGFpbmVye21heC13aWR0aDoxMTcwcHg7IG1hcmdpbjphdXRvO31cbmltZ3sgbWF4LXdpZHRoOjkwJTt9XG4uaW5ib3hfcGVvcGxlIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmOCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwJTsgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYzRjNGM0O1xufVxuLmluYm94X21zZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRvcF9zcGFjeyBtYXJnaW46IDIwcHggMCAwO31cblxuXG4ucmVjZW50X2hlYWRpbmcge2Zsb2F0OiBsZWZ0OyB3aWR0aDo0MCU7fVxuLnNyY2hfYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDYwJTsgXG59XG5cbi5oZWFkaW5kX3NyY2h7IHBhZGRpbmc6MTBweCAyOXB4IDEwcHggMjBweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzRjNGM0O31cblxuLnJlY2VudF9oZWFkaW5nIGg0IHtcbiAgY29sb3I6ICMwNTcyOGY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNyY2hfYmFyIGlucHV0eyBib3JkZXI6MXB4IHNvbGlkICNjZGNkY2Q7IGJvcmRlci13aWR0aDowIDAgMXB4IDA7IHdpZHRoOjgwJTsgcGFkZGluZzoycHggMCA0cHggNnB4OyBiYWNrZ3JvdW5kOm5vbmU7fVxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XG5cbi5jaGF0X2liIGg1eyBmb250LXNpemU6MTVweDsgY29sb3I6IzQ2NDY0NjsgbWFyZ2luOjAgMCA4cHggMDt9XG4uY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxuLmNoYXRfaWIgcHsgZm9udC1zaXplOjE0cHg7IGNvbG9yOiM5ODk4OTg7IG1hcmdpbjphdXRvfVxuLmNoYXRfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMSU7XG59XG4uY2hhdF9pYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICB3aWR0aDogODglO1xufVxuXG4uY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XG4uY2hhdF9saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG4uaW5ib3hfY2hhdCB7IGhlaWdodDogNTUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbDt9XG5cbi5hY3RpdmVfY2hhdHsgYmFja2dyb3VuZDojZWJlYmViO31cblxuLmluY29taW5nX21zZ19pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2JTtcbn1cbi5yZWNlaXZlZF9tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MiU7XG4gfVxuIC5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzY0NjQ2NDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi50aW1lX2RhdGUge1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA4cHggMCAwO1xufVxuLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxuLm1lc2dzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XG4gIHdpZHRoOiA2MCU7XG59XG5cbiAuc2VudF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDsgY29sb3I6I2ZmZjtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XG4gIHdpZHRoOjEwMCU7XG59XG4ub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjoyNnB4IDAgMjZweDt9XG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG4uaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnR5cGVfbXNnIHtib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGhlaWdodDogMzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMXB4O1xuICB3aWR0aDogMzNweDtcbn1cbi5tZXNzYWdpbmcgeyBwYWRkaW5nOiAwIDAgNTBweCAwO31cbi5tc2dfaGlzdG9yeSB7XG4gIGhlaWdodDogNTE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1Mik7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmluYm94X3Blb3BsZSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5pbmJveF9tc2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvcF9zcGFjIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cblxuLnJlY2VudF9oZWFkaW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zcmNoX2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5oZWFkaW5kX3NyY2gge1xuICBwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbn1cblxuLnJlY2VudF9oZWFkaW5nIGg0IHtcbiAgY29sb3I6ICMwNTcyOGY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3JjaF9iYXIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMnB4IDAgNHB4IDZweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBtYXJnaW46IDAgMCAwIC0yN3B4O1xufVxuXG4uY2hhdF9pYiBoNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0NjQ2NDY7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uY2hhdF9pYiBoNSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jaGF0X2liIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0X2ltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTElO1xufVxuXG4uY2hhdF9pYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICB3aWR0aDogODglO1xufVxuXG4uY2hhdF9wZW9wbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoYXRfbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xufVxuXG4uaW5ib3hfY2hhdCB7XG4gIGhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFjdGl2ZV9jaGF0IHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmluY29taW5nX21zZ19pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2JTtcbn1cblxuLnJlY2VpdmVkX21zZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDkyJTtcbn1cblxuLnJlY2VpdmVkX3dpdGhkX21zZyBwIHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjNjQ2NDY0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZV9kYXRlIHtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cblxuLnJlY2VpdmVkX3dpdGhkX21zZyB7XG4gIHdpZHRoOiA1NyU7XG59XG5cbi5tZXNncyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xuICB3aWR0aDogNjAlO1xufVxuXG4uc2VudF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm91dGdvaW5nX21zZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMjZweCAwIDI2cHg7XG59XG5cbi5zZW50X21zZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ2JTtcbn1cblxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50eXBlX21zZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tc2dfc2VuZF9idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTFweDtcbiAgd2lkdGg6IDMzcHg7XG59XG5cbi5tZXNzYWdpbmcge1xuICBwYWRkaW5nOiAwIDAgNTBweCAwO1xufVxuXG4ubXNnX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDUxNnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");








let DashboardComponent = class DashboardComponent {
    constructor(helper, router, _scrollToService, api) {
        this.helper = helper;
        this.router = router;
        this._scrollToService = _scrollToService;
        this.api = api;
        this.title = 'chatapp';
        this.showFiller = false;
        this.messages = [];
        this.showMessages = false;
        this.message = '';
        this.userFilter = { name: '' };
        this.showChat = true;
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.api.setCurrentUser(localStorage.getItem('uid'));
        this.api.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                let data = a.payload.doc.data();
                let id = a.payload.doc.id;
                return Object.assign({}, data);
            });
        })).subscribe(data => {
            console.log('all users', data);
            this.users = data.filter((item) => {
                let find = this.api.currentUser.conversations.find(el => el.uid == item.uid);
                if (!find) {
                    return item;
                }
            });
            console.log('the users', this.users);
        });
    }
    open(list) {
        this.helper.openDialog(list);
    }
    logoutModal(c) {
        this.helper.openDialog(c);
    }
    logout() {
        this.api.clearData();
        this.router.navigate(['/login']).then(() => this.helper.closeModal());
    }
    closeModal() {
        this.helper.closeModal();
    }
    selectUser(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.helper.closeModal();
            }
            catch (e) {
                console.log(e);
            }
            if (this.api.currentUser.conversations == undefined || this.api.currentUser.conversations == null) {
                //means user has no conversations.
                this.api.currentUser.conversations = [];
            }
            //add if convo not empty
            let convo = [...this.api.currentUser.conversations];
            let find = convo.find(item => item.uid == user.uid);
            if (find) {
                this.api.getChat(find.chatId).subscribe(m => {
                    this.temp = m;
                    this.api.chat = this.temp[0];
                    this.messages = this.api.chat.messages == undefined ? [] : this.api.chat.messages;
                    this.showMessages = true;
                    setTimeout(() => {
                        this.triggerScrollTo();
                    }, 1000);
                    return;
                });
            }
            else {
                this.api.addNewChat().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let b = yield this.api.addConvo(user);
                }));
            }
        });
    }
    /* Sending a  Message */
    sendMessage() {
        // If message string is empty
        if (this.message == '') {
            alert('Enter message');
            return;
        }
        //set the message object 
        let msg = {
            senderId: this.api.currentUser.uid,
            senderName: this.api.currentUser.name,
            timestamp: new Date(),
            content: this.message
        };
        //empty message
        this.message = '';
        //update 
        this.messages.push(msg);
        console.log('list', this.messages);
        this.api.pushNewMessage(this.messages).then(() => {
            console.log('sent');
        });
    }
    //Scroll to the bottom 
    triggerScrollTo() {
        const config = {
            target: 'destination'
        };
        this._scrollToService.scrollTo(config);
    }
    // Firebase Server Timestamp
    get timestamp() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.serverTimestamp();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let LoginComponent = class LoginComponent {
    constructor(api, helper, router, auth) {
        this.api = api;
        this.helper = helper;
        this.router = router;
        this.auth = auth;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
        ]);
    }
    ngOnInit() {
    }
    login() {
        if (!this.emailFormControl.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Oops...', 'Please enter correct email!', 'error');
            this.emailFormControl.reset();
            return;
        }
        if (!this.passwordFormControl.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Oops...', 'Please enter correct password format!', 'error');
            this.passwordFormControl.reset();
            return;
        }
        // login user  
        this.auth.login(this.emailFormControl.value, this.passwordFormControl.value).then(data => {
            console.log('login data', data);
            // user login 
            this.router.navigate(['/dashboard']).then(() => {
                this.api.setCurrentUser(data.user.uid);
                console.log("the current user form login", data);
                //  console.log(this.api.currentUser)
            });
        }, err => this.helper.openSnackBar(err.message, 'Close'));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let ApiService = class ApiService {
    constructor(afs) {
        this.afs = afs;
        this.messages = [];
        this.chat = {
            chatId: '',
            messages: []
        };
    }
    createUser(uid, data) {
        return this.afs.doc('users/' + uid).set({
            uid: uid,
            name: data.name,
            email: data.email,
            conversations: data.conversations
        });
    }
    updateUser(id, data) {
        return this.afs.doc('users/' + id).update(data);
    }
    setCurrentUser(uid) {
        localStorage.setItem('uid', uid);
        this.observable = this.afs.collection(`users`).doc(uid).valueChanges();
        this.observable.subscribe(data => { this.currentUser = data; });
    }
    getCurrentUser() {
        return this.afs.doc('users/' + localStorage.getItem('uid')).valueChanges();
    }
    getUsers() {
        return this.afs.collection('users').snapshotChanges();
    }
    getChat(chatId) {
        return this.afs.collection('conversations', ref => ref.where('chatId', '==', chatId)).valueChanges();
    }
    userexist(name) {
        return this.afs.collection('users', ref => ref.where('name', '==', name)).valueChanges();
    }
    refreshCurrentUser() {
        this.afs.collection('users/' + localStorage.getItem('uid')).valueChanges().subscribe(data => {
            this.temp = data;
            this.currentUser = this.temp;
        });
    }
    addConvo(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userMsg = { name: user.name, uid: user.uid, chatId: this.chat.chatId };
            let otherMsg = { name: this.currentUser.name, uid: this.currentUser.uid, chatId: this.chat.chatId };
            //first set both references.  
            let myReference = this.afs.doc('users/' + this.currentUser.uid);
            let otherReference = this.afs.doc('users/' + user.uid);
            // Updating my profile 
            myReference.get().subscribe(d => {
                let c = d.data();
                console.log('c', c);
                if (!c.conversations) {
                    c.conversations = [];
                }
                c.conversations.push(userMsg);
                return myReference.update({ conversations: c.conversations });
            });
            // Updating Other User Profile
            otherReference.get().subscribe(d => {
                let c = d.data();
                console.log('c', c);
                if (!c.conversations) {
                    c.conversations = [];
                }
                c.conversations.push(otherMsg);
                return otherReference.update({ conversations: c.conversations });
            });
        });
    }
    addNewChat() {
        const chatId = this.afs.createId();
        return this.afs.doc('conversations/' + chatId).set({
            chatId: chatId,
            messages: []
        }).then(() => {
            this.chat = {
                chatId: chatId,
                messages: []
            };
        });
    }
    pushNewMessage(list) {
        console.log('this-chat-x-x-x-x-x-x-', this.chat);
        return this.afs.doc('conversations/' + this.chat.chatId).update({ messages: list });
    }
    // updateChat(chat){
    //   return this.afs.doc('conversations/' + chat.chatId).update(chat)
    // }
    // getCurrentChat(chatId){
    //   console.log('get')
    //   return this.afs.doc('conversations/'+chatId).valueChanges()
    // }
    clearData() {
        localStorage.clear();
        this.messages = [];
        this.currentUser = {
            conversations: [],
            name: '',
            email: '',
            uid: ''
        };
        this.chat = null;
        this.temp = null;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let AuthService = class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    login(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    signup(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    isAuthenticated() {
        const token = localStorage.getItem('uid');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/helper/helper.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/helper/helper.service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let HelperService = class HelperService {
    constructor(dialog, _snackBar) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
    }
    openDialog(content, width, val) {
        this.dialogRef = this.dialog.open(content, {
            width: width || '300px',
            maxHeight: '300px',
            data: val || {},
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    closeModal() {
        this.dialogRef.close();
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
HelperService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HelperService);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/helper/helper.service */ "./src/app/services/helper/helper.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let SignupComponent = class SignupComponent {
    constructor(api, helper, router, auth, spinner) {
        this.api = api;
        this.helper = helper;
        this.router = router;
        this.auth = auth;
        this.spinner = spinner;
        this.samename = false;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
        ]);
        this.imageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
        ]);
    }
    ngOnInit() { }
    register() {
        if (!this.nameFormControl.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oops...', 'Please enter Name!', 'error');
            this.nameFormControl.reset();
            return;
        }
        if (!this.emailFormControl.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oops...', 'Please enter correct email!', 'error');
            this.emailFormControl.reset();
            return;
        }
        if (!this.passwordFormControl.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Oops...', 'Please enter correct password format!', 'error');
            this.passwordFormControl.reset();
            return;
        }
        console.log("name", this.nameFormControl.value);
        console.log("email", this.emailFormControl.value);
        console.log("pass", this.passwordFormControl.value);
        this.api.userexist(this.nameFormControl.value).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spinner.show();
            if (res.length == 0) {
                this.auth
                    .signup(this.emailFormControl.value, this.passwordFormControl.value)
                    .then((data) => {
                    console.log("user", data.user);
                    this.api
                        .createUser(data.user.uid, {
                        name: this.nameFormControl.value,
                        email: this.emailFormControl.value,
                        image: this.imageFormControl.value,
                        uid: data.user.uid,
                        conversations: [],
                    })
                        .then(() => {
                        localStorage.setItem("uid", data.user.uid);
                        console.log("set uid of current user", data.user.uid);
                        this.spinner.hide();
                        this.router.navigate(["/dashboard"]).then(() => {
                            setTimeout(() => {
                                this.helper.openSnackBar("Welcome to Chat App", "Close");
                            }, 1000);
                        });
                    });
                }, (err) => {
                    this.spinner.hide();
                    this.helper.openSnackBar(err.message, "Close");
                    this.emailFormControl.reset();
                    this.passwordFormControl.reset();
                });
            }
            else {
                this.samename = true;
                this.spinner.hide();
            }
        }));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_helper_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        // apiKey: "AIzaSyBTBx8w9A0pEEMwUCrG34v13JdG5gpaR2U",
        // authDomain: "chat-web-ef654.firebaseapp.com",
        // databaseURL: "https://chat-web-ef654.firebaseio.com",
        // projectId: "chat-web-ef654",
        // storageBucket: "chat-web-ef654.appspot.com",
        // messagingSenderId: "634002531769",
        // appId: "1:634002531769:web:6eaa5abfa5ec12df5d4268"
        apiKey: "AIzaSyDgSEQNTqcdXmVN9VolUe7BDnVO2abbufc",
        authDomain: "chatroom-e8505.firebaseapp.com",
        databaseURL: "https://chatroom-e8505.firebaseio.com",
        projectId: "chatroom-e8505",
        storageBucket: "chatroom-e8505.appspot.com",
        messagingSenderId: "680329547714",
        appId: "1:680329547714:web:a4504fccceb9dd27c3905b",
        measurementId: "G-X0Y82V8FBE"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gsl/Desktop/Chatapplication/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map