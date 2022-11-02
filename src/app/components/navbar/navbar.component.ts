import { Component, OnInit } from '@angular/core';

import { title } from 'src/app/constants/seo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title: string = title;

  constructor() {}

  ngOnInit(): void {}
}
