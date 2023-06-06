import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusObjectiveComponent } from './status-objective.component';

describe('StatusObjectiveComponent', () => {
  let component: StatusObjectiveComponent;
  let fixture: ComponentFixture<StatusObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusObjectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
