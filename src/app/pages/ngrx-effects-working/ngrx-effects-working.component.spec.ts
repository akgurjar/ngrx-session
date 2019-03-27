import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsWorkingComponent } from './ngrx-effects-working.component';

describe('NgrxEffectsWorkingComponent', () => {
  let component: NgrxEffectsWorkingComponent;
  let fixture: ComponentFixture<NgrxEffectsWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxEffectsWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEffectsWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
