import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';
import { BillsModalComponent } from '../bills-modal/bills-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/User/user-service.service';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor( private _dialog:MatDialog, private _userService:UserServiceService, private _router:Router){}
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
}
