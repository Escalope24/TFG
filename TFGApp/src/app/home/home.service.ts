import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { BillsData} from '../Shared/Interfaces/data';
import { Observable } from 'rxjs';
import { BillsHeaders, Saves, TableModels, TypeOfBill } from './Models/table-models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _firestore:Firestore) { }

  getHeaders():Observable<BillsHeaders[]>{
    const billPlace=collection(this._firestore,'billsHeader')
    return collectionData(billPlace)  as Observable<any[]>;
  }
  addBill(bill:TableModels){
    const billPlace=collection(this._firestore,'bill')
    return addDoc(billPlace,bill)
  }
  getBills():Observable<TableModels[]>{
    return collectionData(collection(this._firestore,'bill')) as Observable<TableModels[]>;
}
  getTypesOfBills():Observable<TypeOfBill[]>{
    return collectionData(collection(this._firestore,'typeOfBill')) as Observable<TypeOfBill[]>;
  }
  insertTypeOfBill(type:TypeOfBill){
    const billPlace=collection(this._firestore,'typeOfBill')
    return addDoc(billPlace,type)
  }
  getSaves(){
    const billPlace=collection(this._firestore,'saves')
    return collectionData(billPlace)  as Observable<any[]>;
  }
  insertSaves(saves:Saves){
    const billPlace=collection(this._firestore,'saves')
    return addDoc(billPlace,saves);
  }
  getSavesTypes(){
    const billPlace=collection(this._firestore,'saveTypes')
    return collectionData(billPlace)  as Observable<any[]>;
  }
}
