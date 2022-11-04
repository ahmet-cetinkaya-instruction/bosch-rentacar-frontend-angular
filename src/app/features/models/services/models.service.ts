import { GetListModelsByBrandNameRequest } from '../models/GetListModelsByBrandNameRequest';
import { GetListModelsRequest } from '../models/GetListModelsRequest';
import { GetListModelsResponse } from '../models/GetListModelsResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  private controllerUrl = `${environment.apiUrl}/models`;

  constructor(private httpClient: HttpClient) {}

  getList(request: GetListModelsRequest): Observable<GetListModelsResponse> {
    return this.httpClient.get<GetListModelsResponse>(this.controllerUrl, {
      params: {
        ...request,
      },
    });
  }

  getListByBrandName(
    request: GetListModelsByBrandNameRequest
  ): Observable<GetListModelsResponse> {
    return this.httpClient.get<GetListModelsResponse>(
      `${this.controllerUrl}/byBrandName`,
      {
        params: {
          ...request,
        },
      }
    );
  }
}
