import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  carStatus: string = '';

  showCarStatus(){
    this.carStatus = "Out of stock!";
  }

  someText: string = '';

  repeatText(event: Event){
    this.someText = (<HTMLInputElement>event.target).value;
  }

  constructor() {}

  ngOnInit() {
  }

}
