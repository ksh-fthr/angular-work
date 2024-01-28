/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterViewInit, Component, DoCheck, ElementRef, effect, input } from '@angular/core';
import { Logging } from '../../../../utils/logging';
@Component({
  selector: 'app-do-check-verification',
  templateUrl: './do-check-verification.component.html',
  styleUrls: ['../../../../style/common.css', './do-check-verification.component.css'],
})
export class DoCheckVerificationComponent implements AfterViewInit, DoCheck {
  /**
   * Signal Inputs の確認のためのパラメータ
   */
  signalInputValue = input<string>('');

  /**
   * ngDoCheck の確認のためのパラメータ
   */
  ngDoCheckValue = 'Initial Value';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(private element: ElementRef) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    console.log('[constructor] fired');

    effect(() => {
      // コンソールログと画面上の両方に出力する
      const message = `[signalInputValue] fired. signalInputValue={ ${this.signalInputValue()} }`;
      console.log(message);
      Logging.info(this.textAreaElement, message);
    });
  }

  ngAfterViewInit(): void {
    // 画面上のログ出力先となる HTML 要素の取得を行う
    // ( ngOninit で行うと HTML 要素が取得される前にログ出力を行おうとするので例外が発生する )
    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');

    // コンソールログと画面上の両方に出力する
    const message = '[ngOnInit] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  ngDoCheck(): void {
    // コンソールログと画面上の両方に出力する
    const message = `[ngDoCheck] fired. ngDoCheckValue={ ${this.ngDoCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }
}
