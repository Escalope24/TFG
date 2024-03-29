import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsMenuComponent } from './events-menu/events-menu.component';
import { SharedModule } from '../Shared/shared.module';
import { MPEventsComponent } from './mpevents/mpevents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../Auth/auth.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Firestore } from '@angular/fire/firestore';
import { AppModule } from '../app.module';
import { HomeService } from '../home/home.service';
import { EventComponent } from './event/event.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CreateEventComponent,
    EventsMenuComponent,
    MPEventsComponent,
    EventComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgApexchartsModule,
    MatIconModule
  ], 
  providers:[
  HomeService,
    AuthService,
  ]
})
export class EventsModule { }
