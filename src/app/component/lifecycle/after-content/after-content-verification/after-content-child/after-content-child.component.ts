import { Component, ElementRef, OnInit } from '@angular/core';
import { Logging } from '../../../../../utils/logging';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.css'],
})
export class AfterContentChildComponent implements OnInit {
  // 親コンポーネントに渡す値をセットする変数
  public childContents = '';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(private element: ElementRef) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[AfterContentChildComponent][constructor] fired');
  }

  ngOnInit(): void {
    this.childContents = '子コンポーネント で初期化しました。';
    const message = `[AfterContentChildComponent][ngOnInit] fired. childContents={ ${this.childContents} }`;
    console.log(message);

    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');
    Logging.info(this.textAreaElement, message);
  }
}
