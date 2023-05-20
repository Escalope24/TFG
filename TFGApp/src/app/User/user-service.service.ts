import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private auth:Auth) { }
  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
}
  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}