import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from 'src/app/validation/validation';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {

  createCountry: FormGroup;
  headerTitle: string;
  submitButtonTitle: string;
  form_show: boolean = false;
  bcrs: any[];
  i: number = 0;

  constructor(private fb: FormBuilder, private validation: Validation) {
    this.createCountry = this.fb.group({
      country_code: ['', [Validators.required]],
      country_name: ['', [Validators.required]],
      
      
    });
  }

  formShowToggle() {
    this.headerTitle = 'Create State';
    this.form_show = !this.form_show;
    this.submitButtonTitle = 'Submit';
  }

  onModifiedButton() {
    this.form_show = !this.form_show;
    this.headerTitle = 'Update State';
    this.submitButtonTitle = 'Update';
  }

  onPickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createCountry.patchValue({ company_logo: file });
    this.createCountry.get('country_code').updateValueAndValidity();
  }

  onCreateCountry() {
    const company_field = this.createCountry;
    console.log(company_field);

    if (this.submitButtonTitle == 'Submit') {
      if (this.createCountry.invalid) {
        this.createCountry.markAllAsTouched();
        return;
      } else {
        console.log(company_field);
      }
    }

    if (this.submitButtonTitle == 'Update') {
      alert("when backend will be done then it'll work properly");
      this.formShowToggle();
    }
  }
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


