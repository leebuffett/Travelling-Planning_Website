import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Edit-User',
  templateUrl: './Edit-User.component.html',
  styleUrls: ['./Edit-User.component.css']
})
export class EditUserComponent implements OnInit {
  public userId: number;
  registrationForm: FormGroup;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, Validators.required),
    },this.passwordMatchingValidator);

    if(!this.route.snapshot.url.toString().match("Add-User")){
      this.userId = this.route.snapshot.params['id'];
      console.log(this.userId);
    }
  }

  passwordMatchingValidator(fg: FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  get Username(){
    return this.registrationForm.get('username') as FormControl;
  }

  get Password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get ConfirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){

  }
}
