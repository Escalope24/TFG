import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';
import { BillsModalComponent } from '../bills-modal/bills-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/User/user-service.service';
import { CONSTANTS } from 'src/app/Routes/routes';
import { getAuth } from "firebase/auth";
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor( private _dialog:MatDialog, private _userService:UserServiceService, private _router:Router, private _homeService:HomeService){}
  auth = getAuth();
  user = this.auth.currentUser;
  userID:any|undefined;
  ngOnInit(): void {
      this.saveInLocalStorage();
      this.getUserData()
  }
  mockArray:DataGraphic[]=[
    {
      name:'Covid-19',
      value:100
    },
    {
      name:'Covid-20',
      value:200
    }
    ,
    {
      name:'Covid-21',
      value:300
    }
  ]

  openModal(module:string){
    if(module='a'){
      this._dialog.open(BillsModalComponent,{
        width:'100%',
        height:'100%'
      });
    }
  }
  logOut(){
    this._userService.logOut().then(()=>{
      this._goToInit()
    });
  }
  private _goToInit(){
    this._router.navigate([CONSTANTS.ROUTES.USER.USERMENU])
  }
  saveInLocalStorage(){
    if(this.user?.uid){
      localStorage.setItem('user',this.user?.uid)
    }
  }
  getUserData(){
    this.userID=localStorage.getItem('user');
  }
}
