import { Component } from '@angular/core';
import { Vocabulary } from '../Model/Vocabulary.model';
import { VocabularyBLService } from '../Services/vocab.bl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public vocabBlService: VocabularyBLService) {

  }
  Vocabulary: Vocabulary = new Vocabulary();

  PostVocabulary() {
    for (var i in this.Vocabulary.VocabularyValidator.controls) {
      this.Vocabulary.VocabularyValidator.controls[i].markAsDirty();
      this.Vocabulary.VocabularyValidator.controls[i].updateValueAndValidity();
    }
    if (this.Vocabulary.IsValidCheck(undefined, undefined)) {
      this.vocabBlService.PostVocabulary(this.Vocabulary)
        .subscribe(res => {
          if (res.Status == 'OK') {
            console.log(Vocabulary);
            alert('Inserted');
            this.Vocabulary = new Vocabulary();
          }
          else {
            alert('Not Inserted');
          }
        });
    }
  }

}


