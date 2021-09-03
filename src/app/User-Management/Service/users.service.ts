import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUsers } from '../IUsers';
import { Observable } from 'rxjs';
import { IRoles } from '../IRoles';
import { user } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http:HttpClient) { }

getAllUsers(): Observable<IUsers[]>{
  return this.http.get('assets/data/users.json').pipe(
    map(
      data=> {
        const users: Array<IUsers> = [];

        for(const id in data){
          if(data.hasOwnProperty(id)){
            users.push(data[id]);
          }
        }
        return users;
      }
    )
  );
}

getAllRoles(): Observable<IRoles[]>{
  return this.http.get('assets/data/roles.json').pipe(
    map(
      data=> {
        const roles: Array<IRoles> = [];

        for(const id in data){
          if(data.hasOwnProperty(id)){
            roles.push(data[id]);
          }
        }
        return roles;
      }
    )
  );
}

addUsers(user: user){
  let users = [];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('Users'));
    users = [user,...users];
  }
  else{
    users=[user];
  }
  localStorage.setItem('Users',JSON.stringify(users));
}
}
