import { Component } from '@angular/core';
import { DataGraphic } from 'src/app/Shared/Interfaces/graphic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mockArray:DataGraphic[]=[
    {
      name:'Covid-19',
      value:100
    },
    {
      name:'Covid-20',
      value:200
    }
    ,
    {
      name:'Covid-21',
      value:300
    }
  ]
}
