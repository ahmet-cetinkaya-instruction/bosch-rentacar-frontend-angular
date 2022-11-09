import { Inject, NgModule } from '@angular/core';

import { AuthServiceBase } from './services/auth-service';
import { CommonModule } from '@angular/common';
import { ExceptionModule } from '../exception/exception.module';
import { JwtAuthService } from './services/jwt-auth.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ExceptionModule],
  exports: [LoginFormComponent],
  //: Angular'ın IoC Container'ına AuthServiceBase karşılığında JwtAuthService sınıfını kullanmasını söylüyoruz.
  providers: [{ provide: AuthServiceBase, useClass: JwtAuthService }],
})
export class AuthModule {}
