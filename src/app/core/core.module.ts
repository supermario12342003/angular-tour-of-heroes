import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserService } from '@app/features/user/user.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  declarations: [],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  providers: [
    //services of lazy-loaded module go here
    UserService,

  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
