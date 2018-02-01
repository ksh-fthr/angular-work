import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientComponent } from './http-client/http-client.component';

import { HttpServiceService } from './service/http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
