import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchTabComponent } from './component/switch-tab/switch-tab.component';
import { TabAComponent } from './component/tab-a/tab-a.component';
import { TabBComponent } from './component/tab-b/tab-b.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchTabComponent,
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
