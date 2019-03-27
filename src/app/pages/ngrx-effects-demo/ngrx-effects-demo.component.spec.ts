import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEffectsDemoComponent } from './ngrx-effects-demo.component';

describe('NgrxEffectsDemoComponent', () => {
  let component: NgrxEffectsDemoComponent;
  let fixture: ComponentFixture<NgrxEffectsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxEffectsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEffectsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
