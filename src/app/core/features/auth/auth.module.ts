import { CommonModule } from '@angular/common';
import { ExceptionModule } from '../exception/exception.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ExceptionModule],
  exports: [LoginFormComponent],
})
export class AuthModule {}
