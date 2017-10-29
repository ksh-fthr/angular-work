import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HogeHogeComponent } from './hoge-hoge/hoge-hoge.component';

@NgModule({
  declarations: [
    AppComponent,
    HogeHogeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
