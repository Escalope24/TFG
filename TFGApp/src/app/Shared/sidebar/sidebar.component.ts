import { Component, NgModule } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent {
  sideBarView:boolean=false;
  viewSideBar(){
    this.sideBarView=!this.sideBarView;
  }
}
