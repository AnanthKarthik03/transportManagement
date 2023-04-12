import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  headerTitle: string;
  form_show: boolean = false;

  constructor() {}

  formShowToggle() {
    this.headerTitle = 'Create Companies';
    this.form_show = !this.form_show;
  }

  onModifiedButton() {
    this.form_show = !this.form_show;
    this.headerTitle = 'Update Companies';
  }
}
