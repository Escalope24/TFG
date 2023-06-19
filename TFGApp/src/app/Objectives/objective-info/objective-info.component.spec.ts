import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveInfoComponent } from './objective-info.component';

describe('ObjectiveInfoComponent', () => {
  let component: ObjectiveInfoComponent;
  let fixture: ComponentFixture<ObjectiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
