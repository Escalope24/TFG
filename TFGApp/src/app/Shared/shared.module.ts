import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GraphicComponent } from './graphic/graphic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DefaultArcObject } from 'd3-shape';
import { ScaleLinear, ScaleBand } from 'd3-scale';
import { D3ScaleModule } from '../d3-scale/d3-scale.module';
import { D3SelectionModule } from '../d3-selection/d3-selection.module';
import { D3ShapeModule } from '../d3-shape/d3-shape.module';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { UserdataComponent } from './userdata/userdata.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidebarComponent,
    GraphicComponent,
    HeaderComponent,
    TableComponent,
    UserdataComponent,
    UserInfoComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    NgxChartsModule,
    D3ScaleModule,
    D3SelectionModule,
    D3ShapeModule,
    MatTableModule,
    MatButtonModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    GraphicComponent,
    UserdataComponent],
})
export class SharedModule {
 }
