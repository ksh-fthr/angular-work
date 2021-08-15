import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../service/http-client/http-client.service';

@Component({
  selector: 'app-http-client-verification',
  templateUrl: './http-client-verification.component.html',
  styleUrls: ['../../../style/common.css', './http-client-verification.component.css'],
})
export class HttpClientVerificationComponent implements OnInit {
  /**
   * バックエンドから返却されたレスポンスをセットするプロパティ
   *
   * 型は any ではなく class で型を定義した方が良いが
   * ここでは簡便さから any としておく
   *
   * @private
   * @type {string}
   */
  public param: any = {};

  /**
   * バックエンドから返却されたたメッセージをセットするプロパティ
   *
   * @type {*}
   */
  public messageInfo: any = {
    id: null,
    message: null,
  };

  /**
   * バックエンドから返却されたたメッセージを保持するリストプロパティ
   *
   * @type {*}
   */
  public messageInfoList: any = [this.messageInfo];

  /**
   * メッセージ登録回数
   *
   * @private
   * @type {number}
   */
  public messageId = 1;

  /**
   * 入力メッセージ
   *
   * @type {string}
   */
  public message = '';

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   * 自作した HttpClientService を DI する
   *
   * @param {HttpClientService} httpClientService HTTP通信を担当するサービス
   */
  constructor(private httpClientService: HttpClientService) {}

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はコンポーネントの初期化時にバックエンドから情報を取得してビューに表示する
   */
  ngOnInit(): void {
    // ------
    // toPromise.then((res) =>{}) を利用する場合のコード
    // ------
    this.httpClientService
      .get()
      .then((response: any) => {
        console.log(`[get] response: ${JSON.stringify(response)}`);
        this.param = response.body;
        this.messageInfoList = this.param.messages;
      })
      .catch((error) => console.log(error));

    // ------
    // subscribe((res) =>{}) を利用する場合のコード
    // ------
    // HTTP GET の実行結果を受け取るためのコールバックを引数に､ get() を呼び出す
    // this.httpClientService.get((response: any) => {
    //   console.log(`[get] response: ${JSON.stringify(response)}`);
    //   this.param = response.body;
    //   this.messageInfoList = this.param.messages;
    // });
  }

  /**
   * 登録ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   */
  public onClickRegister(event: any): void {
    this.doRegister();
  }

  /**
   * 更新ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   */
  public onClickUpdate(event: any): void {
    this.doUpdate();
  }

  /**
   * 削除ボタンクリック時のイベントハンドラ
   *
   * @param {*} event イベント情報
   */
  public onClickDelete(event: any): void {
    this.doDelete();
  }

  /**
   * メッセージ登録
   *
   * @private
   */
  private doRegister(): void {
    const body: any = {
      id: this.messageId,
      message: this.message,
    };
    this.httpClientService
      .register(body)
      .then((response: any) => {
        console.log(`[post] response: ${JSON.stringify(response)}`);
        this.param = response.body;
        this.messageInfoList = this.param.messages;
      })
      .catch((error) => console.log(error));
  }

  /**
   * メッセージ更新
   *
   * @private
   */
  private doUpdate(): void {
    const body: any = {
      id: this.messageId,
      message: this.message,
    };
    this.httpClientService
      .update(body)
      .then((response: any) => {
        console.log(`[put] response: ${JSON.stringify(response)}`);
        this.param = response.body;
        this.messageInfoList = this.param.messages;
      })
      .catch((error) => console.log(error));
  }

  /**
   * メッセージ削除
   *
   * @private
   */
  private doDelete(): void {
    const body: any = {
      id: this.messageId,
    };
    this.httpClientService
      .delete(body)
      .then((response: any) => {
        console.log(`[delete] response: ${JSON.stringify(response)}`);
        this.param = response.body;
        this.messageInfoList = this.param.messages;
      })
      .catch((error) => console.log(error));
  }
}
