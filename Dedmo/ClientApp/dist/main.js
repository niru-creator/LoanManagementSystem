(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoanApplicationForm/loan-application-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoanApplicationForm/loan-application-form.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h3>Apply For Loan</h3>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"OnClickAppliedLoanDetail()\">Applied Loan Details</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <!-- Reactive Form -->\r\n    <form [formGroup]=\"loanApplication.LoanValidator\">\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputName\">Name:<b class=\"color-red\">*</b></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"customer_name\" aria-describedby=\"customer\" placeholder=\"Name\" [(ngModel)]=\"loanApplication.CustomerName\" formControlName=\"CustomerName\">\r\n            <span style=\"color:red\" *ngIf=\"loanApplication.IsDirty('CustomerName')\" [hidden]=\"loanApplication.IsValidCheck('CustomerName','required')\"> Name is required</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail\">Email:<b class=\"color-red\">*</b></label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Email\" [(ngModel)]=\"loanApplication.Email\" formControlName=\"Email\">\r\n            <span style=\"color:red\" *ngIf=\"loanApplication.IsDirty('Email')\" [hidden]=\"loanApplication.IsValidCheck('Email','required')\"> Email is required</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputContact\">Contact:<b class=\"color-red\">*</b></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputContact\" placeholder=\"Contact\" [(ngModel)]=\"loanApplication.Contact\" formControlName=\"Contact\">\r\n            <span style=\"color:red\" *ngIf=\"loanApplication.IsDirty('Contact')\" [hidden]=\"loanApplication.IsValidCheck('Contact','required')\"> Contact is required</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputLoanAmount\">Loan Amount:<b class=\"color-red\">*</b></label>\r\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputLoanAmount\" placeholder=\"Loan Amount\" [(ngModel)]=\"loanApplication.LoanAmount\" formControlName=\"LoanAmount\">\r\n            <span style=\"color:red\" *ngIf=\"loanApplication.IsDirty('LoanAmount')\" [hidden]=\"loanApplication.IsValidCheck('LoanAmount','required')\"> Loan Amount is required</span>\r\n            <span class=\"color-red font-sm\" *ngIf=\"loanApplication.IsDirty('LoanAmount')\" [hidden]=\"loanApplication.IsValidCheck('LoanAmount','positivenum')\"> Loan Amount Should Not Be Negative</span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputLoanPeriod\">Loan Period (in Years):<b class=\"color-red\">*</b></label>\r\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputLoanPeriod\" placeholder=\"Loan Period\" [(ngModel)]=\"loanApplication.LoanPeriod\" formControlName=\"LoanPeriod\">\r\n            <span style=\"color:red\" *ngIf=\"loanApplication.IsDirty('LoanPeriod')\" [hidden]=\"loanApplication.IsValidCheck('LoanPeriod','required')\"> Loan Period is required</span>\r\n            <span class=\"color-red font-sm\" *ngIf=\"loanApplication.IsDirty('LoanPeriod')\" [hidden]=\"loanApplication.IsValidCheck('LoanPeriod','positivenum')\"> Loan Period Should Not Be Negative</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SubmitApplicationForm()\">Submit</button>\r\n    </form>\r\n</div>\r\n<app-loan-applied-list *ngIf=\"showAppliedLoansStatus\"></app-loan-applied-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoanAppliedList/Loan-Applied-List.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoanAppliedList/Loan-Applied-List.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Loan List</h1>\r\n<div>\r\n  <table class='table' aria-labelledby=\"tableLabel\">\r\n    <thead>\r\n      <tr>\r\n        <th>S.No.</th>\r\n        <th>Customer Name</th>\r\n        <th>Customer Address</th>\r\n        <th>Email</th>\r\n        <th>Loan Amount</th>\r\n        <th>Loan Period</th>\r\n        <th>Application Date</th>\r\n        <th>Loan Status</th>\r\n        <th *ngIf=\"userRole == admin_enum\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let loan of loansApplied;let i= index\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{loan.CustomerName}}</td>\r\n        <td>{{loan.Address}}</td>\r\n        <td>{{loan.Email}}</td>\r\n        <td>{{loan.LoanAmount}}</td>\r\n        <td>{{loan.LoanPeriod}}</td>\r\n        <td>{{loan.ApplicationDate | date:'yyyy-MM-dd'}}</td>\r\n        <td>{{loan.Status}}</td>\r\n        <td *ngIf=\"userRole == admin_enum\">\r\n          <button class=\"btn-primary\" (click)=\"Approve(loan)\" [disabled]=\"loan.IsApprovedDisabled\">Approve</button><br>\r\n          <button class=\"btn-danger\" (click)=\"Reject(loan)\" [disabled]=\"loan.IsRejectedDisabled\">Reject</button>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <!-- <app-nav-menu></app-nav-menu> -->\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loanService.RoleName == client_enum\">\r\n  <div class=\"Container\">\r\n    <br>\r\n    <h2>Welcome &nbsp;{{loanService.UserName}}</h2>\r\n    <br>\r\n    <app-loan-application [userRole]=\"loanService.RoleName\"></app-loan-application>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"loanService.RoleName == admin_enum\">\r\n  <div class=\"Container\">\r\n    <br>\r\n    <h2>Welcome &nbsp;{{loanService.UserName}}</h2>\r\n    <br>\r\n    <app-loan-applied-list [userRole]=\"loanService.RoleName\"></app-loan-applied-list>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\r\n<div>Login</div>\r\n<br />\r\n<div class=\"Container\">\r\n    <!-- Reactive Form -->\r\n    <form [formGroup]=\"user.userValidator\">\r\n        <div>\r\n            UserName:<b class=\"color-red\">*</b> <input type=\"text\" [(ngModel)]=\"user.UserName\" formControlName=\"UserName\">\r\n            <span style=\"color:red\" *ngIf=\"user.IsDirty('UserName')\" [hidden]=\"user.IsValidCheck('UserName','required')\"> UserName is required</span>\r\n        </div>\r\n        <br>\r\n        <div>\r\n            Password:<b class=\"color-red\">*</b> <input type=\"password\" [(ngModel)]=\"user.Password\" formControlName=\"Password\">\r\n            <span style=\"color:red\" *ngIf=\"user.IsDirty('Password')\" [hidden]=\"user.IsValidCheck('Password','required')\"> Password is required</span>\r\n        </div>\r\n        <br>\r\n        <input type=\"button\" class=\"btn btn-primary\" value=\"Submit\" (click)=\"PostLoginForm()\">\r\n    </form>\r\n</div>");

