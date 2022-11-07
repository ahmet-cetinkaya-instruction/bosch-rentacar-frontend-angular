import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrandAddFormComponent } from './components/brand-add-form/brand-add-form.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrandsRoutingModule } from './brands-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';

@NgModule({
  // Bazı Angular bileşenlerini HTML'de kullanmak için tanımlamak gerekir. Tanımlama ilgili modül geçerli olur.
  declarations: [BrandsListComponent, BrandAddFormComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // Bu modülde tanımlanan bileşenlerin başka modüller tarafından kullanılmasını sağlar.
  exports: [BrandsListComponent, BrandAddFormComponent],
})
export class BrandsModule {}
