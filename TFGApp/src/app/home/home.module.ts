import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../Shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BillsModalComponent } from './bills-modal/bills-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserServiceService } from '../User/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '../Pipes/date-pipe.pipe';
import { SavingModalComponent } from './saving-modal/saving-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// TODO RECORDAR QUE LA INTRODUCCION A LA HOME YA DEBE DE SER CON UNA CUENTA LOGEADA
@NgModule({
  declarations: [
    BillsModalComponent,
    HomeComponent,
    DatePipe,
    SavingModalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule 
  ],
  providers:[
    UserServiceService,
  ],
})
export class HomeModule { }
