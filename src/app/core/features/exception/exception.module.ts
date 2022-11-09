import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesPipe } from './pipes/error-messages.pipe';



@NgModule({
  declarations: [
    ErrorMessagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessagesPipe
  ]
})
export class ExceptionModule { }
