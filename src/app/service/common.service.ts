import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  /**
   * 本サービスを DI したコンポーネントで参照されるプロパティ
   *
   * @type {String}
   * @memberof CommonService
   */
  public commonProp: String = '';

  /**
   * コンストラクタ. CommonService のインスタンスを生成する
   *
   * @memberof CommonService
   */
  constructor() {
    this.commonProp = 'このプロパティは CommonService のもの';
  }
}
