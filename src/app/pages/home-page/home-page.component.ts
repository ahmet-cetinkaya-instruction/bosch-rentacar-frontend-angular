import { Component, Input, OnInit } from '@angular/core';

import { title } from 'src/app/constants/seo';

@Component({
  // selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  title: string = title;

  // Method
  // getTitle(): string {
  // Getter
  get overlayText(): string {
    return 'Welcome to Bosch Rent A Car.';
  }

  constructor() {}

  ngOnInit(): void {}
}
