import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../Routes/routes';
import { UserServiceService } from 'src/app/User/user-service.service';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.scss']
})
export class NavigateBarComponent {
  constructor(private _router:Router, private _userService:UserServiceService){}

  goToObjectives(){
    this._router.navigate([CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE])
  }
  goToGestor(){
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  }
  goToSocial(){
    this._router.navigate([CONSTANTS.ROUTES.EVENTS.EVENTS_MENU])
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
