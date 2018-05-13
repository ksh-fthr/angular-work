import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// HTTP クライアントのための import
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// HTTP クライアントとしてのコンポーネント
import { HttpClientComponent } from './http-client/http-client.component';

// バックエンドとの通信を実際に担当するサービス
import { HttpClientService } from './service/http-client.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // モジュールを利用を宣言する
    HttpClientModule
  ],
  providers: [
    // 自作サービスをアプリ全体で DI するために登録する
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
