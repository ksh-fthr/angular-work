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
   * 型は any ではなく class で型を定義した方が良いが
   * ここでは簡便さから any としておく
   *
   * @private
   * @type {string}
   * @memberof HttpClientComponent
   */
  public param: any = '';

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   * 自作した HttpClientService を DI する
   *
   * @param {HttpClientService} httpClientService HTTP通信を担当するサービス
   * @memberof HttpClientComponent
   */
  constructor(private httpClientService: HttpClientService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はコンポーネントの初期化時にバックエンドから情報を取得してビューに表示する
   *
   * @memberof HttpClientComponent
   */
  ngOnInit() {
    // ------
    // toPromise.then((res) =>{}) を利用する場合のコード
    // ------
    this.httpClientService.get()
    .then(
      (response) => this.param = response
    )
    .catch(
      (error) => console.log(error)
    );

    // ------
    // subscribe((res) =>{}) を利用する場合のコード
    // ------
    // HTTP GET の実行結果を受け取るためのコールバックを引数に､ get() を呼び出す
    // this.httpClientService.get((response) => {
    //   this.param = response;
    // });
  }

}
