import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from "./auth.service";



@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceService {

  constructor(public auth: AuthService, public router: Router) { }

   token = localStorage.getItem('token');
   tokenPayload = decode(this.token);
   

}
