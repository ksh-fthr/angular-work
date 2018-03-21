import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HogeService } from './service/hoge.service';
import { Bar1Service } from './service/bar1.service';
import { Bar2Service } from './service/bar2.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HogeService,
    Bar1Service,
    Bar2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
