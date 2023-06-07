import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { BillsData } from '../Shared/Interfaces/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _firestore:Firestore) { }

  addBill(bill:BillsData){
    const billPlace=collection(this._firestore,'bill')
    return addDoc(billPlace,bill)
  }
getBills():Observable<BillsData[]>{
  const billPlace=collection(this._firestore,'bill')
    return collectionData(billPlace, { idField: 'userId' })  as Observable<BillsData[]>;
  }
  
}
