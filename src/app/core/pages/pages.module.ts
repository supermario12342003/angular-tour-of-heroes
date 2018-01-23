import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from '@app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  declarations: [
    LandingComponent,
    NotFoundComponent,
  ]
})
export class PagesModule { }
