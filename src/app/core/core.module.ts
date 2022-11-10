import { AuthModule } from './features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { ErrorMessagesPipe } from './features/exception/pipes/error-messages.pipe';
import { ExceptionModule } from './features/exception/exception.module';
import { FilterObjectPipe } from './pipes/filter-object.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { MultipleDirective } from './shared/directives/app-multiple.directive';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { StorageModule } from './features/storage/storage.module';

@NgModule({
  declarations: [SpinnerLoadingComponent, FilterObjectPipe],
  imports: [
    CommonModule,
    AuthModule,
    ExceptionModule,
    StorageModule,
    SharedModule,
  ],
  exports: [
    SpinnerLoadingComponent,
    FilterObjectPipe,
    LoginFormComponent,
    ErrorMessagesPipe,
    HighlightDirective,
    MultipleDirective,
  ],
})
export class CoreModule {}
