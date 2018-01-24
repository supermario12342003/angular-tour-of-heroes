import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule.forRoot(),
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
