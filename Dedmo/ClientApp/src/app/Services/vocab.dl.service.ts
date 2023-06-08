import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vocabulary } from "../Model/Vocabulary.model";

@Injectable()
export class VocabularyDLService {

    public options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    public optionJson = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(public http: HttpClient) {

    }
    public PostVocabulary(data: Vocabulary) {
        try {
            return this.http.post<any>("/api/Vocabulary/PostVocabulary", data);
        } catch (ex) {
            throw ex;
        }
    }
    public GetVocabulary() {
        try {
            return this.http.get<any>("/api/Vocabulary/GetVocabularyList", this.optionJson);
        } catch (ex) {
            throw ex;
        }
    }
    public DeleteVocabulary(vocabulary: Vocabulary, index: number) {
        return this.http.post<any>("/api/Vocabulary/DeleteVocabulary?vocabulary=" + vocabulary, index);
    }


}