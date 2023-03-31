import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageModule,} from './MainPage/mainPage.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MainPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
