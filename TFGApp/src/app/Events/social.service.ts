import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Events } from './Models/events';
@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _firestore:Firestore) { }

  getEvents():Observable<Events[]>{
    const billPlace=collection(this._firestore,'events')
    return collectionData(billPlace)  as Observable<Events[]>;
  }
  createEvent(event:Event){
    const billPlace=collection(this._firestore,'events')
    return addDoc(billPlace,event)
  }
}
