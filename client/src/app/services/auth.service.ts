import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';

interface response {
  success: boolean;
  msg: string;
}


interface profile{
  user: {
    _id: string;
    name:string;
    email: string;
    username:string;
    password:string;
  
  }
  }

interface loginResponse {
  success: boolean;
  token: string;
  msg: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient,public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem("id_token");
    return !this.jwtHelper.isTokenExpired(token);
  }

  registerUser(user){
    let Header = new HttpHeaders();
    Header.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/register',user,{headers:Header})
    .pipe(map((res: response) => res )); 
  }

  loginUser(user){
    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/authenticate",user,{headers:header})
    .pipe(map((res: loginResponse ) => res));
  }

  storeUserData(token, user){
    localStorage.setItem("id_token",token);
    localStorage.setItem("user",JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders({'Authorization': this.authToken, 'Content-Type': 'application/json'});
    return this.http.get("http://localhost:3000/user/profile",{headers:headers})
    .pipe(map((res: any) => res ));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user= null;
    localStorage.clear();
  }
}