/***/ }),

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

/***/ "./src/app/ENUM/shared_enum.ts":
/*!*************************************!*\
  !*** ./src/app/ENUM/shared_enum.ts ***!
  \*************************************/
/*! exports provided: ENUM_Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENUM_Role", function() { return ENUM_Role; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ENUM_Role;
(function (ENUM_Role) {
    ENUM_Role["Client"] = "Client";
    ENUM_Role["Admin"] = "Admin";
})(ENUM_Role || (ENUM_Role = {}));


/***/ }),

/***/ "./src/app/LoanApplicationForm/loan-application-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/LoanApplicationForm/loan-application-form.component.ts ***!
  \************************************************************************/
/*! exports provided: LoanApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationFormComponent", function() { return LoanApplicationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Model_LoanApplication_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/LoanApplication.model */ "./src/app/Model/LoanApplication.model.ts");
/* harmony import */ var _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/loan.bl.service */ "./src/app/Services/loan.bl.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoanApplicationFormComponent = class LoanApplicationFormComponent {
    constructor(loanBlService) {
        this.loanBlService = loanBlService;
        this.loanApplication = new _Model_LoanApplication_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplication"]();
        this.userRole = null;
        this.showAppliedLoansStatus = false;
        try {
            this.user = localStorage.getItem('UserId'); // To get the UserId of current logged-In User
            this.userId = parseInt(this.user);
        }
        catch (e) {
            alert(e.toString());
        }
    }
    //event handling
    SubmitApplicationForm() {
        for (var i in this.loanApplication.LoanValidator.controls) {
            this.loanApplication.LoanValidator.controls[i].markAsDirty();
            this.loanApplication.LoanValidator.controls[i].updateValueAndValidity();
        }
        if (this.loanApplication.IsValidCheck(undefined, undefined)) {
            this.loanApplication.CreatedBy = this.userId;
            this.loanBlService.PostLoan(this.loanApplication)
                .subscribe(res => {
                if (res.Status == 'OK') {
                    alert('Loan Applied Successfully!');
                    this.loanApplication = new _Model_LoanApplication_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplication"]();
                    this.OnClickAppliedLoanDetail();
                }
                else {
                    alert('Sorry! Application Failed To Apply Loan, Try Again');
                }
            });
        }
    }
    //event handling
    OnClickAppliedLoanDetail() {
        this.showAppliedLoansStatus = true;
    }
};
LoanApplicationFormComponent.ctorParameters = () => [
    { type: _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_2__["LoanBLService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("userRole"),
    __metadata("design:type", String)
], LoanApplicationFormComponent.prototype, "userRole", void 0);
LoanApplicationFormComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loan-application',
        template: __importDefault(__webpack_require__(/*! raw-loader!./loan-application-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoanApplicationForm/loan-application-form.component.html")).default,
    }),
    __metadata("design:paramtypes", [_Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_2__["LoanBLService"]])
], LoanApplicationFormComponent);



/***/ }),

/***/ "./src/app/LoanAppliedList/Loan-Applied-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/LoanAppliedList/Loan-Applied-list.component.ts ***!
  \****************************************************************/
/*! exports provided: LoanAppliedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanAppliedListComponent", function() { return LoanAppliedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/loan.bl.service */ "./src/app/Services/loan.bl.service.ts");
/* harmony import */ var _Model_LoanApplication_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/LoanApplication.model */ "./src/app/Model/LoanApplication.model.ts");
/* harmony import */ var _ENUM_shared_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ENUM/shared_enum */ "./src/app/ENUM/shared_enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let LoanAppliedListComponent = class LoanAppliedListComponent {
    constructor(loanBLService) {
        this.loanBLService = loanBLService;
        this.loansApplied = new Array();
        this.loanApplication = new _Model_LoanApplication_model__WEBPACK_IMPORTED_MODULE_2__["LoanApplication"]();
        //It receives data from its parent i.e. home component
        this.userRole = null;
        this.admin_enum = _ENUM_shared_enum__WEBPACK_IMPORTED_MODULE_3__["ENUM_Role"].Admin;
        this.user = null;
        this.userId = null;
        this.isApproveButtonDisable = false;
        this.isRejectButtonDisable = false;
        this.getAllAppliedLoans();
        try {
            this.user = localStorage.getItem('UserId'); // To get the UserId of current logged-In User
            this.userId = parseInt(this.user);
        }
        catch (e) {
            alert(e.toString());
        }
    }
    getAllAppliedLoans() {
        this.loanBLService.getAllLoansApplications().subscribe((res) => {
            if (res.Status === 'OK') {
                this.loansApplied = res.Results;
                this.loansApplied = this.loansApplied.slice();
                this.loansApplied.forEach(loan => {
                    if (loan.Status == "Approved") {
                        loan.IsApprovedDisabled = true;
                        loan.IsRejectedDisabled = true;
                    }
                    else
                        loan.IsRejectedDisabled = true;
                });
            }
        });
    }
    //Event handling
    Reject($event) {
        this.loanBLService.rejectApplication(this.userId, $event.LoanApplicationId).subscribe((res) => {
            if (res.Status === 'OK') {
                this.isRejectButtonDisable = true;
                this.OnStatusChanged(res);
                alert("Successfully Rejected Loan");
            }
        });
    }
    Approve($event) {
        this.loanBLService.approveApplication(this.userId, $event.LoanApplicationId).subscribe((res) => {
            if (res.Status === 'OK') {
                this.isApproveButtonDisable = true;
                this.OnStatusChanged(res);
                alert("Successfully Approved Loan");
            }
            else
                alert("Failed To Approved Loan, Try Again!");
        });
    }
    //Code Reusability for handling the Status 
    OnStatusChanged(res) {
        if (res.Status === 'OK') {
            this.loanApplication = res.Results;
            this.loansApplied.forEach((loanApplication) => {
                if (loanApplication.LoanApplicationId === this.loanApplication.LoanApplicationId)
                    loanApplication.Status = this.loanApplication.Status;
                if (this.isApproveButtonDisable && this.loanApplication.Status == "Approved") {
                    loanApplication.IsApprovedDisabled = true;
                    loanApplication.IsRejectedDisabled = true;
                }
                if (this.isRejectButtonDisable && this.loanApplication.Status == "Rejected")
                    loanApplication.IsRejectedDisabled = true;
                if (this.loanApplication.Status == "InProgress") {
                    loanApplication.IsApprovedDisabled = false;
                    loanApplication.IsRejectedDisabled = false;
                }
            });
            this.loansApplied = this.loansApplied.slice();
        }
    }
};
LoanAppliedListComponent.ctorParameters = () => [
    { type: _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("userRole"),
    __metadata("design:type", String)
], LoanAppliedListComponent.prototype, "userRole", void 0);
LoanAppliedListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loan-applied-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Loan-Applied-List.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/LoanAppliedList/Loan-Applied-List.component.html")).default
    }),
    __metadata("design:paramtypes", [_Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"]])
], LoanAppliedListComponent);



