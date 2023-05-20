import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './header-app/header-app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GraphicComponent } from './graphic/graphic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    HeaderAppComponent,
    SidebarComponent,
    GraphicComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    NgxChartsModule,
  ],
  exports:[
    HeaderAppComponent,
    SidebarComponent,
    GraphicComponent,
    
  ],
})
export class SharedModule {
 }
