import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from 'src/app/validation/validation';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  createCompany: FormGroup;
  headerTitle: string;
  submitButtonTitle: string;
  form_show: boolean = false;

  constructor(private fb: FormBuilder, private validation: Validation) {
    this.createCompany = this.fb.group({
      company_name: ['', [Validators.required]],
      company_logo: ['', [Validators.required]],
      company_contact_detail: ['', [Validators.required]],
      company_email: ['', [Validators.required, validation.isUserValid]],
      company_legal_name: ['', [Validators.required]],
      company_website: ['', [Validators.required, validation.checkUrl]],
      types_of_business: ['', [Validators.required]],
      date_of_incorporation: ['', [Validators.required]],
      company_identification_number: ['', [Validators.required]],
      office_address1: ['', [Validators.required]],
      office_address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, validation.checkPinCodeValid]],
      pan: ['', [Validators.required]],
      tan: ['', [Validators.required]],
      tan_circle_number: ['', [Validators.required]],
      form16_signatory: ['', [Validators.required]],
      gst_number: ['', [Validators.required]],
      pf_number: ['', [Validators.required]],
      pf_registration_date: ['', [Validators.required]],
      pf_signatory: ['', [Validators.required]],
      pf_signatory_designation: ['', [Validators.required]],
      pf_signatory_father: ['', [Validators.required]],
      esi_number: ['', [Validators.required]],
      esi_registration_date: ['', [Validators.required]],
      esi_signatory_designation: ['', [Validators.required]],
      esi_signatory: ['', [Validators.required]],
      esi_signatory_father: ['', [Validators.required]],
      pt_registration_date: ['', [Validators.required]],
      pt_number: ['', [Validators.required]],
      pt_signatory: ['', [Validators.required]],
      employee_id: ['', [Validators.required]],
    });
  }

  formShowToggle() {
    this.headerTitle = 'Create Companies';
    this.form_show = !this.form_show;
    this.submitButtonTitle = 'Submit';
  }

  onModifiedButton() {
    this.form_show = !this.form_show;
    this.headerTitle = 'Update Companies';
    this.submitButtonTitle = 'Update';
  }

  onPickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.createCompany.patchValue({ company_logo: file });
    this.createCompany.get('company_logo').updateValueAndValidity();
  }

  onCreateCompany() {
    const company_field = this.createCompany;
    console.log(company_field);

    if (this.submitButtonTitle == 'Submit') {
      if (this.createCompany.invalid) {
        this.createCompany.markAllAsTouched();
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
}
