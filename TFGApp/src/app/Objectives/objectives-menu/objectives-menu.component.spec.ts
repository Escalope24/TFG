import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesMenuComponent } from './objectives-menu.component';

describe('ObjectivesMenuComponent', () => {
  let component: ObjectivesMenuComponent;
  let fixture: ComponentFixture<ObjectivesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
