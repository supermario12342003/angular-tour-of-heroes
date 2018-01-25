import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
