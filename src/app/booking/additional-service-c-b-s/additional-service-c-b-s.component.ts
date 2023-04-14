import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-service-c-b-s',
  templateUrl: './additional-service-c-b-s.component.html',
  styleUrls: ['./additional-service-c-b-s.component.css'],
})
export class AdditionalServiceCBSComponent {
  totalCharge: number = 0;
  allTypesCharges: FormGroup;
  additionalDetails: FormGroup;

  showPanel: boolean = true;

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

  ngOnInit(): void {
    setTimeout(() => {
      this.showPanel = false;
    }, 2000);
  }

  onTotalCharge() {
    const {
      r_c,
      hamali,
      service_charge,
      statistical_charge,
      cover_charge,
      insurance_charge,
      dd_charge,
      other_charge,
      fee_charge,
      door_delivery_charge,
    } = this.allTypesCharges.value;
    this.totalCharge =
      +r_c +
      +hamali +
      +service_charge +
      +statistical_charge +
      +cover_charge +
      +insurance_charge +
      +dd_charge +
      +other_charge +
      +fee_charge +
      +door_delivery_charge;
  }

  onAdditionalDetails() {
    const allBills = this.allTypesCharges.value;
    const additional = this.additionalDetails.value;
    if (this.allTypesCharges.invalid || this.additionalDetails.invalid) {
      return;
    } else {
      console.log(allBills);
      console.log(additional);
      this.router.navigate(['/dashboard/consignment-booking-register-report']);
    }
  }
}
