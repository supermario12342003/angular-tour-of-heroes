import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }     from './app.component';
import { LandingComponent }     from '@app/core';
import { NotFoundComponent }     from '@app/core';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'user',
    loadChildren: 'app/features/user/user.module#UserModule'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
