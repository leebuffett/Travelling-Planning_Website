import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = false;
  title = 'Travelling-Planning';

  clickEvent(){
    this.status = !this.status;
  }

  loggedin(){
    return localStorage.getItem('token');
  }
}
