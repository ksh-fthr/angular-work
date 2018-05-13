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
  public messageInfo: any = {
    id: null,
    message: null
  };

  /**
   * バックエンドから返却されたたメッセージを保持するリストプロパティ
   *
   * @type {*}
   * @memberof HttpClientComponent
   */
  public messageInfoList: any = [this.messageInfo];

  /**
   * メッセージ登録回数
   *
   * @private
   * @type {number}
   * @memberof HttpClientComponent
   */
  public messageId: number = 1;

  /**
   * 入力メッセージ
   *
   * @type {string}
   * @memberof HttpClientComponent
   */
  public message: string = '';

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
        this.messageInfoList = this.param.messages;
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
    //   this.messageInfoList = this.param.messages;
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
      id: this.messageId,
      message: this.message
    };
    this.httpClientService.register(body)
    .then(
      (response) => {
        this.param = response;
        this.messageInfoList = this.param.messages;
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }

  /**
   * メッセージ更新
   *
   * @private
   * @memberof HttpClientComponent
   */
  private doUpdate() {
    const body: any = {
      id: this.messageId,
      message: this.message
    };
    this.httpClientService.update(body)
    .then(
      (response) => {
        this.param = response;
        this.messageInfoList = this.param.messages;
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }

  /**
   * メッセージ削除
   *
   * @private
   * @memberof HttpClientComponent
   */
  private doDelete() {
    const body: any = {
      id: this.messageId
    };
    this.httpClientService.delete(body)
    .then(
      (response) => {
        this.param = response;
        this.messageInfoList = this.param.messages;
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }
}
