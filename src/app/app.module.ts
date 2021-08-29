import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserManagementComponent } from './User-Management/User-List/User-List.component';
import { UsersService } from './User-Management/Service/users.service';
import { EditUserComponent } from './User-Management/Edit-User/Edit-User.component';

const appRoutes: Routes=[
  {path:'', component: UserManagementComponent},
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
      EditUserComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
