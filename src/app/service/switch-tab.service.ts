import { Injectable } from '@angular/core';

import { TabModel } from '../model/tab-model';

@Injectable({
  providedIn: 'root'
})
export class SwitchTabService {

  private _tabs!: Array<TabModel>;

  // 次のブロックは setter/getter
  // 今回の実装ではプロパティに対してセット/ゲットするだけの単純なもの

  public get tabs(): Array<TabModel> {
    return this._tabs;
  }

  public set tabs(tabs: Array<TabModel>) {
    this._tabs = tabs;
  }

  /**
   * コンストラクタ
   *
   * @memberof SwitchTabService
   */
  constructor() { }

  /**
   * 現在表示中のコンテンツを取得する
   *
   * @returns {any} 表示中のコンテンツ( 実態はコンポーネント... これも抽象クラス作ってやると型指定できるけど今回はそこまでしない )
   * @memberof SwitchTabService
   */
  public getCurrentContents(): any {
    // this._tabs は Array 型なので「for-in」は使わないで無難に「for文」で回す
    // 「for-of」でも良いけれど、それだとデバッグ時に「this」やら「_tabs」が何故か「undefined」になって気持ち悪い...
    for (let index = 0; index < this._tabs.length; index++) {
      const target = this._tabs[index];
      if (target.current) {
        return target.contents;
      }
    }
  }

  /**
   * 表示するコンテンツを切り替える
   *
   * @param {string} name クリックされたタブのタブ名
   * @returns {any} 切り替え先のコンテンツ( 実態はコンポーネント... これも抽象クラス作ってやると型指定できるけど今回はそこまでしない )
   * @memberof SwitchTabService
   */
  public changeCurrentContents(name: string): any {
    let contents: any;

    // this._tabs は Array 型なので「for-in」は使わないで無難に「for文」で回す
    // 「for-of」でも良いけれど、それだとデバッグ時に「this」やら「_tabs」が何故か「undefined」になって気持ち悪い...
    for (let index = 0; index < this._tabs.length; index++) {
      const target = this._tabs[index];
      target.current = false;

      if (target.name === name) {
        target.current = true;
        contents = target.contents;
      }
    }
    return contents;
  }
}

