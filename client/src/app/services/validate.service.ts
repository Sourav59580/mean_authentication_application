import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // Validate user
  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined ){
      return false;
    }else{
      return true;
    }
  }

  // Validate email
  validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

  // validate login user
  validateLogin(user){
    if(user.username==undefined || user.password == undefined){
      return false;
    }else{
      return true;
    }
  }


}
