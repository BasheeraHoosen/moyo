import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router){}

  canActivate() {
      if(this.service.isLoggedIn == true) {
        return true;
      }
      else
       this.router.navigateByUrl('login');
       return false;
      }
}
