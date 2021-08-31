import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoles } from '../IRoles';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-Edit-User',
  templateUrl: './Edit-User.component.html',
  styleUrls: ['./Edit-User.component.css']
})
export class EditUserComponent implements OnInit {
  public userId: number;
  registrationForm: FormGroup;

  public roles: Array<IRoles> = [];
  public roleId:number;

  constructor(private route:ActivatedRoute, private router:Router,private usersSevice: UsersService) { }

  ngOnInit() {
    this.GetRoleList();
    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, Validators.required),
      role: new FormControl('',Validators.required)
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

  get Role(){
    return this.registrationForm.get('role') as FormControl;
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
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
