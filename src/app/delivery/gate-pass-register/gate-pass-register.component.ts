import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gate-pass-register',
  templateUrl: './gate-pass-register.component.html',
  styleUrls: ['./gate-pass-register.component.css'],
})
export class GatePassRegisterComponent {
  addAssignGatePass: any[];
  searchText: string = '';

  constructor() {}

  ngOnInit() {
    this.addAssignGatePass = [
      {
        cn_no: 'PKG0123',
        consignee: 'agartala',
        delivery_through: 'kolkata',
        date: '11-03-2023',
        time: '8:00',
      },
      {
        cn_no: 'PKG0124',
        consignee: 'punjab',
        delivery_through: 'farukhabaad',
        date: '13-01-2023',
        time: '9:00',
      },
      {
        cn_no: 'PKG0125',
        consignee: 'kanpur',
        delivery_through: 'delhi',
        date: '01-04-2023',
        time: '10:00',
      },
      {
        cn_no: 'PKG0126',
        consignee: 'banglore',
        delivery_through: 'noida',
        date: '05-03-2023',
        time: '12:00',
      },
    ];
  }
}
