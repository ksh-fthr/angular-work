import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // form を作成するために必要
import { HttpClientModule } from '@angular/common/http'; // HTTP クライアントのための import
import { ReactiveFormsModule } from '@angular/forms'; // RactiveForm を使用するために必要
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Angular Material を使用するために必要

import { AppComponent } from './app.component';

import { Logging } from './utils/logging';

// TOP ページ用の README
import { ReadmeComponent } from './component/readme/readme.component';

// ----------------------------------------------
// サービスはまとめておく
// ----------------------------------------------
import { ModalService } from './service/modal/modal.service'; // モーダル実装検証用
import { SwitchTabService } from './service/switch-tab/switch-tab.service'; // タブ実装検証用
import { DataShareService } from './service/data-share/data-share.service'; // 親子関係にあるコンポーネント間でのデータ受け渡しの検証用
import { HttpClientService } from './service/http-client/http-client.service'; // Http クライアントの実装検証用

// ----------------------------------------------
// モジュールもまとめておく
// ----------------------------------------------
import { FeatureTabModule } from './modules/feature-tab.module'; // タブ実装検証用モジュール
import { FeatureReferenceContentModule } from './modules/feature-reference-content.module'; // 子コンポーネントや外部コンテンツの参照を取得する検証用モジュール
import { FeatureAngularMaterialModule } from './modules/feature-angular-material.module'; // Angular Material の検証用モジュール
import { FeatureModalModule } from './modules/feature-modal.module'; // モーダルの実装検証用モジュール
import { FeatureHttpClientModule } from './modules/feature-http-client.module'; // Http モジュールを利用した Http クライアントの実装検証用モジュール
import { FeatureParentChildModule } from './modules/feature-parent-child.module'; // 親子関係にあるコンポーネント間でのデータ受け渡しの検証用モジュール
import { FeatureDataShareModule } from './modules/feature-data-share.module'; // コンポーネント間のデータ共有の検証用モジュール
import { FeatureCsvAndArchiveModule } from './modules/feature-csv-and-archive.module'; // csv ファイル出力と zip ファイル出力の検証用モジュール
import { FeatureReactiveForm } from './modules/feature-reactive-form.module'; // ReactiveFormsModule の検証用モジュール
import { FeatureNormalValidationModule } from './modules/feature-normal-validation.module'; // Validation 機能の検証用モジュール

// ルーティング実装検証用コンポーネント
import { RoutingBaseComponent } from './component/routing/routing.base.component';
import { PageAComponent } from './component/routing/page-a/page-a.component';
import { PageBComponent } from './component/routing/page-b/page-b.component';
import { PageCComponent } from './component/routing/page-c/page-c.component';

// コンポーネントのライフサイクル検証用コンポーネント
// doCheck の検証
import { DoCheckBaseComponent } from './component/lifecycle/do-check/do-check-base.component';
import { DoCheckVerificationComponent } from './component/lifecycle/do-check/do-check-verification/do-check-verification.component';
// onChange の検証
import { OnChangeBaseComponent } from './component/lifecycle/on-change/on-change-base.component';
import { OnChangeVerificationComponent } from './component/lifecycle/on-change/on-change-verification/on-change-verification.component';
// AfterContentInit と AfterContentChecked の検証
import { AfterContentBaseComponent } from './component/lifecycle/after-content/after-content-base.component';
import { AfterContentParentComponent } from './component/lifecycle/after-content/after-content-verification/after-content-parent/after-content-parent.component';
import { AfterContentChildComponent } from './component/lifecycle/after-content/after-content-verification/after-content-child/after-content-child.component';
import { NgContentParentComponent } from './component/lifecycle/after-content/ng-content-verification/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './component/lifecycle/after-content/ng-content-verification/ng-content-child/ng-content-child.component';
// AfterViewInit と AfterViewChecked の検証
import { AfterViewBaseComponent } from './component/lifecycle/after-view/after-view-base.component';
import { AfterViewParentComponent } from './component/lifecycle/after-view/after-view-verification/after-view-parent/after-view-parent.component';
import { AfterViewChildComponent } from './component/lifecycle/after-view/after-view-verification/after-view-child/after-view-child.component';

