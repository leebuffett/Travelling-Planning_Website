import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { IRoles } from '../IRoles';
import { UsersService } from '../Service/users.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-Add-User',
  templateUrl: './Add-User.component.html',
  styleUrls: ['./Add-User.component.css']
})
export class AddUserComponent implements OnInit {

  registrationForm: FormGroup;

  public roles: Array<IRoles> = [];

  userSubmitted:boolean;
  user: user; //used when add new user.

  constructor(private route:ActivatedRoute,
     private router:Router,
     private usersSevice: UsersService,
     private fb:FormBuilder,
     private alertify: AlertifyService) { }

  ngOnInit() {
    this.GetRoleList();
    this.createUserForm();
    // this.registrationForm = new FormGroup({
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   confirmPassword: new FormControl(null, Validators.required),
    //   role: new FormControl('',Validators.required)
    // },this.passwordMatchingValidator);
  }

  createUserForm(){
    this.registrationForm = this.fb.group({
      username: [null, Validators.required],
      password:[null, [Validators.required, Validators.minLength(6)]],
      confirmPassword:[null, Validators.required],
      role:['',Validators.required]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  userData(): user{ //After submit, saving the user data
    return this.user = {
      username: this.Username.value,
      password: this.Password.value,
      role: this.Role.value
    }
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

  get Role(){
    return this.registrationForm.get('role') as FormControl;
  }
  onBack(){
    this.router.navigate(['/User-List']);
  }
  onSubmit(){
    this.userSubmitted = true;

    if(this.registrationForm.valid){
      this.usersSevice.addUsers(this.userData());
      this.userSubmitted = false;
      this.alertify.alert('Added user successfully ! !');
      this.router.navigate(['/User-List']);
    }
    else{
      this.alertify.error('You are required to fill up the form properly.');
    }
  }

  GetRoleList(){
    this.usersSevice.getAllRoles().subscribe(
      data=>{
        this.roles=data;
      },
      error=>{
        console.log(error);
      }
    );
  }
}
