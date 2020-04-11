import { Component, OnInit } from '@angular/core';
import { SwmStartListService } from './swm-start-list.service';

@Component({
  selector: 'app-swm-start-list',
  templateUrl: './swm-start-list.component.html',
  styleUrls: ['./swm-start-list.component.css']
})
export class SwmStartListComponent implements OnInit {

  participants = [];

  // constructor(private startListService: SwmStartListService) {}

  ngOnInit() {
    // this.startListService
    // .getParticipants()
    // .subscribe((response) => {
    //   console.log(response);
    // });
  }

}
