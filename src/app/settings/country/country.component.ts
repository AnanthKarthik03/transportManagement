import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from 'src/app/validation/validation';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent {
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

  ngOnInit(): void {
    this.bcrs = [
      {
        id: 1,
        country_code: 'Ind',
        country_name: 'India',
      },
      {
        id: 2,
        country_code: 'Aus',
        country_name: 'Australia',
      },
    ];
  }

  formShowToggle() {
    this.headerTitle = 'Create Country';
    this.form_show = !this.form_show;
    this.submitButtonTitle = 'Submit';
  }

  onModifiedButton(id: number) {
    this.form_show = !this.form_show;
    this.headerTitle = 'Update Country';
    this.submitButtonTitle = 'Update';
    const value = this.bcrs.find((value) => {
      return value.id == id;
    });
    this.createCountry.patchValue(value);
  }

  onCreateCountry() {
    const company_field = this.createCountry;

    if (this.submitButtonTitle == 'Submit') {
      if (this.createCountry.invalid) {
        this.createCountry.markAllAsTouched();
        return;
      } else {
        this.bcrs.push(company_field.value);
        this.createCountry.reset();
        this.formShowToggle();
      }
    }

    if (this.submitButtonTitle == 'Update') {
      alert("when backend will be done then it'll work properly");
      this.createCountry.reset();
      this.formShowToggle();
    }
  }
}
