import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class User_Credential {
    public UserId: number = 0;
    public UserName: string = null;
    public Password: string = null;
    public Email: string = "";
    public CreatedBy: number = null;
    public CreatedOn: string = null;
    public ModifiedOn: string = null;
    public ModifiedBy: number = null;
    public IsActive: Boolean = true;
    public Contact: string = "";
    public Name: string = "";
    public Address: string = "";
    public userValidator: FormGroup = null;
    //Reactive Form Validation
    constructor() {
        var _formBuilder = new FormBuilder();
        this.userValidator = _formBuilder.group({
            'UserName': ['', Validators.compose([Validators.required])],
            'Password': ['', Validators.compose([Validators.required])],
            'Email': ['', Validators.compose([Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])]
        });
    }
    public IsDirty(fieldName): boolean {
        if (fieldName == undefined)
            return this.userValidator.dirty;
        else
            return this.userValidator.controls[fieldName].dirty;
    }
    public IsValid(): boolean { if (this.userValidator.valid) { return true; } else { return false; } } public IsValidCheck(fieldName, validator): boolean {
        if (fieldName == undefined) {
            return this.userValidator.valid;
        }
        else
            return !(this.userValidator.hasError(validator, fieldName));
    }
}