import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(
    private ValidateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private _AuthService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this._AuthService.logout();
    this._flashMessagesService.show("Logout successfull.",{ cssClass: 'alert-success' });
    this._router.navigate(['/']);
  }

}
