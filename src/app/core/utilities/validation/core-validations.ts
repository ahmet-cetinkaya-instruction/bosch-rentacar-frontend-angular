import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CoreValidations {
  static checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;

    return password === passwordConfirm ? null : { passwordsNotMatch: true };
  }
}

// export function checkPasswords(group: AbstractControl): ValidationErrors | null {
//   const password = group.get('password')?.value;
//   const passwordConfirm = group.get('passwordConfirm')?.value;
//   return password === passwordConfirm ? null : { passwordsNotMatch: true };
// }
