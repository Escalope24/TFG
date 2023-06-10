import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CONSTANTS } from '../Routes/routes';
import { SharedModule } from '../Shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BillsModalComponent } from './bills-modal/bills-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HistoricalBillsComponent } from './historical-bills/historical-bills.component';
import { MatTableModule } from '@angular/material/table';
import { StatusObjectiveComponent } from './status-objective/status-objective.component';
import { IgxProgressBarModule } from "igniteui-angular";
import { UserServiceService } from '../User/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '../Pipes/date-pipe.pipe';



// TODO RECORDAR QUE LA INTRODUCCION A LA HOME YA DEBE DE SER CON UNA CUENTA LOGEADA
@NgModule({
  declarations: [
    BillsModalComponent,
    HomeComponent,
    HistoricalBillsComponent,
    StatusObjectiveComponent,
    DatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:CONSTANTS.ROUTES.MENU.HOME, component:HomeComponent},
    ]),
    MatButtonModule,
    SharedModule,
    MatDialogModule,
    MatTableModule,
    IgxProgressBarModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
  ],
  providers:[
    UserServiceService,
  ]
})
export class HomeModule { }
