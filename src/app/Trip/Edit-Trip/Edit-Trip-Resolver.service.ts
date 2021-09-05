import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITrips } from '../ITrips';
import { TripsService } from '../Service/trips.service';

@Injectable({
  providedIn: 'root'
})
export class EditTripResolverService {

  constructor(private router: Router,private tripService: TripsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITrips>|any{
    const tripId = route.params['id'];
    return this.tripService.getTrip(+tripId).pipe(
      catchError(error => {
        this.router.navigate(['/User-List']);
        return of(null);
      })
    );
  }
}
