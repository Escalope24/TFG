import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private _router:Router, private _userService:UserServiceService){}

  goToLogin(){
    this._router.navigate([CONSTANTS.ROUTES.USER.LOGIN])
  }
  goToRegister(){
    this._router.navigate([CONSTANTS.ROUTES.USER.REGISTER])
  }
  signInWithGoogle(){
    this._userService.logInGoogle().then(()=>this._goToHome())
  }
  private _goToHome(){
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  }

}
