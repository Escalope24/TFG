import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-objectives-menu',
  templateUrl: './objectives-menu.component.html',
  styleUrls: ['./objectives-menu.component.scss']
})
export class ObjectivesMenuComponent {
  constructor(private _router:Router){}

  goToCreateObjective(){
    this._router.navigate([CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE_NEW])
  }
  goToObjectivesList(){
    this._router.navigate([CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE_LIST])
  }

}
