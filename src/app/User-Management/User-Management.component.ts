import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-User-Management',
  templateUrl: './User-Management.component.html',
  styleUrls: ['./User-Management.component.css']
})
export class UserManagementComponent implements OnInit {

  users:any;
  p:number = 1;
  constructor(private http:HttpClient) { }

  ngOnInit():void {
    this.http.get('assets/data/users.json').subscribe(
      data=>{
        this.users=data;
      }
    );
  }

}
