import { FormControl } from "@angular/forms"

export class Validation {
  isUserValid(control: FormControl) {
      const value = control?.value;
      const pattern = /^(?:\d{10}|\w+@\w+\.\w{3})$/;
      if (value != '') {
        const bool = pattern.test(value);
        return (bool == false ? {'notValid': true} : null);
      }
      return null;
  }

  isPasswordValid(control: FormControl) {
    const value = control?.value;
    const pattern = /^(?=.*\d).{3,8}$/;
    if(value != '') {
      const bool = pattern.test(value);
      return (bool == false ? {'notValid': true} : null);
    }
    return null;
  }
}
