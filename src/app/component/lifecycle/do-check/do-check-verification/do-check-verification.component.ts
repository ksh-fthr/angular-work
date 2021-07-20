import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Logging } from '../../../../utils/logging';
@Component({
  selector: 'app-do-check-verification',
  templateUrl: './do-check-verification.component.html',
  styleUrls: ['./do-check-verification.component.css']
})
export class DoCheckVerificationComponent implements OnInit, OnChanges, DoCheck {

  /**
   * ngOnChanges の確認のためのパラメータ
   *
   * @type {string}
   */
  @Input()
  ngOnChangesValue: string = '';

  /**
   * ngDoCheck の確認のためのパラメータ
   */
  ngDoCheckValue: string = 'Initial Value';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(
    private element: ElementRef,
  ) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[constructor] fired');
  }

  ngOnInit(): void {
    // こちらはコンソールログと画面上の両方に出力する
    const message: string = '[ngOnInit] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ngOnchanges はライフサイクルの順序上､ ( @Input で修飾されたデータが存在する場合は )ngOninit の先に実行される.
    // なので､ちょっと気持ち悪いがここで
    //
    // - 画面上のログ出力先となる HTML 要素の取得
    //
    // を行う
    // ( ngOninit で行うと HTML 要素が取得される前にログ出力を行おうとするので例外が発生する )
    this.textAreaElement = this.element.nativeElement.querySelector('#log-text-area');

    // こちらもコンソールログと画面上の両方に出力する
    const message: string = `[ngOnChanges] fired. ngOnChangesValue={ ${this.ngOnChangesValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  ngDoCheck(): void {
    // こちらもコンソールログと画面上の両方に出力する
    const message: string = `[ngDoCheck] fired. ngDoCheckValue={ ${this.ngDoCheckValue} }`;
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }
}
