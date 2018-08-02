import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchTabComponent } from './component/switch-tab/switch-tab.component';
import { TabAComponent } from './component/tab-a/tab-a.component';
import { TabBComponent } from './component/tab-b/tab-b.component';

import { SwitchTabService } from './service/switch-tab.service';

@NgModule({
  declarations: [
    AppComponent,
    SwitchTabComponent,
    TabAComponent,
    TabBComponent,
  ],
  // ngComponentOutlet で動的にコンポーネントを表示するにはこの宣言が必要
  entryComponents: [
    TabAComponent,
    TabBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SwitchTabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
