import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPEventsComponent } from './mpevents.component';

describe('MPEventsComponent', () => {
  let component: MPEventsComponent;
  let fixture: ComponentFixture<MPEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
