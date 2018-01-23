import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule],
  declarations: [ AppComponent,],
  bootstrap: [ AppComponent ],
  providers: [ ],
})
export class AppModule {
  constructor() {
  }
}
