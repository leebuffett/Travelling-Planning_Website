import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagementComponent } from './User-Management/User-List/User-List.component';
import { UsersService } from './User-Management/Service/users.service';
import { EditUserComponent } from './User-Management/Edit-User/Edit-User.component';
import { AlertifyService } from './services/alertify.service';
import { UserLoginComponent } from './User-Management/User-Login/User-Login.component';
import { AuthService } from './User-Management/Service/auth.service';

const appRoutes: Routes=[
  {path:'', component: UserLoginComponent},
  {path:'User-List', component: UserManagementComponent},
  {path:'Edit-User/:id', component: EditUserComponent},
  {path:'Add-User', component: EditUserComponent},
  {path:'Trip-Planning', component: UserManagementComponent},
  {path:'Upload-Image', component: UserManagementComponent},
  {path:'User-List', component: UserManagementComponent},
  {path:'**', component: UserManagementComponent}
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      UserManagementComponent,
      EditUserComponent,
      UserLoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    UsersService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
