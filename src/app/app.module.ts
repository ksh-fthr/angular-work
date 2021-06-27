import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageAComponent } from './component/routing/page-a/page-a.component';
import { PageBComponent } from './component/routing/page-b/page-b.component';
import { PageCComponent } from './component/routing/page-c/page-c.component';
import { ModalBaseComponent } from './component/modal/modal-base.component';
import { ModalComponent } from './component/modal/modal/modal.component';
import { RoutingComponent } from './component/routing/routing.component';

import { ModalService } from './service/modal.service';


// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '*＊' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  {
    path: 'modal',
    component: ModalBaseComponent
  },
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
];

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    ModalComponent,
    RoutingComponent,
    ModalBaseComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
