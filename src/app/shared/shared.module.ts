import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedStoreState } from './store/shared.state';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './store/shared.reducers';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    DashboardSidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    StoreModule.forRoot<SharedStoreState>(sharedReducers),
  ],
  exports: [NavbarComponent, FooterComponent, MainLayoutComponent],
})
export class SharedModule {}
