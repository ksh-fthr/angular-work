import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  /**
   * 子コンポーネントに渡すための文字列をセットするパラメータ
   *
   * @public
   * @type {String}
   * @memberof CompParentComponent
   */
  public parentData: String = '';

  /**
   * 子コンポーネントからイベント発火で渡された文字列をセットするパラメータ
   *
   * @public
   * @type {String}
   * @memberof CompParentComponent
   */
  public eventData: String = '';

  constructor() { }

  /**
   * コンポーネントの初期化処理
   *
   * @memberof CompParentComponent
   */
  ngOnInit() {
    this.parentData = '親コンポーネントから文字列を渡します';
  }

  /**
   * イベントハンドラ
   * 子コンポーネントから発火されたイベントをキャッチして文字列を受け取る
   *
   * @param {String} eventData 子コンポーネントから渡される文字列
   * @memberof CompParentComponent
   */
  onReceiveEventFromChild(eventData: String) {
    this.eventData = eventData;
  }
}
