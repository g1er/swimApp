import {Component, OnInit} from '@angular/core';
import { SwmStartListService } from './swm-start-list.service';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import {map, filter, switchMap, take} from 'rxjs/operators';
import { Particips} from '../models/interfaces';

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent {

  participants: BehaviorSubject<Particips[]> = new BehaviorSubject([]);
  newParticipant: string = '';
  newDiscipline: string = '';
  addedParticipant: Particips;
  deletedParticipant: Particips;
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
    this.startListService.addNewApp(this.newParticipant, this.newDiscipline).pipe(
      switchMap((participant: Particips) => {
        this.addedParticipant = participant;
        return this.participants;
      }),
      take(1),
      map(participants => {
        const updatedParticipants = [...participants, this.addedParticipant];
        this.participants.next(updatedParticipants);
        this.newParticipant = '';
        this.newDiscipline = '';
        return updatedParticipants;
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

  deleteDiscipline(participant: any) {
    this.startListService.delDiscipline(participant).pipe(
      switchMap((participant: Particips) => {
        this.deletedParticipant = participant;
        return this.participants;
      }),
      take(1),
      map(participants => {
        const updatedParticipants = participants.filter(p => p.id !== participant.id);
        this.participants.next(updatedParticipants);
        }
      )
    )
    .subscribe((data) => {
    });
  }

}
