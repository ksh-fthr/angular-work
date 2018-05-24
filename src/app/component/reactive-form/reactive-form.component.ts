import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, OnDestroy {

  /**
   * ビューで定義するする Form の本体
   *
   * @type {FormGroup}
   * @memberof ValidationComponent
   */
  public networkForm: FormGroup;

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

  /**
   * IP アドレスの入力フォームで発生した statusChanges イベントを保持する subscription
   *
   * @private
   * @type {Subscription}
   * @memberof ValidationComponent
   */
  private ipControlSubscription: Subscription;

  /**
   * SubnetMask の入力フォームで発生した statusChanges イベントを保持する subscription
   *
   * @private
   * @type {Subscription}
   * @memberof ValidationComponent
   */
  private subnetmaskSubscription: Subscription;

  /**
   * コンストラクタ
   *
   * @memberof ValidationComponent
   */
  constructor() { }

  /**
   * コンポーネントの初期化処理
   *
   * @memberof ValidationComponent
   */
  public ngOnInit() {
    this.networkForm = new FormGroup({
      ipControl: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(this.minNetworkAddressLength),
          Validators.maxLength(this.maxNetworkAddressLength),
          Validators.pattern(this.networkAddressPattern)
        ]
      ),
      subnetmaskControl: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(this.minNetworkAddressLength),
          Validators.maxLength(this.maxNetworkAddressLength),
          Validators.pattern(this.networkAddressPattern)
        ]
      ),
    });

    this.ipControlSubscription = this.networkForm.controls['ipControl'].statusChanges.subscribe((data) => {
      this.manageValidationError('ipControl', this.networkForm.controls['ipControl'].errors);
    });

    this.subnetmaskSubscription = this.networkForm.controls['subnetmaskControl'].statusChanges.subscribe((data) => {
      this.manageValidationError('subnetmaskControl', this.networkForm.controls['subnetmaskControl'].errors);
    });

    this.changeFormEnabledDisabled();
  }

  /**
   * コンポーネントの終了処理
   *
   * @memberof ValidationComponent
   */
  public ngOnDestroy() {
    this.ipControlSubscription.unsubscribe();
    this.subnetmaskSubscription.unsubscribe();
  }

  /**
   * 入力フォームの有効/無効を制御する
   *
   * @private
   * @memberof ValidationComponent
   */
  private changeFormEnabledDisabled() {
    // if hope to enable form control
    this.networkForm.controls['ipControl'].enable();
    this.networkForm.controls['subnetmaskSubscription'].enable();
    // if hope to disable form control
    // this.networkForm.controls['ipControl'].disable();
    // this.networkForm.controls['subnetmaskControl'].disable();
  }

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   * ここでは単純にアラートを出すだけ
   *
   * @param {any} $event イベント情報
   * @memberof ValidationComponent
   */
  public onClickOK($event) {
    const inputValue: any = {
      ipAddress: this.networkForm.controls['ipControl'].value,
      subnetmask: this.networkForm.controls['subnetmaskControl'].value,
    };
    alert('input value: ' + JSON.stringify(inputValue));
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
