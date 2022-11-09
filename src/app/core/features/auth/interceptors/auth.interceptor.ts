import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { LocalStorageService } from './../../storage/services/local-storage.service';
import { Observable } from 'rxjs';

//: Http isteklerinin araya giren Angular bileşeni.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.localStorageService.get('accessToken');
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(newRequest);
  }
}

export const authInterceptorProvierders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
