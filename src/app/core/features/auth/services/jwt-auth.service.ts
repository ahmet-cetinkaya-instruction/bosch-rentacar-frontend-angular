import { AccessToken } from '../models/access-token';
import { AuthServiceBase } from './auth-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserRequest } from '../models/login-user-request';
import { LoginUserResponse } from '../models/login-user-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthService extends AuthServiceBase {
  constructor(private httpClient: HttpClient) {
    super();
  }

  login(loginUserRequest: LoginUserRequest): Observable<LoginUserResponse> {
    return this.httpClient.post<LoginUserResponse>(
      `${this.controllerUrl}/login`,
      loginUserRequest
    );
  }

  saveToken(accessToken: AccessToken): void {
    throw new Error('Method not implemented.');
  }

  get isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }

  isAuthroized(requiredClaims: string[]): boolean {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    throw new Error('Method not implemented.');
  }
}
