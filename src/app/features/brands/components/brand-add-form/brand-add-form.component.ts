import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-brand-add-form',
  templateUrl: './brand-add-form.component.html',
  styleUrls: ['./brand-add-form.component.scss'],
})
export class BrandAddFormComponent implements OnInit {
  brandForm!: FormGroup; //: HTML'deki forms etiketine karşılık gelir.

  constructor(private formBuilder: FormBuilder) {
    //: FormGroup'ı oluşturmak, içindeki FormControl'leri oluşturmak ve bunları birbirine bağlamak için kullanılır.
    // this.brandForm = new FormGroup({
    //   name: new FormControl(''), //: HTML'deki input etiketine karşılık gelir.
    /*

      inputlar devam edebilir

    */
    // });
  }

  ngOnInit(): void {
    this.createBrandForm();
  }

  createBrandForm(): void {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      /*

      inputlar devam edebilir

      */
    });
  }

  add(): void {
    console.log(
      '🚀 ~ file: brand-add-form.component.ts ~ line 41 ~ BrandAddFormComponent ~ add ~ this.brandForm.value',
      this.brandForm
    );
    //todo: check validations
    //todo: add brand
  }
}
