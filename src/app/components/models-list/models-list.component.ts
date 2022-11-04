import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/models/model';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  models!: Model[];
  filteredModels: Model[] = this.models;

  constructor(private activatedRoute: ActivatedRoute) {
    // Class oluşturulurken çalışır.
  }

  ngOnInit(): void {
    // Component ilk defa çalıştırıldığında/yerleştirildiğinde/render'landığında çalışır.
    this.getModels();
    this.getSelectedBrand();
  }

  getModels(): void {
    // this.models = [
    //   {
    //     name: 'X5',
    //     brand: { name: 'BMW', discontinued: false },
    //     dailyPrice: 100,
    //   },
    //   {
    //     name: 'X6',
    //     brand: { name: 'BMW', discontinued: false },
    //     dailyPrice: 150,
    //   },
    //   {
    //     name: 'C200',
    //     brand: { name: 'Mercedes', discontinued: false },
    //     dailyPrice: 200,
    //   },
    //   {
    //     name: 'C180',
    //     brand: { name: 'Mercedes', discontinued: false },
    //     dailyPrice: 150,
    //   },
    //   {
    //     name: 'A6',
    //     brand: { name: 'Audi', discontinued: true },
    //     dailyPrice: 100,
    //   },
    //   {
    //     name: 'A8',
    //     brand: { name: 'Audi', discontinued: true },
    //     dailyPrice: 150,
    //   },
    //   {
    //     name: 'Passat',
    //     brand: { name: 'Volkswagen', discontinued: false },
    //     dailyPrice: 100,
    //   },
    //   {
    //     name: 'Golf',
    //     brand: { name: 'Volkswagen', discontinued: false },
    //     dailyPrice: 100,
    //   },
    // ];
  }

  getSelectedBrand(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName'])
        this.filteredModels = this.models.filter(
          (model) => model.brand.name === params['brandName']
        );
      else this.filteredModels = this.models;
    });
  }
}
