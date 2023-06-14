import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectivesInsertComponent } from './objectives-insert/objectives-insert.component';
import { ObjectivesViewsComponent } from './objectives-views/objectives-views.component';



@NgModule({
  declarations: [
    ObjectivesInsertComponent,
    ObjectivesViewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ObjectivesModule { }
