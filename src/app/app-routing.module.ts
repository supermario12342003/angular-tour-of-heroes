import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }     from './app.component';
import { LandingComponent, NotFoundComponent, SampleComponent }     from '@app/pages';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'user',
    loadChildren: 'app/features/user/user.module#UserModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/features/admin/admin.module#AdminModule',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
