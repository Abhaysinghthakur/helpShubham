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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color: black;\n    display:block;\n    padding: 3%;\n    color: white;\n    font-size: 26px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"container\">\n     <div class=\"row header\">\n       <div class=\"col-md-12\">\n         <a style=\"color:white;\">Game Of Thrones</a>\n       </div>\n     </div>\n     <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          \n        </div>\n    \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <!-- <li><a [routerLink]=\"['/about']\">About</a></li>\n            <li><a [routerLink]=\"['/create']\">Post a Blog</a></li> -->\n            \n          </ul>\n        \n        </div><!-- /.navbar-collapse -->\n      </div><!-- /.container-fluid -->\n    </nav>\n      \n  </div>\n  \n </div>\n\n <br>\n <router-outlet></router-outlet>\n \n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-assignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-view/card-view.component */ "./src/app/card-view/card-view.component.ts");
/* harmony import */ var _card_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-http.service */ "./src/app/card-http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house-view/house-view.component */ "./src/app/house-view/house-view.component.ts");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_5__["CardViewComponent"],
                _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__["HouseViewComponent"],
                _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_9__["BookViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'card/:charId', component: _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_5__["CardViewComponent"] },
                    { path: 'house/:charId', component: _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_8__["HouseViewComponent"] },
                    { path: 'book/:charId', component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_9__["BookViewComponent"] }
                ])
            ],
            providers: [_card_http_service__WEBPACK_IMPORTED_MODULE_6__["CardHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-view/book-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-view/book-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col -12\"*ngIf=\"bookData\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">Name:{{bookData.name}}</li>\n            <li class=\"list-group-item list-group-item-info\">Isbn:{{bookData.isbn}}</li>\n            <li class=\"list-group-item list-group-item-info\">Author's:{{bookData.authors.toString()}}</li>\n            <li class=\"list-group-item list-group-item-info\">Number Of Pages:{{bookData.numberOfPages}}</li>\n            <li class=\"list-group-item list-group-item-info\">Publisher:{{bookData.publisher}}</li>\n            <li class=\"list-group-item list-group-item-info\">Country:{{bookData.country}}</li>\n          </ul>\n          <br/>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go Back</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-view/book-view.component.ts ***!
  \**************************************************/
/*! exports provided: BookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookViewComponent", function() { return BookViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-http.service */ "./src/app/card-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_route, router, CardHttpService, location) {
        this._route = _route;
        this.router = router;
        this.CardHttpService = CardHttpService;
        this.location = location;
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("card-view onInit called");
        var myCharId = this._route.snapshot.paramMap.get('charId');
        console.log(myCharId);
        // this.currentCard=this.CardHttpService.getSingleCharacterinformation(myCharId);
        // console.log(this.currentCard);
        this.allItems = this.CardHttpService.getSingleCharacterinformation(myCharId).subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.bookData = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    BookViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__(/*! ./book-view.component.html */ "./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__(/*! ./book-view.component.css */ "./src/app/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _card_http_service__WEBPACK_IMPORTED_MODULE_2__["CardHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/card-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/card-http.service.ts ***!
  \**************************************/
/*! exports provided: CardHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHttpService", function() { return CardHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardHttpService = /** @class */ (function () {
    function CardHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api/';
        this.authToken = 'ZTU2N2UwMDJjZTI3YTdhZTVmMTY3OTY4OWE0ODZmYzU2ODVkNTQxYTVlNjJjZDI0MjBiYWY2OGI0ZDg5NDg1OGRkYmNmOGYyZTc0ODNhY2FhNDFmNGFkMDgzYTY1YzBhNDc1NWNkODJkNTMwZWNkMmMwYmU3ZjYxZjYyOTQwZGIxMA==';
        console.log("card http service is called");
    }
    CardHttpService.prototype.handleError = function (err) {
        console.log("handle error Http calls");
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    CardHttpService.prototype.getAllCharacters = function () {
        var myResponse3 = this._http.get(this.baseUrl + '/characters?pageSize=200' + '&authToken=' + this.authToken);
        console.log(myResponse3);
        return myResponse3;
    };
    CardHttpService.prototype.getAllBooks = function () {
        var myResponse1 = this._http.get(this.baseUrl + '/books?pageSize=200' + '&authToken=' + this.authToken);
        console.log(myResponse1);
        return myResponse1;
    };
    CardHttpService.prototype.getAllHouses = function () {
        var myResponse2 = this._http.get(this.baseUrl + '/houses?pageSize=200' + '&authToken=' + this.authToken);
        console.log(myResponse2);
        return myResponse2;
    };
    // public getAllItems():any{
    //   let myResponse3=this._http.get(this.baseUrl+'/characters?pageSize=200'+'&authToken='+this.authToken);
    //   let myResponse1=this._http.get(this.baseUrl+'/books?pageSize=200'+'&authToken='+this.authToken);
    //   let myResponse2=this._http.get(this.baseUrl+'/houses?pageSize=200'+'&authToken='+this.authToken);
    // }
    CardHttpService.prototype.getSingleCharacterinformation = function (myCharId) {
        var myResponse4 = this._http.get(myCharId + '?authToken=' + this.authToken);
        return myResponse4;
    };
    CardHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CardHttpService);
    return CardHttpService;
}());



/***/ }),

/***/ "./src/app/card-view/card-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-view/card-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card-view/card-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-view/card-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\"  *ngIf=\"currentCard\">\n    <div class=\"col-md-12\">\n      <h2>{{currentCard.name}}</h2>\n      <!-- <small>blog number - {{currentBlog.blogId}}</small> -->\n      <!-- <p>kkllk</p>\n      <p>{{currentCard.aliases}}</p>\n      \n      <hr>\n      <div></div>\n      <hr>\n      <h5>category - </h5>\n    </div>\n  </div>\n  <hr>\n  \n\n</div> --> \n\n<div class=\"row\">\n  <div class=\"col -12\" *ngIf=\"currentCard\">\n    <ul class=\"list-group\">\n      <!-- characterdata -->\n      <li class=\"list-group-item\">Name:{{currentCard.name}}</li>\n      <li class=\"list-group-item list-group-item-info\">Gender:{{currentCard.gender}}</li>\n      <li class=\"list-group-item list-group-item-info\">Culture:{{currentCard.culture}}</li>\n      <li class=\"list-group-item list-group-item-info\">Born:{{currentCard.born}}</li>\n      <li class=\"list-group-item list-group-item-info\">Titles:{{currentCard.titles}}</li>\n      <li class=\"list-group-item list-group-item-info\">Played By:{{currentCard.playedBy}}</li>\n    </ul>\n    <br />\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go Back</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card-view/card-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-view/card-view.component.ts ***!
  \**************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-http.service */ "./src/app/card-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardViewComponent = /** @class */ (function () {
    function CardViewComponent(_route, router, CardHttpService, location) {
        this._route = _route;
        this.router = router;
        this.CardHttpService = CardHttpService;
        this.location = location;
    }
    CardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("card-view onInit called");
        var myCharId = this._route.snapshot.paramMap.get('charId');
        console.log(myCharId);
        // this.currentCard=this.CardHttpService.getSingleCharacterinformation(myCharId);
        // console.log(this.currentCard);
        this.allItems = this.CardHttpService.getSingleCharacterinformation(myCharId).subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.currentCard = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    CardViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    CardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-view',
            template: __webpack_require__(/*! ./card-view.component.html */ "./src/app/card-view/card-view.component.html"),
            styles: [__webpack_require__(/*! ./card-view.component.css */ "./src/app/card-view/card-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _card_http_service__WEBPACK_IMPORTED_MODULE_2__["CardHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CardViewComponent);
    return CardViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"allItems.length>0\" style=\"text-align:center\">\n\n    <div class=\"col-xl-3 col-lg-4 col-sm-6\" *ngFor=\"let item of allItems\">\n      <div *ngIf=\"item.url.indexOf('character')!=-1\" class=\"card cardContainer\" style=\"height:450px;width: 33rem;border:5px solid blue\">\n        <img class=\"card-img-top\" src=\"assets/img/character.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"text-align:left\">\n          <h5 class=\"card-title\">Character<br />Character Name:{{item.name}}</h5>\n          <p class=\"card-text\">Gender:{{item.gender}}<br />\n            Born:{{item.born}}<br />\n            Culture:{{item.culture}}\n            Url:{{item.url}}\n          </p>\n          <a [routerLink]=\"['/card',item.url]\" class=\"btn btn-primary\">More</a>\n        </div>\n      </div>\n      <br />\n\n      <div *ngIf=\"item.url.indexOf('book')!=-1\" class=\"card cardContainer\" style=\"height:450px;width: 33rem;border:5px solid red\">\n        <img class=\"card-img-top\" src=\"assets/img/book.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\"style=\"text-align:left\">\n            <h5 class=\"card-title\">Book<br />Book Name:{{item.name}}</h5>\n            <p class=\"card-text\">publisher:{{item.publisher}}<br />\n              Author:{{item.authors.toString()}}<br />\n              Country:{{item.country}}\n            </p>\n          <a [routerLink]=\"['/book',item.url]\" class=\"btn btn-primary\">More</a>\n        </div>\n      </div>\n\n      <div *ngIf=\"item.url.indexOf('house')!=-1\" class=\"card cardContainer\" id=\"house\" style=\"height:450px;width: 33rem;border:5px solid green\">\n        <img class=\"card-img-top\" src=\"assets/img/house.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\"style=\"text-align:left\">\n          <h5 class=\"card-title\">House<br />House Name:{{item.name}}</h5>\n          <p class=\"card-text\">Region:{{item.region}}<br />\n            Coat of Arms:{{item.coatOfArms}}<br />\n            Words:{{item.words}}\n          </p>\n          <a [routerLink]=\"['/house',item.url]\" class=\"btn btn-primary\">More</a>\n        </div>\n      </div>\n      <br />\n    </div>\n    <br>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card-http.service */ "./src/app/card-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(CardHttpService) {
        this.CardHttpService = CardHttpService;
        this.allItems = [];
        this.characterData = [];
        this.bookData = [];
        this.houseData = [];
        this.allItems_unsort = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("home component onInit called");
        // this.allItems=this.CardHttpService.getAllCards();
        // console.log(this.allItems);
        this.characterData = this.CardHttpService.getAllCharacters().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.characterData = data;
            _this.characterData.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.allItems = _this.allItems.concat(_this.characterData);
        }, function (error) {
            console.log("some error message");
            console.log(error.errorMessage);
        });
        this.bookData = this.CardHttpService.getAllBooks().subscribe(function (data) {
            console.log("logging data for books");
            console.log(data);
            _this.bookData = data;
            _this.bookData.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.allItems = _this.allItems.concat(_this.bookData);
            // this.allItems=this.allItems.concat(this.bookData);
        }, function (error) {
            console.log("some error message");
            console.log(error.errorMessage);
        });
        this.houseData = this.CardHttpService.getAllHouses().subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.houseData = data;
            // this.houseData.sort((a,b) => a.name.localeCompare(b.name));
            _this.allItems = _this.allItems.concat(_this.houseData);
            // this.allItems1=this.characterData.concat(this.houseData);
            // this.allItems=this.allItems1.concat(this.bookData);
            // this.allItems.sort((a,b) => a.name.localeCompare(b.name));
            console.log(_this.allItems);
        }, function (error) {
            console.log("some error message");
            console.log(error.errorMessage);
        });
        // this.allItems=Object.assign({},this.allItems1,this.allItems2,this.allItems3);
        // console.log(this.allItems);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("home component ondestroy called");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_card_http_service__WEBPACK_IMPORTED_MODULE_1__["CardHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house-view/house-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/house-view/house-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col -12\" *ngIf=\"houseData\">\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\">Name:{{houseData.name}}</li>\n            <li class=\"list-group-item list-group-item-info\">Region:{{houseData.region}}</li>\n            <li class=\"list-group-item list-group-item-info\">Coat Of Arms:{{houseData.coatOfArms}}</li>\n            <li class=\"list-group-item list-group-item-info\">Words:{{houseData.words}}</li>\n            <li class=\"list-group-item list-group-item-info\">Titles:{{houseData.titles.toString()}}</li>\n            <li class=\"list-group-item list-group-item-info\">Founded:{{houseData.founded}}</li>\n          </ul>\n          <br/>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"goBack()\">Go Back</button>\n          \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house-view/house-view.component.ts ***!
  \****************************************************/
/*! exports provided: HouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseViewComponent", function() { return HouseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-http.service */ "./src/app/card-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_route, router, CardHttpService, location) {
        this._route = _route;
        this.router = router;
        this.CardHttpService = CardHttpService;
        this.location = location;
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("card-view onInit called");
        var myCharId = this._route.snapshot.paramMap.get('charId');
        console.log(myCharId);
        // this.currentCard=this.CardHttpService.getSingleCharacterinformation(myCharId);
        // console.log(this.currentCard);
        this.allItems = this.CardHttpService.getSingleCharacterinformation(myCharId).subscribe(function (data) {
            console.log("logging data");
            console.log(data);
            _this.houseData = data;
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HouseViewComponent.prototype.goBack = function () {
        this.location.back();
    };
    HouseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-view',
            template: __webpack_require__(/*! ./house-view.component.html */ "./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__(/*! ./house-view.component.css */ "./src/app/house-view/house-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _card_http_service__WEBPACK_IMPORTED_MODULE_2__["CardHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HouseViewComponent);
    return HouseViewComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abhay/Documents/Work/Angular Basic/shubham/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map