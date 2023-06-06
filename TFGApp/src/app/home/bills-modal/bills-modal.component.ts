import { Component } from '@angular/core';

@Component({
  selector: 'app-bills-modal',
  templateUrl: './bills-modal.component.html',
  styleUrls: ['./bills-modal.component.scss']
})
export class BillsModalComponent {

  mockData:any={
    headers:[
      'Prueba',
      'Prueba2',
      'Prueba3'
    ],
    data:[
      {
        value:1,
        value2:2,
        value3:3
      },
      {
        value:1,
        value2:2,
        value3:3
      },
      {
        value:1,
        value2:2,
        value3:3
      }
    ]
  }

}
