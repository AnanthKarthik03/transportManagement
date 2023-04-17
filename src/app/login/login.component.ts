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
  // Variables for all form show by condionally
  loginForm: boolean = true;
  forgotForm: boolean = false;
  signUpForm: boolean = false;

  // select intial login form data
  selectData: FormGroup<any>;

  // spinner show conditionally
  spinShow: boolean = false;

  // login data form group
  loginData: FormGroup<any>;
  forgotData: FormGroup<any>;
  signUpData: FormGroup<any>;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private val: Validation,
    private service: PermissionService
  ) {
    this.loginData = this.fb.group({
      branch: ['', [Validators.required]],
      username: ['', [Validators.required, val.isUserValid]],
      password: ['', [Validators.required, val.isPasswordValid]],
    });

    this.forgotData = this.fb.group({
      username: ['', [Validators.required, val.isUserValid]],
      password: ['', [Validators.required, val.isPasswordValid]],
    });

    this.signUpData = this.fb.group({
      username: ['', [Validators.required, val.isUserValid]],
      password: ['', [Validators.required, val.isPasswordValid]],
    });
  }

  ngOnInit(): void {
    this.selectData = this.loginData.value;
  }

  onLoginFormShow() {
    this.spinShow = true;
    setTimeout(() => {
      this.loginForm = true;
      this.spinShow = false;
      this.forgotForm = false;
      this.signUpForm = false;
      this.loginData.patchValue(this.selectData);
    }, 2000);
  }

  onForgotFormShow() {
    this.spinShow = true;
    setTimeout(() => {
      this.forgotForm = true;
      this.spinShow = false;
      this.loginForm = false;
      this.signUpForm = false;
      this.loginData.reset();
    }, 2000);
  }

  onSignUpFormShow() {
    this.spinShow = true;
    setTimeout(() => {
      this.signUpForm = true;
      this.spinShow = false;
      this.loginForm = false;
      this.forgotForm = false;
      this.loginData.reset();
    }, 2000);
  }

  onSignUp() {
    this.onLoginFormShow();
    console.log(this.signUpData.value);
  }

  onForgot() {
    this.onLoginFormShow();
    console.log(this.forgotData.value);
  }

  onLogin() {
    const loginValues = this.loginData.value;
    const branch = loginValues.branch;
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
      // this.service.roleId = roleId;
      localStorage.setItem('id', roleId);
      localStorage.setItem('branch', branch);

      //for supr admin
      if (roleId == 1) {
        this.spinShow = true;
        this.service.tostrShow = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard/super-admin']);
        }, 2000);
      }

      //for admin
      if (roleId == 2) {
        this.spinShow = true;
        this.service.tostrShow = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard/admin']);
        }, 2000);
      }

      //for vendor
      if (roleId == 3) {
        this.spinShow = true;
        this.service.tostrShow = true;
        setTimeout(() => {
          this.router.navigate(['/dashboard/vendor']);
        }, 2000);
      }
    }

    if (this.loginData.invalid) {
      this.loginData.markAllAsTouched();
      return;
    }

    // this.router.navigate(['dashboard']);
  }
}
