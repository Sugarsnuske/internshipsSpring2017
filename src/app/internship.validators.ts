import { FormControl } from '@angular/forms';

export class InternshipValidator {
  static getInitialsValidator() {
    return function(control: FormControl) {
      // custom code
      if (control.value.match(/^123/)) {
        return { 'initialsError': true };
      }
    }
  }
}