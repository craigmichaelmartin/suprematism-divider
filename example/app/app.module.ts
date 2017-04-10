import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DividerModule } from '../../src/index';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
