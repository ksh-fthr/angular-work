import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';
import { Logging } from '../../../../../utils/logging';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.css'],
})
export class AfterContentParentComponent implements OnInit {
  // 外部コンテンツである子コンポーネントを参照
  @ContentChild(AfterContentChildComponent) child!: AfterContentChildComponent;

  // 子コンポーネントのパラメータの値をセットする変数
  private parentContents = '';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(private element: ElementRef) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[AfterContentParentComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化
   */
  ngOnInit(): void {
    // 画面上のログは外部コンテンツのエリアに出力する
    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');

    const message = '[AfterContentParentComponent][ngOnInit] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * 外部コンテンツが初期化された後に処理
   */
  ngAfterContentInit() {
    this.parentContents = this.child.childContents;

    const message = `[AfterContentParentComponent][ngAfterContentInit] fired. parentContents={ ${this.parentContents} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * 外部コンテンツの確認後に処理
   */
  ngAfterContentChecked() {
    this.parentContents = this.child.childContents;

    const message = `[AfterContentParentComponent][ngAfterContentChecked] fired. parentContents={ ${this.parentContents} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }
}
