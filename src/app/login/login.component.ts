import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as crypto from 'crypto-js';
import { PermissionService } from '../shared/permission.service';
import { Validation } from '../validation/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  spinShow: boolean = false;
  loginData: FormGroup<any>;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private val: Validation,
    private service: PermissionService
  ) {
    this.loginData = this.fb.group({
      username: ['', [Validators.required, val.isUserValid]],
      password: ['', [Validators.required, val.isPasswordValid]],
    });
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.spinShow = false;
    // }, 5000);
  }

  onLogin() {
    const loginValues = this.loginData.value;
    const username = loginValues.username;
    const password = loginValues.password;

    //don't delete below commented code

    // const encrypted = crypto.AES.encrypt(
    //   JSON.stringify(loginValues),
    //   'loginData'
    // ).toString();
    // console.log(encrypted);

    if (this.loginData.valid) {
      const roleId = this.service.isAuthenticated(username, password);
      this.service.roleId = roleId;
      localStorage.setItem('id', roleId);

      //for supr admin
      if (roleId == 1) {
        this.spinShow = true;
        this.service.tostrShow = true;
        this.router.navigate(['/dashboard/super-admin']);
      }

      //for admin
      if (roleId == 2) {
        this.spinShow = true;
        //   setTimeout(() => {
        //     this.router.navigate(['/dashboard/admin']);
        //   }, 3000);

        this.service.tostrShow = true;
        this.router.navigate(['/dashboard/admin']);
      }

      //for vendor
      if (roleId == 3) {
        this.spinShow = true;
        this.service.tostrShow = true;
        this.router.navigate(['/dashboard/vendor']);
      }
    }

    if (this.loginData.invalid) {
      return;
    }

    // this.router.navigate(['dashboard']);
  }
}
