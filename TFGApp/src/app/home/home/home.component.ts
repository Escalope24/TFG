import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';
import { BillsModalComponent } from '../bills-modal/bills-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/User/user-service.service';
import { CONSTANTS } from 'src/app/Routes/routes';
import { getAuth } from "firebase/auth";
import { HomeService } from '../home.service';
import { BillsHeaders, TableModels } from '../Models/table-models';
import { SavingModalComponent } from '../saving-modal/saving-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  constructor( private _dialog:MatDialog, private _userService:UserServiceService, private _router:Router, private _homeService:HomeService){
    this.dataBills=[]
  }
  auth = getAuth();
  user = this.auth.currentUser;
  userID:any|undefined;
  username?:string;
  dataBills:TableModels[];
  bills:DataGraphic[]=[];
  headers:BillsHeaders[]=[];
  types?:string[];
  ngOnInit(): void {
      this.saveInLocalStorage();
      this.getUserData();
      this.getUser();
      this.getBills();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  openModal(module:string){
    if(module==='a'){
      this._dialog.open(BillsModalComponent,{
        width:'100%',
        height:'100%'
      });
    }
    else if(module==="b"){
      this._dialog.open(SavingModalComponent,{
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
      resp.forEach((users)=>{
        if(users.id===this.userID){
          this.username=users
        }
      })
    })
  }
  goToUserInfo(){
    this._router.navigate([CONSTANTS.ROUTES.SHARED.USER_INFO])
  }
  getBills(){
    this._homeService.getBills().subscribe((resp)=>{
      resp.forEach((bill)=>{
        if(bill.idUser==bill.idUser){
          this.fillData(bill)
        }
      })
    })
  }
  private fillData(data:TableModels){
    let isNew:boolean=false;
    if(this.bills.length>0){
      this.bills.filter((bill)=>{
        if(bill.name==data.tipo){
          isNew=true;
        }
      })
      if(isNew){
        this.bills.forEach((bill)=>{
          if(bill.name===data.tipo){
            bill.value=bill.value+data.cantidad
          }
        })
      }else{
        this.bills.push({name:data.tipo, value:data.cantidad})
      }
    }else{
      this.bills.push({name:data.tipo, value:data.cantidad})
    }
  }

}
