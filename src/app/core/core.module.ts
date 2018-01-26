import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '@app/features/user';
import { WebsocketService } from './services';

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    //all service here
    UserService,
    WebsocketService
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
