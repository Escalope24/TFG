import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { HomeService } from 'src/app/home/home.service';
import { ObjectivesService } from '../Services/objectives.service';
import { Saves, TableModels } from 'src/app/home/Models/table-models';
import { Objectives } from '../Models/models';
import { ObjectivesData } from '../Models/objectives-data';
import { ApexChart, ApexFill, ApexPlotOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit{
  currentDate=new Date();
  month:string=''
  bills:TableModels[]=[];
  saves:Saves[]=[];
  objective?:Objectives;
  objectiveData:ObjectivesData={
    allBills:0,
    allSaves:0,
    month:'',
    objectives:0
  };
  chart:ApexChart={
    type:'radialBar',
    animations:{
      animateGradually:{
        delay:300,
        enabled:true
      },
      dynamicAnimation:{
        enabled:true,
        speed:300
      },
      easing:'easein',
      enabled:true,
      speed:4000
    }
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
  showNavigationBar:boolean=false
  constructor( private auth:AuthService, private _billsService:HomeService, private _objectivesServices:ObjectivesService){}
  ngOnInit(){
    if(this.currentDate.getMonth()<9){
      this.month=this.currentDate.getFullYear()+'-0'+(this.currentDate.getMonth()+1);
    }else{
      this.month=this.currentDate.getFullYear()+'-'+(this.currentDate.getMonth()+1);
    }
    this._billsService.getBills().subscribe((bills:TableModels[])=>{
      bills.forEach((bill)=>{
        if(bill.idUser===this.auth.getUserId() && bill.fecha.includes(this.month)){
          this.bills.push(bill)
          this.objectiveData.allBills=this.objectiveData.allBills+bill.cantidad
        }
      })
    })
    this._billsService.getSaves().subscribe((saves:Saves[])=>{
      saves.forEach((save)=>{
        if(save.idUser===this.auth.getUserId() && save.date.includes(this.month)){
          this.saves.push(save)
          this.objectiveData.allSaves=this.objectiveData.allSaves+save.value
        }
      })
    })
    this._objectivesServices.getObjectives().subscribe((objectives:Objectives[])=>{
      objectives.forEach((objective)=>{
        if(objective.idUser===this.auth.getUserId() && this.month===objective.month){
          this.objective=objective;
          let percent=((this.objectiveData.allSaves-this.objectiveData.allBills)/objective.value)*100
          this.objectiveData.objectives=percent
          this.objectiveData.objectives=Math.trunc(this.objectiveData.objectives);
          console.log(this.objectiveData)
          console.log(((this.objectiveData.allSaves-this.objectiveData.allBills)/this.objective.value)*100)
        }
      })
    })

  }
  showNavigation(){
    this.showNavigationBar=true;

  }
  leaveNavigation(){
    this.showNavigationBar=false
  }

}
