import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // HTML'de kullanmak için component tag'ini tanımlar.
  templateUrl: './app.component.html', // HTML template'ini tanımlar.
  styleUrls: ['./app.component.scss'], // CSS template'ini tanımlar.
})
export class AppComponent {
  title: string = 'bosch-rentacar-frontend-angular'; // State, Durum

  getTitle(): string {
    return 'Bosch Rent A Car';
  }
}
