import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Injectable } from '@angular/core';
import { ProblemDetails } from '../models/problem-details';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const problemDetails: ProblemDetails = error.error;

        switch (error.type) {
          default:
            this.toastrService.error(
              problemDetails.detail,
              problemDetails.title
            );
            break;
        }
      })
    );
  }
}
