import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthServiceBase } from '../services/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

//: Routing'de araya giren Angular bileşeni.
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceBase,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //: Eğer kullanıcı girişini kontrol ediyoruz.
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login']);
      this.toastrService.error('You have to login to access this page.');
      return false;
    }

    //: Kullanıcının yetkisi var mı kontrol ediyoruz.
    const reqiredRoles: string[] = (route.data['roles'] as string[]) || [];
    const isAuthorized = this.authService.isAuthroized(reqiredRoles);
    if (!isAuthorized) {
      this.toastrService.error('You are not authorized to access this page.');
      return false;
    }

    return true;
    //: true döndürürsek, kullanıcı bu rotaya gidebilir.
    //: false döndürürsek, kullanıcı bu rotaya gidemez.
  }
}
