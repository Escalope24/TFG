import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AppRoutes } from '../app.routes';
import { RouterModule } from '@angular/router';
import { CONSTANTS } from '../Routes/routes';
import { ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:CONSTANTS.ROUTES.USER.USERMENU, component:UserComponent},
      {path:CONSTANTS.ROUTES.USER.LOGIN, component:LoginComponent},
      {path:CONSTANTS.ROUTES.USER.REGISTER, component:RegisterComponent},
      
    ]),
    MatButtonModule,
    ReactiveFormsModule 
  ],
})
export class UserModule {
 }
