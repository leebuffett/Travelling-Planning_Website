import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user';
import { IUsers } from '../IUsers';
import { IRoles } from '../IRoles';
import { UsersService } from '../Service/users.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-Edit-User',
  templateUrl: './Edit-User.component.html',
  styleUrls: ['./Edit-User.component.css']
})
export class EditUserComponent implements OnInit {
  public userId: number;
  registrationForm: FormGroup;

  public roles: Array<IRoles> = [];

  userSubmitted:boolean;
  user: user; //used when add new user.

  property = {} as IUsers; // instantiate new interface class

  constructor(private route:ActivatedRoute,
     private router:Router,
     private usersSevice: UsersService,
     private fb:FormBuilder,
     private alertify: AlertifyService)
    { }

  ngOnInit() {
    this.userId = +this.route.snapshot.params['id']; // plus is int
    this.route.data.subscribe(
      (data: IUsers) =>{
        this.property = data['userRS'];
      }
    )
    // this.usersSevice.getUser(this.userId).subscribe(
    //   (data: IUsers) => {
    //     this.property = data;
    //   },error=>{
    //     console.log(error);
    //   },()=>{
    //     this.registrationForm.removeControl('role');
    //     this.registrationForm.addControl('role',new FormControl(this.property.RoleId, Validators.required));
    //   }
    // )
    this.GetRoleList();
    this.createUserForm();
  }

  createUserForm(){
    this.registrationForm = this.fb.group({
      password:[null, [Validators.required, Validators.minLength(6)]],
      confirmPassword:[null, Validators.required],
      role:[this.property.RoleId,Validators.required]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  userData(): user{ //After submit, saving the user data
    return this.user = {
      username: this.property.Username,
      password: this.Password.value,
      role: this.property.RoleId===1? this.Role.value: this.property.RoleId
    }
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
    console.log(this.registrationForm)
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
