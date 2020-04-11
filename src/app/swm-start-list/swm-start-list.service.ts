import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class SwmStartListService {
    constructor(private http: Http) {}

    getParticipants() {
       return this.http.get('http://localhost:3000/participants');
    }
}