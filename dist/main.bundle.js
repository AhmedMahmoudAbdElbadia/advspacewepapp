webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-city/add-city.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.funkyradio div {\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .funkyradio label {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #D1D3D4;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty,\r\n  .funkyradio input[type=\"checkbox\"]:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n    position: relative;\r\n    line-height: 2.5em;\r\n    text-indent: 3.25em;\r\n    margin-top: 2em;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 2.5em;\r\n    background: #D1D3D4;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n    color: #888;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #C2C2C2;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n    color: #777;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n    box-shadow: 0 0 0 3px #999;\r\n  }\r\n  \r\n  .funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n  }\r\n  \r\n  .funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5207D0;\r\n  }\r\n  \r\n  .funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n  }\r\n  \r\n  .funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-city/add-city.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"card\"  style=\"color:black\">\n            <div class=\"content\">\n          <form #form=\"ngForm\" (ngSubmit)=\"AddCity(cityname)\">\n                    \n      <div class=\"form-group\" >\n            <label for=\"validationDefault03\" >اضافة مدينة</label>\n            <br>\n           <label for=\"validationDefault03\" >اسم المدينة</label>\n       <input type=\"text\" style=\"width:100%; height:30px;\" #cityname>\n        </div>\n        \n                <button type=\"submit\"  class=\"btn btn-primary\">حفظ</button>\n                          </form>\n            </div>\n        </div>       \n               \n\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                    <div style=\"margin-bottom:10px;\">\n                            <div class=\"content\">\n                                            \n     \n        \n                            </div>\n                        </div>       \n      \n            </div>\n \n    <div class=\"row\" style=\"text-align:center\">\n            <div class=\"col-md-6 col-md-offset-3\">\n                <div class=\"card\"  style=\"color:black\">\n                    <div class=\"content\">\n                  <form #form=\"ngForm\" (ngSubmit)=\"DeleteCity()\">\n                            \n              <div class=\"form-group\" >\n                    <label for=\"validationDefault03\" >حذف مدينة</label>\n                    <br>\n                  <label for=\"validationDefault03\" >اسم المدينة</label>\n                <select #city style=\"width:100%; height:30px;\" (change)=\"getid(city.value)\" >\n                   \n                  <option  *ngFor=\"let res of citeis;\">{{res.cityname}}</option>\n                 \n                </select>\n                </div>\n                \n                        <button type=\"submit\"  class=\"btn btn-primary\">حذف</button>\n                                  </form>\n                    </div>\n                </div>\n            </div>"

/***/ }),

/***/ "../../../../../src/app/add-city/add-city.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCityComponent = (function () {
    function AddCityComponent(AdvspaceService, _firebaseAuth, router) {
        this.AdvspaceService = AdvspaceService;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.deletec = false;
    }
    AddCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AdvspaceService.getcity().subscribe(function (res) {
            _this.citeis = res;
            console.log('oninit');
        });
    };
    AddCityComponent.prototype.AddCity = function (cityname) {
        var _this = this;
        this.cityname = cityname;
        var City = {
            cityname: this.cityname.value
        };
        this.AdvspaceService.addCity(City).subscribe(function (res) {
            _this.ngOnInit();
        });
        this.cityname.value = "";
    };
    AddCityComponent.prototype.deletecityview = function () {
        this.deletec = true;
    };
    AddCityComponent.prototype.DeleteCity = function () {
        var _this = this;
        this.AdvspaceService.DeleteCity(this.cityid).subscribe(function (res) {
            _this.ngOnInit();
        });
    };
    AddCityComponent.prototype.getid = function (cityname) {
        this.selectedcity = this.citeis.filter(function (res) {
            return res.cityname === cityname;
        });
        this.cityid = this.selectedcity[0]._id.$oid;
    };
    return AddCityComponent;
}());
AddCityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-city',
        template: __webpack_require__("../../../../../src/app/add-city/add-city.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-city/add-city.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AddCityComponent);

var _a, _b, _c;
//# sourceMappingURL=add-city.component.js.map

/***/ }),

