import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  createCompany: FormGroup;

  show_form: boolean = false;

  submit_to_update: boolean = false;

  constructor() {}

  onEdit() {
    this.show_form = !this.show_form;
    this.submit_to_update = !this.submit_to_update;
  }
}
