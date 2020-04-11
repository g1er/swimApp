import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { of, throwError } from 'rxjs';
import { ResultsService } from '../../../services/results.service';

@Component({
  selector: 'app-swim-result',
  templateUrl: './swim-result.component.html',
  styleUrls: ['./swim-result.component.css']
})
export class SwimResultComponent implements OnInit {
  // private resultList: Observable<any>;
  public swimmers: any;
  @ViewChild('eventBtn') eventBtn;

  constructor(private resultsService: ResultsService) {}

  ngOnInit() {
    // this.resultsService.getResultList().subscribe( 
    //   results => {
    //     console.log(results);
    //     this.swimmers = results;
    //    } , 
    //   error => console.error(error),
    //   () => console.log('complete')
    // );

    // this.resultsService.getPublicApiResults().subscribe(
    //   results => {
    //     console.log(results);
    //    } , 
    //   error => console.error(error),
    //   () => console.log('complete')
    // );
    // вот здесь выдает сообщение что не удается найти имя Rx
    //console.log(Observable); 
  }

  // var btn = document.querySelector('button'); 

  //var evnt$ = fromEvent(btn, 'click');

  clickButtonEvent(btnElement) {
  
  console.log("this.eventBtn.nativeElement: ", this.eventBtn.nativeElement);
    console.log("button html element from clickButtonEvent: ", btnElement);
    let clickButtonEvnt$ = fromEvent(btnElement, 'click');
    clickButtonEvnt$.subscribe(function(e){
      console.log(e);
    });
  }

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log("button html element from HostListener: ", btn);
    let hostListenerEvent$ = fromEvent(btn, 'click');
    hostListenerEvent$.subscribe(function(e){
      console.log(e);
    });
  }

}

// RxJS practice block
var stream$ = Observable.create(function(observer){
  observer.next('One');

  setTimeout(function(){
    observer.next('After 5 sec.')
  }, 7000);

  setTimeout(function(){
    observer.error("What's happen?!")
  }, 4000);

  setTimeout(function(){
    observer.next('After 3 sec.')
  }, 3000);

  setTimeout(function(){
    observer.complete()
  }, 5500);

  observer.next('Two');
});

stream$
  .subscribe(
    function(data){
      console.log('Subscribe:', data);
    },
    function(error){
      console.log('Error:', error);
    },
    function(){
      console.log('Completed!');
    }
)

var btn = document.querySelector('button'); 

var evnt$ = fromEvent(btn, 'click');

// Проблемы начинаются после подписывания на событие через .subscribe
evnt$.subscribe(function(e){
  console.log(e);
  
})

