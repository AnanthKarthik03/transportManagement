import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Validation } from 'src/app/validation/validation';

@Component({
  selector: 'app-consignment-booking',
  templateUrl: './consignment-booking.component.html',
  styleUrls: ['./consignment-booking.component.css'],
})
export class ConsignmentBookingComponent {
  newConsignmentBookingData: FormGroup;
  newConsignmentPackingSummary: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validation: Validation
  ) {
    this.newConsignmentBookingData = this.fb.group({
      consignment_booking_date: ['', [Validators.required]],
      bilty_type: ['', [Validators.required]],
      booking_reference: ['', [Validators.required]],
      broker_details: ['', [Validators.required]],
      challan_date: ['', [Validators.required]],
      challan_bill_no: ['', [Validators.required]],
      value_of_goods: ['', [Validators.required]],
      tax_paid_by: ['', [Validators.required]],
      transportation_mode: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      payment_term: ['', [Validators.required]],
    });
    this.newConsignmentPackingSummary = this.fb.group({
      packing_size: ['', [Validators.required]],
      private_party_mark: ['', [Validators.required]],
      remarks_broker_note: ['', [Validators.required]],
      shipping_risk: ['', [Validators.required]],
      eway_bill_no: ['', [Validators.required]],
      eway_bill_date: ['', [Validators.required]],
      distance_level: ['', [Validators.required]],
    });
  }

  onCreateNewConsignmentBookingData() {
    const consignerData = this.newConsignmentBookingData.value;
    if (
      this.newConsignmentBookingData.invalid ||
      this.newConsignmentPackingSummary.invalid
    ) {
      this.newConsignmentBookingData.markAllAsTouched();
      this.newConsignmentPackingSummary.markAllAsTouched();
      console.log('print');
    } else {
      console.log(consignerData);
      this.router.navigate(['/dashboard/additional-service-c-b-s']);
    }
  }
}
