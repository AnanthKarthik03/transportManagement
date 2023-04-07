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
  selector: 'app-consignee',
  templateUrl: './consignee.component.html',
  styleUrls: ['./consignee.component.css'],
})
export class ConsigneeComponent {
  newConsigneeData: FormGroup;
  nameSearch: string = '';
  recentTableShow: boolean = true;

  recent_consignee: any = [
    { consignee_name: 'gurgaon', mobile: '1234567899' },
    { consignee_name: 'kanpur', mobile: '5678765678' },
  ];

  all_consignee = [
    { consignee_name: 'gurgaon', mobile: '1234567899' },
    { consignee_name: 'kanpur', mobile: '5678765678' },
    { consignee_name: 'lucknow', mobile: '3456434567' },
    { consignee_name: 'ahmedabad', mobile: '8765676576' },
    { consignee_name: 'mumbai', mobile: '4565434565' },
  ];

  constructor(
    private fb: FormBuilder,
    private validation: Validation,
    private router: Router
  ) {
    this.newConsigneeData = this.fb.group({
      consignee_name: [
        '',
        [Validators.required, validation.neverStartWithAlphabet],
      ],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, validation.checkPinCodeValid]],
      mobile1: ['', [Validators.required, validation.checkMobileNo]],
      mobile2: ['', [Validators.required, validation.checkMobileNo]],
      email: ['', [Validators.required, Validators.email]],
      consignee_gst: ['', [Validators.required]],
    });
  }

  onCreateNewConsigneeData() {
    const consigneeData = this.newConsigneeData.value;

    const add1 = consigneeData.address1;
    const add2 = consigneeData.address2;
    if (this.newConsigneeData.invalid) {
      this.newConsigneeData.markAllAsTouched();
    } else if (add1 == add2) {
      alert("Both address fields can't be same");
    } else {
      console.log(consigneeData);
      this.router.navigate(['/dashboard/consignment-booking']);
    }
  }

  onSearch(event: any) {
    this.recentTableShow = false;
    const searchData = event.target.value;

    if (searchData.length == 0) {
      this.recentTableShow = true;
    }
  }
}
