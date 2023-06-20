import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectivesData } from '../Models/objectives-data';
import { Saves, TableModels } from 'src/app/home/Models/table-models';
import { HomeService } from 'src/app/home/home.service';
import { AuthService } from 'src/app/Auth/auth.service';
import { ApexChart, ApexPlotOptions, ApexFill } from 'ng-apexcharts';
import { BillsData } from 'src/app/Shared/Interfaces/data';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';

@Component({
  selector: 'app-objective-info',
  templateUrl: './objective-info.component.html',
  styleUrls: ['./objective-info.component.scss']
})
export class ObjectiveInfoComponent implements OnInit {
  objectives:ObjectivesData={
    allBills:0,
    allSaves:0,
    month:'',
    objectives:0,
    value:0
  }
  viewProgress:boolean=true;
  viewBillsGraphic:boolean=false
  viewSaveGraphic:boolean=false
  billsGraphic:DataGraphic[]=[]
  savesGraphic:DataGraphic[]=[]
  showNavigationBar:boolean=false;
  bills:TableModels[]=[];
  saves:Saves[]=[];
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

        total:{
          color:"ffffff"
        },
        value:{
          color: '#ffffff', // Cambia el color de los números a blanco
          fontSize: '16px',
          fontWeight: 'bold',
          show: true,

        }
      },
    },

  }

  fill:ApexFill={
    type: "gradient",
    gradient: {
      shade: "light",
      shadeIntensity: 0.4,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91]
    }
  }
  series:number[]=[];
  labels:string[]=[];
  chart2:ApexChart={
    type:'pie'
  }
  responsive:any[]=[
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 400
        },
        legend: {
          position: "right",
        }
      },
    },
    {
      breakpoint: 3000,
      options: {
        chart: {
          width: 400
        },
        legend: {
          position: "right",
          labels:{
            colors:['white']
          }
        }
      }
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 400
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ];
  series2:number[]=[]
  labels2:string[]=[]
  constructor(private _route:ActivatedRoute, private _homeService:HomeService, private auth:AuthService){}
  ngOnInit(): void {
      this._route.queryParams.subscribe((resp)=>{
        this.objectives=resp as any
        console.log(this.objectives)
      })
      this._homeService.getBills().subscribe((bills:TableModels[])=>{
        bills.forEach((bill)=>{
          let date=bill.fecha.split('-')
          if(bill.idUser===this.auth.getUserId() && this.objectives.month===(date[0]+'-'+date[1])){
            this.bills.push(bill)
            this.fillData(bill)
          }
        })
        this.billsGraphic.forEach((graphic)=>{
          this.series.push(graphic.value);
          this.labels.push(graphic.name)
  
        })
      })
      this.billsGraphic.forEach((bill)=>{
        this.series.push(bill.value)
        this.labels.push(bill.name)
      })
      this._homeService.getSaves().subscribe((saves:Saves[])=>{
        saves.forEach((save)=>{
          let date=save.date.split('-')
          if(save.idUser===this.auth.getUserId() && this.objectives.month===(date[0]+'-'+date[1])){
            this.saves.push(save)
            this.fillSaves(save)
          }
        })
        this.savesGraphic.forEach((save)=>{
          this.series2.push(save.value)
          this.labels2.push(save.name)
        })
      })
    }
      showNavigation(){
        this.showNavigationBar=true;
    
      }
      leaveNavigation(){
        this.showNavigationBar=false
      }
      viewProgresBar(){
        this.viewProgress=true;
        this.viewBillsGraphic=false
        this.viewSaveGraphic=false;
      }
      viewSavesGraphic(){
        this.viewProgress=false;
        this.viewBillsGraphic=false
        this.viewSaveGraphic=true;
      }
      viewBillsGrap(){
        this.viewProgress=false;
        this.viewBillsGraphic=true
        this.viewSaveGraphic=false;
      }
      private fillData(data:TableModels){
        let isNew:boolean=false;
        if(this.billsGraphic.length>0){
          this.billsGraphic.filter((bill)=>{
            if(bill.name==data.tipo){
              isNew=true;
            }
          })
          if(isNew){
            this.billsGraphic.forEach((bill)=>{
              if(bill.name===data.tipo){
                bill.value=bill.value+data.cantidad
              }
            })
          }else{
            this.billsGraphic.push({name:data.tipo, value:data.cantidad})
          }
        }else{
          this.billsGraphic.push({name:data.tipo, value:data.cantidad})
        }

      }
      private fillSaves(save:Saves){
        let isNew:boolean=false;
        if(this.savesGraphic.length>0){
          this.savesGraphic.filter((sav)=>{
            if(sav.name==save.type){
              isNew=true;
            }
          })
          if(isNew){
            this.savesGraphic.forEach((sav)=>{
              if(sav.name===save.type){
                sav.value=sav.value+save.value
              }
            })
          }else{
            this.savesGraphic.push({name:save.type, value:save.value})
          }
        }else{
          this.savesGraphic.push({name:save.type, value:save.value})
        }

      }
}
