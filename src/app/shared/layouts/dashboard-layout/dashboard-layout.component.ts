import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  welcomeText: string = 'Welcome!';

  constructor() {}

  ngOnInit(): void {
    this.changeWelcomeText();
  }

  changeWelcomeText() {
    setTimeout(() => {
      this.welcomeText = 'Are you afk?';
    }, 15000);
  }
}
