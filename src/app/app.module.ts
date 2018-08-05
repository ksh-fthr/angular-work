import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  // ngComponentOutlet で動的にコンポーネントを読み込むにはこの宣言が必要
  entryComponents: [
    TabAComponent,
    TabBComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    SwitchTabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
