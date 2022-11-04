import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [SpinnerLoadingComponent],
  imports: [CommonModule],
  exports: [SpinnerLoadingComponent],
})
export class CoreModule {}
