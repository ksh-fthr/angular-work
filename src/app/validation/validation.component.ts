import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  /**
   * validaion のための双方向データバインドを行うプロパティ
   *
   * @type {string}
   * @memberof ValidationComponent
   */
  public inputIP: string = '';

  /**
   * validaion のための双方向データバインドを行うプロパティ
   *
   * @type {string}
   * @memberof ValidationComponent
   */
  public inputSubnetMask: string = '';

  /**
   * 入力された内容の最小文字数チェック
   * IPアドレスの最小文字数である x.x.x.x の ７ を定義
   *
   * @type {number}
   * @memberof ValidationComponent
   */
  public readonly minNetworkAddressLength: number = 7;

  /**
   * 入力された内容の最大文字数チェック
   * IPアドレスの最大文字数である xxx.xxx.xxx.xxx の 15 を定義
   *
   * @type {number}
   * @memberof ValidationComponent
   */
  public readonly maxNetworkAddressLength: number = 15;

  /**
   * 入力された内容のパターンチェック
   * 正規表現で x.x.x.x ~ xxx.xxx.xxx.xxx のパターンマッチングを実現させる
   *
   * @type {string}
   * @memberof ValidationComponent
   */
  public readonly networkAddressPattern: string = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[¥.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';

  /**
   * 入力エラー情報を画面に表示するためのプロパティ
   *
   * @type {*}
   * @memberof ValidationComponent
   */
  public validationError: any;

  /**
   * 入力エラー情報を管理するためのリスト
   *
   * @private
   * @type {*}
   * @memberof ValidationComponent
   */
  private validationErrorList: any = [];

  constructor() { }

  ngOnInit() {
  }

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   * ここでは単純にアラートを出すだけ
   *
   * @param {any} $event イベント情報
   * @memberof ValidationComponent
   */
  public onClickOK($event: any) {
    alert('OK button had clicked.');
  }

  /**
   * keyup イベントのイベントハンドラ
   * このイベントをトリガーに入力エラー情報を管理する
   *
   * @param {any} validationKey
   * @param {any} errorInformation
   * @memberof ValidationComponent
   */
  public onKeyUp(validationKey: any, errorInformation: any) {
    this.manageValidationError(validationKey, errorInformation)
  }

  /**
   * 入力エラー情報を管理する
   * 具体的には次の処理を行う
   * # 引数の validationKey を元にエラー情報を一意に管理する
   * # ビューに表示するためのエラー情報にリストの最後の情報をセットする
   *
   * @private
   * @param {any} validationKey エラーが発生した入力フォーム
   * @param {any} errorInformation バリデーションエラー情報
   * @memberof ValidationComponent
   */
  private manageValidationError(validationKey: any, errorInformation: any) {
    for (const target in this.validationErrorList) {
      if (this.validationErrorList.hasOwnProperty(target) &&
          this.validationErrorList[target].key === validationKey) {
        this.validationErrorList.splice(target, 1);
        break;
      }
    }

    if (errorInformation) {
      this.validationErrorList.push({ key: validationKey, error: errorInformation });
    }

    const errorData: any = this.validationErrorList[this.validationErrorList.length - 1];
    this.validationError = errorData ? errorData.error : undefined;
  }
}