/***/ "../../../../../src/app/advspace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvspaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvspaceService = (function () {
    function AdvspaceService(https) {
        this.https = https;
        this._url = 'assets/country.json';
        this.http = https;
        this.apiKey = 'klpJFMrBlAESRbeHMJd0fMG16e6e_8ik';
        this.user = 'https://api.mlab.com/api/1/databases/advspaceapp/collections/user';
        this.advrequest = 'https://api.mlab.com/api/1/databases/advspaceapp/collections/request';
        this.city = 'https://api.mlab.com/api/1/databases/advspaceapp/collections/city';
        this.partnerapproval = 'https://api.mlab.com/api/1/databases/advspaceapp/collections/partnerapproval ';
        this.clientdesign = 'https://api.mlab.com/api/1/databases/advspaceapp/collections/clientdesign';
    }
    AdvspaceService.prototype.getfromjson = function () {
        return this.http.get(this._url).map(function (res) { return res.json(); })
            .catch(function (error) { return console.log(error); });
    };
    AdvspaceService.prototype.getcity = function () {
        return this.http.get(this.city + '?apiKey=' + this.apiKey).map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.updateuserstate = function (UserId, type) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.user + '/' + UserId + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "UserState": "" + type + "" } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.SignatureAgree = function (QuId, type, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.partnerapproval + '/' + QuId + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "State": "" + type + "", "DateAccepted": date } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.getuser = function () {
        return this.http.get(this.user + '?apiKey=' + this.apiKey).map(function (res) { return res.json(); });
        // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
    };
    AdvspaceService.prototype.GetPartnerQuotationWaiting = function () {
        return this.http.get(this.partnerapproval + '?q={"State": "Waiting"}&fo=true&s={"_id": -1}&apiKey=' + this.apiKey).map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.getPartnerApproval = function () {
        return this.http.get(this.partnerapproval + '?s={"_id": -1}&apiKey=' + this.apiKey).map(function (res) { return res.json(); });
        // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
    };
    AdvspaceService.prototype.getrequestes = function () {
        return this.http.get(this.advrequest + '?apiKey=' + this.apiKey).map(function (res) { return res.json(); });
        // return this.http.get(this.user+'?q={"Uid": "d5WpPB7gtvNo43WWeecOC38VX2v1"}&fo=true&apiKey='+this.apiKey).map(res => res.json());
    };
    AdvspaceService.prototype.UpdateRquestToWaiting = function (RequestID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.advrequest + '/' + RequestID + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "RequestState": "Waiting" } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.UpdateRquestToCancel = function (RequestID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.advrequest + '/' + RequestID + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "RequestState": "Cancel" } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.UpdateRquestToAccepted = function (RequestID, date, day, month, year) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.advrequest + '/' + RequestID + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "RequestState": "Accepted", "DateOfAccepted": date, "Day": day, "Month": month, "Year": year } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.UpdateRquestAddSendOfAccepet = function (RequestID, date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.advrequest + '/' + RequestID + '?apiKey=' + this.apiKey, JSON.stringify({ "$set": { "DateAccepted": "" + date + "" } }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.DeleteCity = function (CityId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.city + '/' + CityId + '?apiKey=' + this.apiKey, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.addUserDetails = function (UserDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.user + '?apiKey=' + this.apiKey, JSON.stringify(UserDetails), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.addPartnerApproval = function (Data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.partnerapproval + '?apiKey=' + this.apiKey, JSON.stringify(Data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.addClientDesign = function (Data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.clientdesign + '?apiKey=' + this.apiKey, JSON.stringify(Data), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.addCity = function (City) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.city + '?apiKey=' + this.apiKey, JSON.stringify(City), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdvspaceService.prototype.addRequest = function (Request) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.advrequest + '?apiKey=' + this.apiKey, JSON.stringify(Request), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AdvspaceService;
}());
AdvspaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdvspaceService);

var _a;
//# sourceMappingURL=advspace.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n/* Created by Filipe Pina\r\n * Specific styles of signin, register, component\r\n */\r\n/*\r\n * General styles\r\n */\r\n #playground-container {\r\n    height: 500px;\r\n    overflow: hidden !important;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\nbody, html{\r\n     height: 100%;\r\n \tbackground-repeat: no-repeat;\r\n \tbackground:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n \tfont-family: 'Oxygen', sans-serif;\r\n\t    background-size: cover;\r\n}\r\n\r\n.main{\r\n \tmargin:50px 15px;\r\n}\r\n\r\nh1.title { \r\n\tfont-size: 50px;\r\n\tfont-family: 'Passion One', cursive; \r\n\tfont-weight: 400; \r\n}\r\n\r\nhr{\r\n\twidth: 10%;\r\n\tcolor: #fff;\r\n}\r\n\r\n.form-group{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\nlabel{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n    height: auto!important;\r\npadding: 8px 12px !important;\r\n}\r\n.input-group {\r\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n    border: 1px solid #ccc;\r\n    margin-top: 28px;\r\n    padding: 6px 12px;\r\n    color: #666;\r\n    text-shadow: 0 1px #fff;\r\n    cursor: pointer;\r\n    border-radius: 3px 3px;\r\n    box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n    background: #f5f5f5;\r\n    background: linear-gradient(to bottom, #f5f5f5 0%, #eeeeee 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n \tmargin-top: 30px;\r\n \tmargin: 0 auto;\r\n \tmax-width: 400px;\r\n    padding: 10px 40px;\r\n\tbackground:#009edf;\r\n\t    color: #FFF;\r\n    text-shadow: none;\r\nbox-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n    color: #009edf;\r\n    font-size: 17px;\r\n}\r\n\r\n.login-button{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.login-register{\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\n<div class=\"wrapper\" *ngIf=\"us\" >\n   \n        <div class=\"sidebar\" #sidebar data-background-color=\"white\" data-active-color=\"danger\" >\n            <!-- <sidebar-cmp ></sidebar-cmp> -->\n            <div class=\"sidebar-wrapper\" style=\"background-color:midnightblue; text-align:center \">\n                <div class=\"logo\">\n                    <a class=\"simple-text\">\n                        <div class=\"logo-img\">\n                            <img src=\"../../assets/img/event.jpg\" alt=\"\">\n                        </div>\n                        Event Design\n                    </a>\n                </div>\n              \n                <p style=\"color:white\">{{comanyname}}</p>\n                <!-- <div class=\"card card-user\" style=\"height:80px\">\n                    \n                    <div class=\"content\">\n                        <div class=\"author\">\n                          \n                          <h4 class=\"title\">Chet Faker<br />\n                             <a href=\"#\"><small>@chetfaker</small></a>\n                          </h4>\n                        </div>\n                      \n                    </div>\n                    <hr>\n                    \n                </div> -->         \n                       \n                <ul  class=\"nav\">\n                    \n                  \n                                               \n                    <li *ngFor=\"let menuItem of menuItems\"  routerLinkActive=\"active\" class=\"{{menuItem.class}}\" >\n                   \n                            <a [routerLink]=\"[menuItem.path]\">\n                            <i class=\"{{menuItem.icon}}\"></i>\n                            <p>{{menuItem.title}}</p>\n                        </a>\n            \n                       \n                    </li>\n                  \n                            <li >\n                                    <a (click)=\"SignOut()\">\n                                        <i ></i>\n                                        <p>تسجيل خروج</p>\n                                    </a>\n                        \n                                </li> \n                </ul>\n            \n                \n                 \n            </div>\n        </div>\n        <div class=\"main-panel\" *ngIf=\"us\">\n           \n            <div class=\"content\"> \n              \n                <router-outlet></router-outlet>\n            </div>\n            <footer-cmp></footer-cmp>\n        </div>\n       \n      </div>  \n      \n      \n      <!-- <div class=\"container\" *ngIf=\"!us\">\n           \n            <div class=\"wrapper\" *ngIf=\"us\" >\n   \n        <div class=\"sidebar\" #sidebar data-background-color=\"white\" data-active-color=\"danger\" >\n            <!-- <sidebar-cmp ></sidebar-cmp> -->\n            \n       \n        <div   *ngIf=\"!us\">\n            \n            <div class=\"content\"> \n              <router-outlet></router-outlet>\n              \n            </div>\n     \n        </div>\n       \n               <!-- /container -->\n     "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* unused harmony export ROUTES2 */
/* unused harmony export ROUTES3 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROUTES = [
    { path: 'home', title: 'طلب مساحة اعلانية جديد', icon: 'ti-ticket', class: '' },
    { path: 'user', title: 'ادارة الطلبات', icon: 'ti-user', class: '' },
];
var ROUTES2 = [
    { path: 'user-request', title: 'طلبات العملاء', icon: 'ti-ticket', class: '' },
    { path: 'partenr', title: 'الشركاء', icon: 'ti-user', class: '' },
    { path: 'add-city', title: 'اضافة مدينة جديدة', icon: 'ti-user', class: '' },
    { path: 'user-type', title: 'صلاحيات المستخدمين', icon: 'ti-view-list-alt', class: '' },
];
var ROUTES3 = [
    { path: 'quotations', title: 'Quotations', icon: 'ti-ticket', class: '' },
];
var AppComponent = (function () {
    function AppComponent(_firebaseAuth, router, AdvspaceService) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.AdvspaceService = AdvspaceService;
        this.us = true;
        this.user = _firebaseAuth.authState;
        this._firebaseAuth.authState.subscribe(function (user) {
            if (user) {
                _this.us = true;
            }
            else {
                _this.us = false;
                _this.router.navigate(['login']);
            }
        });
    }
    // ngAfterContentChecked()	
    // {
    //   this._firebaseAuth.authState.subscribe(user=>{
    //     console.log(user);
    //     if(user){
    //       this.us=true;
    //       this.menuItems = ROUTES.filter(menuItem => menuItem);
    //     }
    //     else{
    //       this.us=false;
    //       this.router.navigate(['login']);
    //     }
    //   })
    //   console.log("go");
    // }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseAuth.authState.subscribe(function (user) {
            _this.AdvspaceService.getuser().subscribe(function (userdetails) {
                _this.userdetails = userdetails;
                if (user != undefined) {
                    _this.userstate = _this.userdetails.filter(function (res) {
                        return res.Uid === user.uid;
                    });
                    _this.state = _this.userstate[0].UserState;
                    _this.comanyname = _this.userstate[0].CompanyName;
                    if (_this.state == "Client") {
                        _this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
                    }
                    if (_this.state == "Admin") {
                        _this.menuItems = ROUTES2.filter(function (menuItem) { return menuItem; });
                        _this.router.navigate(['user-request']);
                    }
                    if (_this.state == "Partenr") {
                        _this.menuItems = ROUTES3.filter(function (menuItem) { return menuItem; });
                    }
                }
            });
            if (user) {
                _this.us = true;
            }
            else {
                _this.us = false;
                _this.router.navigate(['login']);
            }
        });
    };
    AppComponent.prototype.te = function () {
    };
    AppComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    AppComponent.prototype.signInWithGooglePlus = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.SignOut = function () {
        this._firebaseAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_request_user_request_component__ = __webpack_require__("../../../../../src/app/user-request/user-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__partenr_partenr_component__ = __webpack_require__("../../../../../src/app/partenr/partenr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_city_add_city_component__ = __webpack_require__("../../../../../src/app/add-city/add-city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_type_user_type_component__ = __webpack_require__("../../../../../src/app/user-type/user-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_upload_file_service__ = __webpack_require__("../../../../../src/app/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__quotation_for_partenr_quotation_for_partenr_component__ = __webpack_require__("../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_25__user_request_user_request_component__["a" /* UserRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_26__partenr_partenr_component__["a" /* PartenrComponent */],
            __WEBPACK_IMPORTED_MODULE_27__add_city_add_city_component__["a" /* AddCityComponent */],
            __WEBPACK_IMPORTED_MODULE_28__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_29__user_type_user_type_component__["a" /* UserTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__quotation_for_partenr_quotation_for_partenr_component__["a" /* QuotationForPartenrComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_24__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY' }),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22_app_advspace_service__["a" /* AdvspaceService */], __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_30_app_upload_file_service__["a" /* UploadFileService */], __WEBPACK_IMPORTED_MODULE_31_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_user_request_user_request_component__ = __webpack_require__("../../../../../src/app/user-request/user-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_partenr_partenr_component__ = __webpack_require__("../../../../../src/app/partenr/partenr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_add_city_add_city_component__ = __webpack_require__("../../../../../src/app/add-city/add-city.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_user_type_user_type_component__ = __webpack_require__("../../../../../src/app/user-type/user-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_quotation_for_partenr_quotation_for_partenr_component__ = __webpack_require__("../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.ts");












var AppRoutes = [{
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5_app_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'quotations',
        component: __WEBPACK_IMPORTED_MODULE_11_app_quotation_for_partenr_quotation_for_partenr_component__["a" /* QuotationForPartenrComponent */],
    },
    {
        path: 'add-city',
        component: __WEBPACK_IMPORTED_MODULE_9_app_add_city_add_city_component__["a" /* AddCityComponent */]
    },
    {
        path: 'user-type',
        component: __WEBPACK_IMPORTED_MODULE_10_app_user_type_user_type_component__["a" /* UserTypeComponent */]
    },
    {
        path: 'partenr',
        component: __WEBPACK_IMPORTED_MODULE_8_app_partenr_partenr_component__["a" /* PartenrComponent */]
    },
    {
        path: 'user-request',
        component: __WEBPACK_IMPORTED_MODULE_7_app_user_request_user_request_component__["a" /* UserRequestComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_6_app_register_register_component__["a" /* RegisterComponent */],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'icons',
        component: __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__["a" /* IconsComponent */]
    },
    {
        path: 'maps',
        component: __WEBPACK_IMPORTED_MODULE_3__maps_maps_component__["a" /* MapsComponent */]
    },
    {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */]
    },
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.funkyradio div {\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n\r\n.funkyradio label {\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  border: 1px solid #D1D3D4;\r\n  font-weight: normal;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:empty,\r\n.funkyradio input[type=\"checkbox\"]:empty {\r\n  display: none;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:empty ~ label,\r\n.funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n  position: relative;\r\n  line-height: 2.5em;\r\n  text-indent: 3.25em;\r\n  margin-top: 2em;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n.funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n  position: absolute;\r\n  display: block;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  content: '';\r\n  width: 2.5em;\r\n  background: #D1D3D4;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n.funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n  color: #888;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n.funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n  content: '\\2714';\r\n  text-indent: .9em;\r\n  color: #C2C2C2;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:checked ~ label,\r\n.funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n  color: #777;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n  content: '\\2714';\r\n  text-indent: .9em;\r\n  color: #333;\r\n  background-color: #ccc;\r\n}\r\n\r\n.funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n.funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n  box-shadow: 0 0 0 3px #999;\r\n}\r\n\r\n.funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #333;\r\n  background-color: #ccc;\r\n}\r\n\r\n.funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n}\r\n\r\n.funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #fff;\r\n  background-color: #5207D0;\r\n}\r\n\r\n.funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n}\r\n\r\n.funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n}\r\n\r\n.funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n.funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"container-fluid\">\n          \n          <div class=\"row\" style=\"text-align:center\">\n              <div class=\"col-md-6 col-md-offset-3\">\n                  <div class=\"card\" style=\"color:black\">\n                      <div class=\"content\">\n                    <form #form=\"ngForm\" (ngSubmit)=\"AddRequest(city,advplace,advtype,startdate,finishdate,radiovisit,radiocall,radioemail)\">\n                              \n                <div class=\"form-group\" >\n                    <label for=\"validationDefault03\" >المدينة</label>\n                  <select #city style=\"width:100%; height:30px;\" >\n                     \n                    <option  *ngFor=\"let res of resualt;\">{{res.cityname}}</option>\n                   \n                  </select>\n                  </div>\n                  <div class=\"form-group\" >\n                      <label for=\"validationDefault03\" >بيئة الاعلان</label>\n                    <select #advplace style=\"width:100%; height:30px;\" >\n                      <option>داخلي</option>\n                      <option>خارجي</option>\n                      <option>داخلي وخارجي</option>\n                    </select>\n                    </div>\n                    <div class=\"form-group\" >\n                        <label for=\"validationDefault03\" >نوع الاعلان</label>\n                      <select #advtype style=\"width:100%; height:30px;\"  >\n                        <option>فيديو</option>\n                        <option>ثابت</option>\n                        \n                      </select>\n                      </div>\n\n\n                      <div class=\"form-group\"> <!-- Date input -->\n                        <label for=\"validationDefault03\" >تاريخ بداية الاعلان</label>\n                        <input #startdate  type=\"date\" style=\"width:100%; height:30px;\"  >\n                        \n                      </div>\n\n                      <div class=\"form-group\"> <!-- Date input -->\n                        <label for=\"validationDefault03\" >تاريخ نهاية الاعلان</label>\n                        <input #finishdate type=\"date\" style=\"width:100%; height:30px;\"  >\n                        \n                      </div>\n                       \n                      <div class=\"form-group\"> <!-- Date input -->\n                        <label for=\"validationDefault03\" style=\"color:red\" >تقديم الطلب هو بمثابة طلب تسعيرة فرجاء اختيار كيفية التواصل للحصول على التسيعرة</label>\n                       \n                        <div class=\"funkyradio\">\n                        \n                            <div class=\"funkyradio-success\">\n                                <input type=\"radio\" name=\"radio\" #radiovisit id=\"radio3\" />\n                                <label  for=\"radio3\">زيارة من مندوبنا</label>\n                            </div>\n                            <div class=\"funkyradio-danger\">\n                                <input type=\"radio\" name=\"radio\" #radiocall id=\"radio4\" />\n                                <label for=\"radio4\">اتصال</label>\n                            </div>\n                            <div class=\"funkyradio-warning\">\n                                <input type=\"radio\" name=\"radio\" #radioemail id=\"radio5\" />\n                                <label for=\"radio5\">بريد الكتروني</label>\n                            </div>\n                       \n                        </div>\n                      </div>   \n                                      <button type=\"submit\"  class=\"btn btn-primary\">تقديم الطلب</button>\n                                    </form>\n                      </div>\n                  </div>\n              </div>\n              \n          </div>\n      \n      "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DashboardComponent(AdvspaceService, _firebaseAuth, router) {
        var _this = this;
        this.AdvspaceService = AdvspaceService;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.basePath = '/uploads';
        this.user = _firebaseAuth.authState;
        this.AdvspaceService.getcity().subscribe(function (data) {
            _this.resualt = data;
        }, function (err) { return console.log(err); });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //    if(){
        var _this = this;
        //    }
        //     this._firebaseAuth.authState.subscribe(data=>{ 
        //        this.userid= data.uid;
        //        console.log('user id '+this.userid)
        //    })
        this.AdvspaceService.getuser().subscribe(function (data) {
            _this.users = data;
            _this.currentuser = _this.users.filter(function (res) {
                return res.Uid === _this._firebaseAuth.auth.currentUser.uid;
            });
        });
    };
    DashboardComponent.prototype.AddRequest = function (City, Advplace, AdvType, StartDate, FinishDate, ContactVisit, ContactCall, ContactEmail) {
        var _this = this;
        this.city = City;
        this.Advplace = Advplace;
        this.AdvType = AdvType;
        this.StartDate = StartDate;
        this.FinishDate = FinishDate;
        // this.Contact=Contact
        this.companyname = this.currentuser[0].CompanyName;
        this.phonenum = this.currentuser[0].PhoneNum;
        this.email = this.currentuser[0].UserEmail;
        this.companytype = this.currentuser[0].CompanyType;
        this.companyaddress = this.currentuser[0].CompanyAddress;
        this.userid = this.currentuser[0].Uid;
        var Contact;
        if (ContactVisit.checked) {
            this.Contact = "زيارة من مندوبنا";
            var request = {
                UserId: this.userid,
                CompanyName: this.companyname,
                PhoneNum: this.phonenum,
                Email: this.email,
                CompanyType: this.companytype,
                CompanyAddress: this.companyaddress,
                City: this.city.value,
                Advplace: this.Advplace.value,
                AdvType: this.AdvType.value,
                StartDate: this.StartDate.value,
                FinishDate: this.FinishDate.value,
                ContactState: this.Contact,
                RequestState: "NotActive"
            };
            this.AdvspaceService.addRequest(request).subscribe(function (data) {
                _this.resualt = data;
            }, function (err) { return console.log(err); });
            this.router.navigate(['user']);
            this.city.value = "";
            this.Advplace.value = "";
            this.AdvType.value = "";
            this.StartDate.value = "";
            this.FinishDate.value = "";
        }
        if (ContactCall.checked) {
            this.Contact = "اتصال";
            var request2 = {
                UserId: this.userid,
                CompanyName: this.companyname,
                PhoneNum: this.phonenum,
                Email: this.email,
                CompanyType: this.companytype,
                CompanyAddress: this.companyaddress,
                City: this.city.value,
                Advplace: this.Advplace.value,
                AdvType: this.AdvType.value,
                StartDate: this.StartDate.value,
                FinishDate: this.FinishDate.value,
                ContactState: this.Contact,
                RequestState: "NotActive"
            };
            this.AdvspaceService.addRequest(request2).subscribe(function (data) {
                _this.resualt = data;
            }, function (err) { return console.log(err); });
            this.router.navigate(['user']);
            this.city.value = "";
            this.Advplace.value = "";
            this.AdvType.value = "";
            this.StartDate.value = "";
            this.FinishDate.value = "";
        }
        if (ContactEmail.checked) {
            this.Contact = "بريد الكتروني";
            var request3 = {
                UserId: this.userid,
                CompanyName: this.companyname,
                PhoneNum: this.phonenum,
                Email: this.email,
                CompanyType: this.companytype,
                CompanyAddress: this.companyaddress,
                City: this.city.value,
                Advplace: this.Advplace.value,
                AdvType: this.AdvType.value,
                StartDate: this.StartDate.value,
                FinishDate: this.FinishDate.value,
                ContactState: this.Contact,
                DateOfAccepted: "",
                RequestState: "NotActive",
                Day: "",
                Month: "",
                Year: ""
            };
            this.AdvspaceService.addRequest(request3).subscribe(function (data) {
                _this.resualt = data;
            }, function (err) { return console.log(err); });
            this.router.navigate(['user']);
            this.city.value = "";
            this.Advplace.value = "";
            this.AdvType.value = "";
            this.StartDate.value = "";
            this.FinishDate.value = "";
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (req, args) {
        if (args === undefined)
            return [];
        return req.filter(function (res) {
            return res.CompanyName === args;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">320+ Themify Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://themify.me/\">Themify</a>.</p>\n                    </div>\n                    <div class=\"content all-icons\">\n\n                        <div class=\"icon-section\">\n                            <h3>Arrows &amp; Direction Icons </h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-up\"></span><span class=\"icon-name\"> ti-arrow-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-right\"></span><span class=\"icon-name\"> ti-arrow-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-left\"></span><span class=\"icon-name\"> ti-arrow-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-down\"></span><span class=\"icon-name\"> ti-arrow-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-vertical\"></span><span class=\"icon-name\"> ti-arrows-vertical</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-horizontal\"></span><span class=\"icon-name\"> ti-arrows-horizontal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-up\"></span><span class=\"icon-name\"> ti-angle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-right\"></span><span class=\"icon-name\"> ti-angle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-left\"></span><span class=\"icon-name\"> ti-angle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-down\"></span><span class=\"icon-name\"> ti-angle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-up\"></span><span class=\"icon-name\"> ti-angle-double-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-right\"></span><span class=\"icon-name\"> ti-angle-double-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-left\"></span><span class=\"icon-name\"> ti-angle-double-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-angle-double-down\"></span><span class=\"icon-name\"> ti-angle-double-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-move\"></span><span class=\"icon-name\"> ti-move</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-fullscreen\"></span><span class=\"icon-name\"> ti-fullscreen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-right\"></span><span class=\"icon-name\"> ti-arrow-top-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-top-left\"></span><span class=\"icon-name\"> ti-arrow-top-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-up\"></span><span class=\"icon-name\"> ti-arrow-circle-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-right\"></span><span class=\"icon-name\"> ti-arrow-circle-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-left\"></span><span class=\"icon-name\"> ti-arrow-circle-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrow-circle-down\"></span><span class=\"icon-name\"> ti-arrow-circle-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-arrows-corner\"></span><span class=\"icon-name\"> ti-arrows-corner</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v\"></span><span class=\"icon-name\"> ti-split-v</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-v-alt\"></span><span class=\"icon-name\"> ti-split-v-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-split-h\"></span><span class=\"icon-name\"> ti-split-h</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-up\"></span><span class=\"icon-name\"> ti-hand-point-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-right\"></span><span class=\"icon-name\"> ti-hand-point-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-left\"></span><span class=\"icon-name\"> ti-hand-point-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-point-down\"></span><span class=\"icon-name\"> ti-hand-point-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-right\"></span><span class=\"icon-name\"> ti-back-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-back-left\"></span><span class=\"icon-name\"> ti-back-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-exchange-vertical\"></span><span class=\"icon-name\"> ti-exchange-vertical</span>\n                            </div>\n\n                        </div> <!-- Arrows Icons -->\n\n\n\n                        <h3>Web App Icons</h3>\n\n                        <div class=\"icon-section\">\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wand\"></span><span class=\"icon-name\"> ti-wand</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save\"></span><span class=\"icon-name\"> ti-save</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-save-alt\"></span><span class=\"icon-name\"> ti-save-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction\"></span><span class=\"icon-name\"> ti-direction</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-direction-alt\"></span><span class=\"icon-name\"> ti-direction-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-user\"></span><span class=\"icon-name\"> ti-user</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-link\"></span><span class=\"icon-name\"> ti-link</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlink\"></span><span class=\"icon-name\"> ti-unlink</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trash\"></span><span class=\"icon-name\"> ti-trash</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-target\"></span><span class=\"icon-name\"> ti-target</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tag\"></span><span class=\"icon-name\"> ti-tag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-desktop\"></span><span class=\"icon-name\"> ti-desktop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tablet\"></span><span class=\"icon-name\"> ti-tablet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mobile\"></span><span class=\"icon-name\"> ti-mobile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-email\"></span><span class=\"icon-name\"> ti-email</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-star\"></span><span class=\"icon-name\"> ti-star</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-spray\"></span><span class=\"icon-name\"> ti-spray</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-signal\"></span><span class=\"icon-name\"> ti-signal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart\"></span><span class=\"icon-name\"> ti-shopping-cart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shopping-cart-full\"></span><span class=\"icon-name\"> ti-shopping-cart-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-settings\"></span><span class=\"icon-name\"> ti-settings</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-search\"></span><span class=\"icon-name\"> ti-search</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-in\"></span><span class=\"icon-name\"> ti-zoom-in</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zoom-out\"></span><span class=\"icon-name\"> ti-zoom-out</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cut\"></span><span class=\"icon-name\"> ti-cut</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler\"></span><span class=\"icon-name\"> ti-ruler</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt-2\"></span><span class=\"icon-name\"> ti-ruler-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-pencil\"></span><span class=\"icon-name\"> ti-ruler-pencil</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ruler-alt\"></span><span class=\"icon-name\"> ti-ruler-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark\"></span><span class=\"icon-name\"> ti-bookmark</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bookmark-alt\"></span><span class=\"icon-name\"> ti-bookmark-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reload\"></span><span class=\"icon-name\"> ti-reload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plus\"></span><span class=\"icon-name\"> ti-plus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-minus\"></span><span class=\"icon-name\"> ti-minus</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-close\"></span><span class=\"icon-name\"> ti-close</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin\"></span><span class=\"icon-name\"> ti-pin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil\"></span><span class=\"icon-name\"> ti-pencil</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt\"></span><span class=\"icon-name\"> ti-pencil-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-roller\"></span><span class=\"icon-name\"> ti-paint-roller</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paint-bucket\"></span><span class=\"icon-name\"> ti-paint-bucket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-na\"></span><span class=\"icon-name\"> ti-na</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall\"></span><span class=\"icon-name\"> ti-medall</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-medall-alt\"></span><span class=\"icon-name\"> ti-medall-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker\"></span><span class=\"icon-name\"> ti-marker</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-marker-alt\"></span><span class=\"icon-name\"> ti-marker-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-lock\"></span><span class=\"icon-name\"> ti-lock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-unlock\"></span><span class=\"icon-name\"> ti-unlock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-arrow\"></span><span class=\"icon-name\"> ti-location-arrow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout\"></span><span class=\"icon-name\"> ti-layout</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers\"></span><span class=\"icon-name\"> ti-layers</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layers-alt\"></span><span class=\"icon-name\"> ti-layers-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-key\"></span><span class=\"icon-name\"> ti-key</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-image\"></span><span class=\"icon-name\"> ti-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart\"></span><span class=\"icon-name\"> ti-heart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-heart-broken\"></span><span class=\"icon-name\"> ti-heart-broken</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-stop\"></span><span class=\"icon-name\"> ti-hand-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-open\"></span><span class=\"icon-name\"> ti-hand-open</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hand-drag\"></span><span class=\"icon-name\"> ti-hand-drag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag\"></span><span class=\"icon-name\"> ti-flag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt\"></span><span class=\"icon-name\"> ti-flag-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flag-alt-2\"></span><span class=\"icon-name\"> ti-flag-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eye\"></span><span class=\"icon-name\"> ti-eye</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-import\"></span><span class=\"icon-name\"> ti-import</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-export\"></span><span class=\"icon-name\"> ti-export</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cup\"></span><span class=\"icon-name\"> ti-cup</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-crown\"></span><span class=\"icon-name\"> ti-crown</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments\"></span><span class=\"icon-name\"> ti-comments</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment\"></span><span class=\"icon-name\"> ti-comment</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comment-alt\"></span><span class=\"icon-name\"> ti-comment-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thought\"></span><span class=\"icon-name\"> ti-thought</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clip\"></span><span class=\"icon-name\"> ti-clip</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check\"></span><span class=\"icon-name\"> ti-check</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-check-box\"></span><span class=\"icon-name\"> ti-check-box</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-camera\"></span><span class=\"icon-name\"> ti-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-announcement\"></span><span class=\"icon-name\"> ti-announcement</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush\"></span><span class=\"icon-name\"> ti-brush</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-brush-alt\"></span><span class=\"icon-name\"> ti-brush-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-palette\"></span><span class=\"icon-name\"> ti-palette</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-briefcase\"></span><span class=\"icon-name\"> ti-briefcase</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt\"></span><span class=\"icon-name\"> ti-bolt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bolt-alt\"></span><span class=\"icon-name\"> ti-bolt-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-blackboard\"></span><span class=\"icon-name\"> ti-blackboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bag\"></span><span class=\"icon-name\"> ti-bag</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-world\"></span><span class=\"icon-name\"> ti-world</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wheelchair\"></span><span class=\"icon-name\"> ti-wheelchair</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-car\"></span><span class=\"icon-name\"> ti-car</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-truck\"></span><span class=\"icon-name\"> ti-truck</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-timer\"></span><span class=\"icon-name\"> ti-timer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ticket\"></span><span class=\"icon-name\"> ti-ticket</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-up\"></span><span class=\"icon-name\"> ti-thumb-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-thumb-down\"></span><span class=\"icon-name\"> ti-thumb-down</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-up\"></span><span class=\"icon-name\"> ti-stats-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stats-down\"></span><span class=\"icon-name\"> ti-stats-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shine\"></span><span class=\"icon-name\"> ti-shine</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right\"></span><span class=\"icon-name\"> ti-shift-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left\"></span><span class=\"icon-name\"> ti-shift-left</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-right-alt\"></span><span class=\"icon-name\"> ti-shift-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shift-left-alt\"></span><span class=\"icon-name\"> ti-shift-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shield\"></span><span class=\"icon-name\"> ti-shield</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-notepad\"></span><span class=\"icon-name\"> ti-notepad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-server\"></span><span class=\"icon-name\"> ti-server</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pulse\"></span><span class=\"icon-name\"> ti-pulse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-printer\"></span><span class=\"icon-name\"> ti-printer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-power-off\"></span><span class=\"icon-name\"> ti-power-off</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-plug\"></span><span class=\"icon-name\"> ti-plug</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pie-chart\"></span><span class=\"icon-name\"> ti-pie-chart</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-panel\"></span><span class=\"icon-name\"> ti-panel</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-package\"></span><span class=\"icon-name\"> ti-package</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music\"></span><span class=\"icon-name\"> ti-music</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-music-alt\"></span><span class=\"icon-name\"> ti-music-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse\"></span><span class=\"icon-name\"> ti-mouse</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-mouse-alt\"></span><span class=\"icon-name\"> ti-mouse-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-money\"></span><span class=\"icon-name\"> ti-money</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone\"></span><span class=\"icon-name\"> ti-microphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu\"></span><span class=\"icon-name\"> ti-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-menu-alt\"></span><span class=\"icon-name\"> ti-menu-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map\"></span><span class=\"icon-name\"> ti-map</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-map-alt\"></span><span class=\"icon-name\"> ti-map-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-location-pin\"></span><span class=\"icon-name\"> ti-location-pin</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-light-bulb\"></span><span class=\"icon-name\"> ti-light-bulb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info\"></span><span class=\"icon-name\"> ti-info</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-infinite\"></span><span class=\"icon-name\"> ti-infinite</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-id-badge\"></span><span class=\"icon-name\"> ti-id-badge</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-hummer\"></span><span class=\"icon-name\"> ti-hummer</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-home\"></span><span class=\"icon-name\"> ti-home</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help\"></span><span class=\"icon-name\"> ti-help</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone\"></span><span class=\"icon-name\"> ti-headphone</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrives\"></span><span class=\"icon-name\"> ti-harddrives</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-harddrive\"></span><span class=\"icon-name\"> ti-harddrive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gift\"></span><span class=\"icon-name\"> ti-gift</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-game\"></span><span class=\"icon-name\"> ti-game</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-filter\"></span><span class=\"icon-name\"> ti-filter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-files\"></span><span class=\"icon-name\"> ti-files</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-file\"></span><span class=\"icon-name\"> ti-file</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-zip\"></span><span class=\"icon-name\"> ti-zip</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-folder\"></span><span class=\"icon-name\"> ti-folder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-envelope\"></span><span class=\"icon-name\"> ti-envelope</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dashboard\"></span><span class=\"icon-name\"> ti-dashboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud\"></span><span class=\"icon-name\"> ti-cloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-up\"></span><span class=\"icon-name\"> ti-cloud-up</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-cloud-down\"></span><span class=\"icon-name\"> ti-cloud-down</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-clipboard\"></span><span class=\"icon-name\"> ti-clipboard</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-calendar\"></span><span class=\"icon-name\"> ti-calendar</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-book\"></span><span class=\"icon-name\"> ti-book</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bell\"></span><span class=\"icon-name\"> ti-bell</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-basketball\"></span><span class=\"icon-name\"> ti-basketball</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart\"></span><span class=\"icon-name\"> ti-bar-chart</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-bar-chart-alt\"></span><span class=\"icon-name\"> ti-bar-chart-alt</span>\n                            </div>\n\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-archive\"></span><span class=\"icon-name\"> ti-archive</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-anchor\"></span><span class=\"icon-name\"> ti-anchor</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alert\"></span><span class=\"icon-name\"> ti-alert</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-alarm-clock\"></span><span class=\"icon-name\"> ti-alarm-clock</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-agenda\"></span><span class=\"icon-name\"> ti-agenda</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-write\"></span><span class=\"icon-name\"> ti-write</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wallet\"></span><span class=\"icon-name\"> ti-wallet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-clapper\"></span><span class=\"icon-name\"> ti-video-clapper</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-video-camera\"></span><span class=\"icon-name\"> ti-video-camera</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vector\"></span><span class=\"icon-name\"> ti-vector</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-support\"></span><span class=\"icon-name\"> ti-support</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stamp\"></span><span class=\"icon-name\"> ti-stamp</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-slice\"></span><span class=\"icon-name\"> ti-slice</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-shortcode\"></span><span class=\"icon-name\"> ti-shortcode</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-receipt\"></span><span class=\"icon-name\"> ti-receipt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin2\"></span><span class=\"icon-name\"> ti-pin2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pin-alt\"></span><span class=\"icon-name\"> ti-pin-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pencil-alt2\"></span><span class=\"icon-name\"> ti-pencil-alt2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-eraser\"></span><span class=\"icon-name\"> ti-eraser</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more\"></span><span class=\"icon-name\"> ti-more</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-more-alt\"></span><span class=\"icon-name\"> ti-more-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microphone-alt\"></span><span class=\"icon-name\"> ti-microphone-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-magnet\"></span><span class=\"icon-name\"> ti-magnet</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-double\"></span><span class=\"icon-name\"> ti-line-double</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dotted\"></span><span class=\"icon-name\"> ti-line-dotted</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-line-dashed\"></span><span class=\"icon-name\"> ti-line-dashed</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-ink-pen\"></span><span class=\"icon-name\"> ti-ink-pen</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-info-alt\"></span><span class=\"icon-name\"> ti-info-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-help-alt\"></span><span class=\"icon-name\"> ti-help-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-headphone-alt\"></span><span class=\"icon-name\"> ti-headphone-alt</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-gallery\"></span><span class=\"icon-name\"> ti-gallery</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-smile\"></span><span class=\"icon-name\"> ti-face-smile</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-face-sad\"></span><span class=\"icon-name\"> ti-face-sad</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-credit-card\"></span><span class=\"icon-name\"> ti-credit-card</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-comments-smiley\"></span><span class=\"icon-name\"> ti-comments-smiley</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-time\"></span><span class=\"icon-name\"> ti-time</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share\"></span><span class=\"icon-name\"> ti-share</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-share-alt\"></span><span class=\"icon-name\"> ti-share-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rocket\"></span><span class=\"icon-name\"> ti-rocket</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-new-window\"></span><span class=\"icon-name\"> ti-new-window</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss\"></span><span class=\"icon-name\"> ti-rss</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-rss-alt\"></span><span class=\"icon-name\"> ti-rss-alt</span>\n                            </div>\n\n                        </div><!-- Web App Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Control Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-stop\"></span><span class=\"icon-name\"> ti-control-stop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-shuffle\"></span><span class=\"icon-name\"> ti-control-shuffle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-play\"></span><span class=\"icon-name\"> ti-control-play</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-pause\"></span><span class=\"icon-name\"> ti-control-pause</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-forward\"></span><span class=\"icon-name\"> ti-control-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-backward\"></span><span class=\"icon-name\"> ti-control-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-volume\"></span><span class=\"icon-name\"> ti-volume</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-forward\"></span><span class=\"icon-name\"> ti-control-skip-forward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-skip-backward\"></span><span class=\"icon-name\"> ti-control-skip-backward</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-record\"></span><span class=\"icon-name\"> ti-control-record</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-control-eject\"></span><span class=\"icon-name\"> ti-control-eject</span>\n                            </div>\n                        </div> <!-- Control Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Text Editor</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-paragraph\"></span><span class=\"icon-name\"> ti-paragraph</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-uppercase\"></span><span class=\"icon-name\"> ti-uppercase</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-underline\"></span><span class=\"icon-name\"> ti-underline</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-text\"></span><span class=\"icon-name\"> ti-text</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-Italic\"></span><span class=\"icon-name\"> ti-Italic</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-smallcap\"></span><span class=\"icon-name\"> ti-smallcap</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list\"></span><span class=\"icon-name\"> ti-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-list-ol\"></span><span class=\"icon-name\"> ti-list-ol</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-right\"></span><span class=\"icon-name\"> ti-align-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-left\"></span><span class=\"icon-name\"> ti-align-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-justify\"></span><span class=\"icon-name\"> ti-align-justify</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-align-center\"></span><span class=\"icon-name\"> ti-align-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-right\"></span><span class=\"icon-name\"> ti-quote-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-quote-left\"></span><span class=\"icon-name\"> ti-quote-left</span>\n                            </div>\n\n                        </div> <!-- Text Editor -->\n\n\n\n                        <div class=\"icon-section\">\n                            <h3>Layout Icons</h3>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-full\"></span><span class=\"icon-name\"> ti-layout-width-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default\"></span><span class=\"icon-name\"> ti-layout-width-default</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-width-default-alt\"></span><span class=\"icon-name\"> ti-layout-width-default-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab\"></span><span class=\"icon-name\"> ti-layout-tab</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-window\"></span><span class=\"icon-name\"> ti-layout-tab-window</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-v\"></span><span class=\"icon-name\"> ti-layout-tab-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-tab-min\"></span><span class=\"icon-name\"> ti-layout-tab-min</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider\"></span><span class=\"icon-name\"> ti-layout-slider</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-slider-alt\"></span><span class=\"icon-name\"> ti-layout-slider-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-right\"></span><span class=\"icon-name\"> ti-layout-sidebar-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-none\"></span><span class=\"icon-name\"> ti-layout-sidebar-none</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-left\"></span><span class=\"icon-name\"> ti-layout-sidebar-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-placeholder\"></span><span class=\"icon-name\"> ti-layout-placeholder</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu\"></span><span class=\"icon-name\"> ti-layout-menu</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-v\"></span><span class=\"icon-name\"> ti-layout-menu-v</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-separated\"></span><span class=\"icon-name\"> ti-layout-menu-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-menu-full\"></span><span class=\"icon-name\"> ti-layout-menu-full</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right\"></span><span class=\"icon-name\"> ti-layout-media-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-right-alt\"></span><span class=\"icon-name\"> ti-layout-media-right-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay\"></span><span class=\"icon-name\"> ti-layout-media-overlay</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-overlay-alt-2\"></span><span class=\"icon-name\"> ti-layout-media-overlay-alt-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left\"></span><span class=\"icon-name\"> ti-layout-media-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-left-alt\"></span><span class=\"icon-name\"> ti-layout-media-left-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center\"></span><span class=\"icon-name\"> ti-layout-media-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-media-center-alt\"></span><span class=\"icon-name\"> ti-layout-media-center-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb\"></span><span class=\"icon-name\"> ti-layout-list-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-thumb-alt\"></span><span class=\"icon-name\"> ti-layout-list-thumb-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-post\"></span><span class=\"icon-name\"> ti-layout-list-post</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-list-large-image\"></span><span class=\"icon-name\"> ti-layout-list-large-image</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-line-solid\"></span><span class=\"icon-name\"> ti-layout-line-solid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4\"></span><span class=\"icon-name\"> ti-layout-grid4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3\"></span><span class=\"icon-name\"> ti-layout-grid3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2\"></span><span class=\"icon-name\"> ti-layout-grid2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-thumb\"></span><span class=\"icon-name\"> ti-layout-grid2-thumb</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-right\"></span><span class=\"icon-name\"> ti-layout-cta-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-left\"></span><span class=\"icon-name\"> ti-layout-cta-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-center\"></span><span class=\"icon-name\"> ti-layout-cta-center</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-right\"></span><span class=\"icon-name\"> ti-layout-cta-btn-right</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-cta-btn-left\"></span><span class=\"icon-name\"> ti-layout-cta-btn-left</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4\"></span><span class=\"icon-name\"> ti-layout-column4</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3\"></span><span class=\"icon-name\"> ti-layout-column3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2\"></span><span class=\"icon-name\"> ti-layout-column2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-separated\"></span><span class=\"icon-name\"> ti-layout-accordion-separated</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-merged\"></span><span class=\"icon-name\"> ti-layout-accordion-merged</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-accordion-list\"></span><span class=\"icon-name\"> ti-layout-accordion-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widgetized\"></span><span class=\"icon-name\"> ti-widgetized</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget\"></span><span class=\"icon-name\"> ti-widget</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-widget-alt\"></span><span class=\"icon-name\"> ti-widget-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list\"></span><span class=\"icon-name\"> ti-view-list</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-list-alt\"></span><span class=\"icon-name\"> ti-view-list-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-view-grid\"></span><span class=\"icon-name\"> ti-view-grid</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-upload\"></span><span class=\"icon-name\"> ti-upload</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-download\"></span><span class=\"icon-name\"> ti-download</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-loop\"></span><span class=\"icon-name\"> ti-loop</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-sidebar-2\"></span><span class=\"icon-name\"> ti-layout-sidebar-2</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid4-alt\"></span><span class=\"icon-name\"> ti-layout-grid4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid3-alt\"></span><span class=\"icon-name\"> ti-layout-grid3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-grid2-alt\"></span><span class=\"icon-name\"> ti-layout-grid2-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column4-alt\"></span><span class=\"icon-name\"> ti-layout-column4-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column3-alt\"></span><span class=\"icon-name\"> ti-layout-column3-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-layout-column2-alt\"></span><span class=\"icon-name\"> ti-layout-column2-alt</span>\n                            </div>\n\n\n                        </div> <!-- Layout Icons -->\n\n\n                        <div class=\"icon-section\">\n                            <h3>Brand Icons</h3>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr\"></span><span class=\"icon-name\"> ti-flickr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-flickr-alt\"></span><span class=\"icon-name\"> ti-flickr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-instagram\"></span><span class=\"icon-name\"> ti-instagram</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-google\"></span><span class=\"icon-name\"> ti-google</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-github\"></span><span class=\"icon-name\"> ti-github</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-facebook\"></span><span class=\"icon-name\"> ti-facebook</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox\"></span><span class=\"icon-name\"> ti-dropbox</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dropbox-alt\"></span><span class=\"icon-name\"> ti-dropbox-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-dribbble\"></span><span class=\"icon-name\"> ti-dribbble</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-apple\"></span><span class=\"icon-name\"> ti-apple</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-android\"></span><span class=\"icon-name\"> ti-android</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-yahoo\"></span><span class=\"icon-name\"> ti-yahoo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-trello\"></span><span class=\"icon-name\"> ti-trello</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-stack-overflow\"></span><span class=\"icon-name\"> ti-stack-overflow</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-soundcloud\"></span><span class=\"icon-name\"> ti-soundcloud</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis\"></span><span class=\"icon-name\"> ti-sharethis</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-sharethis-alt\"></span><span class=\"icon-name\"> ti-sharethis-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-reddit\"></span><span class=\"icon-name\"> ti-reddit</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft\"></span><span class=\"icon-name\"> ti-microsoft</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-microsoft-alt\"></span><span class=\"icon-name\"> ti-microsoft-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linux\"></span><span class=\"icon-name\"> ti-linux</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-jsfiddle\"></span><span class=\"icon-name\"> ti-jsfiddle</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-joomla\"></span><span class=\"icon-name\"> ti-joomla</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-html5\"></span><span class=\"icon-name\"> ti-html5</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-css3\"></span><span class=\"icon-name\"> ti-css3</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-drupal\"></span><span class=\"icon-name\"> ti-drupal</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-wordpress\"></span><span class=\"icon-name\"> ti-wordpress</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr\"></span><span class=\"icon-name\"> ti-tumblr</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-tumblr-alt\"></span><span class=\"icon-name\"> ti-tumblr-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-skype\"></span><span class=\"icon-name\"> ti-skype</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-youtube\"></span><span class=\"icon-name\"> ti-youtube</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo\"></span><span class=\"icon-name\"> ti-vimeo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-vimeo-alt\"></span><span class=\"icon-name\"> ti-vimeo-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter\"></span><span class=\"icon-name\"> ti-twitter</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-twitter-alt\"></span><span class=\"icon-name\"> ti-twitter-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-linkedin\"></span><span class=\"icon-name\"> ti-linkedin</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest\"></span><span class=\"icon-name\"> ti-pinterest</span>\n                            </div>\n\n                            <div class=\"icon-container\">\n                                <span class=\"ti-pinterest-alt\"></span><span class=\"icon-name\"> ti-pinterest-alt</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-logo\"></span><span class=\"icon-name\"> ti-themify-logo</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon\"></span><span class=\"icon-name\"> ti-themify-favicon</span>\n                            </div>\n                            <div class=\"icon-container\">\n                                <span class=\"ti-themify-favicon-alt\"></span><span class=\"icon-name\"> ti-themify-favicon-alt</span>\n                            </div>\n\n                        </div> <!-- brand Icons -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    return IconsComponent;
}());
IconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'icons-cmp',
        template: __webpack_require__("../../../../../src/app/icons/icons.component.html")
    })
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-error input[type=text], \r\n.has-error input[type=email], \r\n.has-error select {\r\n    border-color: #2f2f2f;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:200px;\">\r\n        <div class=\"row\" style=\"text-align:center\" *ngIf=\"!t\">\r\n                <div class=\"col-md-6 col-md-offset-3\">\r\n            <div class=\"card\">\r\n                <div class=\"content\">\r\n            <form  #form=\"ngForm\" (ngSubmit)=\"SignIn(email,pass)\">\r\n                <img style=\"width:200px; height:200px; margin-bottom:10px\" src=\"../../assets/img/event.jpg\">\r\n                    <div class=\"form-group\">\r\n                        \r\n                            <label for=\"validationDefault03\" >البريد الالكتروني</label>\r\n                            <input type=\"email\" #email class=\"form-control\" required  id=\"validationDefault03\" placeholder=\"البريد الالكتروني\" >\r\n                            <p  style=\"color:red\" *ngIf=\"emailinput\">{{emailalert}}</p>\r\n                            \r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <label for=\"validationDefault04\" >كلمة المرور</label>\r\n                                <input type=\"password\" #pass class=\"form-control\" id=\"validationDefault04\" placeholder=\"كلمة المرور\" required>\r\n                                <p  style=\"color:red\" *ngIf=\"passinput\">{{passalert}}</p>\r\n                        </div>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">تسجيل دخول</button><hr>\r\n                    <button  (click)=\"GoToRegisterPage()\" class=\"btn btn-danger\">انشاء مستخدم جديد</button>\r\n             </form>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  \r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function LoginComponent(router, _firebaseAuth) {
        this.router = router;
        this._firebaseAuth = _firebaseAuth;
        this.emailalert = "";
        this.passalert = "";
        this.user = _firebaseAuth.authState;
        this.emailinput = false;
        this.passinput = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseAuth.authState.subscribe(function (user) {
            if (user) {
                _this.router.navigate(['home']);
            }
        });
    };
    LoginComponent.prototype.GoToRegisterPage = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.SignIn = function (email, pass) {
        var _this = this;
        this.email = email.value;
        this.pass = pass.value;
        if (this.email != "" && this.pass != "") {
            this._firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.pass).then(function (user) {
                _this.router.navigate(['home']);
                _this.emailinput = false;
                _this.passinput = false;
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == "auth/user-not-found" || errorCode == "auth/wrong-password") {
                    _this.passinput = true;
                    _this.passalert = "خطأ في البريد الالكتروني أو كلمة المرور";
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"card card-map\">\n        <div class=\"header\">\n            <h4 class=\"title\">Google Maps</h4>\n        </div>\n        <ngui-map zoom=\"13\" center=\"40.748817,-73.985428\" >\n         <marker [position]=\"[40.748817,-73.985428]\"></marker>\n           <map-circle\n               [center]=\"{lat: 40.748817, lng: -73.985428}\">\n           </map-circle>\n       </ngui-map>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        // var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        // var mapOptions = {
        //   zoom: 13,
        //   center: myLatlng,
        //   scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        //   styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        //
        // }
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //
        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     title:"Hello World!"
        // });
        //
        // // To add the marker to the map, call setMap();
        // marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'maps-cmp',
        template: __webpack_require__("../../../../../src/app/maps/maps.component.html")
    })
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"header\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n\n            </div>\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-bell\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span data-notify=\"icon\" class=\"ti-pie-chart\"></span>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-9\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <button class=\"btn btn-default btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'notifications-cmp',
        template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html")
    })
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/partenr/partenr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);", ""]);

// module
exports.push([module.i, "/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\r\n.board{\r\n    width: 100%;\r\nmargin: 60px auto;\r\nheight: 100%;\r\nbackground: #fff;\r\n/*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.board .nav-tabs {\r\n    position: relative;\r\n    /* border-bottom: 0; */\r\n    /* width: 80%; */\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.board > div.board-inner{\r\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\r\n    background-size: 30%;\r\n}\r\n\r\np.narrow{\r\n    width: 60%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.liner{\r\n    height: 2px;\r\n    background: #ddd;\r\n    position: absolute;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    /* background-color: #ffffff; */\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n    \r\n}\r\n\r\nspan.round-tabs{\r\n    width: 150px;\r\n    height:70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: white;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    \r\n    \r\n}\r\n\r\nspan.round-tabs.one{\r\n    color: #5207D0(34, 194, 34);border: 2px solid #5207D0(34, 194, 34);\r\n    \r\n\r\n}\r\n\r\nli.active span.round-tabs.one{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color:#5207D0(34, 194, 34);\r\n   \r\n}\r\n\r\nspan.round-tabs.two{\r\n    color: #febe29;border: 2px solid #febe29;\r\n    \r\n}\r\n\r\nli.active span.round-tabs.two{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #febe29;\r\n}\r\n\r\nspan.round-tabs.three{\r\n    color: #3e5e9a;border: 2px solid #3e5e9a;\r\n}\r\n\r\nli.active span.round-tabs.three{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #3e5e9a;\r\n}\r\n\r\nspan.round-tabs.four{\r\n    color: #f1685e;border: 2px solid #f1685e;\r\n}\r\n\r\nli.active span.round-tabs.four{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #f1685e;\r\n}\r\n\r\nspan.round-tabs.five{\r\n    color: #999;border: 2px solid #999;\r\n}\r\n\r\nli.active span.round-tabs.five{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #999;\r\n}\r\n\r\n.nav-tabs > li.active > a span.round-tabs{\r\n    background: #fafafa;\r\n}\r\n.nav-tabs > li {\r\n    width: 20%;\r\n}\r\n/*li.active:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity:0;\r\n    margin: 0 auto;\r\n    bottom: -2px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #fff;\r\n    z-index: 1;\r\n    transition:0.2s ease-in-out;\r\n}*/\r\n.nav-tabs > li:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    transition:0.1s ease-in-out;\r\n    \r\n}\r\n.nav-tabs > li.active:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    \r\n}\r\n.nav-tabs > li a{\r\n   width: 70px;\r\n   height: 70px;\r\n   margin: 20px auto;\r\n   border-radius: 100%;\r\n   padding: 0;\r\n}\r\n\r\n.nav-tabs > li a:hover{\r\n    background: transparent;\r\n}\r\n\r\n.tab-content{\r\n}\r\n.tab-pane{\r\n   position: relative;\r\npadding-top: 50px;\r\n}\r\n.tab-content .head{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n}\r\n.btn-outline-rounded{\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: 2px solid transparent;\r\n    border-radius: 25px;\r\n}\r\n\r\n.btn.green{\r\n    background-color:#5cb85c;\r\n    /*border: 2px solid #5cb85c;*/\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n@media( max-width : 585px ){\r\n    \r\n    .board {\r\nwidth: 90%;\r\nheight:auto !important;\r\n}\r\n    span.round-tabs {\r\n        font-size:16px;\r\nwidth: 80px;\r\nheight: 80px;\r\nline-height: 50px;\r\n\r\n    }\r\n    .tab-content .head{\r\n        font-size:20px;\r\n        }\r\n    .nav-tabs > li a {\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height:50px;\r\n}\r\n\r\n.nav-tabs > li.active:after {\r\ncontent: \" \";\r\nposition: absolute;\r\nleft: 35%;\r\n}\r\n\r\n.btn-outline-rounded {\r\n    padding:12px 20px;\r\n    }\r\n}\r\n.animated {\r\n    transition: height 0.2s;\r\n}\r\n\r\n.stars\r\n{\r\n    margin: 20px 0;\r\n    font-size: 24px;\r\n    color: #d17581;\r\n}\r\n\r\n\r\n.features_table h1{\r\n    font-size:25px !important;\r\n\t\r\n}\r\nli{\r\n    list-style:none;\r\n    }\r\nh1{\r\n     font-size:21px !important;\r\n    }    \r\n.features-table li {\r\n    background: #da9748 none repeat scroll 0 0;\r\n    border-bottom: 2px solid #e5a253;\r\n    color: #f1f1f1;\r\n    font-size: 16px;\r\n    padding: 15px 24px;\r\n}\r\n.features-table li:hover{\r\n\tbackground:  #e5a253;\r\n\tcursor:pointer;\r\n transition: all .35s;\r\n}\r\n.features-table-free li, .features-table-paid li {\r\n    background: #efefef none repeat scroll 0 0;\r\n    border-bottom: 2px solid #d4d4d4;\r\n\ttext-align:center;\r\n    padding: 16.4px 21px;\r\n\tcursor:pointer;\r\n}\r\n.features-table-free h1, .features-table-paid h1 {\r\n    text-align: center;\r\n}\r\n.features-table-free li:hover, .features-table-paid li:hover {\r\n    background: #dedede none repeat scroll 0 0;\r\n transition: all .35s;\r\n}\r\n.features_table h1 {\r\n    font-size: 23px !important;\r\n}\r\n.features-table h1, .features-table-free h1, .features-table-paid h1 {\r\n    background: #6b6b6b none repeat scroll 0 0;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 19px 21px;\r\n    text-transform: uppercase;\r\n}\r\n.features-table h1 {\r\n    border-top-left-radius: 20px;\r\n\ttext-align:center;\r\n}\r\n.features-table-paid h1 {\r\n    border-top-right-radius: 20px;\r\n}\r\n.features-table-free li {\r\n    border-right: 2px solid #d4d4d4;\r\n}\r\n\r\n.fa.fa-check {\r\n    color: #2cc14f;\r\n}\r\n.fa.fa-times {\r\n    color: #BA5340;\r\n}\r\n.fa{\r\n\tfont-size:30px;\r\n}\r\n.no-padding{\r\n\tpadding:0;\r\n}\r\nul{\r\n\tpadding:0;\r\n}\r\n\r\n.custab{\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 5% 0;\r\n    box-shadow: 3px 3px 2px #ccc;\r\n    transition: 0.5s;\r\n    }\r\n.custab:hover{\r\n    box-shadow: 3px 3px 0px transparent;\r\n    transition: 0.5s;\r\n    }\r\n\r\n\r\n    .profile-data table tr {\r\n        background:#eee;\r\n    }\r\n    .profile-data table tr td:first-child {\r\n        width:200px;\r\n        background:#ff7f00;\r\n        border-left:4px solid #35415f;\r\n    }\r\n    .profile-data table tr:hover,\r\n    .profile-data table tr:hover td:first-child {\r\n        color:#fff;\r\n        background:#35415f;\r\n    }\r\n    \r\n.funkyradio div {\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .funkyradio label {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #D1D3D4;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty,\r\n  .funkyradio input[type=\"checkbox\"]:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n    position: relative;\r\n    line-height: 2.5em;\r\n    text-indent: 3.25em;\r\n    margin-top: 2em;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 2.5em;\r\n    background: #D1D3D4;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n    color: #888;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #C2C2C2;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n    color: #777;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n    box-shadow: 0 0 0 3px #999;\r\n  }\r\n  \r\n  .funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n  }\r\n  \r\n  .funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5207D0;\r\n  }\r\n  \r\n  .funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n  }\r\n  \r\n  .funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n  }\r\n\r\n\r\n\r\n#custom-search-input {\r\n    margin:0;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n}\r\n\r\n#custom-search-input .search-query {\r\n    padding-right: 3px;\r\n    padding-right: 4px \\9;\r\n    padding-left: 3px;\r\n    padding-left: 4px \\9;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n#custom-search-input button {\r\n    border: 0;\r\n    background: none;\r\n    /** belows styles are working good */\r\n    padding: 2px 5px;\r\n    margin-top: 2px;\r\n    position: relative;\r\n    left: -28px;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n    color:#D9230F;\r\n}\r\n\r\n.search-query:focus + button {\r\n    z-index: 3;   \r\n}\r\n#timer{\r\n    border:1px solid rgb(200,200,200);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    font-family: 'Istok Web', sans-serif;\r\n   \r\n}\r\n.large{\r\n    font-size: 100px;\r\n    margin: 5px;\r\n    color:rgb(230,230,230);\r\n    \r\n}\r\n.medium{\r\n    font-size: 40px;\r\n     color:rgb(230,230,230);\r\n}\r\n.small{\r\n    font-size: 60px;\r\n    color:rgb(230,230,230);\r\n}\r\n\r\n.controlButtons{\r\n    text-align: center;\r\n}\r\n.marginClass{\r\n    margin: 5px;\r\n    display: inline-block;\r\n    \r\n}\r\n.border{\r\n   border-right:1px solid black;\r\n   \r\n}\r\n.dark{\r\n    color: black\r\n}\r\n.icon-size {\r\n    font-size:30px;\r\n     }\r\n    \r\n     .shoppingBadge-custom{\r\n    background: red;\r\n    position:absolute;\r\n    left:0px;\r\n    top:18px;\r\n    font-size:15px;\r\n    z-index: 3;\r\n     }\r\n\r\n\r\n     *,\r\n     *:after,\r\n     *:before {\r\n         box-sizing: border-box;\r\n     }\r\n     \r\n     .clearfix:before,\r\n     .clearfix:after {\r\n         content: \" \";\r\n         display: table;\r\n     }\r\n     \r\n     .clearfix:after {\r\n         clear: both;\r\n     }\r\n     \r\n     body {\r\n         font-family: sans-serif;\r\n         background: #f6f9fa;\r\n     }\r\n     \r\n     h1 {\r\n         color: #ccc;\r\n         text-align: center;\r\n     }\r\n     \r\n     a {\r\n       color: #ccc;\r\n       text-decoration: none;\r\n       outline: none;\r\n     }\r\n     \r\n     /*Fun begins*/\r\n     .tab_container {\r\n         width: 90%;\r\n         margin: 0 auto;\r\n         padding-top: 70px;\r\n         position: relative;\r\n     }\r\n     \r\n     input, section {\r\n       clear: both;\r\n       padding-top: 10px;\r\n       display: none;\r\n     }\r\n     .btnUpload{\r\n         background-color: #F2610B;\r\n         color:white;\r\n         font-weight:  bold;\r\n         width: 50%;\r\n         height: 67px;\r\n     }\r\n     .lblbrowse{\r\n        font-weight: 700;\r\n        font-size: 15px;\r\n        display: block;\r\n        float: left ;\r\n        width: 50%;\r\n        padding: 1.5em;\r\n        color: white;\r\n        cursor: pointer;\r\n        text-decoration: none;\r\n        text-align: center;\r\n        background: midnightblue;\r\n     }\r\n     label {\r\n       font-weight: 700;\r\n       font-size: 18px;\r\n       display: block;\r\n       float: left ;\r\n       width: 49.9%;\r\n       padding: 1.5em;\r\n       color: white;\r\n       cursor: pointer;\r\n       text-decoration: none;\r\n       text-align: center;\r\n       background: #FF8C1D;\r\n     }\r\n     \r\n     #tab1:checked ~ #content1,\r\n     #tab2:checked ~ #content2,\r\n     #tab3:checked ~ #content3,\r\n     #tab4:checked ~ #content4,\r\n     #tab5:checked ~ #content5 {\r\n       display: block;\r\n       padding: 20px;\r\n       background: #fff;\r\n       color: #999;\r\n       border-bottom: 2px solid #f0f0f0;\r\n     }\r\n     \r\n     .tab_container .tab-content p,\r\n     .tab_container .tab-content h3 {\r\n       -webkit-animation: fadeInScale 0.7s ease-in-out;\r\n       animation: fadeInScale 0.7s ease-in-out;\r\n     }\r\n     .tab_container .tab-content h3  {\r\n       text-align: center;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label {\r\n       background: #fff;\r\n       box-shadow: inset 0 3px red;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label .fa {\r\n       color: white;\r\n     }\r\n     \r\n     label .fa {\r\n       font-size: 1.3em;\r\n       margin: 0 0.4em 0 0;\r\n     }\r\n     \r\n     /*Media query*/\r\n     @media only screen and (max-width: 930px) {\r\n       label span {\r\n         font-size: 14px;\r\n       }\r\n       label .fa {\r\n         font-size: 14px;\r\n       }\r\n     }\r\n     \r\n     @media only screen and (max-width: 768px) {\r\n       label span {\r\n         display: none;\r\n       }\r\n     \r\n       label .fa {\r\n         font-size: 16px;\r\n       }\r\n     \r\n       .tab_container {\r\n         width: 98%;\r\n       }\r\n     }\r\n     \r\n     /*Content Animation*/\r\n     @-webkit-keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }\r\n     @keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partenr/partenr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n \n      \n      <div class=\"tab_container\">\n        <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>\n        <label for=\"tab1\" style=\"background:midnightblue;\"><i class=\"fa fa-pencil-square-o\"></i><span>ارسال عرض سعر جديد</span></label>\n  \n        <input id=\"tab2\" type=\"radio\" name=\"tabs\">\n        <label for=\"tab2\" style=\"background: #F2610B;\" ><i class=\"fa fa-pencil-square-o\"></i><span>عروض السعر الموافق عليها من الشريك</span></label>\n  \n        <section id=\"content1\" class=\"tab-content\">\n                <div class=\"row\" style=\"text-align:center\">\n            <div class=\"col-md-6 col-md-offset-3\">\n          <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n              role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n              aria-valuemin=\"0\" aria-valuemax=\"100\"\n              [ngStyle]=\"{width:progress.percentage+'%'}\">\n              {{progress.percentage}}%</div>\n          </div>\n          <label class=\"btn btn-default btn-file lblbrowse\"><input style=\"margin:0px;\" type=\"file\"\n            (change)=\"selectFile($event)\">Browse.....</label>\n  \n            \n          \n           \n          <button class=\"btn btnUpload\" [disabled]=\"!selectedFiles\"\n            (click)=\"upload()\">Upload</button>\n       \n            </div>\n            \n        </div>\n    \n        \n        </section>\n  \n        <section id=\"content2\" class=\"tab-content\" >\n            <div *ngFor=\"let p of PartnerQuotationAccepted\" class=\"card\" >\n                \n           \n          \n          <p class=\" text-center\">\n          \n<p class=\" text-center\">{{p.Name}} : الاسم </p>\n<p class=\" text-center\" >{{p.DateSend}} : تاريخ الموافقة</p>\n  <a class=\" text-center\" href=\"{{p.DownLoadUrl}}\" target=\"_blank\"><p class=\" text-center\" >تحميل</p></a>\n\n<hr>\n        \n                                      </div>\n<!--                                     \n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">List of Files</div>\n            <div *ngFor=\"let file of fileUploads | async\">\n              <div class=\"panel-body\">\n              <a href=\"{{file.url}}\"  target=\"_blank\"> {{file.name}}</a>\n              </div>\n            </div>\n          </div> -->\n        \n        </section>\n  \n  \n      </div>\n\n\n\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/partenr/partenr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartenrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileupload__ = __webpack_require__("../../../../../src/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_service__ = __webpack_require__("../../../../../src/app/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartenrComponent = (function () {
    function PartenrComponent(uploadService, _AdvspaceService) {
        this.uploadService = uploadService;
        this._AdvspaceService = _AdvspaceService;
        this.progress = { percentage: 0 };
    }
    PartenrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileUploads = this.uploadService.getFileUploads();
        this.fileUploads.subscribe(function (re) { });
        this._AdvspaceService.getPartnerApproval().subscribe(function (res) {
            _this.PartnerQuotation = res;
            _this.PartnerQuotationAccepted = _this.PartnerQuotation.filter(function (res) {
                return res.State === "Accepted";
            });
        });
    };
    PartenrComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    PartenrComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_1__fileupload__["a" /* FileUpload */](file);
        this.uploadService.pushFileToStoragePartenr(this.currentFileUpload, this.progress);
    };
    return PartenrComponent;
}());
PartenrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-partenr',
        template: __webpack_require__("../../../../../src/app/partenr/partenr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partenr/partenr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_file_service__["a" /* UploadFileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _b || Object])
], PartenrComponent);

var _a, _b;
//# sourceMappingURL=partenr.component.js.map

/***/ }),

/***/ "../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);", ""]);

