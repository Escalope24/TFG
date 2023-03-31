import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './header-app/header-app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderAppComponent,
    SidebarComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderAppComponent,
    SidebarComponent,
  ],
})
export class SharedModule {
 }
