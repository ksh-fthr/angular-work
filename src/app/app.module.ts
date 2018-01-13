import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// form を作成するために必要
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';

// サービスを登録するための import
// コンポーネントで DI する場合はこの import は不要
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // サービスを登録する
  providers: [
    // コンポーネントで DI する場合はここでの登録は不要
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
