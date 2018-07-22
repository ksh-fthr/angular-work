import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-tab',
  templateUrl: './switch-tab.component.html',
  styleUrls: ['./switch-tab.component.css']
})
export class SwitchTabComponent implements OnInit {

  public tabTable: any = {
    'Tab-A': true,
    'Tab-B': false
  };

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @memberof SwitchTabComponent
   */
  constructor() { }

  /**
   * 初期処理 ( 本コンポーネントではなにもしない )
   *
   * @memberof SwitchTabComponent
   */
  ngOnInit() { }

  /**
   * OKボタンがクリックされた時のイベントハンドラ
   *
   * @param {any} $event イベント情報
   * @memberof SwitchTabComponent
   */
  public onClick($event) {
    this.setCurrentTab($event.target.innerHTML);
  }

  private setCurrentTab(key: string) {
    for (const target in this.tabTable) {
      if (this.tabTable.hasOwnProperty(target)) {
        this.tabTable[target] = false;
      }
    }
    this.tabTable[key] = true;
  }
}
