import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private _auth:Auth) { }
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
}