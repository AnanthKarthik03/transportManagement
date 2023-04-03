import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentBookingComponent } from './consignment-booking.component';

describe('ConsignmentBookingComponent', () => {
  let component: ConsignmentBookingComponent;
  let fixture: ComponentFixture<ConsignmentBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsignmentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
