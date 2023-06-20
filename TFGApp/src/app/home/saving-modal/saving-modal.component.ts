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
  minDate:string=''
  maxDate:string=''
  saves:Saves[]=[];
  insertSave?:Saves;
  types:TypeOfBill[]=[];

    constructor(
      private _homeService:HomeService,
      private _auth:AuthService
    ){}

    ngOnInit(): void {
      const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
    const date=new Date().getDate();
    if(month<10){

      this.minDate=year+'-'+0+month+'-'+date
      this.maxDate=year+'-'+0+month+'-'+this.getLastDayOfMonth(new Date())
    }else{
      this.minDate=year+'-'+month+'-'+date
      this.maxDate=year+'-'+month+'-'+this.getLastDayOfMonth(new Date())
    }
        this._homeService.getSavesTypes().subscribe((resp)=>{
          this.types=resp;
          this.types.forEach((type)=>{
            type.type=type.type.toUpperCase()
          })
        })
        this.getAllSaves();
    }
    getAllSaves(){
      this._homeService.getSaves().subscribe((resp:Saves[])=>{
        this.saves=[];
        const year=new Date().getFullYear()
        const month=new Date().getMonth()+1
        resp.forEach((save)=>{
          let date=save.date.split('-')
          if(month<10){
            if(save.idUser===this._auth.getUserId() && date[0]===year.toString() && date[1]==='0'+month){
              this.saves.push(save)
            }
          }else{
            if(save.idUser===this._auth.getUserId() && date[0]===year.toString() && date[1]===month.toString()){
              this.saves.push(save)
            }
          }
        })
      })
    }
    fillForm(){
      this.insertSave=this.formReg.value;
      if(this.insertSave){
        this.insertSave.idUser=this._auth.getUserId();
      }
      if(this.insertSave && this.formReg.value['date']!==null && this.formReg.value['type']!==null && this.formReg.value['value']!==null){
        this._homeService.insertSaves(this.insertSave)
        this.getAllSaves();
      }
      else{
        alert('Datos del formulario incompletos')
      }
      this.formReg.reset();
      this.formReg.value['idUser']=this._auth.getUserId()
    }
    getLastDayOfMonth(date: Date): number {
      const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return nextMonth.getDate();
    }
}
