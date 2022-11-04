import { Component } from '@angular/core';
import { title } from './shared/constants/seo';

@Component({
  selector: 'app-root', // HTML'de kullanmak için component tag'ini tanımlar.
  templateUrl: './app.component.html', // HTML template'ini tanımlar.
  styleUrls: ['./app.component.scss'], // CSS template'ini tanımlar.
})
export class AppComponent {
  title: string = title; // State, Durum
}
