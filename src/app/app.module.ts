import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageAComponent } from './component/page-a/page-a.component';
import { PageBComponent } from './component/page-b/page-b.component';
import { PageCComponent } from './component/page-c/page-c.component';

// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '*＊' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  // [/] パス指定時は page-a を表示する
  { path: '', component: PageAComponent },
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },
  { path: 'page-c', component: PageCComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
