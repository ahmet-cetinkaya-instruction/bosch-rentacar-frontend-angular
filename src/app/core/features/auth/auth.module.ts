import { Inject, NgModule } from '@angular/core';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';

import { AuthServiceBase } from './services/auth-service';
import { CommonModule } from '@angular/common';
import { ExceptionModule } from '../exception/exception.module';
import { JwtAuthService } from './services/jwt-auth.service';
import { LocalStorageService } from '../storage/services/local-storage.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageModule } from '../storage/storage.module';
import { authInterceptorProvierders } from './interceptors/auth.interceptor';

export const jwtOptionsFactory = (localStorageService: LocalStorageService) => {
  return {
    tokenGetter: () => {
      return localStorageService.get('accessToken');
    },
  };
};

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExceptionModule,
    StorageModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ],
  exports: [LoginFormComponent],
  //: Angular'ın IoC Container'ına AuthServiceBase karşılığında JwtAuthService sınıfını kullanmasını söylüyoruz.
  providers: [
    { provide: AuthServiceBase, useClass: JwtAuthService },
    authInterceptorProvierders,
  ],
})
export class AuthModule {}
