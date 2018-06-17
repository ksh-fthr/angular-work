import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  public tabTable: any = {
    'Tab-A': true,
    'Tab-B': false
  };

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
   *
   * @param {any} $event イベント情報
   * @memberof UseDirectiveComponent
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
