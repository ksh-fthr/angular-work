import { Component, OnInit } from '@angular/core';

import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  /**
   * バックエンドから取得した文字列
   *
   * @private
   * @type {string}
   * @memberof HttpClientComponent
   */
  public param: any = '';

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   *
   * @param {HttpClientService} httpClientService HTTP通信を担当するサービス
   * @memberof HttpClientComponent
   */
  constructor(private httpClientService: HttpClientService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   *
   * @memberof HttpClientComponent
   */
  ngOnInit() {
    this.httpClientService.get()
    .then(
      (response) => this.param = response
    )
    .catch(
      (error) => console.log(error)
    );
  }

}
