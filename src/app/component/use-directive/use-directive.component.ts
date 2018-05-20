import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  /**
   * 入力されたアドレス
   *
   * @type {string}
   * @memberof UseDirectiveComponent
   */
  public inputAddress: string;

  /**
   * 入力されたアドレス
   *
   * @type {string}
   * @memberof UseDirectiveComponent
   */
  public inputSubnetMask: string;

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

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @memberof UseDirectiveComponent
   */
  constructor() { }

  /**
   * 初期処理 ( 本コンポーネントではなにもしない )
   *
   * @memberof UseDirectiveComponent
   */
  ngOnInit() { }

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   * ここでは単純にアラートを出すだけ
   *
   * @param {any} $event イベント情報
   * @memberof UseDirectiveComponent
   */
  public onClickOK($event) {
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
  public onKeyUp(validationKey, errorInformation) {
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
  private manageValidationError(validationKey, errorInformation) {
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
