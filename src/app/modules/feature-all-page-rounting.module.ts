import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// ----------------------------------------------
// routing のために必要なベースコンポーネント
// ----------------------------------------------
// 各モジュールを import することでこれらのコンポーネントも巻き込んで import されるが､
// routing を行うには宣言しておく必要がある
import { ReadmeComponent } from '../component/readme/readme.component'; // TOP ページ用の README
import { TabBaseComponent } from '../component/tab/tab-base.component';
import { ReferenceBaseComponent } from '../component/reference/reference-base.component';
import { UseAngularMaterialBaseComponent } from '../component/use-angular-material/use-angular-material-base.component';
import { ModalBaseComponent } from '../component/modal/modal-base.component';
import { HttpClientBaseComponent } from '../component/http-client/http-client-base.component';
import { ParentChildBaseComponent } from '../component/parent-child/parent-child-base.component';
import { DataShareBaseComponent } from '../component/data-share/data-share-base.component';
import { CsvAndZipBaseComponent } from '../component/csv-and-zip/csv-and-zip-base.component';
import { ReactiveFormBaseComponent } from '../component/reactive-form/reactive-form-base.component';
import { ValidationBaseComponent } from '../component/validation/validation-base.component';
import { UseAttributeDirectiveBaseComponent } from '../component/use-attribute-directive/use-attribute-directive-base.component';
import { DoCheckBaseComponent } from '../component/lifecycle/do-check/do-check-base.component';
import { OnChangeBaseComponent } from '../component/lifecycle/on-change/on-change-base.component';
import { AfterContentBaseComponent } from '../component/lifecycle/after-content/after-content-base.component';
import { AfterViewBaseComponent } from '../component/lifecycle/after-view/after-view-base.component';
import { RoutingBaseComponent } from '../component/routing/routing.base.component';
import { SpeechToTextBaseComponent } from '../component/speech-to-text/speech-to-text-base.component';

// TODO: ROUTING もモジュール分割したい
// Routing を行う対象のコンポーネントを管理する
// path にセットした文字列にマッチしたURLが指定されると、対になっているコンポーネントが表示される
// 下記のように明示する以外にも
//    '' で [/] のルートパスを指定できる
//    '*＊' でワイルドカードを指定できる
const ROUTE_TABLE: Routes = [
  {
    path: '',
    component: ReadmeComponent,
  },
  {
    path: 'readme',
    component: ReadmeComponent,
  },
  {
    path: 'life-cycle-on-change',
    component: OnChangeBaseComponent,
  },
  {
    path: 'life-cycle-do-check',
    component: DoCheckBaseComponent,
  },
  {
    path: 'life-cycle-after-content',
    component: AfterContentBaseComponent,
  },
  {
    path: 'life-cycle-after-view',
    component: AfterViewBaseComponent,
  },
  {
    path: 'reference',
    component: ReferenceBaseComponent,
  },
  {
    path: 'parent-child',
    component: ParentChildBaseComponent,
  },
  {
    path: 'data-share',
    component: DataShareBaseComponent,
  },
  {
    path: 'http-client',
    component: HttpClientBaseComponent,
  },
  {
    path: 'validation',
    component: ValidationBaseComponent,
  },
  {
    path: 'attribute-directive',
    component: UseAttributeDirectiveBaseComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormBaseComponent,
  },
  {
    path: 'tab',
    component: TabBaseComponent,
  },
  {
    path: 'routing',
    component: RoutingBaseComponent,
  },
  {
    path: 'modal',
    component: ModalBaseComponent,
  },
  {
    path: 'csv-and-zip',
    component: CsvAndZipBaseComponent,
  },
  {
    path: 'speech-to-text',
    component: SpeechToTextBaseComponent,
  },
  {
    path: 'angular-material',
    component: UseAngularMaterialBaseComponent,
  },
];

@NgModule({
  declarations: [ReadmeComponent],
  imports: [CommonModule, RouterModule.forRoot(ROUTE_TABLE)],
  exports: [ReadmeComponent, RouterModule],
})
export class FeatureAllPageRoutingModule {}
