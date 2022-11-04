import { GetListBrandsRequest } from './../models/getListBrandsRequest';
import { GetListBrandsResponse } from '../models/getListBrandsResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  // contructor üzerinden injecte edilebilir
  providedIn: 'root', // root modülde tanımlanmıştır
})
export class BrandsService {
  private controllerUrl = `${environment.apiUrl}/brands`; // ALTGR + ,

  constructor(private httpClient: HttpClient) {}

  getList(
    pageRequest: GetListBrandsRequest
  ): Observable<GetListBrandsResponse> {
    // Observable bizim için gözlemlenebilir bir işlem olduğunu belirtir. Sekron işlemlerin sonucunu gözlemler ve sonucunda çeşitli event
    return this.httpClient.get<GetListBrandsResponse>(this.controllerUrl, {
      params: {
        // index: pageRequest.index,
        // size: pageRequest.number,
        // Spead Operator ile parçalayarak bu objeye yerleştirebiliriz.
        ...pageRequest,
      },
    });
  }
}
