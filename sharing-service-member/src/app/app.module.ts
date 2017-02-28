import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountBy2Component } from './count-by2/count-by2.component';
import { CountBy1Component } from './count-by1/count-by1.component';

import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CountBy2Component,
    CountBy1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
