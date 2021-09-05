import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { trip } from 'src/app/model/trip';
import { AlertifyService } from 'src/app/services/alertify.service';
import { IStatus } from '../IStatus';
import { TripsService } from '../Service/trips.service';

@Component({
  selector: 'app-Add-Trip',
  templateUrl: './Add-Trip.component.html',
  styleUrls: ['./Add-Trip.component.css']
})
export class AddTripComponent implements OnInit {
  tripForm: FormGroup;

  public status: Array<IStatus> = [];

  tripSubmitted:boolean;
  trip: trip; //used when add new trip.

  numberRegEx = /^[0-9]+$/i;          //     ^         Start of string
                                      //     [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
                                      //      +         one or more times (change to * to allow empty string)
                                      //      $         end of string
                                      //      /i        case-insensitive

  constructor(private route:ActivatedRoute,
     private router:Router,
     private tripService: TripsService,
     private fb:FormBuilder,
     private alertify: AlertifyService) { }

  ngOnInit() {
    this.GetStatusList();
    this.createUserForm();
  }

  createUserForm(){
    this.tripForm = this.fb.group({
      tripTitle: [null, Validators.required],
      budget:[null, [Validators.required, Validators.pattern(this.numberRegEx)]],
      description:[null, Validators.required],
      startDate:[null, Validators.required],
      endDate:[null,Validators.required],
      status:['',Validators.required]
    }, {validators: this.dateCompare});
  }

  dateCompare(fg: FormGroup):Validators{
    return fg.get('startDate').value <= fg.get('endDate').value ? null : {notmatched: true};
  }

  tripData(): trip{             //After submit, saving the trip data
    return this.trip = {
      TripTitle: this.TripTitle.value,
      Budget: this.Budget.value,
      Description: this.Description.value,
      StartDate: this.StartDate.value,
      EndDate: this.EndDate.value,
      Status: this.Status.value
    }
  }

  get TripTitle(){
    return this.tripForm.get('tripTitle') as FormControl;
  }

  get Budget(){
    return this.tripForm.get('budget') as FormControl;
  }

  get Description(){
    return this.tripForm.get('description') as FormControl;
  }

  get StartDate(){
    return this.tripForm.get('startDate') as FormControl;
  }

  get EndDate(){
    return this.tripForm.get('endDate') as FormControl;
  }

  get Status(){
    return this.tripForm.get('status') as FormControl;
  }

  onBack(){
    this.router.navigate(['/Trip-Planning']);
  }

  onSubmit(){
    this.tripSubmitted = true;

    if(this.tripForm.valid){
      this.tripService.addTrip(this.tripData());
      this.tripSubmitted = false;
      this.alertify.alert('New trip added successfully ! !');
      this.router.navigate(['/Trip-Planning']);
    }
    else{
      this.alertify.error('You are required to fill up the form properly.');
    }
  }

  GetStatusList(){
    this.tripService.getAllStatus().subscribe(
      data=>{
        this.status=data;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