// 属性ディレクティブの実装検証用コンポーネント/ディレクティブ
import { TemplateDirective } from './directive/attribute/template/template.directive';
import { UseAttributeDirectiveBaseComponent } from './component/use-attribute-directive/use-attribute-directive-base.component';
import { AttributeDirectiveVerificationComponent } from './component/use-attribute-directive/attribute-directive-verification/attribute-directive-verification.component';
// 属性ディレクティブのイベント実装検証用コンポーネント/ディレクティブ
import { EventDirective } from './directive/attribute/event/event.directive';
import { AttributeDirectiveEventVerificationComponent } from './component/use-attribute-directive/attribute-directive-event-verification/attribute-directive-event-verification.component';
// 属性ディレクティブの Validation 実装検証用コンポーネント/ディレクティブ
import { NetworkAddressValidatorDirective } from './directive/attribute/validator/network-address-validator.directive';
import { AttributeDirectiveValidatorVerificationComponent } from './component/use-attribute-directive/attribute-directive-validator-verification/attribute-directive-validator-verification.component';

// 音声認識-文字起こしの検証用コンポーネント
import { SpeechToTextBaseComponent } from './component/speech-to-text/speech-to-text-base.component';
import { UseWebSpeechApiComponent } from './component/speech-to-text/use-web-speech-api/use-web-speech-api.component';
import { UseAwsTranscribeStreamingComponent } from './component/speech-to-text/use-aws-transcribe-streaming/use-aws-transcribe-streaming.component';

// ----------------------------------------------
// routing のために必要なベースコンポーネント
// ----------------------------------------------
// 各モジュールを import することでこれらのコンポーネントも巻き込んで import されるが､
// routing を行うには宣言しておく必要がある
import { TabBaseComponent } from './component/tab/tab-base.component';
import { ReferenceBaseComponent } from './component/reference/reference-base.component';
import { UseAngularMaterialBaseComponent } from './component/use-angular-material/use-angular-material-base.component';
import { ModalBaseComponent } from './component/modal/modal-base.component';
import { HttpClientBaseComponent } from './component/http-client/http-client-base.component';
import { ParentChildBaseComponent } from './component/parent-child/parent-child-base.component';
import { DataShareBaseComponent } from './component/data-share/data-share-base.component';
import { CsvAndZipBaseComponent } from './component/csv-and-zip/csv-and-zip-base.component';
import { ReactiveFormBaseComponent } from './component/reactive-form/reactive-form-base.component';
import { ValidationBaseComponent } from './component/validation/validation-base.component';

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
    // children 要素によって `<router-outlet></router-outlet>` の入れ子が実現できる
    children: [
      { path: 'page-a', component: PageAComponent },
      { path: 'page-b', component: PageBComponent },
      { path: 'page-c', component: PageCComponent },
    ],
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
    children: [
      { path: 'use-web-speech-api', component: UseWebSpeechApiComponent },
      { path: 'use-aws-transcribe', component: UseAwsTranscribeStreamingComponent },
    ],
  },
  {
    path: 'angular-material',
    component: UseAngularMaterialBaseComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent,
    // ルーティング実装検証用コンポーネント
    RoutingBaseComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    // コンポーネントのライフサイクル検証用コンポーネント
    // doCheck の検証
    DoCheckBaseComponent,
    DoCheckVerificationComponent,
    // onChange の検証
    OnChangeBaseComponent,
    OnChangeVerificationComponent,
    // AfterContentInit と AfterContentChecked の検証
    AfterContentBaseComponent,
    AfterContentParentComponent,
    AfterContentChildComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    // AfterViewInit と AfterViewChecked の検証
    AfterViewBaseComponent,
    AfterViewParentComponent,
    AfterViewChildComponent,
    // 属性ディレクティブの実装検証用コンポーネント/ディレクティブ
    TemplateDirective,
    UseAttributeDirectiveBaseComponent,
    AttributeDirectiveVerificationComponent,
    // 属性ディレクティブのイベント実装検証用コンポーネント/ディレクティブ
    EventDirective,
    AttributeDirectiveEventVerificationComponent,
    // 属性ディレクティブの Validation 実装検証用コンポーネント/ディレクティブ
    NetworkAddressValidatorDirective,
    AttributeDirectiveValidatorVerificationComponent,
    // 音声認識-文字起こしの検証用コンポーネント
    SpeechToTextBaseComponent,
    UseWebSpeechApiComponent,
    UseAwsTranscribeStreamingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FeatureTabModule,
    FeatureReferenceContentModule,
    FeatureAngularMaterialModule,
    FeatureModalModule,
    FeatureHttpClientModule,
    FeatureParentChildModule,
    FeatureDataShareModule,
    FeatureCsvAndArchiveModule,
    FeatureReactiveForm,
    FeatureNormalValidationModule,
  ],
  providers: [ModalService, SwitchTabService, DataShareService, HttpClientService, Logging],
  bootstrap: [AppComponent],
})
export class AppModule {}
