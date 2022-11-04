import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandsRoutingModule } from './brands-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';

@NgModule({
  // Bazı Angular bileşenlerini HTML'de kullanmak için tanımlamak gerekir. Tanımlama ilgili modül geçerli olur.
  declarations: [BrandsListComponent],
  imports: [CommonModule, BrandsRoutingModule, CoreModule],
  // Bu modülde tanımlanan bileşenlerin başka modüller tarafından kullanılmasını sağlar.
  exports: [BrandsListComponent],
})
export class BrandsModule {}
