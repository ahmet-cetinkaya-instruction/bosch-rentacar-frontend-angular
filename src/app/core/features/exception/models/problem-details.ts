import { HttpStatusCode } from '@angular/common/http';

export interface ProblemDetails {
  type: string;
  title: string;
  status: HttpStatusCode;
  detail: string;
  instance: string;
  extensions: Extension;
}

export interface Extension {}
