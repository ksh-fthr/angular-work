import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Http モジュールを利用した Http クライアントの実装検証用コンポーネント
import { HttpClientBaseComponent } from '../component/http-client/http-client-base.component';
import { HttpClientVerificationComponent } from '../component/http-client/http-client-verification/http-client-verification.component';

@NgModule({
  declarations: [HttpClientBaseComponent, HttpClientVerificationComponent],
  imports: [CommonModule, FormsModule],
  exports: [HttpClientBaseComponent, HttpClientVerificationComponent],
})
export class FeatureHttpClientModule {}
