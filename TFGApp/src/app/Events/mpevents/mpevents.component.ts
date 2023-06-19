import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { UserServiceService } from 'src/app/User/user-service.service';
import { AuthService } from 'src/app/Auth/auth.service';
import { Events } from '../Models/events';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-mpevents',
  templateUrl: './mpevents.component.html',
  styleUrls: ['./mpevents.component.scss']
})
export class MPEventsComponent implements OnInit {

  constructor(private _socialService:SocialService, private _userService:UserServiceService, private _authService:AuthService, private _router:Router){}
  users:any[]=[];
  eventsUser:Events[]=[];
  showNavigationBar:boolean=false;
  ngOnInit(): void {
    this._socialService.getEvents().subscribe((events:Events[])=>{
      events.forEach((event)=>{
        if(event.idUser===this._authService.getUserId()){
          this.eventsUser.push(event);
        }
      })
    })
  }
  goToEvent(event:Events){
    this._router.navigate([CONSTANTS.ROUTES.EVENTS.EVENT], {queryParams:event})
  }
  goToCreateEvent(){
    this._router.navigate([CONSTANTS.ROUTES.EVENTS.CREATE_EVENT])
  }
  showNavigation(){
    this.showNavigationBar=true;

  }
  leaveNavigation(){
    this.showNavigationBar=false
  }
}
