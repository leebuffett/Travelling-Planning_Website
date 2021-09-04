import { Injectable } from '@angular/core';
import { UserLoginComponent } from '../User-Login/User-Login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any){
  let userArray=[];
  if(localStorage.getItem('Users')){
    userArray = JSON.parse(localStorage.getItem('Users'));
  }
  return userArray.find(u => u.username === user.username && u.password === user.password);
}
}
