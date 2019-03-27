import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingDiagramComponent } from './working-diagram.component';

describe('WorkingDiagramComponent', () => {
  let component: WorkingDiagramComponent;
  let fixture: ComponentFixture<WorkingDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
