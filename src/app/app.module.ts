import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsListComponent } from './components/brands-list/brands-list.component';
import { ModelsListComponent } from './components/models-list/models-list.component';
import { ModelCardComponent } from './components/model-card/model-card.component';

@NgModule({
  declarations: [
    // Bazı Angular bileşenlerini HTML'de kullanmak için tanımlamak gerekir.
    AppComponent,
    NavbarComponent,
    BrandsListComponent,
    ModelsListComponent,
    ModelCardComponent,
  ],
  imports: [
    // Angular modüllerini içeren bir dizi. Bu modüllerin bazıları, Angular'ın temel işlevlerini sağlar. Diğerleri, Angular'ın özelliklerini genişletir.
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [], // Dependency Injection
  bootstrap: [AppComponent], // AppModule'in başlangıçta çalıştıracağını component.
})
export class AppModule {}
