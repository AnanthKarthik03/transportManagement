import { FormControl } from '@angular/forms';

export class Validation {
  isUserValid(control: FormControl) {
    const value = control?.value;
    const pattern = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (value != '') {
      const bool = pattern.test(value);
      return bool == false ? { userNotValid: true } : null;
    }
    return null;
  }

  isPasswordValid(control: FormControl) {
    const value = control?.value;
    const pattern = /^(?=.*\d).{3,8}$/;
    if (value != '') {
      const bool = pattern.test(value);
      return bool == false ? { passwordNotValid: true } : null;
    }
    return null;
  }

  neverStartWithAlphabet(control: FormControl) {
    const pattern = /^[^0-9]+.*/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidName: true } : null;
    }
    return null;
  }

  checkPinCodeValid(control: FormControl) {
    const pattern = /^[1-9][0-9]{5}$/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidPin: true } : null;
    }
    return null;
  }

  checkMobileNo(control: FormControl) {
    const pattern = /^[0-9]{10}$/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidMobile: true } : null;
    }
    return null;
  }

  checkUrl(control: FormControl) {
    const pattern =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const singleData = control?.value;
    if (singleData != '') {
      const bool = pattern.test(singleData);
      return bool == false ? { invalidUrl: true } : null;
    }
    return null;
  }
}
