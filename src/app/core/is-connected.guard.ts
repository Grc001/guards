import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  constructor (private router : Router, private userService : UserService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.userService.login()
     if (role != "USER"){
        this.router.navigate(['/homepage'])     
      return false
    }
    return true;
    
      
  }
}
