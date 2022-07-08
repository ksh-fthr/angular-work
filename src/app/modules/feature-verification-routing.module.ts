import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ルーティング実装検証用コンポーネント
import { RoutingBaseComponent } from '../component/routing/routing.base.component';
import { PageAComponent } from '../component/routing/page-a/page-a.component';
import { PageBComponent } from '../component/routing/page-b/page-b.component';
import { PageCComponent } from '../component/routing/page-c/page-c.component';

const ROUTE_TABLE: Routes = [
  {
    path: 'routing',
    component: RoutingBaseComponent,
    // children 要素によって `<router-outlet></router-outlet>` の入れ子が実現できる
    children: [
      { path: 'page-a', component: PageAComponent },
      { path: 'page-b', component: PageBComponent },
      { path: 'page-c', component: PageCComponent },
    ],
  },
];
@NgModule({
  declarations: [RoutingBaseComponent, PageAComponent, PageBComponent, PageCComponent],
  imports: [CommonModule, RouterModule.forRoot(ROUTE_TABLE)],
  exports: [RoutingBaseComponent, PageAComponent, PageBComponent, PageCComponent, RouterModule],
})
export class FeatureVerificationRoutingModule {}
