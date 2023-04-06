import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consignment-booking',
  templateUrl: './consignment-booking.component.html',
  styleUrls: ['./consignment-booking.component.css'],
})
export class ConsignmentBookingComponent {
  newConsignmentBookingData: FormGroup;
  newConsignmentPackingSummary: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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

  neverStartWithAlphabet(control: FormControl) {
    const pattern = /^[^0-9]+.*/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidName: true } : null;
    }
    return null;
  }

  checkPinCodeValid(control: FormControl) {
    const pattern = /^[1-9][0-9]{5}$/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidPin: true } : null;
    }
    return null;
  }

  checkMobileNo(control: FormControl) {
    const pattern = /^[0-9]{10}$/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidMobile: true } : null;
    }
    return null;
  }

  onCreateNewConsignmentBookingData() {
    const consignerData = this.newConsignmentBookingData.value;

    const add1 = consignerData.address1;
    const add2 = consignerData.address2;
    if (
      this.newConsignmentBookingData.invalid &&
      this.newConsignmentPackingSummary.invalid
    ) {
      return;
    } else if (add1 == add2) {
      alert("Both address fields can't be same");
    } else {
      console.log(consignerData);
      this.router.navigate(['/dashboard/additional-service-c-b-s']);
    }
  }
}
