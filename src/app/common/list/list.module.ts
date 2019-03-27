import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ListContainerComponent, ListItemComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ListContainerComponent,
    ListItemComponent
  ]
})
export class ListModule { }
