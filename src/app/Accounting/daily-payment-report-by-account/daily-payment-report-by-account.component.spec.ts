import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPaymentReportByAccountComponent } from './daily-payment-report-by-account.component';

describe('DailyPaymentReportByAccountComponent', () => {
  let component: DailyPaymentReportByAccountComponent;
  let fixture: ComponentFixture<DailyPaymentReportByAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPaymentReportByAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPaymentReportByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
