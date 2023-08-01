import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Loan } from "../Model/Loan.model";
import { LoanApplication } from "../Model/LoanApplication.model";
import { User_Credential } from "../Model/User.model";

@Injectable()
export class LoanDlService {

    public options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    public optionJson = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    baseUrl: string;
    constructor(public http: HttpClient) {
        this.baseUrl = '/api/Loan';

    }
    public postLoanApplied(loanApplied: LoanApplication) {
        try {
            return this.http.post<any>(`${this.baseUrl}/LoanApplied`, loanApplied, this.optionJson);
        } catch (ex) {
            throw ex;
        }
    }
    public getUserList() {
        return this.http.get<any>(`${this.baseUrl}/UsersList`);
    }
    public getRoleByUserId(userId: number) {
        return this.http.get<any>(`${this.baseUrl}/RoleByUserId?UserId=${userId}`);
    }
    public getAllLoanApplications() {
        return this.http.get<any>(`${this.baseUrl}/LoanApplications`);
    }
    public updateApplicationStatus(UserId: number, LoanApplicationId: number) {
        try {
            return this.http.put<any>(`${this.baseUrl}/ApproveLoanApplication?UserId=${UserId}&LoanApplicationId=${LoanApplicationId}`, this.optionJson);
        }
        catch (ex) {
            throw ex;
        }
    }
    public rejectApplication(UserId: number, LoanApplicationId: number) {
        try {
            return this.http.put<any>(`${this.baseUrl}/RejectLoanApplication?UserId=${UserId}&LoanApplicationId=${LoanApplicationId}`, this.optionJson);
        } catch (ex) {
            throw ex;
        }
    }
    public getLoanApplicationByUserId(userId: number) {
        return this.http.get<any>(`${this.baseUrl}/LoanApplicationsByUserId?UserId=${userId}`);
    }
    public postUserRegistrationDetail(user: User_Credential) {
        try {
            return this.http.post<any>(`${this.baseUrl}/UserRegistration`, user);
        } catch (ex) {
            throw ex;
        }
    }
    public verifyUserCredential(user: User_Credential) {
        try {
            return this.http.post<any>(`${this.baseUrl}/UserAuthentication`, user);
        } catch (ex) {
            throw ex;
        }
    }
}