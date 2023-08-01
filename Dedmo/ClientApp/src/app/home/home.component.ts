import { Component } from '@angular/core';
import { LoanBLService } from '../Services/loan.bl.service';
import { LoanService } from '../Services/loan-service';
import { Role } from '../Model/Role.model';
import { ENUM_Role } from '../ENUM/shared_enum';
import { User_Credential } from '../Model/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  client_enum: string = ENUM_Role.Client;
  admin_enum: string = ENUM_Role.Admin;
  user: User_Credential = new User_Credential();
  role: Role = new Role();
  constructor(public loanBlService: LoanBLService, public loanService: LoanService, public router: Router) {
  }
  ngOnInit() {
    this.user.UserName = this.loanService.UserName;
    this.role.RoleName = this.loanService.RoleName;
  }
  logOut() {
    this.router.navigate(["/"]);
    this.loanService.RoleName = null;
    this.loanService.UserName = null;
  }
}


