import { Observable, Subject } from 'rxjs';

import { AccessToken } from '../models/access-token';
import { AuthServiceBase } from './auth-service';
import { AuthUser } from '../models/auth-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtTokenPayload } from '../models/jwt-token-payload';
import { LocalStorageService } from './../../storage/services/local-storage.service';
import { LoginUserRequest } from '../models/login-user-request';
import { LoginUserResponse } from '../models/login-user-response';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthService extends AuthServiceBase {
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private jwtHelperService: JwtHelperService
  ) {
    super();
  }

  login(loginUserRequest: LoginUserRequest): Observable<LoginUserResponse> {
    const subject = new Subject<LoginUserResponse>();
    //: Subject ile subcribe olunabilir bir nesne oluşturuldu.

    this.httpClient
      .post<LoginUserResponse>(`${this.controllerUrl}/login`, loginUserRequest)
      .subscribe({
        next: (response) => {
          this.saveToken(response.accessToken);
          subject.next(response); //: Subject nesnesine response değeri gönderildi ve event tetiklendi.
          this.nextOnLoginEvent(true); //: Subject nesnesine response değeri gönderildi ve event tetiklendi.
        },
        error: (error) => {
          subject.error(error); //: Subject nesnesine error değeri gönderildi ve event tetiklendi.
        },
        complete: () => {
          subject.complete(); //: Subject nesnesine complete eventi tetiklendi.
        },
      });

    return subject.asObservable();
  }

  saveToken(accessToken: AccessToken): void {
    this.localStorage.set('accessToken', accessToken.token);
  }

  get isAuthenticated(): boolean {
    return !this.jwtHelperService.isTokenExpired();
  }

  isAuthroized(requiredClaims: string[]): boolean {
    if (!this.isAuthenticated) return false;
    if (requiredClaims.length === 0) return true;

    const decodedToken: JwtTokenPayload = this.jwtHelperService.decodeToken();
    const authUser: AuthUser = {
      id: Number(
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      ),
      name: decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      email:
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ],
      roles:
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ],
    };

    const isAuthroized: boolean = requiredClaims.some((requiredClaim) =>
      authUser.roles.includes(requiredClaim)
    );
    return isAuthroized;
  }

  logout(): void {
    this.localStorage.remove('accessToken');
  }

  nextOnLoginEvent(value: boolean): void {
    this.onLogin.next(value);
  }
}
