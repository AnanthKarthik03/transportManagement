import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentBookingRegisterBuiltyReportComponent } from './consignment-booking-register-builty-report.component';

describe('ConsignmentBookingRegisterBuiltyReportComponent', () => {
  let component: ConsignmentBookingRegisterBuiltyReportComponent;
  let fixture: ComponentFixture<ConsignmentBookingRegisterBuiltyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentBookingRegisterBuiltyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentBookingRegisterBuiltyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
