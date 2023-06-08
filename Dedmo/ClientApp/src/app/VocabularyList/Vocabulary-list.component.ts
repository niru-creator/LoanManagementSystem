import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vocabulary } from '../Model/Vocabulary.model';
import { VocabularyBLService } from '../Services/vocab.bl.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './Vocabulary-list.component.html'
})
export class VocabularyListComponent {
  constructor(public vocabBlService: VocabularyBLService
  ) {
    this.LoadVocabularyList();
  }
  vocab: Array<Vocabulary> = new Array<Vocabulary>();
  ShowEditPage:boolean = false;
  LoadVocabularyList() {
    this.vocabBlService.GetVocabulary()
      .subscribe(res => {
        if (res.Status == "OK") {
          this.vocab = res.Results;
        }
        else {
          alert("No Data Available");
        }
      });
  }
  Edit(vocabulary:Vocabulary,index:number){ 

    this.ShowEditPage = true;

  }
  Delete(vocabulary:Vocabulary,index:number){
    
    this.vocabBlService.DeleteVocabulary(vocabulary,index)
      .subscribe(res => {
        if (res.Status == "OK") {
          console.log("vocabulary is deleted")
        }
        else {
          alert("No Data Deleted");
        }
      });

  }
  }
