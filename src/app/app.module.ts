import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UseDirectiveComponent } from './component/use-directive/use-directive.component';
import { TabDirective } from './directive/tab.directive';
import { TabAComponent } from './component/tab-a/tab-a.component';
import { TabBComponent } from './component/tab-b/tab-b.component';

@NgModule({
  declarations: [
    AppComponent,
    UseDirectiveComponent,
    TabDirective,
    TabAComponent,
    TabBComponent,
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
