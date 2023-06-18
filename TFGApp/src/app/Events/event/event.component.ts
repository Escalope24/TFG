import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../Models/events';
import { FormControl, FormGroup } from '@angular/forms';
import { ApexChart, ApexFill, ApexPlotOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit{
  constructor(private _route:ActivatedRoute){}
  event:Events={
    date:'',
    idUser:'',
    name:'',
    participantes:[],
    value:0
  }
  loadData:boolean=false
  labels:string[]=[];
  chart:ApexChart={
    type:'pie'
  }
  responsive:any[]=[
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 300
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
          width: 300
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
  ngOnInit(): void {
    
    this.update();
  }
  addSaves(){
    this.loadData=false;
    let pos=this.event.participantes.indexOf(this.formReg.value['name'])
    let val=localStorage.getItem(this.event.participantes[pos])
    let value=0;
    if(val!==null){
      value=parseInt(val)
    }
    localStorage.removeItem(this.event.participantes[pos])
    value=value+this.formReg.value['value']
    localStorage.setItem(this.event.participantes[pos], value.toString())
    this.update();
  }
  update(){
    this.loadData=false;
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
    console.log(this.event)
    console.log(this.participantes)
    this._route.queryParams.subscribe((resp)=>{
      this.event=resp as any
      console.log(this.event)
      this.participantes=this.event.participantes
      this.event.participantes.forEach((participante)=>{
        let item=localStorage.getItem(participante)
        if(item!==null){
          this.labels.push(participante.toUpperCase())
          this.series.push(parseInt(item))
          let val=this.event.value/this.participantes.length
          let value={
            name:participante,
            value:parseInt(item),
            total:val,
            percent:(parseInt(item)/val)*100
          }
          this.aportaciones.push(value)
        }
      })
    })
    console.log(this.aportaciones)
    this.loadData=true
  }
}
