import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../shared/permission.service';

@Injectable({
  providedIn: 'root'
})
export class RoutePermissionGuard implements CanActivate {

  constructor(private service: PermissionService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.service.token) {
        return true;
      }
      this.router.navigate(['/login'])
      return false;
  }

}
