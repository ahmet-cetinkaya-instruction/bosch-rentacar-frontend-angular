import { HttpStatusCode } from '@angular/common/http';

export interface ProblemDetails {
  Type: string;
  Title: string;
  Status: HttpStatusCode;
  Detail: string;
  Instance: string;
  Extensions: Extension;
}

export interface Extension {}
