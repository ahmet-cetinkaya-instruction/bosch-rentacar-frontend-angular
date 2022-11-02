import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss'],
})
export class BrandsListComponent implements OnInit {
  brands: { name: string; discontinued: boolean }[] = [
    { name: 'BMW', discontinued: false },
    { name: 'Mercedes', discontinued: false },
    { name: 'Audi', discontinued: true },
    { name: 'Volkswagen', discontinued: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
