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
  selector: 'app-consignor',
  templateUrl: './consignor.component.html',
  styleUrls: ['./consignor.component.css'],
})
export class ConsignorComponent {
  newConsignerData: FormGroup;
  nameSearch: string = '';
  recentTableShow: boolean = true;

  recent_consigners: any = [
    { consigner_name: 'gurgaon', mobile: '1234567899' },
    { consigner_name: 'kanpur', mobile: '5678765678' },
  ];

  all_consigners = [
    { consigner_name: 'gurgaon', mobile: '1234567899' },
    { consigner_name: 'kanpur', mobile: '5678765678' },
    { consigner_name: 'lucknow', mobile: '3456434567' },
    { consigner_name: 'ahmedabad', mobile: '8765676576' },
    { consigner_name: 'mumbai', mobile: '4565434565' },
  ];

  constructor(
    private fb: FormBuilder,
    private validation: Validation,
    private router: Router
  ) {
    this.newConsignerData = this.fb.group({
      consigner_name: [
        '',
        [Validators.required, validation.neverStartWithAlphabet],
      ],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, validation.checkPinCodeValid]],
      mobile1: ['', [Validators.required, validation.checkMobileNo]],
      mobile2: [''],
      email: ['', [Validators.required, Validators.email]],
      consigner_gst: ['', [Validators.required]],
    });
  }

  onCreateNewConsignerData() {
    const consignerData = this.newConsignerData.value;

    const add1 = consignerData.address1;
    const add2 = consignerData.address2;
    if (this.newConsignerData.invalid) {
      this.newConsignerData.markAllAsTouched();
    } else if (add1 == add2) {
      alert("Both address fields can't be same");
    } else {
      console.log(consignerData);
      this.router.navigate(['/dashboard/consignee']);
    }
  }

  onSearch(event: any) {
    this.recentTableShow = false;
    const enterInput = event.target.value;

    if (enterInput.length == 0) {
      this.recentTableShow = true;
    }
  }
}
