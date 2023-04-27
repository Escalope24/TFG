import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  view: [number,number] = [700, 400];
  mockData = [
    {
      name:'Compras alimentarias',
      value: 100
    },
    {
      name:'Fiesta',
      value: 20
    },
    {
      name:'Compras de ropa',
      value: 150
    },
    {
      name:'Compras de tecnología',
      value:50
    }
  ]
  schema = {
    domain:['#5AA454','#A10A28','#C7B42C','#AAAAAA'];
  }
  ngOnInit(): void {
    
  }

  constructor() { }
}
