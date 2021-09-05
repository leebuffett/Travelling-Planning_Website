import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITrips } from '../ITrips';
import { map } from 'rxjs/operators';
import { IStatus } from '../IStatus';
import { trip } from 'src/app/model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

constructor(private http:HttpClient) { }

getAllTrips(): Observable<ITrips[]>{
  return this.http.get('assets/data/trips.json').pipe(
    map(
      data=> {
        const trips: Array<ITrips> = [];

        for(const id in data){
          if(data.hasOwnProperty(id)){
            trips.push(data[id]);
          }
        }
        return trips;
      }
    )
  );
}

getAllStatus(): Observable<IStatus[]>{
  return this.http.get('assets/data/status.json').pipe(
    map(
      data=> {
        const status: Array<IStatus> = [];

        for(const id in data){
          if(data.hasOwnProperty(id)){
            status.push(data[id]);
          }
        }
        return status;
      }
    )
  );
}

getTrip(id: number){
  return this.getAllTrips().pipe(
    map(trip =>{
      return trip.find(u => u.TripId === id);
    })
  );
}

addTrip(trip: trip){
  let trips = [];
  if(localStorage.getItem('Trips')){
    trips = JSON.parse(localStorage.getItem('Trips'));
    trips = [trip,...trips];
  }
  else{
    trips=[trip];
  }
  localStorage.setItem('Trips',JSON.stringify(trips));
}

}
