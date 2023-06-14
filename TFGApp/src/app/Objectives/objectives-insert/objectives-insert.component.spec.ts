import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesInsertComponent } from './objectives-insert.component';

describe('ObjectivesInsertComponent', () => {
  let component: ObjectivesInsertComponent;
  let fixture: ComponentFixture<ObjectivesInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
