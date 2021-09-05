import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';



import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagementComponent } from './User-Management/User-List/User-List.component';
import { UsersService } from './User-Management/Service/users.service';
import { EditUserComponent } from './User-Management/Edit-User/Edit-User.component';
import { AlertifyService } from './services/alertify.service';
import { UserLoginComponent } from './User-Management/User-Login/User-Login.component';
import { AuthService } from './User-Management/Service/auth.service';
import { AddUserComponent } from './User-Management/Add-User/Add-User.component';
import { EditUserResolverService } from './User-Management/Edit-User/Edit-User-Resolver.service';
import { TripImagesComponent } from './Trip/Trip-Images/Trip-Images.component';
import { TripListComponent } from './Trip/Trip-List/Trip-List.component';
import { AddTripComponent } from './Trip/Add-Trip/Add-Trip.component';
import { EditTripComponent } from './Trip/Edit-Trip/Edit-Trip.component';
import { EditTripResolverService } from './Trip/Edit-Trip/Edit-Trip-Resolver.service';


const appRoutes: Routes=[
  {path:'', component: UserLoginComponent},
  {path:'User-List', component: UserManagementComponent},
  {path:'Trip-Images', component: TripImagesComponent},
  {path:'User-List', component: UserManagementComponent},
  {path:'Edit-User/:id', component: EditUserComponent, resolve:{userRS: EditUserResolverService}},
  {path:'Add-User', component: AddUserComponent},
  {path:'Trip-Planning', component: TripListComponent},
  {path:'Add-Trip', component: AddTripComponent},
  {path:'Edit-Trip/:id', component: EditTripComponent, resolve:{tripRS: EditTripResolverService}},
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
      UserLoginComponent,
      AddUserComponent,
      TripImagesComponent,
      TripListComponent,
      AddTripComponent,
      EditTripComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    UsersService,
    AlertifyService,
    AuthService,
    EditUserResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
