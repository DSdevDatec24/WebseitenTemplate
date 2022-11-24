import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title = 'WebseitenTemplate';

  divComponentHigh: number = 0;
  index: number = 0;
  switch: boolean = true;

  @Input() selectedIndex: number | undefined;
  @Output() switchTab: EventEmitter<number> = new EventEmitter<number>();

  switchToOverview(){
    this.switch = !this.switch;
    console.log(this.switch);
  }

  switchOnMyTab(event: number){
    this.index = event;
  }
}
