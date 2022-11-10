import { CommonModule } from '@angular/common';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';
import { NgModule } from '@angular/core';
import { errorHandlingInterceptorProvierders } from './interceptors/error-handling.interceptor';

@NgModule({
  declarations: [ErrorMessagesPipe],
  imports: [CommonModule],
  exports: [ErrorMessagesPipe],
  providers: [errorHandlingInterceptorProvierders],
})
export class ExceptionModule {}
