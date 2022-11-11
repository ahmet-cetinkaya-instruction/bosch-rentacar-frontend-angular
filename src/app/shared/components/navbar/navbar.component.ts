import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthServiceBase } from 'src/app/core/features/auth/services/auth-service';
import { title } from 'src/app/shared/constants/seo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = title;
  isLoggedIn: boolean = false;
  //: EventEmitter: child component'ten parent component'e veri & event göndermek için kullanılır.
  @Output() onLogout = new EventEmitter<boolean>();

  constructor(private authService: AuthServiceBase) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated;
    this.subscribeOnLogin();
  }

  subscribeOnLogin() {
    this.authService.onLogin.subscribe((isLoggedIn) => {
      console.log(
        '🚀 ~ file: navbar.component.ts ~ line 26 ~ NavbarComponent ~ this.authService.onLogin.subscribe ~ isLoggedIn',
        isLoggedIn
      );
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    //: emit ile event'i tetikliyoruz.
    this.onLogout.emit(true);
  }
}
