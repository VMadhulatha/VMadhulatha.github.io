(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/barchart/barchart.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/barchart/barchart.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div #chart id=\"chart\" (window:resize)=\"onResize($event)\"></div> \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/bubblechart/bubblechart.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/bubblechart/bubblechart.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>bubblechart works!</p>\n<div #bubbleChart id=\"bubbleChart\" (window:resize)=\"onResize($event)\"></div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/change-impact-component.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/change-impact-component.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n\n  <div class=\" row\">\n\n    <div class=\" col-lg-12\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n\n          <div class=\" row\">\n            <div class=\" col-lg-6\">\n              <h2>Change Impact Analysis</h2>\n            </div>\n            <div class=\" col-lg-6\">\n              <h4>Please upload Excel file :\n                <input type=\"file\" style=\"display: inline-block;\" (change)=\"uploadedFile($event)\" placeholder=\"Upload file\"\n                  accept=\".xlsx\">\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"Upload()\">Upload</button> </h4>\n            </div>\n          </div>\n\n          <div class=\" row\">\n            <div class=\" col-lg-2\">\n              <h4 class=\"card-title\">Project phases</h4>\n              <ul *ngFor=\"let phase of projectPhases\" >\n                <li *ngIf=\"phase.projectPhases!=='Realize Build'\">\n                 \n                  {{phase.projectPhases}}\n                \n                </li>\n                <li *ngIf=\"phase.projectPhases==='Realize Build'\" style=\"background-color:slategray   ;stroke: snow;\">\n                  <svg height=\"60\" width=\"200\">\n                    <rect width=\"200\" height=\"60\" style=\"fill:royalblue;stroke-width:3;stroke:skyblue \"/>\n                    <text x=\"10\" y=\"20\" align=\"center\" fill=\"white\" font=\"1.5em\"> {{phase.projectPhases}}</text>\n                  </svg>\n                  {{phase.projectPhases}}\n                \n                </li>\n\n              </ul>\n            </div>\n\n            <div class='col-lg-4'>\n              <h3 class=\" card-title\">Transaction Action Items</h3>\n              <div *ngFor=\"let val of barchartrender;\">\n                <app-barchart [data]='barData'></app-barchart>\n              </div>\n            </div>\n         \n            <div class=\"col-lg-4\">\n              <h4 class=\" card-title\">Transaction Action Items status</h4>\n              <div class=\" row\">\n                <div class=\"col-lg-3\">\n                  <div *ngFor=\"let pervalue of PerData; let q=index\">\n                    <div *ngIf=\"q<1\" class=\"row\">\n                      <svg height=\"130\" width=\"100\">\n                        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"white\" stroke-width=\"3\" [attr.fill]='pervalue.color' />\n                     \n                       <text x=\"30\" y=\"60\" align=\"center\" fill=\"white\" class=\"heavy\">{{pervalue.percentage}}%</text>\n                        <text></text>\n                        <text x=\"5\" y=\"110\" align=\"bottom\" fill=\"white\" >{{pervalue.status}}({{pervalue.value}})</text>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n            \n                  <!-- <br>\n                  <br>\n                  <br> -->\n                  <div *ngFor=\"let pervalue of PerData; let j=index\">\n                    <div *ngIf=\"j>0\" class=\"row\">\n                      <svg height=\"130\" width=\"100\">\n                        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"white\" stroke-width=\"3\" [attr.fill]='pervalue.color' />\n                       \n                        <text x=\"40\" y=\"60\" align=\"center\" fill=\"white\" class=\"heavy\" >{{pervalue.percentage}}%</text>\n                        <text x=\"10\" y=\"110\" align=\"bottom\" fill=\"white\" >{{pervalue.status}}({{pervalue.value}})</text>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\" col-lg-2\">\n              <h4 class=\"card-title\">Target teams</h4>              \n              <ul *ngFor=\"let team of targetTeams\" >\n                <li>{{team.targetTeams}}</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div class=\" row\">\n      <div class=\" col-lg-8\">\n      \n          <h4 class=\" card-title\">Change Impact Log</h4>\n       \n          <div class=\" table-responsive\" >\n            <table class=\" table tablesorter\" >\n              <thead class=\" text-primary\" *ngFor=\"let Clog of changeImpactLogDetails; let i=index\">\n                <tr *ngIf=\"i < 1\" style=\"background-color: #008000\">\n                  <th>{{Clog.Impact}}</th>\n                  <th>{{Clog.DegreeofImpact}}</th>\n                  <th>{{Clog.Regions}}</th>\n                  <th>{{Clog.ImpactedStackholder}}</th>\n                  <th>{{Clog.ChangeIntervention}}</th>\n                  <th>{{Clog.Frequency}}</th>\n                  <th>{{Clog.Assignedto}}</th>\n                  <th>Status</th>\n\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let Clog of changeImpactLogDetails ; let j=index\">\n                <tr *ngIf=\"j > 0\">\n                  <td>{{Clog.Impact}}</td>\n                  <td>{{Clog.DegreeofImpact}}</td>\n                  <td>{{Clog.Regions}}</td>\n                  <td>{{Clog.ImpactedStackholder}}</td>\n                  <td>{{Clog.ChangeIntervention}}</td>\n                  <td>{{Clog.Frequency}}</td>\n                  <td>{{Clog.Assignedto}}</td>\n\n                  <td>\n                    <div *ngIf=\"Clog.Status >= 85\">\n                      <span class=\"dotCom\"></span>\n                    </div>\n                    <div *ngIf=\"Clog.Status >= 70 && Clog.Status < 85\" >\n                      <span class=\"dotIn\"></span>\n                    </div>\n                    <div *ngIf=\"Clog.Status < 70\">\n                      <span class=\"dotSuc\"></span>\n                    </div>\n                  </td>\n\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n      </div>\n    \n    <div class='col-lg-4'>  \n     \n          <h4 class=\" card-title\">Impact heat Map</h4>\n       \n          \n  <div > \n        <app-bubblechart [bData]='bubbleData'></app-bubblechart>\n  </div>  \n      </div>\n    \n\n\n    </div>\n    </div>\n  </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _change_impact_component_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-impact-component/barchart/barchart.component */ "./src/app/change-impact-component/barchart/barchart.component.ts");
            /* harmony import */ var _change_impact_component_change_impact_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-impact-component/change-impact-component.component */ "./src/app/change-impact-component/change-impact-component.component.ts");
            /* harmony import */ var _change_impact_component_bubblechart_bubblechart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-impact-component/bubblechart/bubblechart.component */ "./src/app/change-impact-component/bubblechart/bubblechart.component.ts");
            var routes = [
                { path: 'change-impact-component', component: _change_impact_component_change_impact_component_component__WEBPACK_IMPORTED_MODULE_6__["ChangeImpactComponentComponent"] },
                {
                    path: '',
                    redirectTo: 'change-impact-component',
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    redirectTo: 'change-impact-component'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_change_impact_component_change_impact_component_component__WEBPACK_IMPORTED_MODULE_6__["ChangeImpactComponentComponent"], _change_impact_component_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_5__["BarChartComponent"], _change_impact_component_bubblechart_bubblechart_component__WEBPACK_IMPORTED_MODULE_7__["BubblechartComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _change_impact_component_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_5__["BarChartComponent"], _change_impact_component_bubblechart_bubblechart_component__WEBPACK_IMPORTED_MODULE_7__["BubblechartComponent"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'OCMDashbord';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            //import { ChangeImpactComponentComponent } from './change-impact-component/change-impact-component.component';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                        // ,ChangeImpactComponentComponent
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/barchart/barchart.component.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/change-impact-component/barchart/barchart.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-barchart #chart {\n  height: 200px;\n  width: 450px;\n  background-color: #054705;\n}\napp-barchart .bar {\n  fill: steelblue;\n}\napp-barchart .bar:hover {\n  fill: brown;\n}\napp-barchart .label {\n  fill: white;\n  font: 10px sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLWltcGFjdC1jb21wb25lbnQvYmFyY2hhcnQvQzpcXE1hZGh1XFxPQ01EYXNoYm9yZC9zcmNcXGFwcFxcY2hhbmdlLWltcGFjdC1jb21wb25lbnRcXGJhcmNoYXJ0XFxiYXJjaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhbmdlLWltcGFjdC1jb21wb25lbnQvYmFyY2hhcnQvYmFyY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRFI7QURJSTtFQUNJLGVBQUE7QUNGUjtBREtNO0VBQ0UsV0FBQTtBQ0hSO0FETU07RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1pbXBhY3QtY29tcG9uZW50L2JhcmNoYXJ0L2JhcmNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWJhcmNoYXJ0e1xyXG5cclxuICAgICNjaGFydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNSwgNzEsIDUpOyAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5iYXIge1xyXG4gICAgICAgIGZpbGw6IHN0ZWVsYmx1ZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuYmFyOmhvdmVyIHtcclxuICAgICAgICBmaWxsOiBicm93bjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQ6IDEwcHggc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gIFxyXG59ICAgIiwiYXBwLWJhcmNoYXJ0ICNjaGFydCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1NDcwNTtcbn1cbmFwcC1iYXJjaGFydCAuYmFyIHtcbiAgZmlsbDogc3RlZWxibHVlO1xufVxuYXBwLWJhcmNoYXJ0IC5iYXI6aG92ZXIge1xuICBmaWxsOiBicm93bjtcbn1cbmFwcC1iYXJjaGFydCAubGFiZWwge1xuICBmaWxsOiB3aGl0ZTtcbiAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/barchart/barchart.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/change-impact-component/barchart/barchart.component.ts ***!
          \************************************************************************/
        /*! exports provided: BarChartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () { return BarChartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
            var BarChartComponent = /** @class */ (function () {
                function BarChartComponent() {
                    this.margin = { top: 50, right: 20, bottom: 50, left: 90 };
                }
                BarChartComponent.prototype.ngOnChanges = function () {
                    if (!this.data) {
                        return;
                    }
                    this.createChart();
                };
                BarChartComponent.prototype.onResize = function () {
                    this.createChart();
                };
                BarChartComponent.prototype.createChart = function () {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg').remove();
                    var element = this.chartContainer.nativeElement;
                    var data = this.data;
                    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element).append('svg')
                        .attr('width', element.offsetWidth)
                        .attr('height', element.offsetHeight);
                    var contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
                    var contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
                    var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                        .rangeRound([0, contentWidth])
                        .domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, function (d) { return d.frequency; })]);
                    // tslint:disable-next-line:align
                    var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
                        .rangeRound([contentHeight, 0])
                        .padding(0.4)
                        .domain(data.map(function (d) { return d.letter; }));
                    var g = svg.append('g')
                        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
                    g.append('g')
                        .attr('transform', 'translate(0, ' + contentHeight + ')')
                        .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x));
                    // text label for the x axis
                    g.append('text')
                        .style('color', 'white')
                        .attr('transform', 'translate(' + (contentWidth / 2) + ',' +
                        (contentHeight + 30) + ')')
                        .style('text-anchor', 'middle')
                        .text('Degree of impact');
                    g.append('g')
                        .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y));
                    g.append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', -20)
                        .attr('dy', '-3em')
                        .style('text-anchor', 'end')
                        .style('text-color', 'white')
                        .text('Number of Action Items');
                    g.selectAll('.bar')
                        .data(data)
                        .enter()
                        .append('rect')
                        .attr('class', 'bar')
                        // tslint:disable:only-arrow-functions
                        .attr('y', function (d) { return y(d.letter); })
                        .attr('x', function (d) { return 0; })
                        .attr('height', y.bandwidth())
                        .attr('width', function (d) { return x(d.frequency); });
                };
                return BarChartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart', { static: true })
            ], BarChartComponent.prototype, "chartContainer", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BarChartComponent.prototype, "data", void 0);
            BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-barchart',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./barchart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/barchart/barchart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./barchart.component.scss */ "./src/app/change-impact-component/barchart/barchart.component.scss")).default]
                })
            ], BarChartComponent);
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/bubblechart/bubblechart.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/change-impact-component/bubblechart/bubblechart.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1pbXBhY3QtY29tcG9uZW50L2J1YmJsZWNoYXJ0L2J1YmJsZWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/bubblechart/bubblechart.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/change-impact-component/bubblechart/bubblechart.component.ts ***!
          \******************************************************************************/
        /*! exports provided: BubblechartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblechartComponent", function () { return BubblechartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
            var BubblechartComponent = /** @class */ (function () {
                function BubblechartComponent() {
                    this.margin = { top: 50, right: 20, bottom: 50, left: 90 };
                }
                BubblechartComponent.prototype.ngOnInit = function () {
                    if (!this.bData) {
                        return;
                    }
                    this.createBubbleChart();
                };
                BubblechartComponent.prototype.onResize = function () {
                    this.createBubbleChart();
                };
                BubblechartComponent.prototype.createBubbleChart = function () {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"]('svg').remove();
                    var element1 = this.chartContainer1.nativeElement;
                    var data = this.bData;
                    var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element1).append('svg')
                        .attr('width', element1.offsetWidth)
                        .attr('height', element1.offsetHeight);
                    var contentWidth = element1.offsetWidth - this.margin.left - this.margin.right;
                    var contentHeight = element1.offsetHeight - this.margin.top - this.margin.bottom;
                    var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                        .domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.bData, function (d) { return d.BenifitoCh; })])
                        .range([0, contentWidth]);
                    svg.append("g")
                        .attr("transform", "translate(0," + contentHeight + ")")
                        .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x));
                    // Add Y axis
                    var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                        .domain([d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.bData, function (d) { return d.BenifitoCh; }), 0])
                        .range([contentHeight, 0]);
                    svg.append("g")
                        .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y));
                    // Add a scale for bubble size
                    var z = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]();
                    // .domain([10, 50])
                    // .range([ 1, 40]);
                    // Add dots
                    svg.append('g')
                        .selectAll("dot")
                        .data(this.bData)
                        .enter()
                        .append("circle")
                        .attr("cx", function (d) { console.log(d.BenifitoCh); return x(d.BenifitoCh); })
                        .attr("cy", function (d) { return y(d.ImpactofCha); })
                        .attr("r", function (d) { return z(d.NoofRoles); })
                        .style("fill", "#69b3a2")
                        .style("opacity", "0.7")
                        .attr("stroke", "black");
                };
                return BubblechartComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bubbleChart', { static: true })
            ], BubblechartComponent.prototype, "chartContainer1", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BubblechartComponent.prototype, "bData", void 0);
            BubblechartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bubblechart',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bubblechart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/bubblechart/bubblechart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bubblechart.component.scss */ "./src/app/change-impact-component/bubblechart/bubblechart.component.scss")).default]
                })
            ], BubblechartComponent);
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/change-impact-component.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/change-impact-component/change-impact-component.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-change-impact-component .heavy {\n  font: bold 30px sans-serif;\n  fill: white;\n}\n\n.dotSuc {\n  height: 15px;\n  width: 15px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dotIn {\n  height: 15px;\n  width: 15px;\n  background-color: orange;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.dotCom {\n  height: 15px;\n  width: 15px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.heavy {\n  font: bold 15px sans-serif;\n  fill: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLWltcGFjdC1jb21wb25lbnQvQzpcXE1hZGh1XFxPQ01EYXNoYm9yZC9zcmNcXGFwcFxcY2hhbmdlLWltcGFjdC1jb21wb25lbnRcXGNoYW5nZS1pbXBhY3QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFuZ2UtaW1wYWN0LWNvbXBvbmVudC9jaGFuZ2UtaW1wYWN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFTLDBCQUFBO0VBQTJCLFdBQUE7QUNFeEM7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDS0o7O0FESEU7RUFBUywwQkFBQTtFQUEyQixXQUFBO0FDUXRDIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLWltcGFjdC1jb21wb25lbnQvY2hhbmdlLWltcGFjdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2hhbmdlLWltcGFjdC1jb21wb25lbnR7XHJcbiAgICAuaGVhdnkgeyBmb250OiBib2xkIDMwcHggc2Fucy1zZXJpZjtmaWxsOndoaXRlIH1cclxufVxyXG4uZG90U3VjIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5kb3RJbiB7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6b3JhbmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuZG90Q29tIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmhlYXZ5IHsgZm9udDogYm9sZCAxNXB4IHNhbnMtc2VyaWY7ZmlsbDp3aGl0ZSB9IiwiYXBwLWNoYW5nZS1pbXBhY3QtY29tcG9uZW50IC5oZWF2eSB7XG4gIGZvbnQ6IGJvbGQgMzBweCBzYW5zLXNlcmlmO1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLmRvdFN1YyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kb3RJbiB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kb3RDb20ge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oZWF2eSB7XG4gIGZvbnQ6IGJvbGQgMTVweCBzYW5zLXNlcmlmO1xuICBmaWxsOiB3aGl0ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/change-impact-component/change-impact-component.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/change-impact-component/change-impact-component.component.ts ***!
          \******************************************************************************/
        /*! exports provided: ChangeImpactComponentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeImpactComponentComponent", function () { return ChangeImpactComponentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
            /* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
            var ChangeImpactComponentComponent = /** @class */ (function () {
                function ChangeImpactComponentComponent() {
                    this.barData = [];
                    this.PerData = [];
                    this.projectPhases = [];
                    this.targetTeams = [];
                    this.changeImpactLogDetails = [];
                    this.barchartrender = [];
                    this.bubblechatrender = [];
                    this.bubbleData = [];
                }
                ChangeImpactComponentComponent.prototype.ngOnInit = function () {
                };
                ChangeImpactComponentComponent.prototype.uploadedFile = function (event) {
                    this.fileUploaded = event.target.files[0];
                };
                ChangeImpactComponentComponent.prototype.Upload = function () {
                    this.readExcel();
                    this.loadComponent = true;
                    this.display = true;
                };
                ChangeImpactComponentComponent.prototype.readExcel = function () {
                    var _this = this;
                    var readFile = new FileReader();
                    readFile.onload = function (e) {
                        _this.storeData = readFile.result;
                        var data = new Uint8Array(_this.storeData);
                        var arr = new Array();
                        for (var i = 0; i !== data.length; ++i) {
                            arr[i] = String.fromCharCode(data[i]);
                        }
                        var bstr = arr.join('');
                        var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
                        // tslint:disable-next-line:variable-name
                        _this.worksheet = workbook.Sheets['Data Mapping'];
                        // To fetch bar chart data
                        for (var j = 5; j <= 7; j++) {
                            var indices = ['E' + j, 'F' + j];
                            // tslint:disable-next-line:object-literal-key-quotes
                            //  this.barData[j - 5] = {'letter':  this.worksheet[indices[0]].v, 'frequency':  this.worksheet[indices[1]].v};
                        }
                        _this.barchartrender[0] = { "barchart": "rend" };
                        // To fetch circle data
                        for (var k = 10; k <= 11; k++) {
                            var indices = ['B' + k, 'E' + k, 'F' + k];
                            // const colors = ['orangered', 'green'];
                            // // tslint:disable:object-literal-key-quotes
                            // this.PerData[k - 10] = {'status':  this.worksheet[indices[0]].v,
                            // 'value':  this.worksheet[indices[1]].v, 'percentage': Math.round((this.worksheet[indices[2]].v) * 100), 'color': colors[k-10]};
                        }
                        /* loop to fetch data for project phases and target teams  */
                        var worksheet1 = workbook.Sheets['Change Impacts'];
                        var highCount = 0;
                        var medCount = 0;
                        var lowCount = 0;
                        for (var a = 2; a <= 10; a++) {
                            var indices = ['D' + a];
                            if (worksheet1[indices[0]] !== undefined) {
                                if (worksheet1[indices[0]].v == "High") {
                                    highCount++;
                                }
                                else if (worksheet1[indices[0]].v == "Medium") {
                                    medCount++;
                                }
                                else if (worksheet1[indices[0]].v == "Low") {
                                    lowCount++;
                                }
                            }
                        }
                        _this.barData[2] = { 'letter': 'High', 'frequency': highCount };
                        _this.barData[1] = { 'letter': 'Medium', 'frequency': medCount };
                        _this.barData[0] = { 'letter': 'Low', 'frequency': lowCount };
                        var inCompCount = 0;
                        var inProCount = 0;
                        var inDelCount = 0;
                        var totalCount = 0;
                        for (var a = 2; a <= 10; a++) {
                            var indices = ['J' + a];
                            if (worksheet1[indices[0]] !== undefined) {
                                // console.log("status"+worksheet1[indices[0]].v);
                                if (worksheet1[indices[0]].v >= 0.85) {
                                    inCompCount++;
                                }
                                else if (worksheet1[indices[0]].v >= 0.70 && worksheet1[indices[0]].v < 0.85) {
                                    inProCount++;
                                }
                                else if (worksheet1[indices[0]].v < 0.70) {
                                    inDelCount++;
                                }
                            }
                        }
                        totalCount = inCompCount + inProCount + inDelCount;
                        var proPercntaga = (inProCount / totalCount) * 100;
                        var ComPercntaga = (inCompCount / totalCount) * 100;
                        console.log("proPercntaga" + proPercntaga + "ComPercntaga" + ComPercntaga);
                        var colors = ['orangered', 'green'];
                        _this.PerData[0] = { 'status': 'Completed', 'value': inCompCount, 'percentage': ComPercntaga, 'color': colors[0] };
                        _this.PerData[1] = { 'status': 'In Progress', 'value': inProCount, 'percentage': proPercntaga, 'color': colors[1] };
                        for (var a = 2; a <= 10; a++) {
                            var indices = ['M' + a, 'N' + a];
                            if (worksheet1[indices[0]] !== undefined) {
                                _this.projectPhases[a - 2] = { 'projectPhases': worksheet1[indices[0]].v };
                            }
                            if (worksheet1[indices[1]] !== undefined && worksheet1[indices[1]] !== '') {
                                _this.targetTeams[a - 2] = { 'targetTeams': worksheet1[indices[1]].v };
                            }
                        }
                        /* loop to fetch data for table */
                        for (var b = 1; b <= 10; b++) {
                            var indices = ['C' + b, 'D' + b, 'E' + b, 'F' + b, 'G' + b, 'H' + b, 'I' + b, 'J' + b];
                            if (worksheet1[indices[1]] !== undefined) {
                                _this.changeImpactLogDetails[b - 1] = { 'Impact': worksheet1[indices[0]].v, 'DegreeofImpact': worksheet1[indices[1]].v,
                                    'Regions': worksheet1[indices[2]].v, 'ImpactedStackholder': worksheet1[indices[3]].v,
                                    'ChangeIntervention': worksheet1[indices[4]].v, 'Frequency': worksheet1[indices[5]].v,
                                    'Assignedto': worksheet1[indices[6]].v, 'Status': Math.round((worksheet1[indices[7]].v) * 100)
                                };
                            }
                        }
                        var worksheet2 = workbook.Sheets['Change HeatMap Data'];
                        for (var b = 3; b <= 8; b++) {
                            var indices = ['A' + b, 'B' + b, 'C' + b, 'D' + b];
                            if (worksheet2[indices[1]] !== undefined) {
                                _this.bubbleData[b - 3] = { 'Change': worksheet2[indices[0]].v, 'BenifitoCh': worksheet2[indices[1]].v,
                                    'ImpactofCha': worksheet2[indices[2]].v, 'NoofRoles ': worksheet2[indices[3]].v };
                            }
                        }
                        // console.log(JSON.stringify(this.bubbleData));
                    };
                    readFile.readAsArrayBuffer(this.fileUploaded);
                };
                return ChangeImpactComponentComponent;
            }());
            ChangeImpactComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-change-impact-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-impact-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-impact-component/change-impact-component.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-impact-component.component.scss */ "./src/app/change-impact-component/change-impact-component.component.scss")).default]
                })
            ], ChangeImpactComponentComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Madhu\OCMDashbord\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** fs (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!************************!*\
          !*** crypto (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!************************!*\
          !*** stream (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map