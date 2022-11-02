import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand';

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
  selectedBrandName!: string;

  // private router: Router;
  // constructor(router: Router) {
  //   this.router = router;
  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSelectedBrand();
  }

  getSelectedBrand() {
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
}
