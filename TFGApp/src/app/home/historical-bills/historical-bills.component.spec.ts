import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalBillsComponent } from './historical-bills.component';

describe('HistoricalBillsComponent', () => {
  let component: HistoricalBillsComponent;
  let fixture: ComponentFixture<HistoricalBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
