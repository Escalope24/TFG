import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { UserComponent } from './User/user/user.component';
import { UserModule } from './User/user.module';
import { CONSTANTS } from './Routes/routes';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './User/register/register.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { UserdataComponent } from './Shared/userdata/userdata.component';
import { UserInfoComponent } from './Shared/user-info/user-info.component';
import { ObjectivesMenuComponent } from './Objectives/objectives-menu/objectives-menu.component';
import { ObjectivesViewsComponent } from './Objectives/objectives-views/objectives-views.component';
import { ObjectivesInsertComponent } from './Objectives/objectives-insert/objectives-insert.component';


export const AppRoutes: Route[] = [
  {path:CONSTANTS.ROUTES.MENU.HOME,component: HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(CONSTANTS.ROUTES.USER.USERMENU))},
  {path:CONSTANTS.ROUTES.USER.USERMENU, component:UserComponent, ...canActivate(()=>redirectLoggedInTo(CONSTANTS.ROUTES.MENU.HOME))} ,
  {path:CONSTANTS.ROUTES.SHARED.USER_INFO, component:UserInfoComponent},
  {path:CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE, component:ObjectivesMenuComponent},
  {path:CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE_LIST, component:ObjectivesViewsComponent},
  {path:CONSTANTS.ROUTES.OBJECTIVES.OBJECTIVE_NEW, component:ObjectivesInsertComponent}


]

