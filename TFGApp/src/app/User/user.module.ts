import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AppRoutes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CONSTANTS } from '../Routes/routes';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:CONSTANTS.ROUTES.USER.HOME, component:UserComponent},
      {path:CONSTANTS.ROUTES.USER.LOGIN, component:LoginComponent},
      {path:CONSTANTS.ROUTES.USER.REGISTER, component:RegisterComponent},
    ])
  ]
})
export class UserModule { }
