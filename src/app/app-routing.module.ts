import { RouterModule, Routes } from '@angular/router';

import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  // : ile başlayan bir path parametresi olduğunu belirtir.
  { path: 'brands/:brandName', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    children: [{ path: 'brands/add', component: BrandFormPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
