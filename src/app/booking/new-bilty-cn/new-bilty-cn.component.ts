import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bilty-cn',
  templateUrl: './new-bilty-cn.component.html',
  styleUrls: ['./new-bilty-cn.component.css'],
})
export class NewBiltyCnComponent {
  afterCreateBuiltyDataLength: number = 0;
  totalAmount: number = 0;
  afterCreateBuiltyData: any[] = [];
  newBuiltyData: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.newBuiltyData = this.fb.group({
      quantity: ['', [Validators.required]],
      packageType: ['', [Validators.required]],
      productDetails: ['', [Validators.required]],
      hsn: ['', [Validators.required]],
      actualWeight: ['', [Validators.required]],
      grossWeight: ['', [Validators.required]],
      weightType: ['', [Validators.required]],
      gst: ['', [Validators.required]],
      rateAsPer: ['', [Validators.required]],
      rate: ['', [Validators.required]],
    });
  }

  checkout() {
    if (this.afterCreateBuiltyDataLength > 0) {
      this.router.navigate(['/dashboard/consignor']);
    }
  }

  onRemoveItem() {
    console.log('remove');
  }

  onNewBuiltySubmit() {
    if (this.newBuiltyData.invalid) {
      return;
    } else {
      const quantity = +this.newBuiltyData.value.quantity;
      const packageType = this.newBuiltyData.value.packageType;
      const productDetails = this.newBuiltyData.value.productDetails;
      const hsn = this.newBuiltyData.value.hsn;
      const actualWeight = +this.newBuiltyData.value.actualWeight;
      const grossWeight = this.newBuiltyData.value.grossWeight;
      const weightType = this.newBuiltyData.value.weightType;
      const gst = +this.newBuiltyData.value.gst;
      const rateAsPer = +this.newBuiltyData.value.rateAsPer;
      const rate = +this.newBuiltyData.value.rate;

      const amount = actualWeight * rate * (1 + gst / 100);

      this.totalAmount = this.totalAmount + amount;

      const showData = {
        quantity,
        packageType,
        productDetails,
        hsn,
        actualWeight,
        grossWeight,
        weightType,
        gst,
        amount,
      };

      this.afterCreateBuiltyData.push(showData);
      this.newBuiltyData.reset();

      this.afterCreateBuiltyDataLength = this.afterCreateBuiltyData.length;
    }
  }
}
