import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService }        from './user.service';
import { SidebarModule }      from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SidebarModule,
  ],
  declarations: [DashboardComponent]
})
export class UserModule {
  static forRoot() {
    return {
      ngModule: UserModule,
      providers: [ UserService ]
    }
  }
}
