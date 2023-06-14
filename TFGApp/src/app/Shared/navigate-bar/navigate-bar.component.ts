import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../Routes/routes';

@Component({
  selector: 'app-navigate-bar',
  templateUrl: './navigate-bar.component.html',
  styleUrls: ['./navigate-bar.component.scss']
})
export class NavigateBarComponent {
  constructor(private _router:Router){}

  goToObjectives(){
    this._router.navigate([CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE])
  }
  goToGestor(){
    this._router.navigate([CONSTANTS.ROUTES.MENU.HOME])
  }
  goToSocial(){}
}
