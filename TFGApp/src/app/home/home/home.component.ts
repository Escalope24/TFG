import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';
import { BillsModalComponent } from '../bills-modal/bills-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/User/user-service.service';
import { CONSTANTS } from 'src/app/Routes/routes';
import { getAuth } from "firebase/auth";
import { HomeService } from '../home.service';
import { BillsHeaders, TableModels } from '../Models/table-models';

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
  username?:string;
  dataBills:TableModels[]=[];
  bills:DataGraphic[]=[];
  headers:BillsHeaders[]=[];
  ngOnInit(): void {
      this.saveInLocalStorage();
      this.getUserData();
      this.getUser()
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


  saveInLocalStorage(){
    if(this.user?.uid){
      localStorage.setItem('user',this.user?.uid)
    }
  }
  getUserData(){
    this.userID=localStorage.getItem('user');
  }
  getUser(){
    this._userService.getUserFromDB().subscribe((resp)=>{
      this.username=resp[1].userName
      console.log(resp[0].username)
      console.log(resp)
    })
  }
  goToUserInfo(){
    this._router.navigate([CONSTANTS.ROUTES.SHARED.USER_INFO])
  }
  getAllBills(){
    this._homeService.getBills().subscribe((resp)=>{
      this.dataBills=resp;
    });
    this._homeService.getHeaders().subscribe((resp)=>{
      this.headers=resp;
    })
  }
  private _fillData(){
    this.dataBills.forEach((bill:TableModels)=>{
      this.bills.push({
        name:bill.tipo,
        value:bill.cantidad
      });
    });
  }
  
}