// module
exports.push([module.i, "/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\r\n.board{\r\n    width: 100%;\r\nmargin: 60px auto;\r\nheight: 100%;\r\nbackground: #fff;\r\n/*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.board .nav-tabs {\r\n    position: relative;\r\n    /* border-bottom: 0; */\r\n    /* width: 80%; */\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.board > div.board-inner{\r\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\r\n    background-size: 30%;\r\n}\r\n\r\np.narrow{\r\n    width: 60%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.liner{\r\n    height: 2px;\r\n    background: #ddd;\r\n    position: absolute;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    /* background-color: #ffffff; */\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n    \r\n}\r\n\r\nspan.round-tabs{\r\n    width: 150px;\r\n    height:70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: white;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    \r\n    \r\n}\r\n\r\nspan.round-tabs.one{\r\n    color: #5207D0(34, 194, 34);border: 2px solid #5207D0(34, 194, 34);\r\n    \r\n\r\n}\r\n\r\nli.active span.round-tabs.one{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color:#5207D0(34, 194, 34);\r\n   \r\n}\r\n\r\nspan.round-tabs.two{\r\n    color: #febe29;border: 2px solid #febe29;\r\n    \r\n}\r\n\r\nli.active span.round-tabs.two{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #febe29;\r\n}\r\n\r\nspan.round-tabs.three{\r\n    color: #3e5e9a;border: 2px solid #3e5e9a;\r\n}\r\n\r\nli.active span.round-tabs.three{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #3e5e9a;\r\n}\r\n\r\nspan.round-tabs.four{\r\n    color: #f1685e;border: 2px solid #f1685e;\r\n}\r\n\r\nli.active span.round-tabs.four{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #f1685e;\r\n}\r\n\r\nspan.round-tabs.five{\r\n    color: #999;border: 2px solid #999;\r\n}\r\n\r\nli.active span.round-tabs.five{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #999;\r\n}\r\n\r\n.nav-tabs > li.active > a span.round-tabs{\r\n    background: #fafafa;\r\n}\r\n.nav-tabs > li {\r\n    width: 20%;\r\n}\r\n/*li.active:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity:0;\r\n    margin: 0 auto;\r\n    bottom: -2px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #fff;\r\n    z-index: 1;\r\n    transition:0.2s ease-in-out;\r\n}*/\r\n.nav-tabs > li:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    transition:0.1s ease-in-out;\r\n    \r\n}\r\n.nav-tabs > li.active:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    \r\n}\r\n.nav-tabs > li a{\r\n   width: 70px;\r\n   height: 70px;\r\n   margin: 20px auto;\r\n   border-radius: 100%;\r\n   padding: 0;\r\n}\r\n\r\n.nav-tabs > li a:hover{\r\n    background: transparent;\r\n}\r\n\r\n.tab-content{\r\n}\r\n.tab-pane{\r\n   position: relative;\r\npadding-top: 50px;\r\n}\r\n.tab-content .head{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n}\r\n.btn-outline-rounded{\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: 2px solid transparent;\r\n    border-radius: 25px;\r\n}\r\n\r\n.btn.green{\r\n    background-color:#5cb85c;\r\n    /*border: 2px solid #5cb85c;*/\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n@media( max-width : 585px ){\r\n    \r\n    .board {\r\nwidth: 90%;\r\nheight:auto !important;\r\n}\r\n    span.round-tabs {\r\n        font-size:16px;\r\nwidth: 80px;\r\nheight: 80px;\r\nline-height: 50px;\r\n\r\n    }\r\n    .tab-content .head{\r\n        font-size:20px;\r\n        }\r\n    .nav-tabs > li a {\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height:50px;\r\n}\r\n\r\n.nav-tabs > li.active:after {\r\ncontent: \" \";\r\nposition: absolute;\r\nleft: 35%;\r\n}\r\n\r\n.btn-outline-rounded {\r\n    padding:12px 20px;\r\n    }\r\n}\r\n.animated {\r\n    transition: height 0.2s;\r\n}\r\n\r\n.stars\r\n{\r\n    margin: 20px 0;\r\n    font-size: 24px;\r\n    color: #d17581;\r\n}\r\n\r\n\r\n.features_table h1{\r\n    font-size:25px !important;\r\n\t\r\n}\r\nli{\r\n    list-style:none;\r\n    }\r\nh1{\r\n     font-size:21px !important;\r\n    }    \r\n.features-table li {\r\n    background: #da9748 none repeat scroll 0 0;\r\n    border-bottom: 2px solid #e5a253;\r\n    color: #f1f1f1;\r\n    font-size: 16px;\r\n    padding: 15px 24px;\r\n}\r\n.features-table li:hover{\r\n\tbackground:  #e5a253;\r\n\tcursor:pointer;\r\n transition: all .35s;\r\n}\r\n.features-table-free li, .features-table-paid li {\r\n    background: #efefef none repeat scroll 0 0;\r\n    border-bottom: 2px solid #d4d4d4;\r\n\ttext-align:center;\r\n    padding: 16.4px 21px;\r\n\tcursor:pointer;\r\n}\r\n.features-table-free h1, .features-table-paid h1 {\r\n    text-align: center;\r\n}\r\n.features-table-free li:hover, .features-table-paid li:hover {\r\n    background: #dedede none repeat scroll 0 0;\r\n transition: all .35s;\r\n}\r\n.features_table h1 {\r\n    font-size: 23px !important;\r\n}\r\n.features-table h1, .features-table-free h1, .features-table-paid h1 {\r\n    background: #6b6b6b none repeat scroll 0 0;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 19px 21px;\r\n    text-transform: uppercase;\r\n}\r\n.features-table h1 {\r\n    border-top-left-radius: 20px;\r\n\ttext-align:center;\r\n}\r\n.features-table-paid h1 {\r\n    border-top-right-radius: 20px;\r\n}\r\n.features-table-free li {\r\n    border-right: 2px solid #d4d4d4;\r\n}\r\n\r\n.fa.fa-check {\r\n    color: #2cc14f;\r\n}\r\n.fa.fa-times {\r\n    color: #BA5340;\r\n}\r\n.fa{\r\n\tfont-size:30px;\r\n}\r\n.no-padding{\r\n\tpadding:0;\r\n}\r\nul{\r\n\tpadding:0;\r\n}\r\n\r\n.custab{\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 5% 0;\r\n    box-shadow: 3px 3px 2px #ccc;\r\n    transition: 0.5s;\r\n    }\r\n.custab:hover{\r\n    box-shadow: 3px 3px 0px transparent;\r\n    transition: 0.5s;\r\n    }\r\n\r\n\r\n    .profile-data table tr {\r\n        background:#eee;\r\n    }\r\n    .profile-data table tr td:first-child {\r\n        width:200px;\r\n        background:#ff7f00;\r\n        border-left:4px solid #35415f;\r\n    }\r\n    .profile-data table tr:hover,\r\n    .profile-data table tr:hover td:first-child {\r\n        color:#fff;\r\n        background:#35415f;\r\n    }\r\n    \r\n.funkyradio div {\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .funkyradio label {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #D1D3D4;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty,\r\n  .funkyradio input[type=\"checkbox\"]:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n    position: relative;\r\n    line-height: 2.5em;\r\n    text-indent: 3.25em;\r\n    margin-top: 2em;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 2.5em;\r\n    background: #D1D3D4;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n    color: #888;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #C2C2C2;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n    color: #777;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n    box-shadow: 0 0 0 3px #999;\r\n  }\r\n  \r\n  .funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n  }\r\n  \r\n  .funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5207D0;\r\n  }\r\n  \r\n  .funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n  }\r\n  \r\n  .funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n  }\r\n\r\n\r\n\r\n#custom-search-input {\r\n    margin:0;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n}\r\n\r\n#custom-search-input .search-query {\r\n    padding-right: 3px;\r\n    padding-right: 4px \\9;\r\n    padding-left: 3px;\r\n    padding-left: 4px \\9;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n#custom-search-input button {\r\n    border: 0;\r\n    background: none;\r\n    /** belows styles are working good */\r\n    padding: 2px 5px;\r\n    margin-top: 2px;\r\n    position: relative;\r\n    left: -28px;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n    color:#D9230F;\r\n}\r\n\r\n.search-query:focus + button {\r\n    z-index: 3;   \r\n}\r\n#timer{\r\n    border:1px solid rgb(200,200,200);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    font-family: 'Istok Web', sans-serif;\r\n   \r\n}\r\n.large{\r\n    font-size: 100px;\r\n    margin: 5px;\r\n    color:rgb(230,230,230);\r\n    \r\n}\r\n.medium{\r\n    font-size: 40px;\r\n     color:rgb(230,230,230);\r\n}\r\n.small{\r\n    font-size: 60px;\r\n    color:rgb(230,230,230);\r\n}\r\n\r\n.controlButtons{\r\n    text-align: center;\r\n}\r\n.marginClass{\r\n    margin: 5px;\r\n    display: inline-block;\r\n    \r\n}\r\n.border{\r\n   border-right:1px solid black;\r\n   \r\n}\r\n.dark{\r\n    color: black\r\n}\r\n.icon-size {\r\n    font-size:30px;\r\n     }\r\n    \r\n     .shoppingBadge-custom{\r\n    background: red;\r\n    position:absolute;\r\n    left:0px;\r\n    top:18px;\r\n    font-size:15px;\r\n    z-index: 3;\r\n     }\r\n\r\n\r\n     *,\r\n     *:after,\r\n     *:before {\r\n         box-sizing: border-box;\r\n     }\r\n     \r\n     .clearfix:before,\r\n     .clearfix:after {\r\n         content: \" \";\r\n         display: table;\r\n     }\r\n     \r\n     .clearfix:after {\r\n         clear: both;\r\n     }\r\n     \r\n     body {\r\n         font-family: sans-serif;\r\n         background: #f6f9fa;\r\n     }\r\n     \r\n     h1 {\r\n         color: #ccc;\r\n         text-align: center;\r\n     }\r\n     \r\n     a {\r\n       color: #ccc;\r\n       text-decoration: none;\r\n       outline: none;\r\n     }\r\n     \r\n     /*Fun begins*/\r\n     .tab_container {\r\n         width: 90%;\r\n         margin: 0 auto;\r\n         padding-top: 70px;\r\n         position: relative;\r\n     }\r\n     \r\n     input, section {\r\n       clear: both;\r\n       padding-top: 10px;\r\n       display: none;\r\n     }\r\n     .btnUpload{\r\n         background-color: #F2610B;\r\n         color:white;\r\n         font-weight:  bold;\r\n         width: 50%;\r\n         height: 67px;\r\n     }\r\n     .lblbrowse{\r\n        font-weight: 700;\r\n        font-size: 15px;\r\n        display: block;\r\n        float: left ;\r\n        width: 50%;\r\n        padding: 1.5em;\r\n        color: white;\r\n        cursor: pointer;\r\n        text-decoration: none;\r\n        text-align: center;\r\n        background: midnightblue;\r\n     }\r\n     label {\r\n       font-weight: 700;\r\n       font-size: 18px;\r\n       display: block;\r\n       float: left ;\r\n       width: 49.9%;\r\n       padding: 1.5em;\r\n       color: white;\r\n       cursor: pointer;\r\n       text-decoration: none;\r\n       text-align: center;\r\n       background: #FF8C1D;\r\n     }\r\n     \r\n     #tab1:checked ~ #content1,\r\n     #tab2:checked ~ #content2,\r\n     #tab3:checked ~ #content3,\r\n     #tab4:checked ~ #content4,\r\n     #tab5:checked ~ #content5 {\r\n       display: block;\r\n       padding: 20px;\r\n       background: #fff;\r\n       color: #999;\r\n       border-bottom: 2px solid #f0f0f0;\r\n     }\r\n     \r\n     .tab_container .tab-content p,\r\n     .tab_container .tab-content h3 {\r\n       -webkit-animation: fadeInScale 0.7s ease-in-out;\r\n       animation: fadeInScale 0.7s ease-in-out;\r\n     }\r\n     .tab_container .tab-content h3  {\r\n       text-align: center;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label {\r\n       background: #fff;\r\n       box-shadow: inset 0 3px red;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label .fa {\r\n       color: white;\r\n     }\r\n     \r\n     label .fa {\r\n       font-size: 1.3em;\r\n       margin: 0 0.4em 0 0;\r\n     }\r\n     \r\n     /*Media query*/\r\n     @media only screen and (max-width: 930px) {\r\n       label span {\r\n         font-size: 14px;\r\n       }\r\n       label .fa {\r\n         font-size: 14px;\r\n       }\r\n     }\r\n     \r\n     @media only screen and (max-width: 768px) {\r\n       label span {\r\n         display: none;\r\n       }\r\n     \r\n       label .fa {\r\n         font-size: 16px;\r\n       }\r\n     \r\n       .tab_container {\r\n         width: 98%;\r\n       }\r\n     }\r\n     \r\n     /*Content Animation*/\r\n     @-webkit-keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }\r\n     @keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n   \n        \n        <div class=\"tab_container\">\n          <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>\n          <label for=\"tab1\" style=\"background:midnightblue;\"><i class=\"fa fa-pencil-square-o\"></i><span>Quotations</span></label>\n    \n          <input id=\"tab2\" type=\"radio\" name=\"tabs\">\n          <label for=\"tab2\" style=\"background: #F2610B;\" ><i class=\"fa fa-pencil-square-o\"></i><span>Compeleted Quotations</span></label>\n    \n          <section id=\"content1\" class=\"tab-content\">\n            <div *ngFor=\"let file of PartnerQuotationWaiting; let i=index\" class=\"card\">\n              \n        <p class=\" text-center\">\n<p #name class=\" text-center\">File Name : {{file.Name}} </p>\n<p class=\" text-center\"> Date of Send : {{file.DateSend}} </p>\n<p></p>\n\n<a style=\"text-align:center\" href=\"{{file.DownLoadUrl}}\" target=\"_blank\">View</a>\n<br>\n<br>\n<br>\n <button (click)=\"SignatureAgree(file.Name)\"  class=\"btn btn-primary\">توقيع بالموافقة</button>\n             </div>\n\n          </section>\n    \n          <section id=\"content2\" class=\"tab-content\" >\n              <div *ngFor=\"let file of PartnerQuotationCompeleted\" class=\"card\">\n                  \n             \n\n            <p class=\" text-center\">\n              <p #name class=\" text-center\">File Name : {{file.Name}} </p>\n              <p class=\" text-center\"> Date of Accepted : {{file.DateAccepted}} </p>\n              <p></p>\n              \n              <a style=\"text-align:center\" href=\"{{file.DownLoadUrl}}\" target=\"_blank\">View</a>\n                 </div>\n  <!--                                     \n            <div class=\"panel panel-primary\">\n              <div class=\"panel-heading\">List of Files</div>\n              <div *ngFor=\"let file of fileUploads | async\">\n                <div class=\"panel-body\">\n                <a href=\"{{file.url}}\"  target=\"_blank\"> {{file.name}}</a>\n                </div>\n              </div>\n            </div> -->\n          \n          </section>\n    \n          <section id=\"content3\" class=\"tab-content\">\n          \n          \n          </section>\n    \n       \n    \n        </div>\n  \n  \n  \n  \n  </div>\n  \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationForPartenrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_upload_file_service__ = __webpack_require__("../../../../../src/app/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotationForPartenrComponent = (function () {
    function QuotationForPartenrComponent(uploadService, _AdvspaceService) {
        this.uploadService = uploadService;
        this._AdvspaceService = _AdvspaceService;
    }
    QuotationForPartenrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AdvspaceService.getPartnerApproval().subscribe(function (res) {
            _this.PartnerQuotation = res;
            _this.PartnerQuotationWaiting = _this.PartnerQuotation.filter(function (res) {
                return res.State === "Waiting";
            });
            // this.PartnerQuotationWaiting =this._AdvspaceService.GetPartnerQuotationWaiting().subscribe(res=>{
            //  console.log(this.PartnerQuotationWaiting)
            // })
            _this.PartnerQuotationCompeleted = _this.PartnerQuotation.filter(function (res) {
                return res.State === "Accepted";
            });
        });
        this.fileUploads = this.uploadService.getFileUploads();
        this.fileUploads.subscribe(function (re) { });
    };
    QuotationForPartenrComponent.prototype.SignatureAgree = function (name) {
        var _this = this;
        var datenow = new Date();
        var month = datenow.getMonth() + 1;
        this.DateAccepted = "" + datenow.getDate() + "-" + month + "-" + datenow.getFullYear() + "";
        this.Quotation = this.PartnerQuotationWaiting.filter(function (res) {
            return res.Name === name;
        });
        console.log(this.Quotation);
        this.Quid = this.Quotation[0]._id.$oid;
        this._AdvspaceService.SignatureAgree(this.Quid, "Accepted", this.DateAccepted).subscribe(function (res) {
            _this.ngOnInit();
        });
        //  this._AdvspaceService.UpdateRquestAddSendOfAccepet(this.Quid,this.DateAccepted).subscribe(
        //    res=> {
        //    console.log("Done Ya M3Alm")}
        //  )
    };
    return QuotationForPartenrComponent;
}());
QuotationForPartenrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quotation-for-partenr',
        template: __webpack_require__("../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quotation-for-partenr/quotation-for-partenr.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_upload_file_service__["a" /* UploadFileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _b || Object])
], QuotationForPartenrComponent);

