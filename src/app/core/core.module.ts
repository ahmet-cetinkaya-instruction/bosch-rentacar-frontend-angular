import { AuthModule } from './features/auth/auth.module';
import { CommonModule } from '@angular/common';
import { FilterObjectPipe } from './pipes/filter-object.pipe';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [SpinnerLoadingComponent, FilterObjectPipe],
  imports: [CommonModule, AuthModule],
  exports: [SpinnerLoadingComponent, FilterObjectPipe, LoginFormComponent],
})
export class CoreModule {}
