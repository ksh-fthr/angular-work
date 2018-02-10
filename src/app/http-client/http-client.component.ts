import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  /**
   * バックエンドから返却されたレスポンスをセットするプロパティ
   *
   * 型は any ではなく class で型を定義した方が良いが
   * ここでは簡便さから any としておく
   *
   * @private
   * @type {string}
   * @memberof HttpClientComponent
   */
  public param: any = {};

  /**
   * バックエンドから返却されたたメッセージをセットするプロパティ
   *
   * @type {*}
   * @memberof HttpClientComponent
   */
  public messageInfo: any = {};

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
      (response) => {
        this.param = response;
        this.messageInfo = this.param.messages[0];
      }
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

  /**
   * 登録ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   * @memberof HttpClientComponent
   */
  public onClickRegister(event: any) {
    this.doRegister();
  }

  /**
   * 更新ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   * @memberof HttpClientComponent
   */
  public onClickUpdate(event: any) {
    this.doUpdate();
  }

  /**
   * 削除ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   * @memberof HttpClientComponent
   */
  public onClickDelete(event: any) {
    this.doDelete();
  }

  /**
   * メッセージ登録
   *
   * @private
   * @memberof HttpClientComponent
   */
  private doRegister() {
    const body: any = {
      id: 1,
      message: 'メッセージ登録' + 1
    };
    this.httpClientService.register(body);
  }

  /**
   * メッセージ更新
   *
   * @private
   * @memberof HttpClientComponent
   */
  private doUpdate() {
    const body: any = {
      id: 1,
      message: 'メッセージ更新' + 1
    };
    this.httpClientService.update(body);
  }

  /**
   * メッセージ削除
   *
   * @private
   * @memberof HttpClientComponent
   */
  private doDelete() {
    const body: any = {
      id: 1
    };
    this.httpClientService.delete(body);
  }
}
