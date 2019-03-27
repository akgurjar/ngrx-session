import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @HostBinding('class.content--center') centerContent = true;
  constructor() { }

  ngOnInit() {
  }

}
