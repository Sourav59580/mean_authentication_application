import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private ValidateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private _AuthService: AuthService,
    private _router: Router
    ) { }

  ngOnInit(): void {
  }
 
  onRegister(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Required fileds
    if(!this.ValidateService.validateRegister(user)){
      this._flashMessagesService.show("Please fill all the fields",{ cssClass: 'alert-danger' });
      return false;
    }

    // validate Email
    if(!this.ValidateService.validateEmail(user.email)){
      this._flashMessagesService.show("Please enter a valid email",{ cssClass: 'alert-danger' });
      return false;
    }

    // Register user
    this._AuthService.registerUser(user).subscribe(data => {
      if(data.success){
        this._flashMessagesService.show("You are registered and can log in",{ cssClass: 'alert-success' });
        this._router.navigate(['/login']);
      }else{
        this._flashMessagesService.show("Something went wrong!!",{ cssClass: 'alert-danger' });
      }
    })
  }
}
