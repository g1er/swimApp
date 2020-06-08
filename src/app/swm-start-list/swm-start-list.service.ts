import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SwmStartListService {
    constructor(private http: HttpClient) {}

    getParticipants() {
       return this.http.get('http://localhost:3000/participants');
    }

    addNewApp(newParticipant: string, newDiscipline: string) {
        const data = {
            name: newParticipant,
            discipline: newDiscipline
        };
        return this.http.post('http://localhost:3000/participants', data);
    }

    setNewDiscipline(participant: any, discipline: string){
        participant.discipline = discipline;
        return this.http.put(`http://localhost:3000/participants/${participant.id}`, participant);
    }

    delDiscipline(participant: any){
        return this.http.delete(`http://localhost:3000/participants/${participant.id}`);
    }
}