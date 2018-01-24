import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '@app/shared/shared.module';

import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule,
  ],
  declarations: [
    //all pages goes here
    LandingComponent,
    NotFoundComponent,
    SampleComponent,
  ],
  exports: [
  ]
})
export class PagesModule { }
