import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UseDirectiveComponent } from './component/use-directive/use-directive.component';
import { EventDirective } from './directive/event.directive';

@NgModule({
  declarations: [
    AppComponent,
    UseDirectiveComponent,
    EventDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
