import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courseName = 'State Management';
  courseIcon = '/assets/favicon.png';
  constructor() { }
}
