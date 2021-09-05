import { Component, OnInit } from '@angular/core';
import { ITrips } from '../ITrips';
import { TripsService } from '../Service/trips.service';

@Component({
  selector: 'app-Trip-List',
  templateUrl: './Trip-List.component.html',
  styleUrls: ['./Trip-List.component.css']
})
export class TripListComponent implements OnInit {

  trips:Array<ITrips>;
  p:number = 1;
  constructor(private tripService: TripsService) {
    this.trips=[];
   }

  ngOnInit():void {
    this.tripService.getAllTrips().subscribe(
      data=>{
        this.trips=data;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
