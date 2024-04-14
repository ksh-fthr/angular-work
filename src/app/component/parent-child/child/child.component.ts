import { Component, OnInit, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['../../../style/common.css', './child.component.css'],
})
export class ChildComponent implements OnInit {
  /**
   * 親コンポーネントから受け取るデータ(文字列)をセットするパラメータ
   */
  dataFromParent = input<string>('');

  /**
   * 親コンポーネントに対してイベントを発火するためのパラメータ
   */
  event = output<string>();

  constructor() {}

  /**
   * コンポーネントの初期化処理
   */
  ngOnInit(): void {}

  /**
   * イベントハンドラ
   * ボタンクリック時のイベントをキャッチして親コンポーネントへのイベントを発火する
   */
  onClick() {
    this.event.emit('このデータはイベントを経由して 子コンポーネントから親コンポーネント へ送られました｡');
  }
}
