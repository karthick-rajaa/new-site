(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<a href=\"\" class=\"d-block px-3 py-2 text-center text-bold text-white old-bv\"></a>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"main\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<!-- <div><a routerLink=\"main\">main</a></div> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navmenu/navmenu.component */ "./src/app/navmenu/navmenu.component.ts");









var appRoutes = [
    { path: 'main', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__["MainpageComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__["MainpageComponent"],
                _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_8__["NavmenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar-deep-purple::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n    \r\n    .scrollbar-deep-purple::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n    \r\n    .scrollbar-deep-purple::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #512da8; }\r\n    \r\n    .scrollbar-cyan::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n    \r\n    .scrollbar-cyan::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n    \r\n    .scrollbar-cyan::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #00bcd4; }\r\n    \r\n    .scrollbar-dusty-grass::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n    \r\n    .scrollbar-dusty-grass::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n    \r\n    .scrollbar-dusty-grass::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%); }\r\n    \r\n    .scrollbar-ripe-malinka::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px; }\r\n    \r\n    .scrollbar-ripe-malinka::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5; }\r\n    \r\n    .scrollbar-ripe-malinka::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%); }\r\n    \r\n    .bordered-deep-purple::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: none;\r\n    border: 1px solid #512da8; }\r\n    \r\n    .bordered-deep-purple::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: none; }\r\n    \r\n    .bordered-cyan::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: none;\r\n    border: 1px solid #00bcd4; }\r\n    \r\n    .bordered-cyan::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: none; }\r\n    \r\n    .square::-webkit-scrollbar-track {\r\n    border-radius: 0 !important; }\r\n    \r\n    .square::-webkit-scrollbar-thumb {\r\n    border-radius: 0 !important; }\r\n    \r\n    .thin::-webkit-scrollbar {\r\n    width: 6px; }\r\n    \r\n    .example-1 {\r\n    position: relative;\r\n    overflow-y: scroll;\r\n    height: 100vh; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUU7O0lBRXJCO0lBQ0EsV0FBVztJQUNYLHlCQUF5QixFQUFFOztJQUUzQjtJQUNBLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQseUJBQXlCLEVBQUU7O0lBRTNCO0lBQ0Esb0RBQW9EO0lBQ3BELHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBRTs7SUFFckI7SUFDQSxXQUFXO0lBQ1gseUJBQXlCLEVBQUU7O0lBRTNCO0lBQ0EsbUJBQW1CO0lBQ25CLG9EQUFvRDtJQUNwRCx5QkFBeUIsRUFBRTs7SUFFM0I7SUFDQSxvREFBb0Q7SUFDcEQseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFFOztJQUVyQjtJQUNBLFdBQVc7SUFDWCx5QkFBeUIsRUFBRTs7SUFFM0I7SUFDQSxtQkFBbUI7SUFDbkIsb0RBQW9EO0lBRXBELG1FQUFtRSxFQUFFOztJQUVyRTtJQUNBLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUU7O0lBRXJCO0lBQ0EsV0FBVztJQUNYLHlCQUF5QixFQUFFOztJQUUzQjtJQUNBLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFFcEQsbUVBQW1FLEVBQUU7O0lBRXJFO0lBQ0Esd0JBQXdCO0lBQ3hCLHlCQUF5QixFQUFFOztJQUUzQjtJQUNBLHdCQUF3QixFQUFFOztJQUUxQjtJQUNBLHdCQUF3QjtJQUN4Qix5QkFBeUIsRUFBRTs7SUFFM0I7SUFDQSx3QkFBd0IsRUFBRTs7SUFFMUI7SUFDQSwyQkFBMkIsRUFBRTs7SUFFN0I7SUFDQSwyQkFBMkIsRUFBRTs7SUFFN0I7SUFDQSxVQUFVLEVBQUU7O0lBRVo7SUFDQSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWEsRUFBRSIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYmFyLWRlZXAtcHVycGxlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cclxuICAgIFxyXG4gICAgLnNjcm9sbGJhci1kZWVwLXB1cnBsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxiYXItZGVlcC1wdXJwbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxMmRhODsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLWN5YW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLWN5YW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLWN5YW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLWR1c3R5LWdyYXNzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cclxuICAgIFxyXG4gICAgLnNjcm9sbGJhci1kdXN0eS1ncmFzczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1OyB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxiYXItZHVzdHktZ3Jhc3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzMwZGVnLCAjZDRmYzc5IDAlLCAjOTZlNmExIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2Q0ZmM3OSAwJSwgIzk2ZTZhMSAxMDAlKTsgfVxyXG4gICAgXHJcbiAgICAuc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XHJcbiAgICBcclxuICAgIC5zY3JvbGxiYXItcmlwZS1tYWxpbmthOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7IH1cclxuICAgIFxyXG4gICAgLnNjcm9sbGJhci1yaXBlLW1hbGlua2E6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzMwZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2YwOTNmYiAwJSwgI2Y1NTc2YyAxMDAlKTsgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVyZWQtZGVlcC1wdXJwbGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MTJkYTg7IH1cclxuICAgIFxyXG4gICAgLmJvcmRlcmVkLWRlZXAtcHVycGxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7IH1cclxuICAgIFxyXG4gICAgLmJvcmRlcmVkLWN5YW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGJjZDQ7IH1cclxuICAgIFxyXG4gICAgLmJvcmRlcmVkLWN5YW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgfVxyXG4gICAgXHJcbiAgICAuc3F1YXJlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IH1cclxuICAgIFxyXG4gICAgLnNxdWFyZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyB9XHJcbiAgICBcclxuICAgIC50aGluOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNnB4OyB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlLTEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Grid row -->\n<div class=\"row\">\n\n  <!-- Grid column -->\n  <div class=\"col-md-6 mb-4\">\n\n    <!-- Exaple 1 -->\n    <!-- <div class=\"card example-1 scrollbar-ripe-malinka\"> -->\n    <div class=\"card example-1 scrollbar-deep-purple bordered-deep-purple thin\">\n      <div class=\"card-body\">\n        <h4 id=\"section1\"><strong>என் நண்பனின் தங்கை</strong>\n        </h4>\n        <h3>(En Nanbanin Thangai)</h3>\n        <p>என் பேர் விக்கி! Engineering முடிச்சிட்டு ஒரு IT கம்பெனில வேல பாத்துட்டு இருகன்! நான் ரொம்ப submissive! எனக்கு ஒரு பொண்ணு கால் கீழ அடங்கி இருக்க பிடிக்கும்! பொதுவா எந்த பொண்ண பாத்தாலும் பயப்படுவன்!\n            இப்படி இருக்கும் போது ஒரு நாள் நான் office முடிச்சிட்டு வீட்டுக்கு போக பஸ் stop ல வெயிட் பண்ணிட்டு இருந்தான்! ஒரு black கலர் Audi கார் என் முன்னாடி வந்து நின்னுச்சு!\n            \n            அந்த கார் ல இருந்து வெள்ளைய ரொம்ப அழகா ஒரு பொண்ணு இறங்கி வந்தாங்க! என்ன பாத்து சிரிச்சிட்டு நீங்க விக்கி தான அப்டினு கேட்டாங்க! எனக்கு ஒண்ணுமே புரியல! ஆமா நான் விக்கி தான் நீங்க யாருனு தெரியல!\n            \n            ஹ்ம்ம் நான் உங்க காலேஜ் friend அசோக் ஓட Sister. என் தம்பி கூட உங்கள பாத்து இருகன். உங்க கூட பேச ரொம்ப நாள் ட்ரை பண்ண முடியல! if u dont mine என் கூட coffee shop வந்து ஒரு 10 mins time spend பண்ண முடியுமா ?\n            \n            எனக்கு என்ன சொல்றதுன்னு தெரியல சரி னு சொல்லிட்டேன்! ஒரு பெரிய காபி shop ku கூட்டிட்டு போனாங்க. காபி ஆர்டர் பண்ணாங்க. எனக்கு அந்த பொண்ணோட கண்ண பாத்து பேச அவளோ பயமா இருந்துச்சு! அந்த பொண்ணு கிட்ட ஒரு royalness இருந்துச்சு!\n            \n            அந்த பொண்ண பாக்கும் போது ஒரு வித பயம் எனக்கு வந்துச்சு!அந்த பொண்ணு என் கண்ண பாத்துட்டு காபி குடிச்சிட்டு இருந்தாங்க! நான் அவங்க கால் பாதம் பாத்துட்டு காபி குடிச்சிட்டு இருந்தன்!\n            \n            திடிர்னு அந்த பொண்ணு என்ன பாத்து ” Are you a Submissive ” னு கேட்டாங்க. எனக்கு தூக்கி வரி போட்டுச்சு! எனக்கு என்ன சொல்றதுன்னு தெரியல! முன்ன பின்ன தெரியாத ஒரு பொண்ணு , என் friend ஓட sister வேற , நான் டக்குனு என்ன சொல்றிங்க அப்டிலாம் ஒன்னு இல்ல, இந்த மாரி எல்லாம் என் கிட்ட பேசாதீங்க னு வேகமா சொன்னன்!\n            \n            ஹலோ relax என் இப்படி டென்ஷன் ஆகுறீங்க! So நீங்க Submissive கெடயாது அப்டி தான!\n            ஹ்ம்ம் ஆமா! நான் யாருக்கும் அடங்கி இருக்குற ஆள் கெடயாது. Im a normal man!\n            சரி சரி கோவ படாதீங்க. உங்க whatsapp கு சில pic அனுப்பி இருகன் பாருங்க!\n            \n            எனக்கு ஒன்னும் புரியல என் phone open பண்ணி பாத்தேன்! மிக பெரிய shock! நான் வீட்ல இருக்கும் போது saree கட்டி photo எடுத்து பாப்பன்! ஆனா ஒடனே delete பன்னிடுவன்! இது எப்படி அந்த பெண்ணுக்கு கிட்ட கிடைச்சுது ஒண்ணுமே புரியல!\n            \n            இது எல்லாம் எப்படி உங்க கிட்ட கெடச்சுது. யாரு உங்களுக்கு இது எல்லாம் சென்ட் பண்ணா!\n            \n            இருங்க இன்னும் நெறய send பண்ணி இருக்கான் எல்லாத்தையும் பொறுமையா பாருங்க நன் என் போன் ல பாத்த Femdom videos, sissy Captions, femdom stories எல்லாம் அந்த பொண்ணு எனக்கு அனுப்பினாங்க! என் ஒடம்பு எல்லாம் நடுங்க ஆரம்பிச்சிடுச்சு. என்னோட nude pics நான் saree கட்டி இருக்க pic எல்லாம் அவங்க கிட்ட இருக்கு! எனக்கு அழுகை வர மாறி ஆயிடிச்சு! இத பாத்த அந்த பொண்ணு , சிரிச்சிட்டு பேச ஆரம்பிச்சாங்க!\n            \n            ஹலோ ரிலாக்ஸ்! இப்போ ஏன் அழுவறீங்க! கண்ண தொடைங்க கொஞ்சம் நேரம் முன்னாடி தான் ஆம்பள னு சொன்னிங்க இப்போ இப்படி பொட்டச்சி மாரி அழுவுறீங்க! இருங்க பதட்ட படாதீங்க! நான் எல்லாத்தையும் detail ah explain பண்றன்!\n            \n            என் பேர் கிருத்திகா என் வயசு 25. உங்கள விட ரெண்டு வயசு பெரிய பொண்ணு நான்! நான் ஒரு Dominant! சின்ன வயசுல இருந்து எல்லாரையும் அடக்கி தான் எனக்கு பழக்கம்! எனக்கு எல்லாத்துலயும் first ah இருக்கனும்! நான் யூனிவர்சிட்டி topper! எல்லா பொண்ணுங்களும் marraige அப்புறம் husband கு அடங்கி நடந்துப்பாங்க.\n            \n            but என்னால அப்டி வாழ முடியாது. எனக்கு வர புருஷன் எனக்கு அடங்கி இருக்கனும். இன்னும் சொல்லனும்னா நான் புருஷன ah இருக்கனும். என் புருஷன் எனக்கு பொண்டாட்டியா இருக்கனும்! But இத எந்த ஆம்பளயும் ஒத்துக்க மாட்டான்!\n            \n            இப்படி இருக்கும் போது தான் ஒரு நாள் என் தம்பி கூட உங்கள பாத்தன். உங்கள பாத்த உடனை எனக்கு ரொம்ப பிடிச்சி இருந்துச்சு. எனக்கு நீங்க ஒரு submissive அப்டினு ஒரு டவுட் இருந்திச்சு!\n            \n            சோ உங்க phone ku ஒரு bug send பன்னன். அந்த second ல இருந்து நீங்க உங்க போன் ல பண்ற எல்லா விஷயமும் நான் வாட்ச் பண்னன். என்னால நம்பவே முடியல நான் நெனச்ச மாரி நீங்க இருந்திங்க.\n            \n            எனக்கு அவளோ சந்தோசம்! உங்கள மாரி ஒருத்தர் எனக்கு புருஷனா sorry பொண்டாட்டியா வந்தா நல்லா இருக்கும் னு தோணுது! நான் இந்த pic எல்லாம் வச்சி உங்கள blackmail பண்ணி என்ன கல்யாணம் பண்ணா வைக்க முடியும். but எனக்கு அப்படி வேணாம். நீங்க முழு மனசோட என் wife ah வரணும்!\n            \n            ஹ்ம் இப்போ எல்லாம் தெளிவா புரிஞ்சிசா! இப்போ சொல்லுங்க என்ன பண்ணலாம்!\n            \n            நீங்க சொல்றத கேக்கும்போது எனக்கு என்ன சொல்றதுன்னு தெரியல! எந்த அளவுக்கு real life la இது possible nu தெரியல! நீங்க நிஜமா தான் சொல்றிங்களா ? (எனக்கு அவங்க சொல்ற மாரி வாழ ஆசை தான். ஆன இன்னும் முழுசா என்னால சம்மதிக்க முடியல )\n            \n            இங்க பாருங்க விக்கி. dont worry. உங்களுக்கு ஒரு பொண்ணுக்கு அடங்கி வாழ பிடிக்கும் தான ?\n            ஹ்ம்ம் ஆமா பிடிக்கும். ஆன life fulla அப்டி வாழணுமானு யோசிக்குறன்! எனக்கு யோசிக்க கொஞ்சம் time தரீங்களா ?\n            \n            ஹ்ம்ம் yaa sure! (என் கை மேல அவங்க கை வச்சாங்க). கவலை படாதீங்க நான் உங்கள என்னோட wife ah நல்லா பாத்துப்பன்! ரெண்டு நாள் time எடுத்துக்கோங்க. ஒரு நல்ல முடிவை சொல்லுங்க! (என் கன்னத்தை கிள்ளிட்டு அவங்க போய்ட்டாங்க )\n            \n            அன்னைக்கு night fulla எனக்கு தூக்கமே வரல! ரொம்ப யோசிச்சு பாத்தன்! எனக்கு அவங்கள ரொம்ப பிடிச்சு இருந்துச்சு! அவங்க கொடுத்த number ku கால் பண்ணன்!\n            \n            ஹலோ விக்கி! என்ன அதுக்குள்ள call பண்ணிட்டீங்க!\n            இல்லங்க. நீங்க சொன்னதை யோசிச்சு பாத்தன்! நீங்க சொன்ன மாரி நான் உங்கள கல்யாணம் பண்ணிக்குறங்க!\n            \n            ஹா ஹா. கல்யாணம் னா எப்படி கல்யாணம் பண்ணுவீங்க! detail ah சொல்லுங்க!\n            நான் வெட்க போட்டுக்கிட்டு சொன்னான் ” நான் உங்க wife ah இருக்கங்க”.\n            \n            ஹா ஹா என்ன வெட்கமா. சரி சரி but உங்க கிட்ட நான் இன்னும் கொஞ்சம் பேச வேண்டியது இருக்கு. அத கேட்டு கிட்டு அப்புறம் உங்க முடிவை சொல்லுங்க!\n            \n            அடுத்த நாள் காலைல அதே ஹோட்டல் ல நான் wait பண்ணிட்டு இருந்தன். அவங்க கார் வந்திச்சு. அவங்க அந்த car la இருந்து இறங்கி நடந்து வரும் போது. அவளோ கம்பிரமா இருந்தாங்க. அவங்கள பாத்த உடனை நான் என்ன அறியாம எழுந்து நின்னுட்டேன்!\n            \n            அத பாத்த அவங்களுக்கு ஒரே சிரிப்பு. பரவலா ஒக்காருங்க னு சொன்னாங்க. ரெண்டு பெரும் உக்காந்து cofee குடிக்க ஆரம்பிச்சோம்.\n            \n            நீங்க கல்யாணம் பண்ணா சமச்சித்தது எனக்கு சந்தோசம் தான். ஆன அதுக்கு முன்னாடி நீங்க சில விஷயம் தெரிஞ்சிக்கணும்.\n            \n            நீங்க என் பொண்டாட்டியா இருக்க ஆர்மபிச்சிட்டீங்க னா சாகுற வர நீங்க என் பொண்டாட்டியா தான் இருக்னும். பொண்டாட்டி னா வெறும் வாய் வரத்தை காக இல்ல. ஒரு நிஜ பொண்ணு மாரி புடவை கட்டி பூ வச்சி நான் கட்டின தாலிய மாட்டிகிட்டு ஒரு நிஜ பொண்டாட்டியா நீங்க வாழனும்.\n            \n            அது மட்டும் இல்லாம எனக்கு அடங்கி என் அடிமையா என் பொண்டாட்டியா காலம் முழுசும் வாழனும். நான் என்ன சொன்னாலும் செய்யணும். அதுக்கு உங்களுக்கு சம்மதமா. இது சாதரண விஷயம் இல்ல! இதுக்கு உங்கள முழுசா நீங்க என் கிட்ட சரணடையனும்! அப்போ தான் இது சாத்தியம்!\n            \n            இன்னும் கூட time எடுத்துக்கோங்க! ஆன ஒன்னு மட்டும் புரிஞ்சுக்கோங்க! நான் உங்கள என் மனசார லவ் பண்றன்! உங்கள மேல நான் உண்மையான love வச்சி இருக்கன்!\n            \n            இதுக்கு சம்மதம் அப்டினா சொல்லுங்க! நாளைக்கு என் அம்மாவோட உங்கள பொண்ணு பாக்க வரேன்! உங்களுக்கு அப்பா அம்மா கூட பொறந்தவங்க யாரும் இல்லனு தெரியும்! உங்களுக்கு எல்லாம நான் இருப்பன்! ஒரு நல்ல புருஷனா நான் உங்கள பத்துப்பன்!\n            \n            அவங்க பேசினது கேட்டதும் என் கண்ணு கலங்கிடுச்சு! மகுடிக்கு அடங்கின பாம்பு மாரி என் மனசு முழுசா அவங்களுக்கு அடங்கிடுச்சு!\n            \n            எனக்கும் உங்களா ரொம்ப பிடிச்சு இருக்குங்க! நீங்க சொன்ன மாரி நான் உங்க பொண்டாட்டியா உங்களுக்கு அடங்கி உங்க கால் அடில என் வாழ் நாள் முழுசும் இருப்பங்க!\n            \n            இத கேட்டதும் அவங்களுக்கு அவளோ சந்தோசம்!என் கிட்ட வந்து என் கன்னத்துல முத்தம் கொடுத்தாங்க! I love you so much டி பொண்டாட்டி சரி நாளைக்கு morning ரெடி ah இரு என் அம்மா வோட வரேன்!\n            \n            என் அம்மா கிட்ட உன்ன பத்தி எல்லா விஷயமும் சொல்லித்தான் கூட்டிட்டு வரன்! உங்க வீட்ல வச்சி மத்த எல்லா விஷயமும் பேசிக்கலாம்! இப்போ ஒழுங்கா பொம்பள புள்ளையா லட்சணமா 6 மணிக்கு முன்னாடி வீட்டுக்கு போங்க!\n            \n            நானும் சரிங்கனு சொல்லிட்டு வீட்டுக்கு வந்துட்டேன். ஒரு பக்கம் சந்தோசம் ஒரு பக்கம் பயம் ரெண்டும் என்ன தூங்க விடாம பன்னிச்சு! நாளைக்கு என்ன நடக்கும்னு தெரியல பாப்போம்!</p>\n      </div>\n    </div>\n    <!-- Exaple 1 -->\n\n  </div>\n  <!-- Grid column -->\n\n  <!-- Grid column -->\n  <div class=\"col-md-6 mb-4\">\n\n    <!-- Exaple 1 -->\n    <!-- <div class=\"card example-1 square scrollbar-cyan bordered-cyan\"> -->\n    <div class=\"card example-1 scrollbar-deep-purple bordered-deep-purple thin\"> \n      <div class=\"card-body\">\n        <h4 id=\"section1\"><strong>அப்பாவை மடக்கி ஓத்தேன் 1</strong></h4>\n         <h3>(Appavai Madaki Othen)</h3> \n        <p>நான் பிரியா, எனக்கு குழந்தை பருவத்திலிருந்தே என் அம்மாவைவிட அப்பாவைத்தான் பிடிக்கும். அப்பாதான் என்னுடைய ஹீரோ. நான் பால் குடிக்கும் பருவததிலேயே, என் அம்மாவிடம் பால் குடித்துவிட்டு, என் அப்பாவிடம் படுத்து தூங்குவேன். என் அம்மா இல்லாமல் இருந்து கொள்வேன், என் அப்பா இல்லாமல் இருக்க மாட்டேன். அந்த அளவிற்கு அப்பா மேல் பாசம். நான் அப்பாவிடமும் அண்ணன் அம்மாவிடம் படுத்து தூங்கு வோம்.\n            அப்பாவின் மேலிருந்த பாசமானது நாள் ஆகஆக காதல் ஆனது. என்னையுமறியாமல், அப்பாவை காதலிக்க தொடங்கிணேன்.\n            \n            அப்பா பிஸ்ணஸ் மேன், இரவில் லேட்டா தான் வருவார். இவு எத்தனை மணியானாலும், என் அருகில் வந்து, என்னை அணைத்த படிதான் தூங்குவார். எத்தனை நேரம் அப்பா படுத்தவுடன், என்னை கட்டி அணைத்தபடி தான். தூக்கத்தில் அப்பாவை நான் அடிக்கடி முத்தமிடுவேன். அவரும் என்னை கட்டியணைத்து என் கால்களை அவர் மேல் போட்டு கொண்டுவார். காலையில் எழுந்திரிக்கும் போது அம்மா பக்கத்திலிருந்து எழுந்திரிப்பார். எனக்கு பத்து வயதாகும் போது அப்பா அம்மா செயல்களை நோட்டம் விட ஆரம்பித்தேன்.\n            \n            அவர் மேட்டர் பண்ணுவதை பார்க்க ஆரம்பித்தேன். என் கூதியில் லேசாக முடி முளைக்க தொடங்கியது. அப்பா அம்மா மேட்டர் பண்ணும் போது ரசித்து பாக்க தொடங்கிணேன். என் விரல்களை கூதியில் குடைந்து கொள்வேன். ஆனால் ஒரளவுக்கு புணடைக்கு விரல் போவதில்லை. இருந்தலும், அதில் எனக்கு சுகம் கிடைத்தது. ! சில சமயம் அதிலிருந்து பிசுபிசு வென திரவம் வரும். அந்த சுகம் எனக்கு பிடித்திருந்தது. வீட்டில் தனியாக இதுபோல புண்டையை தடவி சுகம் கண்டேன்.\n            \n            அப்பா அடிக்கடி வெளியூர் போய் விடுவார், அப்பாவை பார்க்காமல ரொம்ப கஷ்டமாக இருக்கும். இதனால் அம்மாவிடம், அப்பா எப்போது வருவார் என்று கேட்டு தொந்தரவு செய்வேன், அம்மா திட்டுவாள்அப்பா வெளியூர் போய்விட்டு எந்த இரவு வந்தாலும், நான் தூங்கி கொண்டிருந்தாலும், என் கன்னதில் முத்தம் கொடுக்காமல் தூங்கமாட்டார். அப்பா வந்தது தெரிந்தும், நான் தூங்குவது போல் நடிப்பேன், அப்பா என்னை kiss பண்ணிவுடன், கண்விழித்து அப்பாவை kiss பண்ணுவேன். மீண்டும் தூங்குவேன், அப்பா, அம்மாவை ஒத்துவிட்டு, என்னை கட்டி அணைத்தபடி தூங்குவார், இரவில் தூக்கத்தில் நானும் அப்பாவை இருக்கமாக கட்டி கொள்வேன்.\n            \n            சில நாட்கள் அப்பாவின், சுண்ணி எழும்பிவிடும். அப்பாவுக்கு தெரியாமல் அதை பிடித்து பார்ப்பேன். , எட்டு வயதில் ஓக்கிற பற்றி தெரிந்து கொண்டேன், அப்போதே எனக்கு புண்டை அரிப்பு அதிகமாகிவிட்டது, ஆனால், வயதுக்கு வராமல் எப்பிடி ஓக்கிறது. துங்கும் போது அப்பாவின் சுண்ணியை பிடித்து பார்ப்பேன். அம்மா அப்பாவின் சுண்ணியை நல்ல ஊம்புவாள். எனக்கும் சுண்ணியை ஊம்ப ரொம்ப ஆசை, ஆனா அப்பா, சுண்ணி ஊம்ப விடமாட்டாரே, இயல்பாகவே எனக்கு காமவெறி அதிகம் தான்.\n            \n            நான் வயதுக்கு வந்துவிட்டேன், ரொம்ப சந்தோஷமாக இருந்தது. நான் வயதுக்கு வந்ததை அப்பாவுக்கு தான் சொன்னேன், School எனக்கு வயிற்று வலி வத்தது, உடனே Toilet போய் ஜட்டியை கழற்றி பார்த்தேன், இரத்தமாக இருந்தது, இந்த HappyNews அப்பாவுக்கு முதலில் சொல்ல வேண்டும் எனஆசை பட்டு, அப்பாவுக்கு போன் பண்ணி சொன்னேன், அப்பா, அம்மாவுக்கு சொல்லவில்லையா, என்று கேட்டார்.\n            \n            இல்லையப்பா, உங்களிடம் முதலில் சொல்கிறேன். சரி நீ School இரு, அப்பா வந்து அழைத்து போகிறேன். என்றார். Bike ல் வந்துவீட்டிற்கு அழைத்து போனார். வீட்டிற்கு போனதும், என்முதல் தீட்டு, என் முதல் தூமை கறை படீந்த ஜட்டியை என் அப்பாவிடம் காட்டிணேன். அப்பா ரொம்பசந்தோஷ பட்டார், என்னை கட்டி பிடித்துKiss பண்ணினார்.\n            \n            எப்படியும் அப்பாவை மடக்கி ஒக்க வேண்டும் Periods ல் எப்படி sanitary napkin வைக்க வேண்டும் என்று அம்மா சொல்லி கொடுத்தாள். அம்மா என் புண்டையை பார்த்தாள். கை வைத்து விரித்து பார்த்தாள். அம்மாவின் கை புண்டையில் பட்டது சுகமாகவும் கூச்சமாகவும் இருந்தது. அடுத்த periods வரும் போது என்னிடம் சொல் நான் napkin வைக்க சொல்லி தருகிறேன் என்றாள். அதன் பிறகு அப்பாவுக்கு என் புண்டையை காட்ட விரும்பினேன். அம்மா என் புண்டையை பார்த்தது போல் அப்பாவும் என் புண்டையை பார்க்க வேண்டும் என்று ஆசை பட்டேன். அதனால், குளிக்கும் அப்பா வை அழைக்க முடிவு செய்தேன். அந்த நேரத்தில் அதுநடக்காமல்போனது, அப்படியே காலங்கள் போனது, நான் School முடித்து college போனேன்.\n            \n            நான் அப்போது காலலேஜ் படித்து கொண்டிருந்தேன். எனக்கு ஒக்கிறதில் ரொமப interest இருந்தாலும், வேறு ஆணை love பண்ணவோ ஒக்கவோ எனக்கு விருப்பமில்லை. என்னுடைய கனவு காதலன் என் அப்பா தான், என் புண்டையின் சீலை உடைக்க வேண்டும் என்று ஆசை பட்டேன். அதனால் வேறு ஆண்கள் மீது விருப்பம் இல்லை.\n            \n            இந்த நிலையில் எப்படியாவது அப்பாவை மடக்க வேண்டும் என்று யோசித்தேன்.\n            \n            ஒரு நாள் காலை நேரம் நான் college புறப்பட வேண்டும், குளிப்பதற்காக, பாத் ரூம் போனேன். குளிக்க ரெடியானேன். அம்மா சமையலில் busy யாக இருந்தாள். அப்பாவும் வீட்டில் இருந்தார், இதுதான் நல்ல நேரம் என முடிவு செய்தேன். இந்த நேரத்தில் சோப்பு அம்மாவை அழைத்தால் வர மாட்டாய், அப்பாவை அம்மாவே அனுப்பி வைப்பாள், அப்பாவை மதக்கி விடலாம் என்று, “அம்மா” என்று அழைத்தேன். எனக்கு முதுகுக்கு சோப்பு போடும்மா என்றேன்.\n            \n            அதற்கு, அம்மா, நான் வேலையா இருக்கேன், உங்க அப்பாவ வர சொல்றேன் என்றாள்.\n            \n            மனசு துள்ளியது, அப்பாவிற்கு, முலை, புண்டை இரண்டையும் காட்ட வேண்டும் என்று நினைத்தேன். அம்மாவின் தொங்கி போன முலையும, ஓட்டைபெரிதான புண்டையும் ஒத்து சலித்திருப்பார் அப்பா. என் முலை புண்டைய பார்ததால் சந்தோஷ படுவார் என்று நினைத்தேன். அந்த பார்த்து அப்பா கதவை திறந்து உள்ளே வந்தார்.\n            \n            நான் துண்டை கட்டி கொண்டு அப்பாவுக்கு முதுகை காட்டியபடி நின்றேன், அப்பா, “பாப்பாஅம்மா வேலையா இருக்கா, அது தான் வந்தேன், நான் வந்தது உனக்கு சங்கடமா இருக்கா” என்றார். அப்படி ஒன்னுமில்லையப்பா, என்றேன்.\n            \n            நான் திரும்பிய படியே நின்று கொண்டு துண்டை கீழே இறக்கி, முதுகை காட்டினேன், அப்பா என்ன முதுக்கு soap போட ஆரம்பித்தார். நான் கொஞ்ச கொஞ்சமா டவலை கீழே இறக்கிணேன், கடைசியீல் என் குண்டி முழுவதும் தெரியும் படி டவலை கீழே இறக்கிணேன். பாப்பா டவலை நல்லா ஏத்தி பிடி என்றார். பரவாயில்லை அப்பா, நீங்க சோப்பு போடுங்க என்று திரும்பி டவலை நழுவ விட்டபடி என் முழு உடலை அம்மனமாக அப்பாவுக்கு காட்டிய டவலை, முழுமையாக நழுவ விட்டேன்.\n            \n            அப்பா கண்ணை மூடிக்கொண்டு, பாப்பா டவலை எடுத்து கட்டு என்றார்,\n            \n            அப்பா கண்ணதிறங்க, என்றேன். அப்பா முடியாது என்றார், அப்பா நான் உங்க பொண்ணு, என்ன Nude பார்த்தா என்ன தப்பு கண்ண திறங்க என்றேன். அம்மாவுக்கு தெரிஞ்சா பிரச்சனை ஆகிறும் பாப்பா. என்றார். அம்மா கிட்ட சொல்ல மாட்டேன் என்றேன்.\n            \n            என்னை அம்மணமா பார்த்தில், அப்பா சுண்ணி எழும்பி விட்டது. நான் அப்பா சுண்ணியை பிடித்துவிட்டேன். அப்பா என் கையை தட்டி விட்டார், “அப்பா ஆசையா இருக்கு என்றேன்”. அப்பா பாத்ரும் கதவை திறந்து கொண்டு வெளியே போய் விட்டார். எனக்கு சற்று பயமாக இருந்தது. அம்மாவிடம் கண்டிப்பாக சொல்ல மாட்டார், சரி பார்த்துக் கொள்ளலாம். அப்பாவை Correct பண்ணி ஓக்க வேண்டும். என்று நினைத்து கொண்டேன். ஒரு குட்டை பாவாடை, T shirt மட்டும் போட்டு(ஐட்டி, bra போடாமல்) கொண்டு, காலேஜ் போக. வேண்டுமே என்ற நினைப்பு கூட இல்லாமல் பாத் ரூமை விட்டு வெளயே வந்தேன்.\n            \n            அப்பா, ஹாலில் எதுவும் தெரியாத மாதிரி பேப்பர் பார்த்து கொண்டு இருந்தார். இருடா மவனே உன்ன ஓக்காம விடமாட்டேன், என மனதில் நினைத்து கொண்டு, அப்பா முன்னே உள்ள ஷோபாவில் அமர்ந்தேன்,\n            \n            அம்மா, கிச்சனை விட்டு வெளியே வந்து, “பாப்பா நீ காலேஜ் போகலயா” என்று கேட்டாள். போகல. என்றேன்.\n            \n            அம்மா, எப்படியாவது வெளியே போவாள், அப்பாவை இன்று எப்படியாவது மடக்கனும். என்று நினைத்தேன். அம்மா, நீ மார்க்கட் போகலயா என்று கேட்டேன்.\n            \n            போகனும் டி என்றாள். வி நான் பிரியா, எனக்கு குழந்தை பருவத்திலிருந்தே என் அம்மாவைவிட அப்பாவைத்தான் பிடிக்கும். அப்பாதான் என்னுடைய ஹீரோ. நான் பால் குடிக்கும் பருவததிலேயே, என் அம்மாவிடம் பால் குடித்துவிட்டு, என் அப்பாவிடம் படுத்து தூங்குவேன். என் அம்மா இல்லாமல் இருந்து கொள்வேன், என் அப்பா இல்லாமல் இருக்க மாட்டேன். அந்த அளவிற்கு அப்பா மேல் பாசம். நான் அப்பாவிடமும் அண்ணன் அம்மாவிடம் படுத்து தூங்கு வோம்.\n            \n            அப்பாவின் மேலிருந்த பாசமானது நாள் ஆகஆக காதல் ஆனது. என்னையுமறியாமல், அப்பாவை காதலிக்க தொடங்கிணேன்.\n            \n            </p>\n      </div>\n    </div>\n    <!-- Exaple 1 -->\n\n  </div>\n  <!-- Grid column -->\n\n</div>\n<!-- Grid row -->\n\n<!-- Grid row -->\n\n  <!-- Grid column -->\n\n  <!-- Grid column -->\n  \n  <!-- Grid column -->\n\n\n<!-- Grid row -->"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.html":
/*!************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navmenu works!\n</p>\n"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/*! exports provided: NavmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavmenuComponent", function() { return NavmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navmenu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/navmenu/navmenu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  start works!\n</p>\n"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\karth\Desktop\angular\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map