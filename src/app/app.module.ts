// 公式・サードパティ製ライブラリ
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // form を作成するために必要
import { HttpClientModule } from '@angular/common/http'; // HTTP クライアントのための import
import { ReactiveFormsModule } from '@angular/forms'; // RactiveForm を使用するために必要
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Angular Material を使用するために必要

/////////////////////////////////////////////////
// ここから ↓ は実装したもの
import { AppComponent } from './app.component';
import { Logging } from './utils/logging';
import { ReadmeComponent } from './component/readme/readme.component'; // TOP ページ用の README

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
import { FeatureLifeCycleModule } from './modules/feature-life-cycle.module'; // ライフサイクルの検証用モジュール
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
import { FeatureUseAttributeDirectiveModule } from './modules/feature-use-attribute-directive.module'; // 属性ディレクティブの検証用モジュール
import { FeatureVerificationRoutingModule } from './modules/feature-verification-routing.module'; // ルーティング実装検証用モジュール
import { FeatureSpeechToTextModule } from './modules/feature-speech-to-text.module'; // 音声認識-文字起こしの検証用モジュール

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
import { UseAttributeDirectiveBaseComponent } from './component/use-attribute-directive/use-attribute-directive-base.component';
import { DoCheckBaseComponent } from './component/lifecycle/do-check/do-check-base.component';
import { OnChangeBaseComponent } from './component/lifecycle/on-change/on-change-base.component';
import { AfterContentBaseComponent } from './component/lifecycle/after-content/after-content-base.component';
import { AfterViewBaseComponent } from './component/lifecycle/after-view/after-view-base.component';
import { RoutingBaseComponent } from './component/routing/routing.base.component';
import { SpeechToTextBaseComponent } from './component/speech-to-text/speech-to-text-base.component';

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
  declarations: [AppComponent, ReadmeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE_TABLE),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FeatureLifeCycleModule,
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
    FeatureUseAttributeDirectiveModule,
    FeatureVerificationRoutingModule,
    FeatureSpeechToTextModule,
  ],
  providers: [ModalService, SwitchTabService, DataShareService, HttpClientService, Logging],
  bootstrap: [AppComponent],
})
export class AppModule {}
