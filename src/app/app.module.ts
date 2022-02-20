import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FomatButtonLibModule } from 'fomat-button-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FomatButtonLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
