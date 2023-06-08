import { Injectable } from "@angular/core";
import { VocabularyDLService } from "./vocab.dl.service";
import { map } from 'rxjs/operators';
import { Vocabulary } from "../Model/Vocabulary.model";
import * as _ from 'lodash';

@Injectable()
export class VocabularyBLService {

    constructor(public vocabDlService: VocabularyDLService) {

    }
    public PostVocabulary(data: Vocabulary) {
        var temp = _.omit(data, ['VocabularyValidator']);
        return this.vocabDlService.PostVocabulary(temp)
            .pipe(
                map(res => { return res }));
    }
    public GetVocabulary() {
        return this.vocabDlService.GetVocabulary().pipe(map((responseData) => {
            return responseData;
        }));
    }
    public DeleteVocabulary(vocabulary: Vocabulary, index: number) {
        var temp = _.omit(vocabulary, ['VocabularyValidator']);
        return this.vocabDlService.DeleteVocabulary(temp,index)
            .pipe(
                map(res => { return res }));
    }
}