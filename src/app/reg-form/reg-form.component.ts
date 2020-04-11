import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  partName: string = "";
  partSwStyle: string = "";
  partDistance: any = "";
  maxPart: boolean = false;


  @Output() onAddParticipant = new EventEmitter<{name: string, swStyle: string, distance: number}>();

  register(){
    this.onAddParticipant.emit({
      name: this.partName,
      swStyle: this.partSwStyle,
      distance: this.partDistance
    })

    this.partName = "";
    this.partSwStyle = "";
    this.partDistance = "";
    // if (this.participants.length == 12) this.maxPart = true;
    // console.log(this.participants.length);

  }


  ngOnInit() {
  }

}
