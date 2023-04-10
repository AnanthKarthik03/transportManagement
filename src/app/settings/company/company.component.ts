import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  show_form: boolean = false;

  submit_to_update: boolean = false;

  onEdit() {
    this.show_form = !this.show_form;
    this.submit_to_update = !this.submit_to_update;
  }
}
