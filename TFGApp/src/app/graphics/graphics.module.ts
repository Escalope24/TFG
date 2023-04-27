import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsComponent } from './graphics/graphics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserPageComponent } from './user-page/user-page.component';
import { TableBillsComponent } from './table-bills/table-bills.component';
import { BillComponent } from './bill/bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    GraphicsComponent,
    UserPageComponent,
    TableBillsComponent,
    BillComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class GraphicsModule { }
