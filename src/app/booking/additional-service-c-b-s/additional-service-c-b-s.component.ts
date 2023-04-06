import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-service-c-b-s',
  templateUrl: './additional-service-c-b-s.component.html',
  styleUrls: ['./additional-service-c-b-s.component.css'],
})
export class AdditionalServiceCBSComponent {
  allTypesCharges: FormGroup;
  additionalDetails: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.allTypesCharges = this.fb.group({
      r_c: ['', [Validators.required]],
      hamali: ['', [Validators.required]],
      service_charge: ['', [Validators.required]],
      statistical_charge: ['', [Validators.required]],
      cover_charge: ['', [Validators.required]],
      insurance_charge: ['', [Validators.required]],
      dd_charge: ['', [Validators.required]],
      other_charge: ['', [Validators.required]],
      fee_charge: ['', [Validators.required]],
      door_delivery_charge: ['', [Validators.required]],
    });

    this.additionalDetails = this.fb.group({
      payment_liability: ['', [Validators.required]],
      total_billing_amount: ['', [Validators.required]],
      amount_received: ['', [Validators.required]],
      amount_adjustment: ['', [Validators.required]],
      cue_balance_amount: ['', [Validators.required]],
    });
  }

  onAdditionalDetails() {
    const allBills = this.allTypesCharges.value;
    const additional = this.additionalDetails.value;
    if (this.allTypesCharges.invalid || this.additionalDetails.invalid) {
      return;
    } else {
      console.log(allBills);
      console.log(additional);
      this.router.navigate(['/dashboard/consignment-booking-register']);
    }
  }
}
