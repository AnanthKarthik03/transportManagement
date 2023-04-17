import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from 'src/app/validation/validation';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
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
      country_name: ['', [Validators.required]],
      state_name: ['', [Validators.required]],
      city_name: ['', [Validators.required]],
      gst_code: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.bcrs = [
      {
        id: 1,
        country_name: 'India',
        state_name: 'Uttar Pradesh',
        city_name: 'Kanpur',
        gst_code: 'ESDF12345YXT',
      },
      {
        id: 2,
        country_name: 'Australia',
        state_name: 'Victoria',
        city_name: 'Melbourne',
        gst_code: 'BHCF12345CDS',
      },
    ];
  }

  formShowToggle() {
    this.headerTitle = 'Create State';
    this.form_show = !this.form_show;
    this.submitButtonTitle = 'Submit';
  }

  onModifiedButton(id: number) {
    this.form_show = !this.form_show;
    this.headerTitle = 'Update State';
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
