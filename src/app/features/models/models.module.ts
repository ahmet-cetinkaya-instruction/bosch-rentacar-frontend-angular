import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ModelsListComponent, ModelCardComponent],
  imports: [CommonModule, ModelsRoutingModule, CoreModule, SharedModule],
  exports: [ModelsListComponent],
})
export class ModelsModule {}
