import { Component } from '@angular/core';

@Component({
  selector: 'app-swm',
  templateUrl: "./swm.component.html",
  styleUrls: ["./swm.component.css"]
})
export class SwmComponent {

  // addText = "";
  // addNewText(){
  //   this.addText = "Let competitions begin!";
  // }

  // textFieldValue = "";
  // onKeyUp(event){
  //   this.textFieldValue = event.target.value
  // }

  swimStyle = "";
  swimStyleStatus: boolean=false;

  chosenStyle() {
    this.swimStyleStatus = true;
    this.swimStyle = (<HTMLInputElement>document.getElementById("styleLine")).value;
    if (this.swimStyle == "") this.swimStyleStatus = false;
  }
  
  styleStatus: boolean = true;
  activeStyle: string = "";

  activeButton(event){
    this.activeStyle = event.target.value;
    if (this.activeStyle == "freestyle") this.styleStatus = false;
      else this.styleStatus = true;
  }


}
