import { AuthModule } from './features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { ErrorMessagesPipe } from './features/exception/pipes/error-messages.pipe';
import { ExceptionModule } from './features/exception/exception.module';
import { FilterObjectPipe } from './pipes/filter-object.pipe';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [SpinnerLoadingComponent, FilterObjectPipe],
  imports: [CommonModule, AuthModule, ExceptionModule],
  exports: [
    SpinnerLoadingComponent,
    FilterObjectPipe,
    LoginFormComponent,
    ErrorMessagesPipe,
  ],
})
export class CoreModule {}
