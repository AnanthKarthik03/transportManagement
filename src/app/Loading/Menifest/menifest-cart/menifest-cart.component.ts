import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menifest-cart',
  templateUrl: './menifest-cart.component.html',
  styleUrls: ['./menifest-cart.component.css']
})
export class MenifestCartComponent {

  afterCreateBuiltyDataLength: number = 0;
  totalAmount: number = 0;
  afterCreateBuiltyData: any[] = [];
  newBuiltyData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newBuiltyData = this.fb.group({
      cnno: ['', [Validators.required]],
      packagesbooked: ['', [Validators.required]],
      packagesdispatched: ['', [Validators.required]],
      itemconsignee: ['', [Validators.required]],
      actualWeight: ['', [Validators.required]],
      grossWeight: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      // gst: ['', [Validators.required]],
      // rateAsPer: ['', [Validators.required]],
      // rate: ['', [Validators.required]],
    });
  }

  onRemoveItem() {
    console.log('remove');
  }

  onNewBuiltySubmit() {
    if (this.newBuiltyData.invalid) {
      return;
    } else {
      const cnno = +this.newBuiltyData.value.cnno;
      const packagesbooked = this.newBuiltyData.value.packagesbooked;
      const packagesdispatched = this.newBuiltyData.value.packagesdispatched;
      // const hsn = this.newBuiltyData.value.hsn;
      const actualWeight = +this.newBuiltyData.value.actualWeight;
      const grossWeight = this.newBuiltyData.value.grossWeight;
      // const weightType = this.newBuiltyData.value.weightType;
      const itemconsignee = +this.newBuiltyData.value.itemconsignee;
      const destination = +this.newBuiltyData.value.destination;
      // const rate = +this.newBuiltyData.value.rate;

      // const amount = actualWeight * rate * (1 + gst / 100);

      // this.totalAmount = this.totalAmount + amount;

      const showData = {
        cnno,
        packagesbooked,
        packagesdispatched,
        itemconsignee,
        actualWeight,
        grossWeight,
        destination
      };

      this.afterCreateBuiltyData.push(showData);

      this.afterCreateBuiltyDataLength = this.afterCreateBuiltyData.length;
    }
  }

}
