import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dual-slider',
  templateUrl: './dual-slider.component.html',
  styleUrls: ['./dual-slider.component.scss']
})
export class DualSliderComponent implements OnInit {

  public currentEventX;
  @Input()
  events: any[] = [1,2,3,4,5,6,7,8,9,10,11,13];
  public structuredEvents: any[];
  public eventPairCounter = 0;
  public currentEventsDisplay: any[];
  public currentEventsDom: any[] = [];
  public currentEventsDomCounter = 0;
  isEnterModeRight = false; isEnterModeLeft = false;

  constructor() { }

  
  ngOnInit() {
    if (document.body.clientWidth < 748){
      return this.structureEvents(1);
    }
    this.structureEvents(2);
  }

  structureEvents(payload){
    this.structuredEvents = this.events.reduce((acc, currentArrValue) => {
          acc.tArray.push(currentArrValue);
          acc.count += 1;

          if (acc.tArray.length % payload === 0 || acc.count === this.events.length){
            acc.sArray.push(acc.tArray);
            acc.tArray = [];
          }

          return acc;
          //always return accumulator
    }, {
      count: 0,
      sArray: [],
      tArray: []
    }).sArray;

    this.currentEventsDisplay = this.structuredEvents[this.eventPairCounter];
  }

  deduceEventDom(){

    if(document.body.clientWidth < 768){
      this.currentEventsDom.push(document.getElementsByClassName('event-wrapper')[this.currentEventsDomCounter]);
     this.eventDomCounter("INC");
   } else {
     this.currentEventsDom.push(document.getElementsByClassName('event-wrapper')[this.currentEventsDomCounter]);
     this.eventDomCounter("INC");
     if (this.structuredEvents[this.eventPairCounter][1]){
          this.currentEventsDom.push(document.getElementsByClassName('event-wrapper')[this.currentEventsDomCounter]);
          this.eventDomCounter("INC");
     }
     
   }

  }

  navRight(){

      if (this.eventPairCounter < this.structuredEvents.length - 1){
        this.deduceEventDom();
        this.currentEventsDom.forEach(e => {
          e.classList.remove('enterModeRight');
          e.classList.remove('enterModeLeft');
          e.classList.add('slideLeft');
        });

        this.eventPairCounter += 1;

        window.setTimeout(() => {
          this.currentEventsDisplay = this.structuredEvents[this.eventPairCounter];
          this.currentEventsDom.forEach(e => {
            e.classList.remove('slideLeft');
            this.isEnterModeLeft = true;
            this.isEnterModeRight = false;
          });
        }, 700);

        this.currentEventsDomCounter = 0;  
      }
          
  }


  navLeft(){
      if (this.eventPairCounter > 0){
        this.deduceEventDom();
        this.currentEventsDom.forEach(e => {
          e.classList.remove('enterModeRight');
          e.classList.remove('enterModeLeft');
          e.classList.add('slideRight');
        });
  
        this.eventPairCounter -= 1;
  
        window.setTimeout(() => {
          this.currentEventsDisplay = this.structuredEvents[this.eventPairCounter];
          this.currentEventsDom.forEach(e => {
            this.isEnterModeLeft = false;
            this.isEnterModeRight = true;
          });
        }, 700);
  
        this.currentEventsDomCounter = 0;
      }
  }


  eventDomCounter(type){
    switch(type){
      case "INC": {
        if (this.currentEventsDomCounter < this.events.length){
          this.currentEventsDomCounter += 1;
        }
        break;
      }
      case "DEC": {
        if (this.currentEventsDomCounter >= 0){
          this.currentEventsDomCounter -= 1;
        }
        break;
      }
    }
  }



  //DRY => dont repeat yourself
  deduceEvents(e){
    if(e.target.innerWidth < 768){
      this.structureEvents(1);
    } else {
      this.structureEvents(2);
    }   
  }


}
