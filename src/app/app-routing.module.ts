import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/features/auth/guards/auth.guard';
import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  //: ':' ile başlayan bir path parametresi olduğunu belirtir.
  { path: 'brands/:brandName', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'brands/add',
        component: BrandFormPageComponent,
        data: { roles: ['brands.add'] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
