import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CONSTANTS } from '../Routes/routes';
import { SharedModule } from '../Shared/shared.module';


// TODO RECORDAR QUE LA INTRODUCCION A LA HOME YA DEBE DE SER CON UNA CUENTA LOGEADA
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:CONSTANTS.ROUTES.MENU.HOME, component:HomeComponent},
    ]),
    SharedModule
  ]
})
export class HomeModule { }
