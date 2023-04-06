import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseBookingRegisterComponent } from './date-wise-booking-register.component';

describe('DateWiseBookingRegisterComponent', () => {
  let component: DateWiseBookingRegisterComponent;
  let fixture: ComponentFixture<DateWiseBookingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseBookingRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseBookingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
