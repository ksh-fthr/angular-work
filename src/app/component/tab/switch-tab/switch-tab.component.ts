
import { Component, OnInit } from '@angular/core';

import { SwitchTabService } from '../../../service/switch-tab/switch-tab.service';

import { TabModel } from '../../../model/tab-model';

@Component({
  selector: 'app-switch-tab',
  templateUrl: './switch-tab.component.html',
  styleUrls: ['./switch-tab.component.css']
})
export class SwitchTabComponent implements OnInit {

  private _currentTab: any;
  private _tabs!: Array<TabModel>;

  // 次のブロックは setter/getter
  // 今回の実装ではプロパティに対してセット/ゲットするだけの単純なもの

  public get currentTab(): any {
    return this._currentTab;
  }

  public get tabs(): Array<TabModel> {
    return this._tabs;
  }

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   */
  constructor(
    private switchTabService: SwitchTabService
  ) {}

  /**
   * 初期処理
   */
  ngOnInit(): void {
    // view に表示するための情報をここでセットする
    this._tabs = this.switchTabService.tabs;
    this._currentTab = this.switchTabService.getCurrentContents();
  }

  /**
   * ボタンがクリックされた時のイベントハンドラ
   *
   * @param $event イベント情報
   */
  public onClick($event: any) {
    // クリックされたタブに応じて表示するコンテンツ( component ) を切り替える
    this._currentTab = this.switchTabService.changeCurrentContents($event.target.innerHTML);
  }
}
