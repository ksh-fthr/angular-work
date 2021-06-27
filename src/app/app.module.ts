import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModalComponent } from './component/modal/modal.component';

import { ModalService } from './service/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }