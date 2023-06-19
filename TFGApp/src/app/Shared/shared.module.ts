import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GraphicComponent } from './graphic/graphic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';


@NgModule({
  declarations: [
    GraphicComponent,
    NavigateBarComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    NgxChartsModule,
    MatTableModule,
    MatButtonModule,
    NgApexchartsModule,
    MatIconModule
  ],
  exports:[
    GraphicComponent,
    NavigateBarComponent
],
})
export class SharedModule {
 }
