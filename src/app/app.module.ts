import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// form を作成するために必要
import { FormsModule } from '@angular/forms';

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

// 子コンポーネントや外部コンテンツの参照を取得する検証用コンポーネント/サービス
import { ReferenceBaseComponent } from './component/reference/reference-base.component';
import { ContentChildComponent } from './component/reference/content-child/content-child.component';
import { ContentParentComponent } from './component/reference/content-parent/content-parent.component';
import { ViewChildComponent } from './component/reference/view-child/view-child.component';
import { ViewParentComponent } from './component/reference/view-parent/view-parent.component';

// 親子関係にあるコンポーネント間でのデータ受け渡しの検証用コンポーネント/サービス
import { ParentChildBaseComponent } from './component/parent-child/parent-child-base.component';
import { ParentComponent } from './component/parent-child/parent/parent.component';
import { ChildComponent } from './component/parent-child/child/child.component';


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
  {
    path: 'reference',
    component: ReferenceBaseComponent
  },
  {
    path: 'parent-child',
    component: ParentChildBaseComponent
  }
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
    // 子コンポーネントや外部コンテンツの参照を取得する検証用コンポーネント
    ReferenceBaseComponent,
    ContentChildComponent,
    ContentParentComponent,
    ViewChildComponent,
    ViewParentComponent,
    // 親子関係にあるコンポーネント間でのデータ受け渡しの検証用コンポーネント
    ParentChildBaseComponent,
    ParentComponent,
    ChildComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
    FormsModule,
  ],
  providers: [
    ModalService,
    SwitchTabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