var _a, _b;
//# sourceMappingURL=quotation-for-partenr.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:200px;\">\n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"!t\">\n            <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"card\">\n            <div class=\"content\">\n               \n                <label style=\"color:red\" >يفضل التسجيل بالبريد الالكتروني الرسمي للمؤسسة</label>\n                \n        <form #form=\"ngForm\" (ngSubmit)=\"createUser(email,pass,companyname,companyaddress,companytype,phonenum)\">\n           \n            <img style=\"width:200px; height:200px; margin-bottom:10px\" src=\"../../assets/img/event.jpg\">\n          \n                <div class=\"form-group\">\n                        <label for=\"email\" >البريد الالكتروني</label>\n                        <input type=\"email\" #email class=\"form-control\"   id=\"validationDefault03\" placeholder=\"البريد الالكتروني\" required>\n                    <p  style=\"color:red\" *ngIf=\"emailinput\">{{emailalert}}</p>\n                    </div>\n                    <hr>\n                    <div class=\"form-group\">\n                            <label for=\"validationDefault04\" >كلمة المرور</label>\n                            <input type=\"password\" #pass class=\"form-control\"  id=\"validationDefault04\" placeholder=\"كلمة المرور\" required>\n                            <p  style=\"color:red\" *ngIf=\"passinput\">{{passalert}}</p>\n                        </div>\n                        <hr>\n                    <div class=\"form-group\">\n                        <label for=\"validationDefault04\" >اسم الشركة</label>\n                        <input type=\"text\" #companyname class=\"form-control\" id=\"validationDefault05\" placeholder=\"اسم الشركة\" required>\n                        <p  style=\"color:red\" *ngIf=\"companynameinput\">{{companynamealert}}</p>\n                    </div>\n                    <hr>\n                <div class=\"form-group\">\n                    <label for=\"validationDefault04\" >عنوان الشركة</label>\n                    <input type=\"text\" #companyaddress class=\"form-control\" id=\"validationDefault06\" placeholder=\"عنوان الشركة\" required>\n                    <p   style=\"color:red\" *ngIf=\"companyaddressinput\">{{companyaddressalert}}</p>\n                </div>\n                <hr>\n            <div class=\"form-group\">\n                <label for=\"validationDefault04\">نشاط الشركة</label>\n                <input type=\"text\"#companytype class=\"form-control\" id=\"validationDefault07\" placeholder=\"نوع الشركة\" required>\n                <p  style=\"color:red\" *ngIf=\"companytypeinput\">{{companytypealert}}</p>\n                \n            </div>\n            <hr>\n        <div class=\"form-group\">\n            <label for=\"validationDefault05\">رقم الجوال</label>\n            <input type=\"number\" #phonenum class=\"form-control\" id=\"validationDefault08\" placeholder=\"رقم الجوال\" required>\n            <p  style=\"color:red\" *ngIf=\"phonenuminput\">{{phonenumalert}}</p>\n        </div>\n                 <button type=\"submit\"  class=\"btn btn-danger\">انشاء مستخدم جديد</button>\n         </form>\n        \n            </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
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
    function RegisterComponent(_firebaseAuth, router, AdvspaceService) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.emailalert = "";
        this.passalert = "";
        this.companynamealert = "";
        this.companytypealert = "";
        this.companyaddressalert = "";
        this.phonenumalert = "";
        this.user = _firebaseAuth.authState;
        this.AdvspaceService = AdvspaceService;
        this.emailinput = false;
        this.companynameinput = false;
        this.companytypeinput = false;
        this.companyaddressinput = false;
        this.phonenuminput = false;
        this.passinput = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function (email, pass, companyname, companyaddress, companytype, phonenum) {
        var _this = this;
        if (email.value != "" && pass.value != "" && companyname.value != "" && companyaddress.value != "" && companytype.value != "" && phonenum.value != "") {
            this.email = email.value;
            this.pass = pass.value;
            return this._firebaseAuth.auth.createUserWithEmailAndPassword(this.email, this.pass).then(function (user) {
                _this.userid = user.uid;
                _this.useremail = user.email;
                _this.companyname = companyname;
                _this.companytype = companytype;
                _this.phonenum = phonenum;
                _this.companyaddress = companyaddress;
                var UserDetails = {
                    Uid: _this.userid,
                    UserEmail: _this.useremail,
                    CompanyName: _this.companyname.value,
                    CompanyAddress: _this.companyaddress.value,
                    CompanyType: _this.companytype.value,
                    PhoneNum: _this.phonenum.value,
                    UserState: "Client"
                };
                _this.AdvspaceService.addUserDetails(UserDetails).subscribe(function (data) { _this.resualt = data; }, function (err) { return console.log(err); });
                _this.emailinput = false;
                _this.companynameinput = false;
                _this.companytypeinput = false;
                _this.companyaddressinput = false;
                _this.phonenuminput = false;
                _this.passinput = false;
                email.value = "";
                pass.value = "";
                _this.companyname.value = "";
                _this.companyaddress.value = "";
                _this.companytype.value = "";
                _this.phonenum.value = "";
                _this.router.navigate(['home']);
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                if (errorCode == "auth/invalid-email") {
                    _this.emailinput = true;
                    _this.emailalert = " ادخل البريد الالكتروني بطريقة صحيحة";
                }
                if (errorCode == "auth/email-already-in-use") {
                    // this.emailinput=true;
                    // this.emailalert="هذا البريد الالكتروني مسجل من قبل"
                }
                if (errorCode == "auth/weak-password") {
                    _this.passinput = true;
                    _this.passalert = "يجب انت تكون كلمة المرور اكثر من 6 حروف او ارقام";
                }
                else {
                    _this.emailinput = false;
                }
            });
        }
        else {
            // this.emailinput=false;
            // this.companynameinput=false;
            // this.companytypeinput=false;
            // this.companyaddressinput=false;
            // this.phonenuminput=false;
            // this.passinput=false;
            if (email.value == "") {
                this.emailinput = true;
                this.emailalert = "ادخل البريد الالكتروني";
            }
            else {
                this.emailinput = false;
            }
            if (pass.value == "") {
                this.passinput = true;
                this.passalert = "ادخل كلمة المرور";
            }
            else {
                this.passinput = false;
            }
            if (companyname.value == "") {
                this.companynameinput = true;
                this.companynamealert = "ادخل اسم الشركة";
            }
            else {
                this.companynameinput = false;
            }
            if (companyaddress.value == "") {
                this.companyaddressinput = true;
                this.companyaddressalert = "ادخل عنوان الشركة";
            }
            else {
                this.companyaddressinput = false;
            }
            if (companytype.value == "") {
                this.companytypeinput = true;
                this.companytypealert = "ادخل نشاط الشركة";
            }
            else {
                this.companytypeinput = false;
            }
            if (phonenum.value == "") {
                this.phonenuminput = true;
                this.phonenumalert = "ادخل رقم الجوال";
            }
            else {
                this.phonenuminput = false;
            }
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                </a>\n            </li>\n\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"http://www.eventdesign.sa\">\n                      Event Design Company\n                    </a>\n                </li>\n              \n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with by <a >Event Design</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Stats</p>\n                    </a>\n                </li> -->\n                <li >\n                    <a (click)=\"signInWithGooglePlus()\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Login with google plus</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a  (click)=\"te()\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"ti-settings\"></i>\n                        <p>Settings</p>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
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
    function NavbarComponent(location, renderer, element, _firebaseAuth) {
        this.renderer = renderer;
        this.element = element;
        this._firebaseAuth = _firebaseAuth;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        // this.user = _firebaseAuth.authState;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var navbar = this.element.nativeElement;
        var toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.signInWithGooglePlus = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    NavbarComponent.prototype.te = function () {
        this.da = this._firebaseAuth.auth.currentUser.photoURL;
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\" style=\"background-color:midnightblue; text-align:center \">\n    <div class=\"logo\">\n        <a class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"../../assets/img/event.jpg\" alt=\"\">\n            </div>\n            Event Design\n        </a>\n    </div>\n  \n    <img class=\"avatar border-white img-circle\" src={{da}} alt=\"...\" style=\"height:80px; margin-top:10px;\"/>\n    <p style=\"color:white\" (click)=\"ngOnInit()\">ahmed</p>\n    <!-- <div class=\"card card-user\" style=\"height:80px\">\n        \n        <div class=\"content\">\n            <div class=\"author\">\n              \n              <h4 class=\"title\">Chet Faker<br />\n                 <a href=\"#\"><small>@chetfaker</small></a>\n              </h4>\n            </div>\n          \n        </div>\n        <hr>\n        \n    </div> -->\n    <ul class=\"nav\">\n        \n        <!-- <li >\n            <a (click)=\"signInWithGooglePlus()\">\n                <i class=\"ti-panel\"></i>\n                <p>Login with google plus</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"ti-bell\"></i>\n                    <p class=\"notification\">5</p>\n                    <p>Notifications</p>\n                    <b class=\"caret\"></b>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a  (click)=\"te()\">Notification 1</a></li>\n                <li><a href=\"#\">Notification 2</a></li>\n                <li><a href=\"#\">Notification 3</a></li>\n                <li><a href=\"#\">Notification 4</a></li>\n                <li><a href=\"#\">Another notification</a></li>\n              </ul>\n        </li>\n        <li>\n            <a href=\"#\">\n                <i class=\"ti-settings\"></i>\n                <p>Settings</p>\n            </a>\n        </li> -->\n        <!-- <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\" >\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n\n           \n        </li>\n        <li>\n            <a (click)=\"SignOut()\">\n                <i ></i>\n                <p>تسجيل خروج</p>\n            </a>\n\n        </li> -->\n    </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export ROUTES2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    { path: '/dashboard', title: 'طلب مساحة اعلانية جديد', icon: 'ti-settings', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
];
var ROUTES2 = [
    { path: 'login', title: 'Login', icon: 'ti-login', class: '' },
    { path: 'user', title: 'Register', icon: 'ti-rigster', class: '' },
];
var SidebarComponent = (function () {
    function SidebarComponent(_firebaseAuth, router) {
        // this.user = _firebaseAuth.authState;
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this._firebaseAuth.authState.subscribe(function (user) {
            if (user) {
                _this.test = true;
                _this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
            }
            // else{
            //   this.test=false;
            //   this.menuItems=ROUTES2.filter(menuItem => menuItem);
            // }
        });
    }
    // ngAfterViewInit() {
    //     // Component views are initialized 
    //      this.da= this._firebaseAuth.auth.currentUser.uid;
    //    console.log(this.da);
    //   }
    SidebarComponent.prototype.te = function () {
        this.da = this._firebaseAuth.auth.currentUser.photoURL;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseAuth.authState.subscribe(function (user) {
            if (user) {
                _this.test = true;
                _this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
            }
            // else{
            //   this.test=false;
            //   this.menuItems=ROUTES2.filter(menuItem => menuItem);
            // }
        });
        //     if(this.test){ 
        //         this.menuItems = ROUTES.filter(menuItem => menuItem);
        //     }
        //    else{
        //           this.menuItems=ROUTES2.filter(menuItem => menuItem);
        //    }
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.signInWithGooglePlus = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].GoogleAuthProvider());
    };
    SidebarComponent.prototype.SignOut = function () {
        this._firebaseAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadFileService = (function () {
    function UploadFileService(db, _AdvspaceService) {
        this.db = db;
        this._AdvspaceService = _AdvspaceService;
        this.basePath = '/uploads';
    }
    UploadFileService.prototype.pushFileToStoragePartenr = function (fileUpload, progress) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload);
            var datenow = new Date();
            var month = datenow.getMonth() + 1;
            var data = {
                Name: fileUpload.file.name,
                DownLoadUrl: uploadTask.snapshot.downloadURL,
                DateSend: "" + datenow.getDate() + "-" + month + "-" + datenow.getFullYear() + "",
                DateAccepted: "",
                State: "Waiting"
            };
            _this._AdvspaceService.addPartnerApproval(data).subscribe(function (data) {
                _this.resualt = data;
            }, function (err) { return console.log(err); });
        });
    };
    UploadFileService.prototype.pushFileToStorageClient = function (fileUpload, progress, RequestId) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        console.log(fileUpload.file.name);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload);
            var datenow = new Date();
            var month = datenow.getMonth() + 1;
            var data = {
                RequestId: RequestId,
                Name: fileUpload.file.name,
                DownLoadUrl: uploadTask.snapshot.downloadURL,
                DateSend: "" + datenow.getDate() + "-" + month + "-" + datenow.getFullYear() + "",
            };
            _this._AdvspaceService.addClientDesign(data).subscribe(function (data) {
                _this.resualt = data;
            }, function (err) { return console.log(err); });
        });
    };
    UploadFileService.prototype.getFileUploads = function (query) {
        if (query === void 0) { query = {}; }
        this.fileUploads = this.db.list(this.basePath);
        return this.fileUploads;
    };
    UploadFileService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _b || Object])
], UploadFileService);