/***/ }),

/***/ "./src/app/Model/LoanApplication.model.ts":
/*!************************************************!*\
  !*** ./src/app/Model/LoanApplication.model.ts ***!
  \************************************************/
/*! exports provided: LoanApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplication", function() { return LoanApplication; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class LoanApplication {
    constructor() {
        this.LoanApplicationId = 0;
        this.CustomerName = null;
        this.LoanAmount = null;
        this.ApplicationDate = null;
        this.LoanPeriod = null;
        this.Email = "";
        this.Contact = null;
        this.Status = "";
        this.CreatedBy = null;
        this.CreatedOn = null;
        this.ModifiedBy = null;
        this.ModifiedOn = null;
        this.IsActive = true;
        this.Address = null;
        this.IsApprovedDisabled = false;
        this.IsRejectedDisabled = false;
        this.LoanValidator = null;
        var _formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.LoanValidator = _formBuilder.group({
            'CustomerName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            'LoanAmount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.positiveNumberValdiator])],
            'LoanPeriod': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.positiveNumberValdiator])],
            'Email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            'Contact': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])]
        });
    }
    IsDirty(fieldName) {
        if (fieldName == undefined)
            return this.LoanValidator.dirty;
        else
            return this.LoanValidator.controls[fieldName].dirty;
    }
    IsValid() { if (this.LoanValidator.valid) {
        return true;
    }
    else {
        return false;
    } }
    IsValidCheck(fieldName, validator) {
        if (fieldName == undefined) {
            return this.LoanValidator.valid;
        }
        else
            return !(this.LoanValidator.hasError(validator, fieldName));
    }
    positiveNumberValdiator(control) {
        if (control) {
            if (control.value < 0)
                return { 'positivenum': true };
        }
    }
}


/***/ }),

