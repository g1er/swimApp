import { Component } from '@angular/core';
import { SwmStartListService } from './swm-start-list.service';

interface Particips{
  name: string;
  discipline: string;
  id: number;
}

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent {

  participants: Particips[] = [];
  newParticipant: string = '';
  newDiscipline: string = '';
  distances = [
    '50 butterfly',
    '100 butterfly',
    '200 butterfly',
    '50 backstroke',
    '100 backstroke',
    '200 backstroke',
    '50 breaststroke',
    '100 breaststroke',
    '200 breaststroke',
    '50 freestyle',
    '100 freestyle',
    '200 freestyle',
    '400 freestyle',
    '800 freestyle',
    '1500 freestyle',
    '200 IM',
    '400 IM'
  ]

  constructor(private startListService: SwmStartListService) {}


  loadParticipants(){

    this.startListService
    .getParticipants()
    .subscribe((participants: Particips[]) => {
      this.participants = participants;
    })
  }

  addParticipants() {
    this.startListService.addNewApp(this.newParticipant, this.newDiscipline)
      .subscribe((participant: Particips) => {
        this.participants.push(participant);
      });
    this.newParticipant = '';
    this.newDiscipline = '';
  }

  chooseDistance(){
    const num = Math.round(Math.random() * (this.distances.length-1));
    return this.distances[num];
  }

  setDiscipline(participant: Particips){
    this.startListService.setNewDiscipline(participant, this.chooseDistance())
    .subscribe((data) => {
      console.log(data);
    })
  }

  deleteDiscipline(participant: Particips){
    this.startListService.delDiscipline(participant)
    .subscribe((data) => {
      this.participants = this.participants.filter(p => p.id != participant.id);
    })
  }

}
