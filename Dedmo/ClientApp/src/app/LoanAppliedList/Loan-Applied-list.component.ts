import { Component, Input } from '@angular/core';
import { LoanBLService } from '../Services/loan.bl.service';
import { LoanApplication } from '../Model/LoanApplication.model';
import { ENUM_Role } from '../ENUM/shared_enum';

@Component({
  selector: 'app-loan-applied-list',
  templateUrl: './Loan-Applied-List.component.html'
})
export class LoanAppliedListComponent {

  loansApplied: Array<LoanApplication> = new Array<LoanApplication>();
  loanApplication: LoanApplication = new LoanApplication();

  //It receives data from its parent i.e. home component
  @Input("userRole")
  userRole: string = null;
  admin_enum: string = ENUM_Role.Admin;
  user: string = null;
  userId: number = null;
  isApproveButtonDisable: boolean = false;
  isRejectButtonDisable: boolean = false;
  constructor(public loanBLService: LoanBLService
  ) {
    this.getAllAppliedLoans();
    try {
      this.user = localStorage.getItem('UserId'); // To get the UserId of current logged-In User
      this.userId = parseInt(this.user);
    }
    catch (e) {
      alert(e.toString());
    }
  }
  public getAllAppliedLoans() {
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
}
