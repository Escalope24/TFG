import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { UserComponent } from './User/user/user.component';
import { UserModule } from './User/user.module';
import { CONSTANTS } from './Routes/routes';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './User/register/register.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'


export const AppRoutes: Route[] = [
  {path:CONSTANTS.ROUTES.MENU.HOME,component: HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(CONSTANTS.ROUTES.USER.USERMENU))},
  {path:CONSTANTS.ROUTES.USER.USERMENU, component:UserComponent, ...canActivate(()=>redirectLoggedInTo(CONSTANTS.ROUTES.MENU.HOME))} 


]

