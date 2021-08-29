import { Component, OnInit } from '@angular/core';
import { IUsers } from '../IUsers';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-User-Management',
  templateUrl: './User-List.component.html',
  styleUrls: ['./User-List.component.css']
})
export class UserManagementComponent implements OnInit {

  users:Array<IUsers>;
  p:number = 1;
  constructor(private usersSevice: UsersService) {
    this.users=[];
   }

  ngOnInit():void {
    this.usersSevice.getAllUsers().subscribe(
      data=>{
        this.users=data;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
