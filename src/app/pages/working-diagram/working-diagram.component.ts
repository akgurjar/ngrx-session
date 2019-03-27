import { Component, OnInit, HostBinding } from '@angular/core';

type AnimateState = '#fireAction1' | '#fireAction2' | '#dispatchAction' | '#reduceState' | '#changeUi1' | '#changeUi2';

@Component({
  selector: 'app-working-diagram',
  templateUrl: './working-diagram.component.html',
  styleUrls: ['./working-diagram.component.scss']
})
export class WorkingDiagramComponent implements OnInit {
  @HostBinding('class.content--center') centerContent = true;
  id = null;
  states: AnimateState[] = ['#dispatchAction', '#changeUi1'];
  constructor() {
    this.animateStates(['#dispatchAction', '#changeUi1']);
  }

  ngOnInit() {
  }
  uiPositionStyle(position: 'top' | 'bottom') {
    return {[position]: '10px'};
  }
  animateStates(states: AnimateState[]) {
    const id = setInterval(() => {
      const state = states.shift();
      if (!state) {
        clearInterval(id);
        return;
      }
      this.id = state;
    }, 3000);
    if (this.states.length) {
      const state = this.states.shift();
      if (state) {
        this.id = state;
      }
    }
  }
}
