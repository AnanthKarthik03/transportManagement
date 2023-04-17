import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private router: Router) {}
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

