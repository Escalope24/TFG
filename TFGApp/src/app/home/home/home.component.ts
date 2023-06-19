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
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  constructor( private _dialog:MatDialog, private _userService:UserServiceService, private _router:Router, private _homeService:HomeService, private _auth:AuthService){
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
  loadGraphic:boolean=false
  ngOnInit(): void {
      this.saveInLocalStorage();
      this.getUserData();
      this.getUser();
      this.getBills();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  openModal(module:string){
    this.loadGraphic=false;
    if(module==='a'){
      this._dialog.open(BillsModalComponent,{
        width:'100%',
        height:'100%',
        
      },
      );
      this._dialog.afterAllClosed.subscribe(()=>{
        this.getBills();
      })      
    }
    else if(module==="b"){
      this._dialog.open(SavingModalComponent,{
        width:'100%',
        height:'100%'
      });
      this._dialog.afterAllClosed.subscribe(()=>{
        this.getBills();
      })  
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
          this.username=users.userName
        }
      })
    })
  }
  getBills(){
    this.loadGraphic=false
    this._homeService.getBills().subscribe((resp)=>{
      this.bills=[]
      const year=new Date().getFullYear()
      const month=new Date().getMonth()+1
      resp.forEach((bill)=>{
        let date=bill.fecha.split('-')
        if(month<10){
          if(bill.idUser===this._auth.getUserId() && date[0]===year.toString() && date[1]==='0'+month){
            this.fillData(bill)
          }
        }else{
          if(bill.idUser===this._auth.getUserId() && date[0]===year.toString() && date[1]===month.toString()){
            this.fillData(bill)
          }
        }
      })
      this.loadGraphic=true;
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
