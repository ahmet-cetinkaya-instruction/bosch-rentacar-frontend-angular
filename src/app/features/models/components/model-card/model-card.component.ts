import { Component, Input, OnInit } from '@angular/core';

import { ListModel } from 'src/app/features/models/models/listModel';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss'],
})
export class ModelCardComponent implements OnInit {
  // model: {
  //   name: string;
  //   brand: { name: string; discontinued: boolean };
  //   dailyPrice: number;
  // } // inline interface

  // ?: Undefined olabilir
  // Null programcının geçtiği bir değerdir, dolayısıyla bir tip olarak değerlendirlir.
  // Undefined ise, çalışma anında veya programcının geçtiği bir değer olmadığı anlamına gelir.

  // !: Normalde undefined olmayacağını, kullanmandan önce burayı initilize edeceğimize veya atama yapacağımıza dair bir söz veriyoruz.
  @Input() model!: ListModel;
  // @Input() dışarıdan gelen bir değerdir.

  constructor() {}

  ngOnInit(): void {
    // Number, decimal, 200,00 -> 200.00
    this.model.dailyPrice = Number(
      this.model.dailyPrice.toString().replace(',', '.')
    );
  }

  convertToNumber(value: string): string {
    return Number(value).toString();
  }
}