/***/ "./src/app/Model/Role.model.ts":
/*!*************************************!*\
  !*** ./src/app/Model/Role.model.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Role {
    constructor() {
        this.RoleId = 0;
        this.RoleName = null;
        this.RoleDescription = null;
        this.IsSysAdmin = false;
        this.IsActive = true;
        this.CreatedBy = null;
        this.CreatedOn = null;
        this.ModifiedBy = null;
        this.ModifiedOn = null;
        this.RoleType = null;
        this.UserName = null;
    }
}


/***/ }),

/***/ "./src/app/Model/User.model.ts":
/*!*************************************!*\
  !*** ./src/app/Model/User.model.ts ***!
  \*************************************/
/*! exports provided: User_Credential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Credential", function() { return User_Credential; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class User_Credential {
    //Reactive Form Validation
    constructor() {
        this.UserId = 0;
        this.UserName = null;
        this.Password = null;
        this.Email = null;
        this.CreatedBy = null;
        this.CreatedOn = null;
        this.ModifiedOn = null;
        this.ModifiedBy = null;
        this.IsActive = true;
        this.Contact = null;
        this.Name = null;
        this.Address = null;
        this.userValidator = null;
        var _formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        this.userValidator = _formBuilder.group({
            'UserName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            'Password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
        });
    }
    IsDirty(fieldName) {
        if (fieldName == undefined)
            return this.userValidator.dirty;
        else
            return this.userValidator.controls[fieldName].dirty;
    }
    IsValid() { if (this.userValidator.valid) {
        return true;
    }
    else {
        return false;
    } }
    IsValidCheck(fieldName, validator) {
        if (fieldName == undefined) {
            return this.userValidator.valid;
        }
        else
            return !(this.userValidator.hasError(validator, fieldName));
    }
}


/***/ }),

