import { Component } from "@angular/core";
import { User_Credential } from "../Model/User.model";
import { LoanBLService } from "../Services/loan.bl.service";
import { LoanService } from "../Services/loan-service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html'
})
export class UserRegistrationComponent {
    registration: User_Credential = new User_Credential();
    isInValid: boolean = false;
    SecondPassword: string = null;
    constructor(public loanBLService: LoanBLService, public loanService: LoanService, public router: Router
    ) { }
    SubmitRegistration() {
        if (!this.isInValid) {
            this.loanBLService.postUserRegistration(this.registration).subscribe(res => {
                if (res.Status === "OK") {
                    alert("Successfully Registered");
                    this.registration = new User_Credential();
                    this.SecondPassword = null;
                }
            });
        }
    }
    OnEnterSecondPassword() {
        if (this.SecondPassword !== this.registration.Password)
            this.isInValid = true;
        else
            this.isInValid = false;
    }

}