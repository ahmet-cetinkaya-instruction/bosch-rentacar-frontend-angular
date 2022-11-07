import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/features/brands/models/brand';
import { BrandsService } from 'src/app/features/brands/services/brands.service';
import { PaginatedList } from 'src/app/core/models/paginatedList';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss'],
})
export class BrandsListComponent implements OnInit {
  brandsPaginatedList!: PaginatedList<Brand>;
  selectedBrandName!: string;
  searchInput: string = '';

  // private router: Router;
  // constructor(router: Router) {
  //   this.router = router;
  // }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private brandsService: BrandsService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getSelectedBrand();
  }

  getBrands(): void {
    this.brandsService.getList({ index: 0, size: 99 }).subscribe((response) => {
      this.brandsPaginatedList = response;
    });
  }

  getSelectedBrand(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedBrandName = params['brandName'] || 'All';
    });
  }

  selectBrand(brand: Brand | 'All'): void {
    const isAll = typeof brand == 'string' && (brand as string) === 'All';
    const routeCommands: string[] = isAll
      ? ['/']
      : ['/brands', (brand as Brand).name];

    // this.selectedBrandName = isAll ? 'All' : (brand as Brand).name;
    this.router.navigate(routeCommands);
    // this.router.navigateByUrl(`/brands/${brand.name}`); // ALT+GR/CTRL+ALT + ,
  }

  // handleBrandSearch(event: any): void {
  //   debugger;
  //   console.log(
  //     '🚀 ~ file: brands-list.component.ts ~ line 56 ~ BrandsListComponent ~ handleBrandSearch ~ brandName',
  //     event
  //   ); // Turbo Console Log
  // }
}