/***/ "./src/app/Services/loan-service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/loan-service.ts ***!
  \******************************************/
/*! exports provided: LoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanService", function() { return LoanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

// import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
let LoanService = class LoanService {
    constructor() {
        // public hubConnectionBuilder: HubConnection;
        this.offers = [];
        this.RoleName = null;
        this.UserName = null;
    }
};
LoanService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LoanService);



/***/ }),

/***/ "./src/app/Services/loan.bl.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/loan.bl.service.ts ***!
  \*********************************************/
/*! exports provided: LoanBLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanBLService", function() { return LoanBLService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loan_dl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan.dl.service */ "./src/app/Services/loan.dl.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let LoanBLService = class LoanBLService {
    constructor(loanDlService) {
        this.loanDlService = loanDlService;
        this.getUsersList();
    }
    PostLoan(loanApplied) {
        var loan = lodash__WEBPACK_IMPORTED_MODULE_3__["omit"](loanApplied, ['LoanValidator']);
        return this.loanDlService.postLoanApplied(loan)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => { return res; }));
    }
    getUsersList() {
        return this.loanDlService.getUserList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            return responseData;
        }));
    }
    getUserRoleByUserId(userId) {
        return this.loanDlService.getRoleByUserId(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            return responseData;
        }));
    }
    getAllLoansApplications() {
        return this.loanDlService.getAllLoanApplications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            return responseData;
        }));
    }
    approveApplication(UserId, LoanApplicationId) {
        return this.loanDlService.updateApplicationStatus(UserId, LoanApplicationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            return responseData;
        }));
    }
    rejectApplication(UserId, LoanApplicationId) {
        return this.loanDlService.rejectApplication(UserId, LoanApplicationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((responseData) => {
            return responseData;
        }));
    }
};
LoanBLService.ctorParameters = () => [
    { type: _loan_dl_service__WEBPACK_IMPORTED_MODULE_1__["LoanDlService"] }
];
LoanBLService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_loan_dl_service__WEBPACK_IMPORTED_MODULE_1__["LoanDlService"]])
], LoanBLService);



/***/ }),

/***/ "./src/app/Services/loan.dl.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/loan.dl.service.ts ***!
  \*********************************************/
