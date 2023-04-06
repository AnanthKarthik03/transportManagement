import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-consignee',
  templateUrl: './consignee.component.html',
  styleUrls: ['./consignee.component.css'],
})
export class ConsigneeComponent {
  newConsigneeData: FormGroup;
  nameSearch: string = '';

  consignee: any = [
    { consignee_name: 'gurgaon', mobile: '1234567899' },
    { consignee_name: 'kanpur', mobile: '5678765678' },
  ];

  constructor(private fb: FormBuilder) {
    this.newConsigneeData = this.fb.group({
      consignee_name: ['', [Validators.required, this.neverStartWithAlphabet]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, this.checkPinCodeValid]],
      mobile1: ['', [Validators.required, this.checkMobileNo]],
      mobile2: ['', [Validators.required, this.checkMobileNo]],
      email: ['', [Validators.required, Validators.email]],
      consignee_gst: ['', [Validators.required]],
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

  onCreateNewConsigneeData() {
    const consigneeData = this.newConsigneeData.value;

    const add1 = consigneeData.address1;
    const add2 = consigneeData.address2;
    if (this.newConsigneeData.invalid) {
      return;
    } else if (add1 == add2) {
      alert("Both address fields can't be same");
    } else {
      console.log(consigneeData);
    }
  }

  onSearch(event: any) {
    const searchData = event.target.value;
    const consignee = [
      { consignee_name: 'gurgaon', mobile: '1234567899' },
      { consignee_name: 'kanpur', mobile: '5678765678' },
      { consignee_name: 'lucknow', mobile: '3456434567' },
      { consignee_name: 'ahmedabad', mobile: '8765676576' },
      { consignee_name: 'mumbai', mobile: '4565434565' },
    ];
    const tem_consignee = this.consignee;
    this.consignee = consignee;
    if (searchData.length == 0) {
      let noNeed = this.consignee;
      this.consignee = tem_consignee;
      console.log('rajat');
      noNeed = [];
    }
  }
}
