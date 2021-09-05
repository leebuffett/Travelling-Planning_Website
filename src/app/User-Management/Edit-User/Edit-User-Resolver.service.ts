import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUsers } from '../IUsers';
import { UsersService } from '../Service/users.service';

@Injectable({
  providedIn: 'root'
})
export class EditUserResolverService implements Resolve<IUsers>{

constructor(private router: Router,private userService: UsersService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUsers>|any{
  const userId = route.params['id'];
  return this.userService.getUser(+userId).pipe(
    catchError(error => {
      this.router.navigate(['/User-List']);
      return of(null);
    })
  );
}
}
