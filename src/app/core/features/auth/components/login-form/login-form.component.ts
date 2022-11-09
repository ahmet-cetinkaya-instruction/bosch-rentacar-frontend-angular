import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthServiceBase } from '../../services/auth-service';
import { LoginUserRequest } from './../../models/login-user-request';
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
    private authService: AuthServiceBase
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
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
    debugger;
    this.authService.login(loginUserRequest).subscribe({
      next: (response) => {
        this.toastrService.success('Login success');
      },
      error: (error) => {
        this.toastrService.error('Login failed');
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
