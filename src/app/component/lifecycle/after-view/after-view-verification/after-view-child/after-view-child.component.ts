import { Component, OnInit, AfterViewInit, AfterViewChecked, ElementRef } from '@angular/core';
import { Logging } from '../../../../../utils/logging';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styleUrls: ['./after-view-child.component.css']
})
export class AfterViewChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   */
  public ngAfterViewCheckValue = '';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(
    private element: ElementRef,
  ) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[AfterViewChildComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化処理
   */
  ngOnInit(): void {
    this.ngAfterViewCheckValue = 'ngOnInitで初期化した';

    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');
    const message: string = `[AfterViewChildComponent][ngOnInit] fired. ngAfterViewCheckValue = { ${this.ngAfterViewCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * ビューの初期化をフックする
   */
  ngAfterViewInit(): void {
    const message: string = '[AfterViewChildComponent][ngAfterViewInit] fired.';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  /**
   * ビューの変更をフックする
   */
  ngAfterViewChecked(): void {
    const message: string = `[AfterViewChildComponent][ngAfterViewChecked] fired. ngAfterViewCheckValue = { ${this.ngAfterViewCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }
}
