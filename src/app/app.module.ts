import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// ルーティング実装検証用コンポーネント/サービス
import { RoutingComponent } from './component/routing/routing.component';
import { PageAComponent } from './component/routing/page-a/page-a.component';
import { PageBComponent } from './component/routing/page-b/page-b.component';
import { PageCComponent } from './component/routing/page-c/page-c.component';

// モーダル実装検証用コンポーネント/サービス
import { ModalBaseComponent } from './component/modal/modal-base.component';
import { ModalComponent } from './component/modal/modal/modal.component';
import { ModalService } from './service/modal/modal.service';

// タブ実装検証用コンポーネント/サービス
import { SwitchTabComponent } from './component/tab/switch-tab/switch-tab.component';
import { TabBaseComponent } from './component/tab/tab-base.component';
import { TabAComponent } from './component/tab/tab-a/tab-a.component';
import { TabBComponent } from './component/tab/tab-b/tab-b.component';
import { SwitchTabService } from './service/switch-tab/switch-tab.service';


// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '*＊' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    // children 要素によって `<router-outlet></router-outlet>` の入れ子が実現できる
    children: [
      { path: 'page-a', component: PageAComponent },
      { path: 'page-b', component: PageBComponent },
      { path: 'page-c', component: PageCComponent }
    ]
  },
  {
    path: 'modal',
    component: ModalBaseComponent
  },
  {
    path: 'tab',
    component: TabBaseComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    // ルーティング実装検証用コンポーネント
    RoutingComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    // モーダル実装検証用コンポーネント
    ModalComponent,
    ModalBaseComponent,
    // タブ実装検証用コンポーネント
    TabBaseComponent,
    SwitchTabComponent,
    TabAComponent,
    TabBComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
  ],
  providers: [
    ModalService,
    SwitchTabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
