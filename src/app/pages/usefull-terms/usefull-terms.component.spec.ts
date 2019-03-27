import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefullTermsComponent } from './usefull-terms.component';

describe('UsefullTermsComponent', () => {
  let component: UsefullTermsComponent;
  let fixture: ComponentFixture<UsefullTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefullTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefullTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
