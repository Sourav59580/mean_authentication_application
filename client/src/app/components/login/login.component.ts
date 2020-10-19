import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private _ValidateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private _AuthService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const user = {
      username: this.username,
      password: this.password
    }

    // Validate login
    if(!this._ValidateService.validateLogin(user)){
      this._flashMessagesService.show("Please fill all the fields",{ cssClass: 'alert-danger' });
      return false;
    }

    this._AuthService.loginUser(user).subscribe(data => {
      if(data.success){
        this._AuthService.storeUserData(data.token,data.user);
        this._flashMessagesService.show("You are now logged in.",{ cssClass: 'alert-success' });
        this._router.navigate(['/dashboard']);
      }else{
        this._flashMessagesService.show(data.msg,{ cssClass: 'alert-danger' });
        this._router.navigate(['/login']);
      }
    })
    
  }

}
