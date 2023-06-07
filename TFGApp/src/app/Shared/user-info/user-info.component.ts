import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';
import { UserServiceService } from 'src/app/User/user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  constructor(private _router:Router, private _userService:UserServiceService){}
  goToMainPage(){
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  }
  logOut(){
    this._userService.logOut().then(()=>{
      this._goToInit()
    });
  }
  private _goToInit(){
    this._router.navigate([CONSTANTS.ROUTES.USER.USERMENU])
  }
}
