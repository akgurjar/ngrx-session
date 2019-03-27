import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-usefull-terms',
  templateUrl: './usefull-terms.component.html',
  styleUrls: ['./usefull-terms.component.scss']
})
export class UsefullTermsComponent implements OnInit {
  @HostBinding('class.content--center') isContentCenter = true;
  constructor() { }

  ngOnInit() {
  }

}
