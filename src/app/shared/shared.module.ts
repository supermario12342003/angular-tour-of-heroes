import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    TestComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    TestComponent,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
  ],
})
export class SharedModule { }
