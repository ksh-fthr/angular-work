import { Component, OnInit } from '@angular/core';

import { TabAComponent } from './tab-a/tab-a.component';
import { TabBComponent } from './tab-b/tab-b.component';

import { SwitchTabService } from '../../service/switch-tab/switch-tab.service';

import { TabModel } from '../../model/tab-model';

@Component({
  selector: 'app-tab-base',
  templateUrl: './tab-base.component.html',
  styleUrls: ['../../style/common.css'],
})
export class TabBaseComponent implements OnInit {
  private _tabs: Array<TabModel> = new Array();

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   */
  constructor(private switchTabService: SwitchTabService) {}

  /**
   * 初期処理
   */
  ngOnInit(): void {
    // タブの情報をここでセットする
    // サービスにセットされたタブ情報は、それを利用するコンポーネントで共有される
    this._tabs.push(new TabModel('Tab-A', TabAComponent, true));
    this._tabs.push(new TabModel('Tab-B', TabBComponent, false));
    this.switchTabService.tabs = this._tabs;
  }
}
