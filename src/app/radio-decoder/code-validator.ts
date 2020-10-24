import {FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CodeValidator {

  static containsDigit(formControl: FormControl): ValidationErrors {
    return /[0-6]/.test(formControl.value) ? null : {containsDigit: true};
  }

  static wordsLimit(limit: number): ValidatorFn {
    return (formControl: FormControl) => {
      const actual = formControl.value.split(' ').length;
      return actual <= limit ? null : {wordsLimit: {limit, actual}};
    };
  }

}
