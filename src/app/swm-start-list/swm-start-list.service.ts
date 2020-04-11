import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SwmStartListService {
    constructor(private http: HttpClient) {}

    getParticipants() {
       return this.http.get('http://localhost:3000/participants');
    }
}