import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { ObjectivesService } from '../Services/objectives.service';
import { HomeService } from 'src/app/home/home.service';
import { Saves, TableModels } from 'src/app/home/Models/table-models';
import { Objectives } from '../Models/models';
import { ObjectivesData } from '../Models/objectives-data';
import { ApexChart, ApexFill, ApexPlotOptions } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/app/Routes/routes';

@Component({
  selector: 'app-objectives-views',
  templateUrl: './objectives-views.component.html',
  styleUrls: ['./objectives-views.component.scss']
})
export class ObjectivesViewsComponent implements OnInit{
  allBills:TableModels[]=[];
  allSaves:Saves[]=[];
  allObjectives:Objectives[]=[];
  monthBills:any[]=[];
  objectives:ObjectivesData[]=[]
  chart:ApexChart={
    type:'radialBar'
  }
  plotOptions:ApexPlotOptions={
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5,
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          opacity: 0.31,
          blur: 2
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: "22px"
        }
      }
    }
  }
  fill:ApexFill={
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  }
  showNavigationBar:boolean=false;
  constructor(private auth:AuthService, private _objectivesService:ObjectivesService, private _billsService:HomeService, private _router:Router){}

  ngOnInit(): void {
    this._objectivesService.getObjectives().subscribe((objectives:Objectives[])=>{
      objectives.forEach((objective)=>{
        if(objective.idUser===this.auth.getUserId()){
          if(this.objectives.length>0){
            this.objectives.forEach((objectiveData)=>{
              if(objectiveData.month===objective.month){
                let percent=((objectiveData.allSaves-objectiveData.allBills)/objective.value)*100
                  objectiveData.objectives=Math.trunc(percent)
              }else{
                let objective2:ObjectivesData={
                  month:objective.month,
                  allBills: 0,
                  allSaves: 0,
                  objectives: 0,
                  value:0
                }
                this.objectives.push(objective2)
              }
            })
          }else{
            let objective2:ObjectivesData={
              month:objective.month,
              allBills: 0,
              allSaves: 0,
              objectives: 0,
              value:0
            }
            this.objectives.push(objective2)
          }
          this.allObjectives.push(objective)
        }
      })
    })
    this._billsService.getBills().subscribe((bills)=>{
      bills.forEach((bill)=>{
        if(bill.idUser===this.auth.getUserId()){
          let headers=bill.fecha.split('-')
          let month=headers[0]+'-'+headers[1]
          this.objectives.forEach((objective)=>{
            if(objective.month===month){
              objective.allBills=bill.cantidad+objective.allBills;
            }
          })
        }
      })
    })
      this._billsService.getSaves().subscribe((saves:Saves[])=>{
        saves.forEach((save)=>{
          if(save.idUser===this.auth.getUserId()){
            let headers=save.date.split('-');
            let month=headers[0]+'-'+headers[1];
            this.objectives.forEach((objective)=>{
              if(objective.month===month){
                objective.allSaves=+objective.allSaves+save.value
              }
            })
            this.allSaves.push(save);
          
          }
        })
        this.objectives.forEach((obj)=>{
          this.allObjectives.forEach((objective)=>{
            if(objective.month===obj.month){
              obj.value=objective.value
              obj.objectives=Math.trunc(((obj.allSaves-obj.allBills)/objective.value)*100)
            }
            if(obj.objectives<0){
              obj.objectives=0
            }
          })
        })
      })
  }
  showNavigation(){
    this.showNavigationBar=true;

  }
  leaveNavigation(){
    this.showNavigationBar=false
  }
  goToObjective(objective:ObjectivesData){
    this._router.navigate([CONSTANTS.ROUTES.OBJECTIVES.HISTORICAL], {queryParams:objective})
  }
}
