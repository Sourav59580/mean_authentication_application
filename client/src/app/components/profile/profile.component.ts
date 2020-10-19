import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private _AuthService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._AuthService.getProfile().subscribe( profile =>{ 
      console.log(profile)
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    })
  }

}
