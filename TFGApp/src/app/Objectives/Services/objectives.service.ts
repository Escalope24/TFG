import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Objectives } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  constructor(private _firestore:Firestore) { }

  getObjectives():Observable<Objectives[]>{
    const billPlace=collection(this._firestore,'objectives')
    return collectionData(billPlace)  as Observable<Objectives[]>;
  }
  createObjective(objetive:Objectives){
    const billPlace=collection(this._firestore,'objectives')
    return addDoc(billPlace,objetive)
  }
}
