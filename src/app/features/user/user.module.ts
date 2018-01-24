import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService }        from './user.service';
import { SidebarModule }      from 'ng-sidebar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SidebarModule,
  ],
  declarations: [DashboardComponent, LoginComponent, RegisterComponent]
})
export class UserModule {
  static forRoot() {
    return {
      ngModule: UserModule,
      providers: [ UserService ]
    }
  }
}