/*! exports provided: LoanDlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDlService", function() { return LoanDlService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let LoanDlService = class LoanDlService {
    constructor(http) {
        this.http = http;
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
        this.optionJson = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.baseUrl = '/api/Loan';
    }
    postLoanApplied(loanApplied) {
        try {
            return this.http.post(`${this.baseUrl}/LoanApplied`, loanApplied, this.optionJson);
        }
        catch (ex) {
            throw ex;
        }
    }
    getUserList() {
        return this.http.get(`${this.baseUrl}/UsersList`);
    }
    getRoleByUserId(userId) {
        return this.http.get(`${this.baseUrl}/RoleByUserId?UserId=${userId}`);
    }
    getAllLoanApplications() {
        return this.http.get(`${this.baseUrl}/LoanApplications`);
    }
    updateApplicationStatus(UserId, LoanApplicationId) {
        try {
            return this.http.put(`${this.baseUrl}/ApproveLoanApplication?UserId=${UserId}&LoanApplicationId=${LoanApplicationId}`, this.optionJson);
        }
        catch (ex) {
            throw ex;
        }
    }
    rejectApplication(UserId, LoanApplicationId) {
        try {
            return this.http.put(`${this.baseUrl}/RejectLoanApplication?UserId=${UserId}&LoanApplicationId=${LoanApplicationId}`, this.optionJson);
        }
        catch (ex) {
            throw ex;
        }
    }
};
LoanDlService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
LoanDlService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], LoanDlService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
        this.offers = [];
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _LoanAppliedList_Loan_Applied_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoanAppliedList/Loan-Applied-list.component */ "./src/app/LoanAppliedList/Loan-Applied-list.component.ts");
/* harmony import */ var _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/loan.bl.service */ "./src/app/Services/loan.bl.service.ts");
/* harmony import */ var _Services_loan_dl_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/loan.dl.service */ "./src/app/Services/loan.dl.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _Services_loan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/loan-service */ "./src/app/Services/loan-service.ts");
/* harmony import */ var _LoanApplicationForm_loan_application_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoanApplicationForm/loan-application-form.component */ "./src/app/LoanApplicationForm/loan-application-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_8__["LoanBLService"],
            _Services_loan_dl_service__WEBPACK_IMPORTED_MODULE_9__["LoanDlService"],
            _Services_loan_service__WEBPACK_IMPORTED_MODULE_11__["LoanService"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _LoanAppliedList_Loan_Applied_list_component__WEBPACK_IMPORTED_MODULE_7__["LoanAppliedListComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["loginComponent"],
            _LoanApplicationForm_loan_application_form_component__WEBPACK_IMPORTED_MODULE_12__["LoanApplicationFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["loginComponent"], pathMatch: 'full' },
                { path: 'Home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
            ])
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/loan.bl.service */ "./src/app/Services/loan.bl.service.ts");
/* harmony import */ var _Services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/loan-service */ "./src/app/Services/loan-service.ts");
/* harmony import */ var _Model_Role_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Role.model */ "./src/app/Model/Role.model.ts");
/* harmony import */ var _ENUM_shared_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ENUM/shared_enum */ "./src/app/ENUM/shared_enum.ts");
/* harmony import */ var _Model_User_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Model/User.model */ "./src/app/Model/User.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let HomeComponent = class HomeComponent {
    constructor(loanBlService, loanService) {
        this.loanBlService = loanBlService;
        this.loanService = loanService;
        this.client_enum = _ENUM_shared_enum__WEBPACK_IMPORTED_MODULE_4__["ENUM_Role"].Client;
        this.admin_enum = _ENUM_shared_enum__WEBPACK_IMPORTED_MODULE_4__["ENUM_Role"].Admin;
        this.user = new _Model_User_model__WEBPACK_IMPORTED_MODULE_5__["User_Credential"]();
        this.role = new _Model_Role_model__WEBPACK_IMPORTED_MODULE_3__["Role"]();
    }
    ngOnInit() {
        this.user.UserName = this.loanService.UserName;
        this.role.RoleName = this.loanService.RoleName;
    }
    ngOnDestroy() {
        this.loanService.RoleName = null;
        this.loanService.UserName = null;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"] },
    { type: _Services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    }),
    __metadata("design:paramtypes", [_Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"], _Services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/loan.bl.service */ "./src/app/Services/loan.bl.service.ts");
/* harmony import */ var _Model_User_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/User.model */ "./src/app/Model/User.model.ts");
/* harmony import */ var _Services_loan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/loan-service */ "./src/app/Services/loan-service.ts");
/* harmony import */ var _Model_Role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Role.model */ "./src/app/Model/Role.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let loginComponent = class loginComponent {
    constructor(loanBlService, router, loanService) {
        this.loanBlService = loanBlService;
        this.router = router;
        this.loanService = loanService;
        this.users = new Array();
        this.user = new _Model_User_model__WEBPACK_IMPORTED_MODULE_2__["User_Credential"]();
        this.userCredential = new _Model_User_model__WEBPACK_IMPORTED_MODULE_2__["User_Credential"]();
        this.role = new _Model_Role_model__WEBPACK_IMPORTED_MODULE_4__["Role"]();
        this.getUsersList();
    }
    getUsersList() {
        this.loanBlService.getUsersList().subscribe(res => {
            if (res.Status == 'OK') {
                this.users = res.Results;
                // console.log(this.loanService.LoanServiceNotification());
            }
        });
    }
    PostLoginForm() {
        for (var i in this.user.userValidator.controls) {
            this.user.userValidator.controls[i].markAsDirty();
            this.user.userValidator.controls[i].updateValueAndValidity();
        }
        if (!this.user.IsValidCheck(undefined, undefined)) {
            return;
        }
        const { UserName, Password } = this.user;
        if (!UserName || !Password) {
            this.displayErrorMessage("Please Enter UserName and Password");
            return;
        }
        const trimmedUserName = UserName.trim();
        const trimmedPassword = Password.trim();
        if (!trimmedUserName || !trimmedPassword) {
            this.displayErrorMessage("Cannot Enter White Space");
            return;
        }
        if (!this.users) {
            this.displayErrorMessage("Invalid Credentials");
            return;
        }
        const userCredential = this.users.find((e) => e.UserName === trimmedUserName && e.Password === trimmedPassword);
        if (userCredential) {
            this.loanBlService.getUserRoleByUserId(userCredential.UserId).subscribe((res) => {
                if (res.Status === 'OK') {
                    this.role = res.Results;
                    this.SetUserIdToLocalStorage(userCredential);
                    this.UserRoleHandler(this.role);
                }
            });
        }
        else {
            this.displayErrorMessage("Invalid Credentials");
        }
    }
    // Helper function to display error messages
    displayErrorMessage(message) {
        alert(message);
    }
    UserRoleHandler(role) {
        this.loanService.RoleName = role.RoleName;
        this.loanService.UserName = role.UserName;
        if (role.RoleName == "Admin") {
            this.router.navigate(["/Home"]);
        }
        if (role.RoleName == "Client") {
            this.router.navigate(["/Home"]);
        }
    }
    //     To get the UserId of current LoggedIn User without each time accessing the userid So this method 
    //     is called each time when user is loggedin and can be accessed from any component
    SetUserIdToLocalStorage(userDetail) {
        localStorage.setItem('UserId', userDetail.UserId.toString());
    }
};
loginComponent.ctorParameters = () => [
    { type: _Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"] }
];
loginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    }),
    __metadata("design:paramtypes", [_Services_loan_bl_service__WEBPACK_IMPORTED_MODULE_1__["LoanBLService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _Services_loan_service__WEBPACK_IMPORTED_MODULE_3__["LoanService"]])
], loginComponent);



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\niru0\source\repos\LoanManagementSystem\Dedmo\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map