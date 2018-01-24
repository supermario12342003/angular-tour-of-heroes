import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from '@app/shared/shared.module';
import { SampleComponent } from './sample/sample.component'

import { AgmCoreModule } from '@agm/core';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AgmCoreModule,
  ],
  declarations: [
    //all pages goes here
    LandingComponent,
    NotFoundComponent,
    SampleComponent,
  ]
})
export class PagesModule { }
