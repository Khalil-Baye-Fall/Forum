import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(
    private authService: AuthServiceService,
    private route: Router,
  ) { }

  
  canActivate(): boolean {

    if (this.authService.loggedIn()){
      return true;
    }
    else{
      this.route.navigate(['login']);
      return false;
    }
  }
}
