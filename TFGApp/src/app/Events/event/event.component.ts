import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../Models/events';
import { FormControl, FormGroup } from '@angular/forms';
import { ApexChart, ApexFill, ApexPlotOptions } from 'ng-apexcharts';
import { SocialService } from '../social.service';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit{
  constructor(private _route:ActivatedRoute, private _socialService:SocialService, private auth:AuthService){}
  event:Events={
    date:'',
    idUser:'',
    name:'',
    participantes:[],
    value:0
  }
  loadData:boolean=false;
  loadGraphic:boolean=false
  showNavigationBar:boolean=false;
  labels:string[]=[];
  chart:ApexChart={
    type:'pie'
  }
  showProgress:boolean=false
  allSum:number=0;
  responsive:any[]=[
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 500
        },
        legend: {
          position: "right",
          labels:{
            colors:['white']
          }
        }
      },
    },
    {
      breakpoint: 3000,
      options: {
        chart: {
          width: 500
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
          width: 200
        },
        legend: {
          position: "right",
          labels:{
            colors:['white']
          }
        }
      }
    }
  ];
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
  plotOptions2:ApexPlotOptions={
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
  headers:string[]=[]
  chart2:ApexChart={
    type:'radialBar'
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
  series:number[]=[]
  participantes:string[]=[]
  aportaciones:any[]=[]
  formReg:FormGroup=new FormGroup({
    name:new FormControl(),
    value:new FormControl()
  })
  dataValues:any[]=[]
  ngOnInit(): void {
    
    this.update();
  }
  addSaves(){
    this.loadData=false;
    this._socialService.addInputs({aportador:this.formReg.value['name'], value:this.formReg.value['value'], eventName:this.event.name, date:new Date(), idUser:this.auth.getUserId()})
    this.update();
  }
  update(){
    this.loadData=false;
    this.loadGraphic=false;
    this.event={
      date:'',
      idUser:'',
      name:'',
      participantes:[],
      value:0
    }
    this.series=[];
    this.labels=[]
    this.participantes=[]
    this.aportaciones=[]

    this._route.queryParams.subscribe((resp)=>{
      this.event=resp as any
      this.participantes=this.event.participantes;
    })
    this._socialService.getInputs().subscribe((resp)=>{
      this.aportaciones=[];
      this.dataValues=[]
      resp.forEach((input)=>{
        if(input.eventName===this.event.name){
          let value={
            name:input.aportador,
            value:input.value,
          }
          this.dataValues.push(value)
        }
      })
      const headers:string[]=[];
      const aport:any[]=[]
        this.dataValues.forEach((data)=>{
          if(!headers.includes(data.name)){
            headers.push(data.name)
            aport.push(data)
          }else{
            const index=aport.findIndex((obj)=>obj.name===data.name);
            aport[index].value+=data.value
          }
        })
        this.aportaciones=aport
        let val=this.event.value/this.participantes.length;
        const values:any[]=[]
        this.aportaciones.forEach((aportacion)=>{
          console.log(aportacion)
          let value={
            name:aportacion.name,
            value:aportacion.value,
            total:val,
            percent:Math.floor((parseInt(aportacion.value)/val)*100)
          }
          this.series.push(aportacion.value)
          this.labels.push(aportacion.name)
          values.push(value)
          this.allSum+=aportacion.value
        })
        this.allSum=Math.floor((this.allSum/this.event.value)*100)
        console.log(this.aportaciones)
        this.aportaciones=values
        console.log(this.aportaciones)
        this.loadGraphic=true
        console.log(this.allSum)
    });
    this.loadData=true
  }
  showNavigation(){
    this.showNavigationBar=true;

  }
  leaveNavigation(){
    this.showNavigationBar=false
  }
  showGraphic(){
    this.showProgress=false
  }
  showprogress(){
    this.showProgress=true
  }
}
