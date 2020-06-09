import {Component, OnInit} from '@angular/core';
import { SwmStartListService } from './swm-start-list.service';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
interface Particips {
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

  participants: BehaviorSubject<any> = new BehaviorSubject([]);
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


  loadParticipants() {
      this.startListService.getParticipants().pipe(
        map(res => {
          this.participants.next(res)
          return res;
        })
      ).subscribe();
  }


  addParticipants() {
    combineLatest(
      this.startListService.addNewApp(this.newParticipant, this.newDiscipline),
      this.participants
    ).pipe(
        map(([participant, participants]) => {
          const combineParticips = [...participants];
          combineParticips.push(participant);
          return combineParticips;
        }),
      map(participants => {
        this.participants.next(participants);
        this.newParticipant = '';
        this.newDiscipline = '';
        return participants;
      })
      ).subscribe();
  }

  chooseDistance(){
    const num = Math.round(Math.random() * (this.distances.length-1));
    return this.distances[num];
  }

  setDiscipline(participant: any){
    this.startListService.setNewDiscipline(participant, this.chooseDistance())
    .subscribe((data) => {
      console.log(data);
    })
  }

  // deleteDiscipline(participant: any) {
  //   this.startListService.delDiscipline(participant)
  //   .subscribe((data) => {
  //     this.participants = this.participants.filter(p => p.id != participant.id);
  //   })
  // }

}
