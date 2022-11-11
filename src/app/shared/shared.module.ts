import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MainLayoutComponent, DashboardLayoutComponent, DashboardSidebarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent, FooterComponent, MainLayoutComponent],
})
export class SharedModule {}
