import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentBookingRegisterComponent } from './consignment-booking-register.component';

describe('ConsignmentBookingRegisterComponent', () => {
  let component: ConsignmentBookingRegisterComponent;
  let fixture: ComponentFixture<ConsignmentBookingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentBookingRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentBookingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
