import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesViewsComponent } from './objectives-views.component';

describe('ObjectivesViewsComponent', () => {
  let component: ObjectivesViewsComponent;
  let fixture: ComponentFixture<ObjectivesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
