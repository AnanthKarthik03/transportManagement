import { Component } from '@angular/core';

@Component({
  selector: 'app-consignment-booking-register',
  templateUrl: './consignment-booking-register.component.html',
  styleUrls: ['./consignment-booking-register.component.css'],
})
export class ConsignmentBookingRegisterComponent {
  bcrs: any[];
  i: number = 0;

  ngOnInit(): void {
    this.bcrs = [
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
      {
        cn_no: 'PKG1223',
        details: '123 street',
        consigner: 'abhi enterprise',
        consignee: 'star enterprise',
        from: 'Kolkata',
        via: 'cargo',
        to: 'Agartala',
        pay: 'to pay',
        amount: '54338.00',
        rec: '0.00',
        dis: '0.00',
        due: '5432.00',
        branch: 'Kolkata',
      },
    ];
  }
}
