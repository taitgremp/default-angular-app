import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styles: ['h2{color: red}']
})
export class ErrorMsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
