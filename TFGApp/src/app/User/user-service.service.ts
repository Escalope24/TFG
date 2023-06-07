import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider  } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private _auth:Auth, private _firestore:Firestore) { }
  login({email, password}:any){
    return signInWithEmailAndPassword(this._auth, email, password);
}
  register({email, password}:any){
    return createUserWithEmailAndPassword(this._auth, email, password);
  }
  logOut(){
    return signOut(this._auth);
  }
  logInGoogle(){
    return signInWithPopup(this._auth, new GoogleAuthProvider())
  }
  getUser(){

  }
  insertUserDB(user:any){
    const db=collection(this._firestore,'user')
    return addDoc(db,user);
  }
}