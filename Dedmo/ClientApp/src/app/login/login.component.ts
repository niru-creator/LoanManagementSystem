import { Component } from "@angular/core";
import { LoanBLService } from "../Services/loan.bl.service";
import { User_Credential } from "../Model/User.model";
import { LoanService } from "../Services/loan-service";
import { Role } from "../Model/Role.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class loginComponent {
    users: Array<User_Credential> = new Array();
    user: User_Credential = new User_Credential();
    userCredential: User_Credential = new User_Credential();
    role: Role = new Role();

    constructor(public loanBlService: LoanBLService, public router: Router, public loanService: LoanService
    ) {
        this.getUsersList();
    }
    public getUsersList() {
        this.loanBlService.getUsersList().subscribe(res => {
            if (res.Status == 'OK') {
                this.users = res.Results;
                // console.log(this.loanService.LoanServiceNotification());
            }
        });
    }
    public PostLoginForm() {
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
        } else {
            this.displayErrorMessage("Invalid Credentials");
        }
    }
    // Helper function to display error messages
    private displayErrorMessage(message: string): void {
        alert(message);
    }
    UserRoleHandler(role: Role) {
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
    SetUserIdToLocalStorage(userDetail: User_Credential) {
        localStorage.setItem('UserId', userDetail.UserId.toString());
    }
}