var _a, _b;
//# sourceMappingURL=upload-file.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-request/user-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);", ""]);

// module
exports.push([module.i, "/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\r\n.board{\r\n    width: 100%;\r\nmargin: 60px auto;\r\nheight: 100%;\r\nbackground: #fff;\r\n/*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.board .nav-tabs {\r\n    position: relative;\r\n    /* border-bottom: 0; */\r\n    /* width: 80%; */\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.board > div.board-inner{\r\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\r\n    background-size: 30%;\r\n}\r\n\r\np.narrow{\r\n    width: 60%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.liner{\r\n    height: 2px;\r\n    background: #ddd;\r\n    position: absolute;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    /* background-color: #ffffff; */\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n    \r\n}\r\n\r\nspan.round-tabs{\r\n    width: 150px;\r\n    height:70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: white;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    \r\n    \r\n}\r\n\r\nspan.round-tabs.one{\r\n    color: #5207D0(34, 194, 34);border: 2px solid #5207D0(34, 194, 34);\r\n    \r\n\r\n}\r\n\r\nli.active span.round-tabs.one{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color:#5207D0(34, 194, 34);\r\n   \r\n}\r\n\r\nspan.round-tabs.two{\r\n    color: #febe29;border: 2px solid #febe29;\r\n    \r\n}\r\n\r\nli.active span.round-tabs.two{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #febe29;\r\n}\r\n\r\nspan.round-tabs.three{\r\n    color: #3e5e9a;border: 2px solid #3e5e9a;\r\n}\r\n\r\nli.active span.round-tabs.three{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #3e5e9a;\r\n}\r\n\r\nspan.round-tabs.four{\r\n    color: #f1685e;border: 2px solid #f1685e;\r\n}\r\n\r\nli.active span.round-tabs.four{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #f1685e;\r\n}\r\n\r\nspan.round-tabs.five{\r\n    color: #999;border: 2px solid #999;\r\n}\r\n\r\nli.active span.round-tabs.five{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #999;\r\n}\r\n\r\n.nav-tabs > li.active > a span.round-tabs{\r\n    background: #fafafa;\r\n}\r\n.nav-tabs > li {\r\n    width: 20%;\r\n}\r\n/*li.active:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity:0;\r\n    margin: 0 auto;\r\n    bottom: -2px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #fff;\r\n    z-index: 1;\r\n    transition:0.2s ease-in-out;\r\n}*/\r\n.nav-tabs > li:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    transition:0.1s ease-in-out;\r\n    \r\n}\r\n.nav-tabs > li.active:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 60%;\r\n   opacity:1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    \r\n}\r\n.nav-tabs > li a{\r\n   width: 70px;\r\n   height: 70px;\r\n   margin: 20px auto;\r\n   border-radius: 100%;\r\n   padding: 0;\r\n}\r\n\r\n.nav-tabs > li a:hover{\r\n    background: transparent;\r\n}\r\n\r\n.tab-content{\r\n}\r\n.tab-pane{\r\n   position: relative;\r\npadding-top: 50px;\r\n}\r\n.tab-content .head{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n}\r\n.btn-outline-rounded{\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: 2px solid transparent;\r\n    border-radius: 25px;\r\n}\r\n\r\n.btn.green{\r\n    background-color:#5cb85c;\r\n    /*border: 2px solid #5cb85c;*/\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n@media( max-width : 585px ){\r\n    \r\n    .board {\r\nwidth: 90%;\r\nheight:auto !important;\r\n}\r\n    span.round-tabs {\r\n        font-size:16px;\r\nwidth: 80px;\r\nheight: 80px;\r\nline-height: 50px;\r\n\r\n    }\r\n    .tab-content .head{\r\n        font-size:20px;\r\n        }\r\n    .nav-tabs > li a {\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height:50px;\r\n}\r\n\r\n.nav-tabs > li.active:after {\r\ncontent: \" \";\r\nposition: absolute;\r\nleft: 35%;\r\n}\r\n\r\n.btn-outline-rounded {\r\n    padding:12px 20px;\r\n    }\r\n}\r\n.animated {\r\n    transition: height 0.2s;\r\n}\r\n\r\n.stars\r\n{\r\n    margin: 20px 0;\r\n    font-size: 24px;\r\n    color: #d17581;\r\n}\r\n\r\n\r\n.features_table h1{\r\n    font-size:25px !important;\r\n\t\r\n}\r\nli{\r\n    list-style:none;\r\n    }\r\nh1{\r\n     font-size:21px !important;\r\n    }    \r\n.features-table li {\r\n    background: #da9748 none repeat scroll 0 0;\r\n    border-bottom: 2px solid #e5a253;\r\n    color: #f1f1f1;\r\n    font-size: 16px;\r\n    padding: 15px 24px;\r\n}\r\n.features-table li:hover{\r\n\tbackground:  #e5a253;\r\n\tcursor:pointer;\r\n transition: all .35s;\r\n}\r\n.features-table-free li, .features-table-paid li {\r\n    background: #efefef none repeat scroll 0 0;\r\n    border-bottom: 2px solid #d4d4d4;\r\n\ttext-align:center;\r\n    padding: 16.4px 21px;\r\n\tcursor:pointer;\r\n}\r\n.features-table-free h1, .features-table-paid h1 {\r\n    text-align: center;\r\n}\r\n.features-table-free li:hover, .features-table-paid li:hover {\r\n    background: #dedede none repeat scroll 0 0;\r\n transition: all .35s;\r\n}\r\n.features_table h1 {\r\n    font-size: 23px !important;\r\n}\r\n.features-table h1, .features-table-free h1, .features-table-paid h1 {\r\n    background: #6b6b6b none repeat scroll 0 0;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 19px 21px;\r\n    text-transform: uppercase;\r\n}\r\n.features-table h1 {\r\n    border-top-left-radius: 20px;\r\n\ttext-align:center;\r\n}\r\n.features-table-paid h1 {\r\n    border-top-right-radius: 20px;\r\n}\r\n.features-table-free li {\r\n    border-right: 2px solid #d4d4d4;\r\n}\r\n\r\n.fa.fa-check {\r\n    color: #2cc14f;\r\n}\r\n.fa.fa-times {\r\n    color: #BA5340;\r\n}\r\n.fa{\r\n\tfont-size:30px;\r\n}\r\n.no-padding{\r\n\tpadding:0;\r\n}\r\nul{\r\n\tpadding:0;\r\n}\r\n\r\n.custab{\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 5% 0;\r\n    box-shadow: 3px 3px 2px #ccc;\r\n    transition: 0.5s;\r\n    }\r\n.custab:hover{\r\n    box-shadow: 3px 3px 0px transparent;\r\n    transition: 0.5s;\r\n    }\r\n\r\n\r\n    .profile-data table tr {\r\n        background:#eee;\r\n    }\r\n    .profile-data table tr td:first-child {\r\n        width:200px;\r\n        background:#ff7f00;\r\n        border-left:4px solid #35415f;\r\n    }\r\n    .profile-data table tr:hover,\r\n    .profile-data table tr:hover td:first-child {\r\n        color:#fff;\r\n        background:#35415f;\r\n    }\r\n    \r\n.funkyradio div {\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .funkyradio label {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #D1D3D4;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty,\r\n  .funkyradio input[type=\"checkbox\"]:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n    position: relative;\r\n    line-height: 2.5em;\r\n    text-indent: 3.25em;\r\n    margin-top: 2em;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 2.5em;\r\n    background: #D1D3D4;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n    color: #888;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #C2C2C2;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n    color: #777;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n    box-shadow: 0 0 0 3px #999;\r\n  }\r\n  \r\n  .funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n  }\r\n  \r\n  .funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5207D0;\r\n  }\r\n  \r\n  .funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n  }\r\n  \r\n  .funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n  }\r\n\r\n\r\n\r\n#custom-search-input {\r\n    margin:0;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n}\r\n\r\n#custom-search-input .search-query {\r\n    padding-right: 3px;\r\n    padding-right: 4px \\9;\r\n    padding-left: 3px;\r\n    padding-left: 4px \\9;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n}\r\n\r\n#custom-search-input button {\r\n    border: 0;\r\n    background: none;\r\n    /** belows styles are working good */\r\n    padding: 2px 5px;\r\n    margin-top: 2px;\r\n    position: relative;\r\n    left: -28px;\r\n    /* IE7-8 doesn't have border-radius, so don't indent the padding */\r\n    margin-bottom: 0;\r\n    border-radius: 3px;\r\n    color:#D9230F;\r\n}\r\n\r\n.search-query:focus + button {\r\n    z-index: 3;   \r\n}\r\n#timer{\r\n    border:1px solid rgb(200,200,200);\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    font-family: 'Istok Web', sans-serif;\r\n   \r\n}\r\n.large{\r\n    font-size: 100px;\r\n    margin: 5px;\r\n    color:rgb(230,230,230);\r\n    \r\n}\r\n.medium{\r\n    font-size: 40px;\r\n     color:rgb(230,230,230);\r\n}\r\n.small{\r\n    font-size: 60px;\r\n    color:rgb(230,230,230);\r\n}\r\n\r\n.controlButtons{\r\n    text-align: center;\r\n}\r\n.marginClass{\r\n    margin: 5px;\r\n    display: inline-block;\r\n    \r\n}\r\n.border{\r\n   border-right:1px solid black;\r\n   \r\n}\r\n.dark{\r\n    color: black\r\n}\r\n.icon-size {\r\n    font-size:30px;\r\n     }\r\n    \r\n     .shoppingBadge-custom{\r\n    background: red;\r\n    position:absolute;\r\n    left:0px;\r\n    top:18px;\r\n    font-size:15px;\r\n    z-index: 3;\r\n     }\r\n\r\n\r\n     *,\r\n     *:after,\r\n     *:before {\r\n         box-sizing: border-box;\r\n     }\r\n     \r\n     .clearfix:before,\r\n     .clearfix:after {\r\n         content: \" \";\r\n         display: table;\r\n     }\r\n     \r\n     .clearfix:after {\r\n         clear: both;\r\n     }\r\n     \r\n     body {\r\n         font-family: sans-serif;\r\n         background: #f6f9fa;\r\n     }\r\n     \r\n     h1 {\r\n         color: #ccc;\r\n         text-align: center;\r\n     }\r\n     \r\n     a {\r\n       color: #ccc;\r\n       text-decoration: none;\r\n       outline: none;\r\n     }\r\n     \r\n     /*Fun begins*/\r\n     .tab_container {\r\n         width: 90%;\r\n         margin: 0 auto;\r\n         padding-top: 70px;\r\n         position: relative;\r\n     }\r\n     \r\n     input, section {\r\n       clear: both;\r\n       padding-top: 10px;\r\n       display: none;\r\n     }\r\n     \r\n     label {\r\n       font-weight: 700;\r\n       font-size: 18px;\r\n       display: block;\r\n       float: left ;\r\n       width: 33.2%;\r\n       padding: 1.5em;\r\n       color: white;\r\n       cursor: pointer;\r\n       text-decoration: none;\r\n       text-align: center;\r\n       background: #FF8C1D;\r\n     }\r\n     \r\n     #tab1:checked ~ #content1,\r\n     #tab2:checked ~ #content2,\r\n     #tab3:checked ~ #content3,\r\n     #tab4:checked ~ #content4,\r\n     #tab5:checked ~ #content5 {\r\n       display: block;\r\n       padding: 20px;\r\n       background: #fff;\r\n       color: #999;\r\n       border-bottom: 2px solid #f0f0f0;\r\n     }\r\n     \r\n     .tab_container .tab-content p,\r\n     .tab_container .tab-content h3 {\r\n       -webkit-animation: fadeInScale 0.7s ease-in-out;\r\n       animation: fadeInScale 0.7s ease-in-out;\r\n     }\r\n     .tab_container .tab-content h3  {\r\n       text-align: center;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label {\r\n       background: #fff;\r\n       box-shadow: inset 0 3px red;\r\n     }\r\n     \r\n     .tab_container [id^=\"tab\"]:checked + label .fa {\r\n       color: white;\r\n     }\r\n     \r\n     label .fa {\r\n       font-size: 1.3em;\r\n       margin: 0 0.4em 0 0;\r\n     }\r\n     \r\n     /*Media query*/\r\n     @media only screen and (max-width: 930px) {\r\n       label span {\r\n         font-size: 14px;\r\n       }\r\n       label .fa {\r\n         font-size: 14px;\r\n       }\r\n     }\r\n     \r\n     @media only screen and (max-width: 768px) {\r\n       label span {\r\n         display: none;\r\n       }\r\n     \r\n       label .fa {\r\n         font-size: 16px;\r\n       }\r\n     \r\n       .tab_container {\r\n         width: 98%;\r\n       }\r\n     }\r\n     \r\n     /*Content Animation*/\r\n     @-webkit-keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }\r\n     @keyframes fadeInScale {\r\n       0% {\r\n           -webkit-transform: scale(0.9);\r\n                   transform: scale(0.9);\r\n           opacity: 0;\r\n       }\r\n       \r\n       100% {\r\n           -webkit-transform: scale(1);\r\n                   transform: scale(1);\r\n           opacity: 1;\r\n       }\r\n     }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-request/user-request.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n \n      \n      <div class=\"tab_container\">\n        <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>\n        <label for=\"tab1\" style=\"background:midnightblue;\"><i class=\"fa fa-pencil-square-o\"></i><span>الطلبات المرسلة </span></label>\n  \n        <input id=\"tab2\" type=\"radio\" name=\"tabs\">\n        <label for=\"tab2\" style=\"background: #F2610B;\"><i class=\"fa fa-pencil-square-o\"></i><span>المرسل اليها عرض سعر</span></label>\n  \n        <input id=\"tab3\" type=\"radio\" name=\"tabs\">\n        <label for=\"tab3\" style=\"background: midnightblue;\"><i class=\"fa fa-bar-chart-o\"></i><span>الطلبات المدفوعه</span></label>\n  \n        \n        <section id=\"content1\" class=\"tab-content\">\n         \n            <div *ngFor=\"let req of userrequestesWaiting\" class=\"card\" >\n                \n           \n          <h1  class=\"head text-center\">بيانات الشركة</h1>\n          <p class=\" text-center\">\n<p class=\" text-center\">{{req.CompanyName}} : اسم الشركة </p>\n<p class=\" text-center\">{{req.CompanyAddress}} : عنوان الشركة </p>\n<p class=\" text-center\">{{req.CompanyType}} : نشاط الشركة </p>\n<p class=\" text-center\">{{req.Email}} : البريد الالكتروني </p>\n<p class=\" text-center\">{{req.PhoneNum}} : رقم الجوال للتواصل </p>\n<hr>\n<h1 class=\" text-center\">  بيانات الاعلان المطلوب</h1>\n          <p class=\" text-center\">\n              المدينة : {{req.City}}\n               </p>\n      <p class=\" text-center\">\n       بيئة الاعلان : {{req.Advplace}}\n      </p>\n      <p class=\" text-center\">\n            نوع الاعلان : {{req.AdvType}}\n           </p>\n           <p class=\" text-center\">\n                تاريخ بداية الاعلان : {{req.StartDate}}\n               </p>\n               <p class=\" text-center\">\n                    تاريخ نهاية الاعلان : {{req.FinishDate}}\n                   </p>\n                                              <p class=\"text-center\">\n                                        <a  (click)=\"UpdateRquestToAccepted(req._id.$oid)\" class=\"btn btn-success btn-outline-rounded green\">تم ارسال عرض السعر <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-send\"></span></a>\n                                    </p> </div>\n        \n        </section>\n  \n        <section id=\"content2\" class=\"tab-content\">\n            <div *ngFor=\"let req of userrequestesAccepted\" class=\"card\">\n                \n           \n          <h1  class=\"head text-center\">بيانات الشركة</h1>\n          <p class=\" text-center\">\n<p class=\" text-center\">{{req.CompanyName}} : اسم الشركة </p>\n<p class=\" text-center\">{{req.CompanyAddress}} : عنوان الشركة </p>\n<p class=\" text-center\">{{req.CompanyType}} : نشاط الشركة </p>\n<p class=\" text-center\">{{req.Email}} : البريد الالكتروني </p>\n<p class=\" text-center\">{{req.PhoneNum}} : رقم الجوال للتواصل </p>\n<hr>\n<h1 class=\" text-center\">  بيانات الاعلان المطلوب</h1>\n          <p class=\" text-center\">\n              المدينة : {{req.City}}\n               </p>\n      <p class=\" text-center\">\n       بيئة الاعلان : {{req.Advplace}}\n      </p>\n      <p class=\" text-center\">\n            نوع الاعلان : {{req.AdvType}}\n           </p>\n           <p class=\" text-center\">\n                تاريخ بداية الاعلان : {{req.StartDate}}\n               </p>\n               <p class=\" text-center\">\n                    تاريخ نهاية الاعلان : {{req.FinishDate}}\n                   </p>\n                                              <p class=\"text-center\">\n                                    </p> </div>\n        \n        </section>\n  \n        <section id=\"content3\" class=\"tab-content\">\n            <div *ngFor=\"let req of userrequestesPaid\" class=\"card\">\n                \n           \n          <h1  class=\"head text-center\">بيانات الشركة</h1>\n          <p class=\" text-center\">\n<p class=\" text-center\">{{req.CompanyName}} : اسم الشركة </p>\n<p class=\" text-center\">{{req.CompanyAddress}} : عنوان الشركة </p>\n<p class=\" text-center\">{{req.CompanyType}} : نشاط الشركة </p>\n<p class=\" text-center\">{{req.Email}} : البريد الالكتروني </p>\n<p class=\" text-center\">{{req.PhoneNum}} : رقم الجوال للتواصل </p>\n<hr>\n<h1 class=\" text-center\">  بيانات الاعلان المطلوب</h1>\n          <p class=\" text-center\">\n              المدينة : {{req.City}}\n               </p>\n      <p class=\" text-center\">\n       بيئة الاعلان : {{req.Advplace}}\n      </p>\n      <p class=\" text-center\">\n            نوع الاعلان : {{req.AdvType}}\n           </p>\n           <p class=\" text-center\">\n                تاريخ بداية الاعلان : {{req.StartDate}}\n               </p>\n               <p class=\" text-center\">\n                    تاريخ نهاية الاعلان : {{req.FinishDate}}\n                   </p>\n                                              <p class=\"text-center\">\n                                    </p> </div>\n        \n        </section>\n  \n     \n  \n      </div>\n\n\n\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-request/user-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRequestComponent = (function () {
    function UserRequestComponent(AdvspaceService, _firebaseAuth) {
        this.AdvspaceService = AdvspaceService;
        this._firebaseAuth = _firebaseAuth;
        this.ticks = 0;
        this.minutesDisplay = 0;
        this.hoursDisplay = 0;
        this.secondsDisplay = 0;
    }
    UserRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = new Date;
        this.startTimer();
        this.AdvspaceService.getrequestes().subscribe(function (data) {
            _this.requestes = data;
            console.log(_this._firebaseAuth.auth.currentUser.uid);
            _this.userrequestesWaiting = _this.requestes.filter(function (res) {
                return res.RequestState === "Waiting";
            });
            _this.userrequestesCancel = _this.requestes.filter(function (res) {
                return res.RequestState === "Cancel";
            });
            _this.userrequestesAccepted = _this.requestes.filter(function (res) {
                return res.RequestState === "Accepted";
            });
            _this.userrequestesPaid = _this.requestes.filter(function (res) {
                return res.RequestState === "Paid";
            });
        });
    };
    UserRequestComponent.prototype.UpdateRquestToAccepted = function (RequestId) {
        var _this = this;
        var datenow = new Date();
        var month = datenow.getMonth() + 1;
        var day = datenow.getDate();
        var year = datenow.getFullYear();
        this.DateAccepted = "" + datenow.getDate() + "-" + month + "-" + datenow.getFullYear() + "";
        this.AdvspaceService.UpdateRquestToAccepted(RequestId, this.DateAccepted, day, month, year).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    UserRequestComponent.prototype.startTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].timer(1, 1000);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = t;
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
            _this.hoursDisplay = _this.getHours(_this.ticks);
        });
    };
    UserRequestComponent.prototype.setFormData = function () {
        this.sub.unsubscribe();
    };
    UserRequestComponent.prototype.getSeconds = function (ticks) {
        return this.pad(ticks % 60);
    };
    UserRequestComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    };
    UserRequestComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 60) / 60));
    };
    UserRequestComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    return UserRequestComponent;
}());
UserRequestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-request',
        template: __webpack_require__("../../../../../src/app/user-request/user-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-request/user-request.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], UserRequestComponent);

var _a, _b;
//# sourceMappingURL=user-request.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"card\"  style=\"color:black\">\n            <div class=\"content\">\n          <form #form=\"ngForm\" (ngSubmit)=\"updateuserstate(type.value)\">\n                    \n      <div class=\"form-group\" >\n          <label for=\"validationDefault03\" >اسم الشركة</label>\n        <select #city style=\"width:100%; height:30px;\" (change)=\"getid(city.value)\" >\n           \n          <option  *ngFor=\"let res of users;\">{{res.CompanyName}}</option>\n         \n        </select>\n        </div>\n        <div class=\"form-group\" >\n            <label for=\"validationDefault03\" >صلاحياته</label>\n          <select #type style=\"width:100%; height:30px;\" >\n            <option>Admin</option>\n            <option>Client</option>\n            <option>Partenr</option>\n          </select>\n          </div>\n                <button type=\"submit\"  class=\"btn btn-primary\">حفظ</button>\n                          </form>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/user-type/user-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserTypeComponent = (function () {
    function UserTypeComponent(AdvspaceService, _firebaseAuth, router) {
        this.AdvspaceService = AdvspaceService;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
    }
    UserTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AdvspaceService.getuser().subscribe(function (data) {
            _this.users = data;
        });
    };
    UserTypeComponent.prototype.getid = function (name) {
        this.SelectedUser = this.users.filter(function (res) {
            return res.CompanyName === name;
        });
    };
    UserTypeComponent.prototype.updateuserstate = function (type) {
        this.UserId = this.SelectedUser[0]._id.$oid;
        this.AdvspaceService.updateuserstate(this.UserId, type).subscribe(function (res) {
        });
    };
    return UserTypeComponent;
}());
UserTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-type',
        template: __webpack_require__("../../../../../src/app/user-type/user-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-type/user-type.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserTypeComponent);

var _a, _b, _c;
//# sourceMappingURL=user-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700);", ""]);

// module
exports.push([module.i, "/* written by riliwan balogun http://www.facebook.com/riliwan.rabo*/\r\n.board{\r\n    width: 100%;\r\nmargin: 60px auto;\r\nheight: 100%;\r\nbackground: #fff;\r\n/*box-shadow: 10px 10px #ccc,-10px 20px #ddd;*/\r\n}\r\n.board .nav-tabs {\r\n    position: relative;\r\n    /* border-bottom: 0; */\r\n    /* width: 80%; */\r\n    margin: 40px auto;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n\r\n.board > div.board-inner{\r\n    background: #fafafa url(http://subtlepatterns.com/patterns/geometry2.png);\r\n    background-size: 30%;\r\n}\r\n\r\np.narrow{\r\n    width: 60%;\r\n    margin: 10px auto;\r\n}\r\n\r\n.liner{\r\n    height: 2px;\r\n    background: #ddd;\r\n    position: absolute;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\r\n    color: #555555;\r\n    cursor: default;\r\n    /* background-color: #ffffff; */\r\n    border: 0;\r\n    border-bottom-color: transparent;\r\n    \r\n}\r\n\r\nspan.round-tabs{\r\n    width: 70px;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    display: inline-block;\r\n    border-radius: 100px;\r\n    background: white;\r\n    z-index: 2;\r\n    position: absolute;\r\n    left: 0;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    \r\n}\r\n\r\nspan.round-tabs.one{\r\n    color: rgb(34, 194, 34);border: 2px solid rgb(34, 194, 34);\r\n\r\n}\r\n\r\nli.active span.round-tabs.one{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: rgb(34, 194, 34);\r\n   \r\n}\r\n\r\nspan.round-tabs.two{\r\n    color: #febe29;border: 2px solid #febe29;\r\n    \r\n}\r\n\r\nli.active span.round-tabs.two{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #febe29;\r\n}\r\n\r\nspan.round-tabs.three{\r\n    color: #3e5e9a;border: 2px solid #3e5e9a;\r\n}\r\n\r\nli.active span.round-tabs.three{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #3e5e9a;\r\n}\r\n\r\nspan.round-tabs.four{\r\n    color: #f1685e;border: 2px solid #f1685e;\r\n}\r\n\r\nli.active span.round-tabs.four{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #f1685e;\r\n}\r\n\r\nspan.round-tabs.five{\r\n    color: #999;border: 2px solid #999;\r\n}\r\n\r\nli.active span.round-tabs.five{\r\n    background: #fff !important;\r\n    border: 2px solid #ddd;\r\n    color: #999;\r\n}\r\n\r\n.nav-tabs > li.active > a span.round-tabs{\r\n    background: #fafafa;\r\n}\r\n.nav-tabs > li {\r\n    width: 20%;\r\n}\r\n/*li.active:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n    opacity:0;\r\n    margin: 0 auto;\r\n    bottom: -2px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #fff;\r\n    z-index: 1;\r\n    transition:0.2s ease-in-out;\r\n}*/\r\n.nav-tabs > li:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n   opacity:0;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 5px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    transition:0.1s ease-in-out;\r\n    \r\n}\r\n.nav-tabs > li.active:after {\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 45%;\r\n   opacity:1;\r\n    margin: 0 auto;\r\n    bottom: 0px;\r\n    border: 10px solid transparent;\r\n    border-bottom-color: #ddd;\r\n    \r\n}\r\n.nav-tabs > li a{\r\n   width: 70px;\r\n   height: 70px;\r\n   margin: 20px auto;\r\n   border-radius: 100%;\r\n   padding: 0;\r\n}\r\n\r\n.nav-tabs > li a:hover{\r\n    background: transparent;\r\n}\r\n\r\n.tab-content{\r\n}\r\n.tab-pane{\r\n   position: relative;\r\npadding-top: 50px;\r\n}\r\n.tab-content .head{\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 25px;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n}\r\n.btn-outline-rounded{\r\n    padding: 10px 40px;\r\n    margin: 20px 0;\r\n    border: 2px solid transparent;\r\n    border-radius: 25px;\r\n}\r\n\r\n.btn.green{\r\n    background-color:#5cb85c;\r\n    /*border: 2px solid #5cb85c;*/\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n\r\n@media( max-width : 585px ){\r\n    \r\n    .board {\r\nwidth: 90%;\r\nheight:auto !important;\r\n}\r\n    span.round-tabs {\r\n        font-size:16px;\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height: 50px;\r\n    }\r\n    .tab-content .head{\r\n        font-size:20px;\r\n        }\r\n    .nav-tabs > li a {\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height:50px;\r\n}\r\n\r\n.nav-tabs > li.active:after {\r\ncontent: \" \";\r\nposition: absolute;\r\nleft: 35%;\r\n}\r\n\r\n.btn-outline-rounded {\r\n    padding:12px 20px;\r\n    }\r\n}\r\n.animated {\r\n    transition: height 0.2s;\r\n}\r\n\r\n.stars\r\n{\r\n    margin: 20px 0;\r\n    font-size: 24px;\r\n    color: #d17581;\r\n}\r\n\r\n\r\n.features_table h1{\r\n    font-size:25px !important;\r\n\t\r\n}\r\nli{\r\n    list-style:none;\r\n    }\r\nh1{\r\n     font-size:21px !important;\r\n    }    \r\n.features-table li {\r\n    background: #da9748 none repeat scroll 0 0;\r\n    border-bottom: 2px solid #e5a253;\r\n    color: #f1f1f1;\r\n    font-size: 16px;\r\n    padding: 15px 24px;\r\n}\r\n.features-table li:hover{\r\n\tbackground:  #e5a253;\r\n\tcursor:pointer;\r\n transition: all .35s;\r\n}\r\n.features-table-free li, .features-table-paid li {\r\n    background: #efefef none repeat scroll 0 0;\r\n    border-bottom: 2px solid #d4d4d4;\r\n\ttext-align:center;\r\n    padding: 16.4px 21px;\r\n\tcursor:pointer;\r\n}\r\n.features-table-free h1, .features-table-paid h1 {\r\n    text-align: center;\r\n}\r\n.features-table-free li:hover, .features-table-paid li:hover {\r\n    background: #dedede none repeat scroll 0 0;\r\n transition: all .35s;\r\n}\r\n.features_table h1 {\r\n    font-size: 23px !important;\r\n}\r\n.features-table h1, .features-table-free h1, .features-table-paid h1 {\r\n    background: #6b6b6b none repeat scroll 0 0;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 19px 21px;\r\n    text-transform: uppercase;\r\n}\r\n.features-table h1 {\r\n    border-top-left-radius: 20px;\r\n\ttext-align:center;\r\n}\r\n.features-table-paid h1 {\r\n    border-top-right-radius: 20px;\r\n}\r\n.features-table-free li {\r\n    border-right: 2px solid #d4d4d4;\r\n}\r\n\r\n.fa.fa-check {\r\n    color: #2cc14f;\r\n}\r\n.fa.fa-times {\r\n    color: #BA5340;\r\n}\r\n.fa{\r\n\tfont-size:30px;\r\n}\r\n.no-padding{\r\n\tpadding:0;\r\n}\r\nul{\r\n\tpadding:0;\r\n}\r\n\r\n.custab{\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n    margin: 5% 0;\r\n    box-shadow: 3px 3px 2px #ccc;\r\n    transition: 0.5s;\r\n    }\r\n.custab:hover{\r\n    box-shadow: 3px 3px 0px transparent;\r\n    transition: 0.5s;\r\n    }\r\n\r\n\r\n    .profile-data table tr {\r\n        background:#eee;\r\n    }\r\n    .profile-data table tr td:first-child {\r\n        width:200px;\r\n        background:#ff7f00;\r\n        border-left:4px solid #35415f;\r\n    }\r\n    .profile-data table tr:hover,\r\n    .profile-data table tr:hover td:first-child {\r\n        color:#fff;\r\n        background:#35415f;\r\n    }\r\n    \r\n.funkyradio div {\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .funkyradio label {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    border: 1px solid #D1D3D4;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty,\r\n  .funkyradio input[type=\"checkbox\"]:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label {\r\n    position: relative;\r\n    line-height: 2.5em;\r\n    text-indent: 3.25em;\r\n    margin-top: 2em;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:empty ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:empty ~ label:before {\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    content: '';\r\n    width: 2.5em;\r\n    background: #D1D3D4;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label {\r\n    color: #888;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:hover:not(:checked) ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:hover:not(:checked) ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #C2C2C2;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label {\r\n    color: #777;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:checked ~ label:before {\r\n    content: '\\2714';\r\n    text-indent: .9em;\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio input[type=\"radio\"]:focus ~ label:before,\r\n  .funkyradio input[type=\"checkbox\"]:focus ~ label:before {\r\n    box-shadow: 0 0 0 3px #999;\r\n  }\r\n  \r\n  .funkyradio-default input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-default input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #333;\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  .funkyradio-primary input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-primary input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n  }\r\n  \r\n  .funkyradio-success input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-success input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5207D0;\r\n  }\r\n  \r\n  .funkyradio-danger input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-danger input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n  }\r\n  \r\n  .funkyradio-warning input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-warning input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n  }\r\n  \r\n  .funkyradio-info input[type=\"radio\"]:checked ~ label:before,\r\n  .funkyradio-info input[type=\"checkbox\"]:checked ~ label:before {\r\n    color: #fff;\r\n    background-color: #5bc0de;\r\n  }\r\n\r\n  \r\n  *,\r\n  *:after,\r\n  *:before {\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  .clearfix:before,\r\n  .clearfix:after {\r\n      content: \" \";\r\n      display: table;\r\n  }\r\n  \r\n  .clearfix:after {\r\n      clear: both;\r\n  }\r\n  \r\n  body {\r\n      font-family: sans-serif;\r\n      background: #f6f9fa;\r\n  }\r\n  \r\n  h1 {\r\n      color: #ccc;\r\n      text-align: center;\r\n  }\r\n  \r\n  a {\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    outline: none;\r\n  }\r\n  \r\n  /*Fun begins*/\r\n  .tab_container {\r\n      width: 90%;\r\n      margin: 0 auto;\r\n      padding-top: 70px;\r\n      position: relative;\r\n  }\r\n  \r\n  input, section {\r\n    clear: both;\r\n    padding-top: 10px;\r\n    display: none;\r\n  }\r\n  label {\r\n    font-weight: 700;\r\n    font-size: 18px;\r\n    display: block;\r\n    float: left ;\r\n    width: 33.2%;\r\n    padding: 1.5em;\r\n    color: white;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    background: #FF8C1D;\r\n  }\r\n  \r\n  #tab1:checked ~ #content1,\r\n  #tab2:checked ~ #content2,\r\n  #tab3:checked ~ #content3,\r\n  #tab4:checked ~ #content4,\r\n  #tab5:checked ~ #content5 {\r\n    display: block;\r\n    padding: 20px;\r\n    background: #fff;\r\n    color: #999;\r\n    border-bottom: 2px solid #f0f0f0;\r\n  }\r\n  \r\n  .tab_container .tab-content p,\r\n  .tab_container .tab-content h3 {\r\n    -webkit-animation: fadeInScale 0.7s ease-in-out;\r\n    animation: fadeInScale 0.7s ease-in-out;\r\n  }\r\n  .tab_container .tab-content h3  {\r\n    text-align: center;\r\n  }\r\n  \r\n  .tab_container [id^=\"tab\"]:checked + label {\r\n    background: black;\r\n    box-shadow: inset 0 3px red;\r\n  }\r\n  \r\n  .tab_container [id^=\"tab\"]:checked + label .fa {\r\n    color: white;\r\n  }\r\n  \r\n  label .fa {\r\n    font-size: 1.3em;\r\n    margin: 0 0.4em 0 0;\r\n  }\r\n  \r\n  /*Media query*/\r\n  @media only screen and (max-width: 930px) {\r\n    label span {\r\n      font-size: 14px;\r\n    }\r\n    label .fa {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 768px) {\r\n    label span {\r\n      display: none;\r\n    }\r\n   \r\n    label .fa {\r\n      font-size: 16px;\r\n    }\r\n  \r\n    .tab_container {\r\n      width: 98%;\r\n    }\r\n  }\r\n  \r\n  /*Content Animation*/\r\n  @-webkit-keyframes fadeInScale {\r\n    0% {\r\n        -webkit-transform: scale(0.9);\r\n                transform: scale(0.9);\r\n        opacity: 0;\r\n    }\r\n    \r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n  }\r\n  @keyframes fadeInScale {\r\n    0% {\r\n        -webkit-transform: scale(0.9);\r\n                transform: scale(0.9);\r\n        opacity: 0;\r\n    }\r\n    \r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n  }\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n          <div class=\"container-fluid\">\n                <div class=\"row\">\n    \n\n    \n                        <div class=\"tab_container\">\n                                <input id=\"tab1\" type=\"radio\" name=\"tabs\" checked>\n                                <label for=\"tab1\" style=\"background:midnightblue;\"><i class=\"fa fa-pencil-square-o\"></i><span>تأكيد الحجز </span></label>\n                          \n                                <input id=\"tab2\" type=\"radio\" name=\"tabs\">\n                                <label for=\"tab2\" style=\"background: #F2610B;\"><i class=\"fa fa-pencil-square-o\"></i><span>قيد المراجعة</span></label>\n                          \n                                <input id=\"tab3\" type=\"radio\" name=\"tabs\">\n                                <label for=\"tab3\" style=\"background:midnightblue;\"><i class=\"fa fa-bar-chart-o\"></i><span>الموافق عليها</span></label>\n                          \n                          \n                                <section id=\"content1\" class=\"tab-content\">\n                                 \n                                        <div *ngFor=\"let req of userrequestesNotActive\" class=\"card\">\n                                                \n                                                                             \n                                                                              <h3 class=\"head text-center\">{{req.CompanyName}}<sup>™\n                                                                                  </sup> Profile</h3>\n                                                                                  <p class=\"narrow text-center\">\n                                                                                      المدينة : {{req.City}}\n                                                                                       </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                               بيئة الاعلان : {{req.Advplace}}\n                                                                              </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                                    نوع الاعلان : {{req.AdvType}}\n                                                                                   </p>\n                                                                                   <p class=\"narrow text-center\">\n                                                                                        تاريخ بداية الاعلان : {{req.StartDate}}\n                                                                                       </p>\n                                                                                       <p class=\"narrow text-center\">\n                                                                                            تاريخ نهاية الاعلان : {{req.FinishDate}}\n                                                                                           </p>\n                                                                              <p class=\"text-center\">\n                                                                        <a  (click)=\"UpdateRquestToWaiting(req._id.$oid)\" class=\"btn btn-success btn-outline-rounded green\">تاكيد الحجز <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-send\"></span></a>\n                                                                    </p> </div>\n                                \n                                </section>\n                          \n                                <section id=\"content2\" class=\"tab-content\">\n                                        <div *ngFor=\"let req of userrequestesWaiting\" class=\"card\">\n                                                \n                                                                             \n                                                                              <h3 class=\"head text-center\">{{req.CompanyName}}<sup>™\n                                                                                  </sup> Profile</h3>\n                                                                                  <p class=\"narrow text-center\">\n                                                                                      المدينة : {{req.City}}\n                                                                                       </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                               بيئة الاعلان : {{req.Advplace}}\n                                                                              </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                                    نوع الاعلان : {{req.AdvType}}\n                                                                                   </p>\n                                                                                   <p class=\"narrow text-center\">\n                                                                                        تاريخ بداية الاعلان : {{req.StartDate}}\n                                                                                       </p>\n                                                                                       <p class=\"narrow text-center\">\n                                                                                            تاريخ نهاية الاعلان : {{req.FinishDate}}\n                                                                                           </p>\n                                                                              <p class=\"text-center\">\n                                                                   \n                                                                          \n                                                                    </p>  \n                                                                     \n                                                                     </div>\n                                </section>\n                          \n                                <section id=\"content3\" class=\"tab-content\">\n                                        <div *ngFor=\"let req of userrequestesAcceptedFilterDate\" class=\"card\">\n                                                \n                                                                             \n                                                                              <h3 class=\"head text-center\">{{req.CompanyName}}<sup>™\n                                                                                  </sup> Profile</h3>\n                                                                                  <p class=\"narrow text-center\">\n                                                                                      المدينة : {{req.City}}\n                                                                                       </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                               بيئة الاعلان : {{req.Advplace}}\n                                                                              </p>\n                                                                              <p class=\"narrow text-center\">\n                                                                                    نوع الاعلان : {{req.AdvType}}\n                                                                                   </p>\n                                                                                   <p class=\"narrow text-center\">\n                                                                                        تاريخ بداية الاعلان : {{req.StartDate}}\n                                                                                       </p>\n                                                                                       <p class=\"narrow text-center\">\n                                                                                            تاريخ نهاية الاعلان : {{req.FinishDate}}\n                                                                                           </p>\n                                                                                          \n                                                                                           <div class=\"funkyradio\">\n                                                                                                \n                                                                                                    <div class=\"funkyradio-success\">\n                                                                                                        <input type=\"radio\" name=\"radio\"(change)=\"state()\" #radiovisit id=\"radio3\" />\n                                                                                                        <label  for=\"radio3\">اختيار تصميمي الخاص</label>\n                                                                                                    </div>\n                                                                                                    <div class=\"check-element animate-show-hide\" *ngIf=\"st\">\n                                                                                                            <div class=\"row\" style=\"text-align:center\">\n                                                                                                                    <div class=\"col-md-6 col-md-offset-3\">\n                                                                                                                  <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\n                                                                                                                    <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n                                                                                                                      role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n                                                                                                                      aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                                                                                                      [ngStyle]=\"{width:progress.percentage+'%'}\">\n                                                                                                                      {{progress.percentage}}%</div>\n                                                                                                                  </div>\n                                                                                                                  <label class=\"btn btn-default btn-file lblbrowse\" style=\" font-weight: 700;\n                                                                                                                  font-size: 15px;\n                                                                                                                  display: block;\n                                                                                                                  float: left ;\n                                                                                                                  width: 50%;\n                                                                                                                  padding: 1.5em;\n                                                                                                                  color: white;\n                                                                                                                  cursor: pointer;\n                                                                                                                  text-decoration: none;\n                                                                                                                  text-align: center;\n                                                                                                                  background: #F2610B;\"><input style=\"margin:0px;\" type=\"file\"\n                                                                                                                    (change)=\"selectFile($event)\">اختار التصميم من جهازك..</label>\n                                                                                                          \n                                                                                                                    \n                                                                                                                  \n                                                                                                                   \n                                                                                                                  <button class=\"btn btnUpload\" style=\"background-color: #F2610B;\n                                                                                                                  color:white;\n                                                                                                                  font-weight:  bold;\n                                                                                                                  width: 50%;\n                                                                                                                  height: 67px;\" [disabled]=\"!selectedFiles\"\n                                                                                                                    (click)=\"upload(req._id.$oid)\">رفع التصميم</button>\n                                                                                                               \n                                                                                                                    </div>\n                                                                                                                    \n                                                                                                                </div>\n                                                                                                          </div>\n        \n                                                                                                    \n                                                                                                    <div class=\"funkyradio-danger\">\n                                                                                                        <input type=\"radio\" name=\"radio\" (change)=\"state2()\" #radiocall id=\"radio4\" />\n                                                                                                        <label for=\"radio4\">طلب تصميم جديد</label>\n                                                                                                    </div>\n                                                                                                    <div class=\"check-element animate-show-hide\" *ngIf=\"st2\">\n                                                                                                     سيتم التواصل معك من مندوبنا للاتفاق على التصميم\n                                                                                                          </div>\n                                                                                               \n                                                                                                </div>\n                                                                              <p class=\"text-center\">\n                                                                                    <a (click)=\"deisgn()\" class=\"btn btn-success btn-outline-rounded green\" *ngIf=\"!deisgndone\">اتمام الطلب<span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-send\"></span></a>\n                                                                                    \n                                                                                    <a (click)=\"UpdateRquestToWaiting(req._id.$oid)\" class=\"btn btn-danger btn-outline-rounded \" *ngIf=\"deisgndone\">الدفع <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-send\"></span></a>\n                                                                              \n                                                                                </p>  \n                                                                                \n                                                                     </div>\n                                </section>\n                          \n                                <section id=\"content4\" class=\"tab-content\">\n                             \n                                </section>\n                          \n                                <section id=\"content5\" class=\"tab-content\">\n                                  <h3>Headline 5</h3>\n                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>\n                                      \n                                </section>\n                              </div>\n                        \n                        \n                        \n  \n    \n    </div>\n    \n    </div>\n  \n                       \n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__ = __webpack_require__("../../../../../src/app/advspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileupload__ = __webpack_require__("../../../../../src/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_file_service__ = __webpack_require__("../../../../../src/app/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = (function () {
    function UserComponent(router, AdvspaceService, _firebaseAuth, uploadService) {
        this.router = router;
        this.AdvspaceService = AdvspaceService;
        this._firebaseAuth = _firebaseAuth;
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
        this.t = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showreso = false;
        this.st = false;
        this.st2 = false;
        this.deisgndone = false;
        this.AdvspaceService.getrequestes().subscribe(function (data) {
            _this.requestes = data;
            _this.userrequestesNotActive = _this.requestes.filter(function (res) {
                return res.UserId === _this._firebaseAuth.auth.currentUser.uid && res.RequestState === "NotActive";
            });
            _this.userrequestesWaiting = _this.requestes.filter(function (res) {
                return res.UserId === _this._firebaseAuth.auth.currentUser.uid && res.RequestState === "Waiting";
            });
            _this.userrequestesCancel = _this.requestes.filter(function (res) {
                return res.UserId === _this._firebaseAuth.auth.currentUser.uid && res.RequestState === "Cancel";
            });
            _this.userrequestesAccepted = _this.requestes.filter(function (res) {
                return res.UserId === _this._firebaseAuth.auth.currentUser.uid && res.RequestState === "Accepted";
            });
            var datenow = new Date();
            var month = datenow.getMonth() + 1;
            var day = datenow.getDate() - 2;
            var year = datenow.getFullYear();
            _this.userrequestesAcceptedFilterDate = _this.userrequestesAccepted.filter(function (res) {
                return res.Year === year && res.Month === month && res.Day <= day;
            });
        });
        this.s = "s";
        //  if(!this.t){
        //       this.router.navigate(['home']);
        //  }
        this.tableData1 = {
            headerRow: ['Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', this.s, 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
    };
    UserComponent.prototype.UpdateRquestToWaiting = function (RequestId) {
        var _this = this;
        this.AdvspaceService.UpdateRquestToWaiting(RequestId).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    UserComponent.prototype.UpdateRquestToCancel = function (RequestId) {
        var _this = this;
        this.AdvspaceService.UpdateRquestToCancel(RequestId).subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    UserComponent.prototype.showresofalse = function () {
        this.showreso = false;
    };
    UserComponent.prototype.showresotrue = function () {
        this.showreso = true;
    };
    UserComponent.prototype.state = function () {
        this.st = true;
        this.st2 = false;
    };
    UserComponent.prototype.state2 = function () {
        this.st = false;
        this.st2 = true;
    };
    UserComponent.prototype.deisgn = function () {
        this.deisgndone = true;
    };
    UserComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UserComponent.prototype.upload = function (RequestId) {
        var file = this.selectedFiles.item(0);
        this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_4__fileupload__["a" /* FileUpload */](file);
        this.uploadService.pushFileToStorageClient(this.currentFileUpload, this.progress, RequestId);
        console.log(this.currentFileUpload);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-cmp',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_advspace_service__["a" /* AdvspaceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__upload_file_service__["a" /* UploadFileService */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

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
    production: false,
    firebase: {
        apiKey: "AIzaSyD40IVKTi9waZ5IC06uyt23dQMtmCD9Jo4",
        authDomain: "eventdesign-f6577.firebaseapp.com",
        databaseURL: "https://eventdesign-f6577.firebaseio.com",
        projectId: "eventdesign-f6577",
        storageBucket: "eventdesign-f6577.appspot.com",
        messagingSenderId: "176486602226"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());

//# sourceMappingURL=fileupload.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map