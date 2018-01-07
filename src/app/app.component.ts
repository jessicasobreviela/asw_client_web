import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Issue Tracker';

  logKey = 'logKey';

  constructor() {
  }

  loggin() {
    localStorage.setItem( this.logKey , JSON.stringify(true));
  }

  loggout() {
    localStorage.setItem( this.logKey , JSON.stringify(false));
  }

  loggued(): boolean {
    return JSON.parse( localStorage.getItem(this.logKey) );
  }
}

