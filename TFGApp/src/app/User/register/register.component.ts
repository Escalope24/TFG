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
    username:new FormControl(),
    password:new FormControl()
  })
  user:any;
  constructor(private _userService:UserServiceService, private _router:Router){}
  get CONSTANTS(){
    return CONSTANTS;
  }
  ngOnInit(): void {
  
  }

  
  createUser(){
    this.user=this.formReg.value;
    let userDB:any={
      email:this.user.email,
      password:this.user.password
    }
    this._userService.register(userDB).then((resp)=>{
      this._insertUser(resp);
      this._goToApp()
    }).catch(error=>console.log(error));
  }

  private _goToApp(){[
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  ]}
  private _insertUser(idu:any){
    let userDb:any={
      id:idu.user.uid,
      userName:this.user.username,
      email:this.user.email,
      password:this.user.password
    }
    this._userService.insertUserDB(userDb)
  }

}
