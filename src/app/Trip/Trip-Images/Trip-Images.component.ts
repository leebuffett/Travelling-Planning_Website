import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Trip-Images',
  templateUrl: './Trip-Images.component.html',
  styleUrls: ['./Trip-Images.component.css']
})
export class TripImagesComponent implements OnInit {

  trips:Array<string> = ["Melaka", "Penang", "Orange"];

  constructor() {  }

  ngOnInit() {
  }

}
