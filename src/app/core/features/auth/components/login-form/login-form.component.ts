import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthServiceBase } from '../../services/auth-service';
import { CoreValidations } from 'src/app/core/utilities/validation/core-validations';
import { LoginUserRequest } from './../../models/login-user-request';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthServiceBase,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: CoreValidations.checkPasswords } //: LoginForm'a validation ekledik.
    );
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.toastrService.error('Invalid form');
      return;
    }

    const loginUserRequest: LoginUserRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService.login(loginUserRequest).subscribe({
      error: () => {
        this.toastrService.error('Login failed');
      },
      complete: () => {
        this.toastrService.success('Login success');
        this.router.navigate(['/']);
      },
    });
  }

  isControlInvalid(controlName: string) {
    return (
      this.loginForm.get(controlName)?.invalid &&
      this.loginForm.get(controlName)?.touched
    );
  }
}
