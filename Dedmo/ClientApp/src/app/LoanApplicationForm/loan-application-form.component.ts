import { Component, Input } from "@angular/core";
import { LoanApplication } from "../Model/LoanApplication.model";
import { LoanBLService } from "../Services/loan.bl.service";

@Component({
    selector: 'app-loan-application',
    templateUrl: './loan-application-form.component.html',
})
export class LoanApplicationFormComponent {
    loanApplication: LoanApplication = new LoanApplication();
    user: string;
    userId: number;
    @Input("userRole")
    userRole: string = null;
    showAppliedLoansStatus: boolean = false;
    constructor(public loanBlService: LoanBLService) {
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
                        this.loanApplication = new LoanApplication();
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
}