import { Component, Input, OnInit } from '@angular/core';
import { DataGraphic } from '../Interfaces/graphic';
import { Color } from 'chart.js';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive } from 'ng-apexcharts';
import { TableModels } from 'src/app/home/Models/table-models';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  @Input () data?: DataGraphic[]=[];
  series:number[]=[];
  labels:string[]=[];
  chart:ApexChart={
    type:'pie'
  }
  loadData:boolean=false;
  responsive:any[]=[
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 600
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
          width: 800
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
          position: "bottom"
        }
      }
    }
  ]
  results:DataGraphic[] =[];
  constructor(){}
  sum:number = 0;
  ngOnInit(): void {
    this.getAllData();
    this.allDataSum();
  }

  allDataSum(){
    if(this.data){
      this.data.forEach((sum)=>{
        this.sum += sum.value;
      })
    }
  }
  private getAllData(){
    let values:number[]=[]
    let labels:string[]=[]
    if(this.data){
      
      this.data.forEach((bill:DataGraphic)=>{
        values.push(bill.value);
        labels.push(bill.name.toUpperCase())
      })  
      this.labels=labels;
      this.series=values;
      this.loadData=true
    }
  } 
  getPercent(index:DataGraphic):string{
    if(this.data){
      if(this.sum != 0){
        return ((index.value/this.sum)*100).toFixed(2)+'%';
      }
      return '0%';
    }
    return '0%';
  }
  


}
