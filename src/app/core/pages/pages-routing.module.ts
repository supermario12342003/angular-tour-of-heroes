import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }     from './landing/landing.component';
import { NotFoundComponent }     from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
})
export class PagesRoutingModule {}
