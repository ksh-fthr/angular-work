import { Injectable } from '@angular/core';

import { TabModel } from '../../model/tab-model';

@Injectable({
  providedIn: 'root',
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
   */
  constructor() {}

  /**
   * 現在表示中のコンテンツを取得する
   *
   * @returns 表示中のコンテンツ( 実態はコンポーネント... これも抽象クラス作ってやると型指定できるけど今回はそこまでしない )
   */
  public getCurrentContents(): TabModel {
    let currentTab: TabModel = new TabModel('', '');
    this._tabs.forEach((tab) => {
      if (tab.current) {
        currentTab = tab.contents;
        return;
      }
    });
    return currentTab;
  }

  /**
   * 表示するコンテンツを切り替える
   *
   * @param name クリックされたタブのタブ名
   * @returns 切り替え先のコンテンツ( 実態はコンポーネント... これも抽象クラス作ってやると型指定できるけど今回はそこまでしない )
   */
  public changeCurrentContents(name: string): any {
    let contents: any;
    this.tabs.forEach((tab) => {
      const target = tab;
      target.current = false;

      if (target.name === name) {
        target.current = true;
        contents = target.contents;
      }
      return;
    });
    return contents;
  }
}
