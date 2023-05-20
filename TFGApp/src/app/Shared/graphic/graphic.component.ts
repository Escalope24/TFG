import { Component, Input, OnInit } from '@angular/core';
import { DataGraphic } from '../Interfaces/graphic';
import { Color } from 'chart.js';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {
  @Input () data?: DataGraphic[];
  view:[number, number]= [700,700];
  results:DataGraphic[] =[];
  domain: string[]|Color = ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  colorScheme = [{
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }];
  scheme:string[]=['#5AA454','#A10A28','#C7B42C','#AAAAAA']
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
    if(this.data){
      this.results=this.data;
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
