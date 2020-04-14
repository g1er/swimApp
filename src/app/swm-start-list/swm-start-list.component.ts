import { Component } from '@angular/core';
import { SwmStartListService } from './swm-start-list.service';

interface Particips{
  name: string;
  dicipline: string;
  lane: number;
}

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent {

  participants: Particips[] = [];
  newApplication: string = '';

  constructor(private startListService: SwmStartListService) {}


  loadParticipants(){

    this.startListService
    .getParticipants()
    .subscribe((participants: Particips[]) => {
      this.participants = participants;
    })
  }

  addParticipants() {
    this.startListService.addNewApp(this.newApplication)
      .subscribe((data => {
        console.log(data);
      }));
    this.newApplication = '';
  }

}
