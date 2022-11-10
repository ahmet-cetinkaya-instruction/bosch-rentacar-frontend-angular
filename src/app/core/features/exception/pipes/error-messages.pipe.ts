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
    if (errors['minlength'])
      return `This field must be at least ${errors['minlength'].requiredLength} characters.`;
    if (errors['maxlength'])
      return `This field must be at most ${errors['minlength'].requiredLength} characters.`;
    if (errors['pattern']) return 'This field must be a valid pattern.';
    if (errors['passwordsNotMatch']) return 'Passwords do not match.';

    return 'This field is invalid.';
  }
}
