import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanAppliedListComponent } from './LoanAppliedList/Loan-Applied-list.component';
import { LoanBLService } from './Services/loan.bl.service';
import { LoanDlService } from './Services/loan.dl.service';
import { loginComponent } from './login/login.component';
import { LoanService } from './Services/loan-service';
import { LoanApplicationFormComponent } from './LoanApplicationForm/loan-application-form.component';
import { UserRegistrationComponent } from './registration/user-registration.component';

@NgModule({
  providers: [
    LoanBLService,
    LoanDlService,
    LoanService
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoanAppliedListComponent,
    loginComponent,
    LoanApplicationFormComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: loginComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'AppliedLoans', component: LoanAppliedListComponent },
      { path: 'Registration', component: UserRegistrationComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
