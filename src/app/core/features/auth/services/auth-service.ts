import { LoginUserRequest } from '../models/login-user-request';
import { LoginUserResponse } from '../models/login-user-response';
import { Observable } from 'rxjs';
import { AccessToken } from '../models/access-token';
import { environment } from 'src/environments/environment';

export interface AuthService {
  // register
  login(loginUserRequest: LoginUserRequest): Observable<LoginUserResponse>;
  saveToken(accessToken: AccessToken): void;
  get isAuthenticated(): boolean;
  isAuthroized(requiredClaims: string[]): boolean;
  logout(): void;
  // getUserDetails
}

export abstract class AuthServiceBase implements AuthService {
  protected controllerUrl = `${environment.apiUrl}/auth`;

  abstract login(
    loginUserRequest: LoginUserRequest
  ): Observable<LoginUserResponse>;
  abstract saveToken(accessToken: AccessToken): void;
  abstract get isAuthenticated(): boolean;
  abstract isAuthroized(requiredClaims: string[]): boolean;
  abstract logout(): void;
}
