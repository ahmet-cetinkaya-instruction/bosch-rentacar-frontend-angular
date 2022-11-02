import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  models: {
    name: string;
    brand: { name: string; discontinued: boolean };
    dailyPrice: number;
  }[] = [
    {
      name: 'X5',
      brand: { name: 'BMW', discontinued: false },
      dailyPrice: 100,
    },
    {
      name: 'X6',
      brand: { name: 'BMW', discontinued: false },
      dailyPrice: 150,
    },
    {
      name: 'C200',
      brand: { name: 'Mercedes', discontinued: false },
      dailyPrice: 200,
    },
    {
      name: 'C180',
      brand: { name: 'Mercedes', discontinued: false },
      dailyPrice: 150,
    },
    {
      name: 'A6',
      brand: { name: 'Audi', discontinued: true },
      dailyPrice: 100,
    },
    {
      name: 'A8',
      brand: { name: 'Audi', discontinued: true },
      dailyPrice: 150,
    },
    {
      name: 'Passat',
      brand: { name: 'Volkswagen', discontinued: false },
      dailyPrice: 100,
    },
    {
      name: 'Golf',
      brand: { name: 'Volkswagen', discontinued: false },
      dailyPrice: 100,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
