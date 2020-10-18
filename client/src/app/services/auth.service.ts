import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    let Header = new HttpHeaders();
    Header.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/user/register',user,{headers:Header})
    .pipe(map((response: any) => response.json()));
    
  }
}
