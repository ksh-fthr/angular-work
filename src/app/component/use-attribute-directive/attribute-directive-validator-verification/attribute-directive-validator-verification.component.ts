import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-validator-verification',
  templateUrl: './attribute-directive-validator-verification.component.html',
  styleUrls: ['../../../style/common.css', './attribute-directive-validator-verification.component.css'],
})
export class AttributeDirectiveValidatorVerificationComponent implements OnInit {
  /**
   * 入力されたアドレス
   *
   * @type {string}
   */
  public inputAddress = '';

  /**
   * 入力されたアドレス
   *
   * @type {string}
   */
  public inputSubnetMask = '';

  /**
   * 入力エラー情報を画面に表示するためのプロパティ
   *
   * @type {*}
   */
  public validationError: any;

  /**
   * 入力エラー情報を管理するためのリスト
   *
   * @private
   * @type {*}
   */
  private validationErrorList: any = [];

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   */
  constructor() {}

  /**
   * 初期処理 ( 本コンポーネントではなにもしない )
   */
  ngOnInit(): void {}

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   * ここでは単純にアラートを出すだけ
   *
   * @param $event イベント情報
   */
  public onClickOK($event: any) {
    alert('OK button had clicked.');
  }

  /**
   * keyup イベントのイベントハンドラ
   * このイベントをトリガーに入力エラー情報を管理する
   *
   * @param validationKey
   * @param errorInformation
   */
  public onKeyUp(validationKey: any, errorInformation: any) {
    this.manageValidationError(validationKey, errorInformation);
  }

  /**
   * 入力エラー情報を管理する
   * 具体的には次の処理を行う
   * # 引数の validationKey を元にエラー情報を一意に管理する
   * # ビューに表示するためのエラー情報にリストの最後の情報をセットする
   *
   * @private
   * @param validationKey エラーが発生した入力フォーム
   * @param errorInformation バリデーションエラー情報
   */
  private manageValidationError(validationKey: any, errorInformation: any) {
    for (const target in this.validationErrorList) {
      if (this.validationErrorList.hasOwnProperty(target) && this.validationErrorList[target].key === validationKey) {
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
