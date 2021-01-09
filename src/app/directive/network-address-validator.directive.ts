import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appNetworkAddressValidator][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: NetworkAddressValidatorDirective, multi: true}
  ]
})
export class NetworkAddressValidatorDirective implements Validator {

  /**
   * 入力された内容の最小文字数チェック
   * アドレスの最小文字数である x.x.x.x の ７ を定義
   *
   * @type {number}
   * @memberof ValidationComponent
   */
  public readonly minLength: number = 7;

  /**
   * 入力された内容の最大文字数チェック
   * アドレスの最大文字数である xxx.xxx.xxx.xxx の 15 を定義
   *
   * @type {number}
   * @memberof ValidationComponent
   */
  public readonly maxLength: number = 15;

  /**
   * 入力された内容のパターンチェック
   * 正規表現で x.x.x.x ~ xxx.xxx.xxx.xxx のパターンマッチングを実現させる
   *
   * @type {string}
   * @memberof ValidationComponent
   */
  public readonly pattern: string = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[¥.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$';

  /**
   * 入力値に対する validation を実施する
   *
   * @param {AbstractControl} control 検証対象の form 要素
   * @returns {{[key: string]: any}} 検証結果
   * @memberof ValidationDirective
   */
  validate(control: AbstractControl): {[key: string]: any} {

    const address: string = control.value;
    if (!address) {
      return { required: true };
    }

    if (address.length < this.minLength) {
      return { minLength: true };
    }

    if (address.length > this.maxLength) {
      return { maxLength: true };
    }

    const patternRegex: any = new RegExp(this.pattern);
    if (!patternRegex.test(address)) {
      return { pattern: true };
    }

    return {};
  }
}
