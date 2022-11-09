import { Pipe, PipeTransform } from '@angular/core';

import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessages',
})
export class ErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors | null): string {
    if (!errors) return '';

    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'This field must be a valid email address.';
    //todo: refactor messages
    if (errors['minlength'])
      return 'This field must be at least <6> characters.';
    if (errors['maxlength'])
      return 'This field must be at most <20> characters.';
    if (errors['pattern']) return 'This field must be a valid pattern.';
    //todo: add more error messages

    return 'This field is invalid.';
  }
}
