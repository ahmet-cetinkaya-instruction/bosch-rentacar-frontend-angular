import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
