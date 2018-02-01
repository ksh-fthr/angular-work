import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../service/http-service.service';

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
   * @param {HttpServiceService} httpServiceService HTTP通信を担当するサービス
   * @memberof HttpClientComponent
   */
  constructor(private httpServiceService: HttpServiceService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   *
   * @memberof HttpClientComponent
   */
  ngOnInit() {
    this.httpServiceService.get()
    .then(
      (response) => this.param = response
    )
    .catch(
      (error) => console.log(error)
    );
  }

}
