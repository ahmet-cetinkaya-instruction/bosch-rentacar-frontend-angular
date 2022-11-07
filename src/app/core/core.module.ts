import { CommonModule } from '@angular/common';
import { FilterObjectPipe } from './pipes/filter-object.pipe';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [SpinnerLoadingComponent, FilterObjectPipe],
  imports: [CommonModule],
  exports: [SpinnerLoadingComponent, FilterObjectPipe],
})
export class CoreModule {}
