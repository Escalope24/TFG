import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId: string;

  constructor() {
    this.userId=""
   }

  setUserId(userId: string): void {
    this.userId = userId;
    localStorage.setItem('id', userId)
  }

  getUserId(): string {
    this.userId=localStorage.getItem('id') || ''
    return this.userId;
  }
}
