import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ListModel } from 'src/app/features/models/models/listModel';
import { ModelsService } from 'src/app/features/models/services/models.service';
import { PaginatedList } from 'src/app/core/models/paginatedList';
import { GetListModelsByBrandNameRequest } from '../../models/GetListModelsByBrandNameRequest';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss'],
})
export class ModelsListComponent implements OnInit {
  models!: PaginatedList<ListModel>;
  // filteredModels: Model[] = this.models;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modelsService: ModelsService
  ) {
    // Class oluşturulurken çalışır.
  }

  ngOnInit(): void {
    // Component ilk defa çalıştırıldığında/yerleştirildiğinde/render'landığında çalışır.
    this.getSelectedBrand();
  }

  getModels(page: number, size: number): void {
    this.modelsService
      .getList({ index: page - 1, size })
      .subscribe((response) => {
        this.models = response;
      });
  }

  getModelsByBrandName(request: GetListModelsByBrandNameRequest): void {
    this.modelsService.getListByBrandName(request).subscribe((response) => {
      this.models = response;
    });
  }

  getSelectedBrand(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName'])
        this.getModelsByBrandName({
          index: 0,
          size: 10,
          brandName: params['brandName'],
        });
      else this.getModels(1, 10);
    });
  }
}
