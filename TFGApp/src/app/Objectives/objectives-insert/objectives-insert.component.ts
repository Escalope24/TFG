import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Auth/auth.service';
import { ObjectivesService } from '../Services/objectives.service';
import { Objectives } from '../Models/models';

@Component({
  selector: 'app-objectives-insert',
  templateUrl: './objectives-insert.component.html',
  styleUrls: ['./objectives-insert.component.scss']
})
export class ObjectivesInsertComponent implements OnInit{
  formReg:FormGroup=new FormGroup({
    name:new FormControl(),
    month:new FormControl(),
    value:new FormControl(),
    idUser:new FormControl(this._auth.getUserId())
  });
  showNavigationBar:boolean=false;
  allObjectives:Objectives[]=[];
  validator:boolean=true

  constructor(private _auth:AuthService, private _objetiveService:ObjectivesService){}

  ngOnInit(): void {
    this._objetiveService.getObjectives().subscribe((objectives:Objectives[])=>{
      objectives.forEach((objective:Objectives)=>{
        if(objective.idUser===this._auth.getUserId()){
          this.allObjectives.push(objective)
        }
      })
    })
  }
  fillForm(){
    const monthRepeat=this.allObjectives.find((objective)=>objective.month==this.formReg.value['month'])
    if(monthRepeat===undefined){
      this._objetiveService.createObjective(this.formReg.value)
    }
    else{
      alert('No se  puede poner 2 objetivos para un mes')
    }
    this.formReg.reset()
  }
  showNavigation(){
    this.showNavigationBar=true;
  }
  leaveNavigation(){
    this.showNavigationBar=false;
  }

}
