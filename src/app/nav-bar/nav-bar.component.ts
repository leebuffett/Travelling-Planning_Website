import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Input() status:any

  constructor(private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  onlogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.alertify.success('Successful Logout');
  }
}
