import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandFormPageComponent } from './pages/brand-form-page/brand-form-page.component';
import { BrandsModule } from './features/brands/brands.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ModelsModule } from './features/models/models.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    // Bazı Angular bileşenlerini HTML'de kullanmak için tanımlamak gerekir.
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    BrandFormPageComponent,
  ],
  imports: [
    // Angular modüllerini içeren bir dizi. Bu modüllerin bazıları, Angular'ın temel işlevlerini sağlar. Diğerleri, Angular'ın özelliklerini genişletir.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    SharedModule,
    BrandsModule,
    ModelsModule,
  ],
  providers: [], // Dependency Injection
  bootstrap: [AppComponent], // AppModule'in başlangıçta çalıştıracağını component.
})
export class AppModule {}
