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

  constructor(private startListService: SwmStartListService) {}


  loadParticipants(){

    this.startListService
    .getParticipants()
    .subscribe((participants: Particips[]) => {
      this.participants = participants;
    })
  }

}
