import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Saves, TypeOfBill } from '../Models/table-models';
import { UserServiceService } from 'src/app/User/user-service.service';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-saving-modal',
  templateUrl: './saving-modal.component.html',
  styleUrls: ['./saving-modal.component.scss']
})
export class SavingModalComponent implements OnInit {
  formReg:FormGroup=new FormGroup({
    date:new FormControl(),
    type:new FormControl(),
    value:new FormControl(),
    idUser:new FormControl(this._auth.getUserId())
  });
  saves:Saves[]=[];
  insertSave?:Saves;
  types:TypeOfBill[]=[];

    constructor(
      private _homeService:HomeService,
      private _auth:AuthService
    ){}

    ngOnInit(): void {
        this._homeService.getSavesTypes().subscribe((resp)=>{
          this.types=resp;
        })
        this.getAllSaves();
    }
    getAllSaves(){
      this.saves=[]
      this._homeService.getSaves().subscribe((resp:Saves[])=>{
        resp.forEach((save)=>{
          if(save.idUser=this._auth.getUserId()){
            this.saves.push(save);
          }
        })
      })
      console.log(this.saves.push);
    }
    fillForm(){
      this.insertSave=this.formReg.value;
      if(this.insertSave){
        this._homeService.insertSaves(this.insertSave);
      }
      this.saves=[];
      console.log(this.saves)
    }
}
