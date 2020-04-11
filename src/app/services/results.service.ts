import { Injectable } from '@angular/core';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Results {
  swimmerName: string;
}

@Injectable()
export class ResultsService {

  public results: BehaviorSubject<Results[]> = new BehaviorSubject([{swimmerName: 'Michael'},{ swimmerName: 'Steve'}]);


  constructor(private http: HttpClient) { }

  getResultList(): BehaviorSubject<Results[]> {
    
    setTimeout(() => {
      this.results.next([{swimmerName: 'Andrey'},{ swimmerName: 'Mariya'}]);
    }, 5000);

    setTimeout(() => {
      this.results.next([{swimmerName: 'Bob'},{ swimmerName: 'Roy'}]);
    }, 10000);

    return this.results;
  }

  getPublicApiResults() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'pass-1233'
      })
    };

    return this.http.get('https://api.schooldigger.com/v1/districts', httpOptions);
  }
}
