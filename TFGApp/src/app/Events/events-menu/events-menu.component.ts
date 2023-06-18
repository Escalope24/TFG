import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-events-menu',
  templateUrl: './events-menu.component.html',
  styleUrls: ['./events-menu.component.scss']
})
export class EventsMenuComponent {
  constructor(private _router:Router){}
  goToCreateEvent(){
    this._router.navigate([CONSTANTS.ROUTES.EVENTS.CREATE_EVENT])
  }
  goToMainEvents(){
    this._router.navigate([CONSTANTS.ROUTES.EVENTS.SOCIAL])
  }
}
