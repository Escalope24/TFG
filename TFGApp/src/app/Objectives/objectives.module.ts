import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectivesInsertComponent } from './objectives-insert/objectives-insert.component';
import { ObjectivesViewsComponent } from './objectives-views/objectives-views.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../Shared/shared.module';
import { ObjectivesMenuComponent } from './objectives-menu/objectives-menu.component';


@NgModule({
  declarations: [
    ObjectivesInsertComponent,
    ObjectivesViewsComponent,
    ObjectivesMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

})
export class ObjectivesModule { }
