import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menifest-details',
  templateUrl: './menifest-details.component.html',
  styleUrls: ['./menifest-details.component.css']
})
export class MenifestDetailsComponent {

  createnewmenifest: FormGroup;
  constructor(
    private fb : FormBuilder,
    public router :Router
  ){}

  ngOnInit(): void {
    this.createnewmenifest = this.fb.group({
      menifest_date: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      vehicle_no: ['', Validators.required],
      charge_amount: ['', Validators.required],
      advance_pay: ['', Validators.required],
      amount_adjustment: ['', Validators.required],
      due_amount: ['', Validators.required],
      Remarks: ['', Validators.required]
    })
  }

  oncreatemenifest(){
    // console.log(this.createnewmenifest.value);
    const newmenifestdata = this.createnewmenifest.value;
    if (this.createnewmenifest.invalid) {
      this.createnewmenifest.markAllAsTouched();
    } 
    else {
      console.log(newmenifestdata);
      console.log("Validation is working");
      // this.router.navigate(['/dashboard/consignee']);
    }
  }
}

