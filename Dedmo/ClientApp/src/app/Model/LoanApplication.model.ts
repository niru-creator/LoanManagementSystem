import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class LoanApplication {
    LoanApplicationId: number = 0;
    CustomerName: string = null;
    LoanAmount: number = null;
    ApplicationDate: string = null;
    LoanPeriod: number = null;
    Email: string = "";
    Contact: string = null;
    Status: string = "";
    CreatedOn: string = null;
    ModifiedBy: number = null;
    ModifiedOn: string = null;
    IsActive: boolean = true;
    UserId: number = null;
    Address: string = null;
    IsApprovedDisabled: boolean = false;
    IsRejectedDisabled: boolean = false;
    LoanValidator: FormGroup = null;
    constructor() {
        var _formBuilder = new FormBuilder();
        this.LoanValidator = _formBuilder.group({
            'CustomerName': ['', Validators.compose([Validators.required])],
            'LoanAmount': ['', Validators.compose([Validators.required, this.positiveNumberValdiator])],
            'LoanPeriod': ['', Validators.compose([Validators.required, this.positiveNumberValdiator])],
            'Email': ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'Contact': ['', Validators.compose([Validators.required])]
        });
    }
    public IsDirty(fieldName): boolean {
        if (fieldName == undefined)
            return this.LoanValidator.dirty;
        else
            return this.LoanValidator.controls[fieldName].dirty;
    }
    public IsValid(): boolean { if (this.LoanValidator.valid) { return true; } else { return false; } } public IsValidCheck(fieldName, validator): boolean {
        if (fieldName == undefined) {
            return this.LoanValidator.valid;
        }
        else
            return !(this.LoanValidator.hasError(validator, fieldName));
    }
    positiveNumberValdiator(control: FormControl): { [key: string]: boolean } {
        if (control) {
            if (control.value <= 0)
                return { 'positivenum': true };
        }
    }

}