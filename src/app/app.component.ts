import { Component, OnInit } from '@angular/core';

import { TabAComponent } from './component/tab-a/tab-a.component';
import { TabBComponent } from './component/tab-b/tab-b.component';

import { SwitchTabService } from './service/switch-tab.service';

import { TabModel } from './model/tab-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _tabs: Array<TabModel> = new Array();

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @param {SwitchTabService} switchTabService
   * @memberof AppComponent
   */
  constructor(
    private switchTabService: SwitchTabService
  ) {
  }

  /**
   * 初期処理
   *
   * @memberof AppComponent
   */
  ngOnInit() {
    // タブの情報をここでセットする
    // サービスにセットされたタブ情報は、それを利用するコンポーネントで共有される
    this._tabs.push(new TabModel('Tab-A', TabAComponent, true));
    this._tabs.push(new TabModel('Tab-B', TabBComponent, false));
    this.switchTabService.tabs = this._tabs;
  }
}
