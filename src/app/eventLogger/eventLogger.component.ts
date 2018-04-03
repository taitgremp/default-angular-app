import {Component} from '@angular/core';

@Component({
  selector: 'app-event-logger',
  styles: [`
    .pastFive {
      color: white;
    }
  `],
  templateUrl: './eventLogger.component.html'
})

export class EventLoggerComponent {

  textHidden = true;
  btnClicks = [];
  pastFiveClicks = [];

  doEventLog() {
    this.textHidden = !this.textHidden;
    if (this.btnClicks.length < 5) {
      this.btnClicks.push(new Date());
    } else {
      this.pastFiveClicks.push(new Date());
    }
  }

  getColor() {
    return this.btnClicks.length > 4 ? 'blue' : 'white';
  }
}
