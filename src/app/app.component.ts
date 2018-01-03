import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Issue Tracker';

  logued = false;

  login() {
    this.logued = true;
  }

  logout() {
    this.logued = false;
  }
}

