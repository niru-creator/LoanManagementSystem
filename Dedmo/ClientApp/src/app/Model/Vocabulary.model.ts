import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Vocabulary {
    Word: string = "";
    Meaning: string = "";
    Antonyms: string = "";
    Synonyms: string = "";
    MeaningInNepali: string = "";

    public VocabularyValidator: FormGroup = null;
    public COAId: number = 0;
    constructor() {
        var _formBuilder = new FormBuilder();
        this.VocabularyValidator = _formBuilder.group({
            'Word': ['', Validators.compose([Validators.required])],
            'Meaning': ['', Validators.compose([Validators.required])],
        });
    }
    public IsDirty(fieldName): boolean {
        if (fieldName == undefined)
            return this.VocabularyValidator.dirty;
        else
            return this.VocabularyValidator.controls[fieldName].dirty;
    }
    public IsValid(): boolean { if (this.VocabularyValidator.valid) { return true; } else { return false; } } public IsValidCheck(fieldName, validator): boolean {
        if (fieldName == undefined) {
            return this.VocabularyValidator.valid;
        }
        else
            return !(this.VocabularyValidator.hasError(validator, fieldName));
    }

}