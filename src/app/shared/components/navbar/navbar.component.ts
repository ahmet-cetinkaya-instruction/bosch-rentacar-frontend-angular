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
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    //: emit ile event'i tetikliyoruz.
    this.onLogout.emit(true);
  }
}
