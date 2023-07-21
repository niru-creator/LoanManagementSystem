import { Component } from '@angular/core';
import { LoanBLService } from '../Services/loan.bl.service';
import { LoanService } from '../Services/loan-service';
import { Role } from '../Model/Role.model';
import { ENUM_Role } from '../ENUM/shared_enum';
import { User_Credential } from '../Model/User.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  client_enum: string = ENUM_Role.Client;
  admin_enum: string = ENUM_Role.Admin;
  user: User_Credential = new User_Credential();
  role: Role = new Role();
  constructor(public loanBlService: LoanBLService, public loanService: LoanService) {

  }
  ngOnInit() {
    this.user.UserName = this.loanService.UserName;
    this.role.RoleName = this.loanService.RoleName;
  }
  ngOnDestroy() {
    this.loanService.RoleName = null;
    this.loanService.UserName = null;
  }
  // PostLoan() {
  //   for (var i in this.loanData.LoanValidator.controls) {
  //     this.loanData.LoanValidator.controls[i].markAsDirty();
  //     this.loanData.LoanValidator.controls[i].updateValueAndValidity();
  //   }
  //   if (this.loanData.IsValidCheck(undefined, undefined)) {
  //     this.loanBlService.PostLoan(this.loanData)
  //       .subscribe(res => {
  //         if (res.Status == 'OK') {
  //           alert('Loan Applied Successfully');
  //           this.loanData = new Loan();
  //         }
  //         else {
  //           alert('Sorry! Loan Applied failed');
  //         }
  //       });
  //   }
  // }

}


