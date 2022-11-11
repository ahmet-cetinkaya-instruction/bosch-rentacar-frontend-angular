import { Observable, Subject } from 'rxjs';
import {
  deleteAuthUser,
  setAuthUser,
} from 'src/app/shared/store/auth/auth.actions';

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
import { SharedStoreState } from 'src/app/shared/store/shared.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class JwtAuthService extends AuthServiceBase {
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private jwtHelperService: JwtHelperService,
    private store: Store<SharedStoreState>
  ) {
    super();
    this.authUser$ = this.store.select((state) => state.auth.authUser);
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
          this.setAuthUserStoreState();
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

  setAuthUserStoreState(): void {
    this.store.dispatch(setAuthUser({ authUser: this.authUser }));
  }

  deleteAuthUserStoreState(): void {
    this.store.dispatch(deleteAuthUser());
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

    const authUser = this.authUser;
    const isAuthroized: boolean = requiredClaims.some((requiredClaim) =>
      authUser.roles.includes(requiredClaim)
    );
    return isAuthroized;
  }

  get authUser(): AuthUser {
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
    return authUser;
  }

  logout(): void {
    this.localStorage.remove('accessToken');
    this.deleteAuthUserStoreState();
  }

  nextOnLoginEvent(value: boolean): void {
    this.onLogin.next(value);
  }
}
