import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @HostBinding('attr.role') role = 'listitem';
  @Input() label = 'List Item';
  constructor() { }

  ngOnInit() {
  }

}
