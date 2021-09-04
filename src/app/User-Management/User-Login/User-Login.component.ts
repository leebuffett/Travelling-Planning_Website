import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-User-Login',
  templateUrl: './User-Login.component.html',
  styleUrls: ['./User-Login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const usernameToken = this.authService.authUser(loginForm.value);
    if(usernameToken){
      localStorage.setItem('token', usernameToken.username);
      this.alertify.success('Login Success');
      this.router.navigate(['/User-List']);
    }
    else
    {
      this.alertify.error('Login Failed');
    }
  }
}
