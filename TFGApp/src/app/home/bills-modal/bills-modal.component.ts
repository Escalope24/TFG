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
  loadData:boolean=false;
  typesOfBills:TypeOfBill[]=[];
  ngOnInit(){
    this._homeService.getHeaders().subscribe((resp:BillsHeaders[])=>{
      this.tableHeaders=resp
    });
    this.getAllBills();
    this.getTypesOfBills()
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
      this.dataToInsert.cantidad=this.dataToInsert.cantidad
      this._homeService.addBill(this.dataToInsert);
      this.loadData=false
      this.getAllBills();
      this.formReg.reset();
    }
  }
  getAllBills(){
    this.loadData=false;
    this._homeService.getBills().subscribe((resp:TableModels[])=>{
      this.allBills=[]
      resp.forEach((data:TableModels)=>{
        if(data.idUser===this.currentUser){
          this.allBills.push(data)
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
}
