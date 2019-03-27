import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDevtoolsDemoComponent } from './ngrx-devtools-demo.component';

describe('NgrxDevtoolsDemoComponent', () => {
  let component: NgrxDevtoolsDemoComponent;
  let fixture: ComponentFixture<NgrxDevtoolsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxDevtoolsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxDevtoolsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
