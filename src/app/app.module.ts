import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UseDirectiveComponent } from './component/use-directive/use-directive.component';
import { TabDirective } from './directive/tab.directive';

@NgModule({
  declarations: [
    AppComponent,
    UseDirectiveComponent,
    TabDirective,
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
