import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  /**
   * 入力されたアドレス
   *
   * @type {string}
   * @memberof UseDirectiveComponent
   */
  public inputAddress: string;

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
   * ここでは単純にアラートを出すだけ
   *
   * @param {any} $event イベント情報
   * @memberof UseDirectiveComponent
   */
  public onClickOK($event) {
    alert('OK button had clicked.');
  }
}
