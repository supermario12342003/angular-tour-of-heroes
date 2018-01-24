import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { PagesModule } from '@app/pages/pages.module';
import { LayoutModule } from '@app/layout/layout.module';

import { AgmCoreModule } from '@agm/core';
import { SidebarModule } from 'ng-sidebar';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    // eager loaded modules go here
    AgmCoreModule.forRoot({apiKey: environment.googleMapApiKey,}),
    SidebarModule.forRoot(),
    PagesModule,
    LayoutModule,

  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor() {}
}
