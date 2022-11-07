import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { BrandsService } from '../../services/brands.service';
import { CreateBrandRequest } from '../../models/create-brand-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-add-form',
  templateUrl: './brand-add-form.component.html',
  styleUrls: ['./brand-add-form.component.scss'],
})
export class BrandAddFormComponent implements OnInit {
  brandForm!: FormGroup; //: HTML'deki forms etiketine karşılık gelir.

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandsService,
    private toastrService: ToastrService
  ) {
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
      name: [
        '', // Varsayılan değerimiz
        [Validators.required, Validators.minLength(2)], // Validators
      ],
      /*

      inputlar devam edebilir

      */
    });
  }

  add(): void {
    if (this.brandForm.invalid) {
      this.toastrService.error('Form is invalid');
      return;
    }

    const request: CreateBrandRequest = {
      name: this.brandForm.value.name,
    };
    this.brandService.add(request).subscribe({
      error: (error) => {
        if (error.error.Errors)
          error.error.Errors.forEach((error: any) => {
            this.toastrService.error(error.ErrorMessage, 'Validation Error');
          });
      },
      complete: () => {
        this.toastrService.info('Brand added');
      },
    });
  }
}
