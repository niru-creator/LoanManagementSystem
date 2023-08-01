import { Injectable } from "@angular/core";
import { LoanDlService } from "./loan.dl.service";
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { LoanApplication } from "../Model/LoanApplication.model";
import { User } from "oidc-client";
import { User_Credential } from "../Model/User.model";

@Injectable()
export class LoanBLService {

    constructor(public loanDlService: LoanDlService) {
        this.getUsersList()
    }
    public PostLoan(loanApplied: LoanApplication) {
        var loan = _.omit(loanApplied, ['LoanValidator']);
        return this.loanDlService.postLoanApplied(loan)
            .pipe(
                map(res => { return res }));
    }

    public getUsersList() {
        return this.loanDlService.getUserList().pipe(map((responseData) => {
            return responseData;
        }));
    }
    public getUserRoleByUserId(userId: number) {
        return this.loanDlService.getRoleByUserId(userId).pipe(map((responseData) => {
            return responseData;
        }));
    }
    public getAllLoansApplications() {
        return this.loanDlService.getAllLoanApplications().pipe(map((responseData) => {
            return responseData;
        }));
    }
    public approveApplication(UserId: number, LoanApplicationId: number) {
        return this.loanDlService.updateApplicationStatus(UserId, LoanApplicationId).pipe(map((responseData) => {
            return responseData;
        }));
    }
    public rejectApplication(UserId: number, LoanApplicationId: number) {
        return this.loanDlService.rejectApplication(UserId, LoanApplicationId).pipe(map((responseData) => {
            return responseData;
        }));
    }
    public getLoanApplicationByUserId(UserId: number) {
        return this.loanDlService.getLoanApplicationByUserId(UserId).pipe(map((responseData) => {
            return responseData;
        }));
    }
    public postUserRegistration(user: User_Credential) {
        var userDetail = _.omit(user, ['userValidator']);
        return this.loanDlService.postUserRegistrationDetail(userDetail)
            .pipe(
                map(res => { return res }));
    }
    public verifyUserCredential(user: User_Credential) {
        var userDetail = _.omit(user, ['userValidator']);
        return this.loanDlService.verifyUserCredential(userDetail)
            .pipe(
                map(res => { return res }));
    }
}