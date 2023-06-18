import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectivesInsertComponent } from './objectives-insert/objectives-insert.component';
import { ObjectivesViewsComponent } from './objectives-views/objectives-views.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../Shared/shared.module';
import { ObjectivesMenuComponent } from './objectives-menu/objectives-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeService } from '../home/home.service';
import { ActualComponent } from './actual/actual.component';
import { DatePipe } from '../Pipes/date-pipe.pipe';


@NgModule({
  declarations: [
    ObjectivesInsertComponent,
    ObjectivesViewsComponent,
    ObjectivesMenuComponent,
    ActualComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgApexchartsModule
  ],
  providers:[
    HomeService
  ]
})
export class ObjectivesModule { }
