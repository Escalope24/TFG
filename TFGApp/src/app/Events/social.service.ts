import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _firestore:Firestore) { }

  getEvents():Observable<any[]>{
    const billPlace=collection(this._firestore,'events')
    return collectionData(billPlace)  as Observable<any[]>;
  }
  createEvent(event:any){
    const billPlace=collection(this._firestore,'events')
    return addDoc(billPlace,event)
  }

  getFriends():Observable<any[]>{
    const billPlace=collection(this._firestore,'friends')
    return collectionData(billPlace)  as Observable<any[]>;
  }
  addFriend(friend:any){
    const billPlace=collection(this._firestore,'friends')
    return addDoc(billPlace,friend)
  }
}
