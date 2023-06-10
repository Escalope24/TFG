import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { BillsHeaders, TableModels, TypeOfBill } from '../Models/table-models';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HistoricalBillsComponent } from '../historical-bills/historical-bills.component';

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
  loadData:boolean=true;
  typesOfBills:TypeOfBill[]=[];
  ngOnInit(){
    console.log(this.currentUser)
    this._homeService.getHeaders().subscribe((resp:BillsHeaders[])=>{
      this.tableHeaders=resp
    });
    this._homeService.getTypesOfBills().subscribe((resp:TypeOfBill[])=>{
      console.log(resp)
      this.typesOfBills=resp;
    });
    this._homeService.getBills().subscribe((resp:TableModels[])=>{
      resp.filter((bill:TableModels)=>(bill.idUser===this.currentUser))
      this.allBills=resp;
      this._sortData();
    });
    this.loadData=false;
  }
  getTypesOfBills(){
    this._homeService.getTypesOfBills().subscribe((resp:TypeOfBill[])=>{
      this.typesOfBills=resp;
  });
  }
  insertBill(){
    if(this.currentUser!==null){
      this.dataToInsert=this.formReg.value;
      this.dataToInsert.idUser=this.currentUser;
      this._homeService.addBill(this.dataToInsert).then(()=>{
        this.loadData=true;
        this.formReg.reset();
        this.getAllBills();
        this._sortData();
        this.allBills.push(this.dataToInsert);
        this.loadData=false
      })
    }
  }
  getAllBills(){
    this._homeService.getBills().subscribe((resp:TableModels[])=>{
      resp.filter((bill:TableModels)=>(bill.idUser===this.currentUser))
      this._sortData();
    })  
    this.loadData=false;    
  }
  private _sortData(){
    this.allBills.sort((a:TableModels,b:TableModels)=>(a.fecha>b.fecha)?1:-1)
  }
  openTypeOfBill(){
    this.openCreateType=!this.openCreateType
  }
  createTypeOfBill(){
    if(this._validateForm(this.createType)){
      this._homeService.insertTypeOfBill(this.createType.value).then(()=>{
        this.getTypesOfBills();
      })
    }else{
      alert('No se puede crear un tipo de gasto vacio');
    }
  }

  private _validateForm(form:FormGroup):boolean{
    if(this.formReg.value.tipo!==''){
      return true
    }
    return false
  }
}
