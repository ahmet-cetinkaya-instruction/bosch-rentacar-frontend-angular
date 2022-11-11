import { EventEmitter } from '@angular/core';
import { LoginUserRequest } from '../models/login-user-request';
import { LoginUserResponse } from '../models/login-user-response';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AccessToken } from '../models/access-token';
import { environment } from 'src/environments/environment';
import { AuthUser } from '../models/auth-user';

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
  //! EventEmmiter: sadece child component'ten parent component'e veri & event göndermek için kullanılır.
  //! Güncellemeler de buna göre gerçekleştiliyor. component'lerde @Output ile kullanılması gerekiyor.
  //: Subject: event tetiklemek ve veri göndermek için kullanılır. Subject ile oluşturulan nesne Observable olarak kullanılabilir.
  //: Subject'te subscribe olduktan sonraki event'leri, beraberinde gelen verileri elde edebiliyoruz.
  onLogin = new Subject<boolean>();
  //: BehaviorSubject: Subject farklı olarak, bir başlangıça değerine sahiptir. Subscribe olduğu anda, Subjectin O ANKİ değeri elde edilebiliyor.

  authUser$!: Observable<AuthUser | null>;

  abstract login(
    loginUserRequest: LoginUserRequest
  ): Observable<LoginUserResponse>;
  abstract saveToken(accessToken: AccessToken): void;
  abstract get isAuthenticated(): boolean;
  abstract isAuthroized(requiredClaims: string[]): boolean;
  abstract logout(): void;
}
