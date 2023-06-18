import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/User/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Auth/auth.service';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements  OnInit{
  formReg:FormGroup=new FormGroup({ 
    name:new FormControl(),
})
showSearch:boolean=false;
newFriend:any[]=[];
  friends:any[]=[]
  constructor(private _socialService:SocialService, private _userService:UserServiceService, private _authService:AuthService){}
  users:any[]=[]
  ngOnInit(): void {
    this.getFriends();
    this._userService.getUserFromDB().subscribe((users)=>{
      users.forEach((user)=>{
        if(user.id!=this._authService.getUserId()){
          this.users.push(user);
        }
      })
    })
  }
  findFriend(){
    this.newFriend=[]
    this._userService.getUserFromDB().subscribe((users)=>{
      users.forEach((user)=>{
        let username=this.formReg.value
        if(user.userName.includes(username.name)){
          let newFriend={
            username:user.userName,
            userId:user.id
          }
          this.newFriend.push(newFriend)
        }
      })
    })
    this.showSearch=true;
  }
  addFriend(friend:any){
    let newfriend={
      id: this._authService.getUserId(),
      id_ext:friend.userId
    }
    this._socialService.addFriend(newfriend)
  }

  getFriends(){
    this._socialService.getFriends().subscribe((friends)=>{
      let user:any[]=[];
      let user_ext:any[]=[]
      friends.forEach((friend)=>{
        if(friend.id===this._authService.getUserId()){
          user.push(friend)
        }
        if(friend.id_ext===this._authService.getUserId()){
          user_ext.push(friend)
        }

      });
      user.forEach((user)=>{
        user_ext.forEach((user2)=>{
          if(user2.id===user.id_ext){
            this._userService.getUserFromDB().subscribe((users)=>{
              users.forEach((user)=>{
                if(user.id===user2.id){
                  this.friends.push(user.userName);
                }
              })
            })
          }
        })
      })
    })
    console.log(this.friends)
  }
}
