import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { BillsHeaders, TableModels, TypeOfBill } from '../Models/table-models';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bills-modal',
  templateUrl: './bills-modal.component.html',
  styleUrls: ['./bills-modal.component.scss']
})
export class BillsModalComponent  implements OnInit{
  constructor(private _homeService:HomeService, private _dialog:MatDialog,){
    this.dataToInsert={
      cantidad:0,
      fecha:'',
      tipo:'',
    }
  }
  minDate:string='';
  maxDate:string=''

  tableHeaders:BillsHeaders[]=[];
  formReg:FormGroup=new FormGroup({
    fecha:new FormControl(),
    tipo:new FormControl(),
    cantidad:new FormControl()
  });
  createType:FormGroup=new FormGroup({
    type:new FormControl()
  });
  optionSelected:string="";
  openCreateType:boolean=false;
  allBills:TableModels[]=[];
  dataToInsert:TableModels;
  currentUser:string|null=localStorage.getItem('user');
  loadData:boolean=false;
  typesOfBills:TypeOfBill[]=[];
  ngOnInit(){
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
    this._homeService.getHeaders().subscribe((resp:BillsHeaders[])=>{
      this.tableHeaders=resp
    });
    this.getAllBills();
    this.getTypesOfBills()
  }
  getTypesOfBills(){
    this._homeService.getTypesOfBills().subscribe((resp:TypeOfBill[])=>{
      this.typesOfBills=resp;
      this.typesOfBills.forEach((type)=>{
        type.type=type.type.toUpperCase()
      })
  });
  }
  insertBill(){
    if(this.currentUser!==null && this.formReg.value['fecha']!==null  && this.formReg.value['tipo']!==null  && this.formReg.value['cantidad']!==null){
      this.dataToInsert=this.formReg.value;
      this.dataToInsert.idUser=this.currentUser;
      this.dataToInsert.cantidad=this.dataToInsert.cantidad
      this._homeService.addBill(this.dataToInsert);
      this.loadData=false
      this.getAllBills();
      this.formReg.reset();
    }
    else{
      alert('Datos del formulario incompletos')
    }
  }
  getAllBills(){
    this.loadData=false;
    const year=new Date().getFullYear()
    const month=new Date().getMonth()+1
    this._homeService.getBills().subscribe((resp:TableModels[])=>{
      this.allBills=[]
      resp.forEach((data:TableModels)=>{
        let date=data.fecha.split('-')
        if(month<10){
          if(data.idUser===this.currentUser && date[0]===year.toString() && date[1]==='0'+month){
  
            this.allBills.push(data)
          }
        }else{
          if(data.idUser===this.currentUser && date[0]===year.toString() && date[1]===month.toString()){
  
            this.allBills.push(data)
          }
        }
      })
      this._sortData();
    });
    this.loadData=true;    
  }
  private _sortData(){
    this.allBills.sort((a:TableModels,b:TableModels)=>(a.fecha>b.fecha)?1:-1)
  }
  private _validateForm(form:FormGroup):boolean{
    if(this.formReg.value.tipo!==''){
      return true
    }
    return false
  }
  getLastDayOfMonth(date: Date): number {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return nextMonth.getDate();
  }

}
