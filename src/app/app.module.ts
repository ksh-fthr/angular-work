// 公式・サードパティ製ライブラリ
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // form を作成するために必要
import { HttpClientModule } from '@angular/common/http'; // HTTP クライアントのための import
import { ReactiveFormsModule } from '@angular/forms'; // RactiveForm を使用するために必要
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Angular Material を使用するために必要

/////////////////////////////////////////////////
// ここから ↓ は実装したもの
import { AppComponent } from './app.component';
import { Logging } from './utils/logging';

// ----------------------------------------------
// サービスはまとめておく
// ----------------------------------------------
import { ModalService } from './service/modal/modal.service'; // モーダル実装検証用
import { SwitchTabService } from './service/switch-tab/switch-tab.service'; // タブ実装検証用
import { DataShareService } from './service/data-share/data-share.service'; // 親子関係にあるコンポーネント間でのデータ受け渡しの検証用
import { HttpClientService } from './service/http-client/http-client.service'; // Http クライアントの実装検証用
import { ToasterService } from './service/toaster/toaster.service'; // ngx-toastr の検証用

// ----------------------------------------------
// モジュールもまとめておく
// ----------------------------------------------
import { FeatureAllPageRoutingModule } from './modules/feature-all-page-rounting.module';
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
import { FeatureUseNgxToastr } from './modules/feature-use-ngx-toastr.module'; // ngx-toasr の使用感の検証用モジュール

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FeatureAllPageRoutingModule,
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
    FeatureUseNgxToastr,
  ],
  providers: [ModalService, SwitchTabService, DataShareService, HttpClientService, ToasterService, Logging],
  bootstrap: [AppComponent],
})
export class AppModule {}
