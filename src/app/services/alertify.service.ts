import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

alert(message: string){
  alertify.alert(message);
}

success(message: string){
  alertify.success(message);
}

warning(message: string){
  alertify.warning(message);
}

error(message: string){
  alertify.error(message);
}
}
