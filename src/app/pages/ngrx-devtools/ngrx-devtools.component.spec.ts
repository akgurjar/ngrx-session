import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDevtoolsComponent } from './ngrx-devtools.component';

describe('NgrxDevtoolsComponent', () => {
  let component: NgrxDevtoolsComponent;
  let fixture: ComponentFixture<NgrxDevtoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxDevtoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxDevtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
