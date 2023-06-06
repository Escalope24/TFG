import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formReg:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private _userService:UserServiceService, private _router:Router){}
  get CONSTANTS(){
    return CONSTANTS;
  }
  ngOnInit(): void {
  
  }

  createUser(){
    this._userService.register(this.formReg.value).then(()=>{
      this._goToApp()
    }).catch(error=>console.log(error));
  }

  private _goToApp(){[
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  ]}

}
