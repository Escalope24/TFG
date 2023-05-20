import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { UserComponent } from './User/user/user.component';
import { UserModule } from './User/user.module';
import { CONSTANTS } from './Routes/routes';
import { HomeComponent } from './home/home/home.component';


export const AppRoutes: Route[] = [
  {path:CONSTANTS.ROUTES.MENU.HOME, canActivate: [], component: HomeComponent},
  {path:CONSTANTS.MODULES.USER,loadChildren:()=>import(CONSTANTS.MODULE.USER_MODULE).then(m=>m.UserModule)},


]

