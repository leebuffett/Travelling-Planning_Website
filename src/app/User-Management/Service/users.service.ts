import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUsers } from '../IUsers';
import { Observable } from 'rxjs';

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
}
