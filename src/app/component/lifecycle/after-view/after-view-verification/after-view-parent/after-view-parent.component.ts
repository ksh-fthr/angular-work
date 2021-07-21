import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { AfterViewChildComponent } from '../after-view-child/after-view-child.component';
import { Logging } from '../../../../../utils/logging';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css']
})
export class AfterViewParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   */
  public ngAfterViewCheckValue = '';

  /**
   * 子コンポーネントを参照
   */
  @ViewChild(AfterViewChildComponent) viewChild!: AfterViewChildComponent;

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(
    private element: ElementRef,
  ) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[AfterViewParentComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化処理
   */
  ngOnInit(): void {
    this.ngAfterViewCheckValue = 'ngOnInitで初期化した';

    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');
    const message = `[AfterViewParentComponent][ngOnInit] fired. ngAfterViewCheckValue = { ${this.ngAfterViewCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * ビューの初期化をフックする
   */
  ngAfterViewInit(): void {
    const message = '[AfterViewParentComponent][ngAfterViewInit] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * ビューの変更をフックする
   */
  ngAfterViewChecked(): void {
    const message = `[AfterViewParentComponent][ngAfterViewChecked] fired. ngAfterViewCheckValue = { ${this.ngAfterViewCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }
}
