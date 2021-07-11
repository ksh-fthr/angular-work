import { Component, OnInit } from '@angular/core';

// @Input デコレータを使用するための import
import { Input } from '@angular/core';

// @Output デコレータを使用するための import
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  /**
   * 親コンポーネントから受け取るデータ(文字列)をセットするパラメータ
   *
   * @type {String}
   */
  @Input() dataFromParent: String = '';

  /**
   * 親コンポーネントに対してイベントを発火するためのパラメータ
   */
  @Output() event = new EventEmitter<String>();

  constructor() { }

  /**
   * コンポーネントの初期化処理
   */
  ngOnInit(): void {
  }

  /**
   * イベントハンドラ
   * ボタンクリック時のイベントをキャッチして親コンポーネントへのイベントを発火する
   */
  onClick() {
    this.event.emit('子コンポーネントから親コンポーネントへデータを渡す際はイベントを経由します。');
  }
}
