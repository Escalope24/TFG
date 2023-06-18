import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { UserServiceService } from 'src/app/User/user-service.service';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-mpevents',
  templateUrl: './mpevents.component.html',
  styleUrls: ['./mpevents.component.scss']
})
export class MPEventsComponent implements OnInit {

  constructor(private _socialService:SocialService, private _userService:UserServiceService, private _authService:AuthService){}
  users:any[]=[]
  ngOnInit(): void {
    this._userService.getUserFromDB().subscribe((users)=>{
      users.forEach((user)=>{
        if(user.id!=this._authService.getUserId()){
          this.users.push(user);
        }
      })
      console.log(this._authService.getUserId())
      console.log(this.users)
    })
  }
}
