import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { HttpClientService, MessageModel } from '../../../service/http-client/http-client.service';

@Component({
  selector: 'app-http-client-verification',
  templateUrl: './http-client-verification.component.html',
  styleUrls: ['../../../style/common.css', './http-client-verification.component.css'],
})
export class HttpClientVerificationComponent implements OnInit {
  injector = inject(EnvironmentInjector);

  /**
   * バックエンドから返却されたたメッセージをセットするプロパティ
   *
   * @type {*}
   */
  public messageInfo: MessageModel = {
    id: null,
    message: null,
  };

  /**
   * バックエンドから返却されたたメッセージを保持するリストプロパティ
   *
   * @type {*}
   */
  public messageInfoList$ = this.httpClientService.get$();

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
   * @param httpClientService HTTP通信を担当するサービス
   */
  constructor(private httpClientService: HttpClientService) {}

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はコンポーネントの初期化時にバックエンドから情報を取得してビューに表示する
   */
  ngOnInit(): void {}

  /**
   * 登録ボタンクリック時のイベントハンドラ
   *
   * @param event イベント情報
   */
  public onClickRegister(event: any): void {
    this.doRegister();
  }

  /**
   * 更新ボタンクリック時のイベントハンドラ
   *
   * @param event イベント情報
   */
  public onClickUpdate(event: any): void {
    this.doUpdate();
  }

  /**
   * 削除ボタンクリック時のイベントハンドラ
   *
   * @param event イベント情報
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

    //
    // 下記エラーが発生するので､その対応として runInInjectionContext でラップする.
    // doUpdate, doDelete も同じ.
    //
    // Error:
    // NG0203: toSignal() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`.
    //
    // 参考: https://github.com/angular/angular/issues/50947
    runInInjectionContext(this.injector, () => {
      this.messageInfoList$ = this.httpClientService.register$(body);
    });
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
    runInInjectionContext(this.injector, () => {
      this.messageInfoList$ = this.httpClientService.update$(body);
    });
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
    runInInjectionContext(this.injector, () => {
      this.messageInfoList$ = this.httpClientService.delete$(body);
    });
  }
}
