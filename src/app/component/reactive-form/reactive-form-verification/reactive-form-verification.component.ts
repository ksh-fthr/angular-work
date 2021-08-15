import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form-verification',
  templateUrl: './reactive-form-verification.component.html',
  styleUrls: ['../../../style/common.css'],
})
export class ReactiveFormVerificationComponent implements OnInit, OnDestroy {
  /**
   * ビューで定義する Form の本体
   *
   * @type {FormGroup}
   */
  public networkForm!: FormGroup;

  /**
   * 入力された内容の最小文字数チェック
   * IPアドレスの最小文字数である x.x.x.x の ７ を定義
   *
   * @type {number}
   */
  public readonly minNetworkAddressLength: number = 7;

  /**
   * 入力された内容の最大文字数チェック
   * IPアドレスの最大文字数である xxx.xxx.xxx.xxx の 15 を定義
   *
   * @type {number}
   */
  public readonly maxNetworkAddressLength: number = 15;

  /**
   * 入力された内容のパターンチェック
   * 正規表現で x.x.x.x ~ xxx.xxx.xxx.xxx のパターンマッチングを実現させる
   *
   * @type {string}
   */
  public readonly networkAddressPattern: string =
    '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[¥.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';

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
   * IP アドレスの入力フォームで発生した statusChanges イベントを保持する subscription
   *
   * @private
   * @type {Subscription}
   */
  private ipControlSubscription!: Subscription;

  /**
   * SubnetMask の入力フォームで発生した statusChanges イベントを保持する subscription
   *
   * @private
   * @type {Subscription}
   */
  private subnetmaskSubscription!: Subscription;

  /**
   * コンストラクタ
   */
  constructor() {}

  /**
   * コンポーネントの初期化処理
   */
  public ngOnInit(): void {
    // 複数の入力項目を設置するフォームを生成する
    this.networkForm = new FormGroup({
      // IPアドレスの入力項目
      ipControl: new FormControl('', [
        Validators.required, // 必須入力をチェック
        Validators.minLength(this.minNetworkAddressLength), // 最少入力桁数をチェック
        Validators.maxLength(this.maxNetworkAddressLength), // 最大入力桁数をチェック
        Validators.pattern(this.networkAddressPattern), // 入力パターンをチェック
      ]),
      // サブネットマスクの入力項目
      subnetmaskControl: new FormControl('', [
        Validators.required, // 必須入力をチェック
        Validators.minLength(this.minNetworkAddressLength), // 最少入力桁数をチェック
        Validators.maxLength(this.maxNetworkAddressLength), // 最大入力桁数をチェック
        Validators.pattern(this.networkAddressPattern), // 入力パターンをチェック
      ]),
    });

    // フォーム生成時に指定した入力項目( FormControl ) 分、validation の状態を監視する
    // 状態が変化したらイベントをキャッチするので、それをトリガーにエラー情報の管理を行う
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
   */
  public ngOnDestroy(): void {
    // イベント情報が残り続けるのを防ぐためにコンポーネントの終了処理で破棄する
    this.ipControlSubscription.unsubscribe();
    this.subnetmaskSubscription.unsubscribe();
  }

  /**
   * 入力フォームの有効/無効を制御する
   *
   * @private
   */
  private changeFormEnabledDisabled() {
    // この例では常に「有効」となる

    // 有効にしたい場合
    this.networkForm.controls['ipControl'].enable();
    this.networkForm.controls['subnetmaskControl'].enable();
    // 無効にしたい場合
    // this.networkForm.controls['ipControl'].disable();
    // this.networkForm.controls['subnetmaskControl'].disable();
  }

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   * ここでは単純にアラートを出すだけ
   *
   * @param {any} $event イベント情報
   */
  public onClickOK($event: any) {
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
   */
  private manageValidationError(validationKey: any, errorInformation: any) {
    // validation のエラー情報を管理する
    // 常に最後に発生したエラー情報をビューに表示するため、リストから最後の要素を取得して
    // テンプレートから参照されるプロパティにセットしている

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
