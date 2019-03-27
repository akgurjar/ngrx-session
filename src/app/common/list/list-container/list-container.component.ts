import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  @HostBinding('attr.role') role = 'listbox';
  constructor() { }

  ngOnInit() {
  }

}
