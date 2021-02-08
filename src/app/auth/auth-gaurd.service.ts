import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGaurd implements CanActivate
{

  constructor(private authService: AuthServiceService)
  {

  }
  canActivate( route: ActivatedRouteSnapshot , state: RouterStateSnapshot )
  {

    return this.authService.IsAuth();
  }

}
