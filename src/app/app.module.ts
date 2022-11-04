import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';

@NgModule({
  declarations: [
    // Bazı Angular bileşenlerini HTML'de kullanmak için tanımlamak gerekir.
    AppComponent,
    NavbarComponent,
    BrandsListComponent,
    ModelsListComponent,
    ModelCardComponent,
    HomePageComponent,
    LoginPageComponent,
    SpinnerLoadingComponent,
  ],
  imports: [
    // Angular modüllerini içeren bir dizi. Bu modüllerin bazıları, Angular'ın temel işlevlerini sağlar. Diğerleri, Angular'ın özelliklerini genişletir.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [], // Dependency Injection
  bootstrap: [AppComponent], // AppModule'in başlangıçta çalıştıracağını component.
})
export class AppModule {}
