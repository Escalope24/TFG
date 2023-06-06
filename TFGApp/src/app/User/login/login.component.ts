import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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

  logUser(){
    this._userService.login(this.formReg.value).then(()=>{
      this._goToApp()
    }).catch(error=>console.log(error));
  }

  private _goToApp(){[
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  ]}

}
