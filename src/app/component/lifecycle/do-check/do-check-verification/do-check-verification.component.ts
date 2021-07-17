import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check-verification',
  templateUrl: './do-check-verification.component.html',
  styleUrls: ['./do-check-verification.component.css']
})
export class DoCheckVerificationComponent implements OnInit, OnChanges, DoCheck {

  /**
   * ngOnChanges の確認のためのパラメータ
   *
   * @type {String}
   */
  @Input()
  ngOnChangesValue: String = '';

  /**
   * ngDoCheck の確認のためのパラメータ
   */
  ngDoCheckValue: String = 'Initial Value';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  /**
   * ログを画面上に出力するための関数をセットする入れ物
   */
  private consoleLog: any;

  constructor(
    private element: ElementRef,
  ) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[constructor] fired');
  }

  ngOnInit(): void {
    // こちらはコンソールログと画面上の両方に出力する
    console.log('[ngOnInit] fired');
    this.consoleLog('[ngOnInit] fired');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ngOnchanges はライフサイクルの順序上､ ngOninit の先に実行される( @Input で修飾されたデータが存在する場合 )
    // なので､ちょっと気持ち悪いがここで
    // - 画面上のログ出力先となる HTML 要素の取得
    // - 画面上にログを出力する処理の定義と変数へのセット
    // を行う
    // ( ngOninit で行うと this.consoleLog の定義前に実行されるので例外が発生する
    this.textAreaElement = this.element.nativeElement.querySelector('#log-text-area');
    this.consoleLog = ((logTextAreaArgument: HTMLTextAreaElement) => {
      let logTextArea = logTextAreaArgument;
      return (text: string) => {
        logTextArea.value+=text+'\n';
      }
    })(this.textAreaElement);

    // こちらもコンソールログと画面上の両方に出力する
    console.log(`[ngOnChanges] fired. ngOnChangesValue={ ${this.ngOnChangesValue} }`);
    this.consoleLog(`[ngOnChanges] fired. ngOnChangesValue={ ${this.ngOnChangesValue} }`);
  }

  ngDoCheck(): void {
    // こちらもコンソールログと画面上の両方に出力する
    console.log(`[ngDoCheck] fired. ngDoCheckValue={ ${this.ngDoCheckValue} }` );
    this.consoleLog(`[ngDoCheck] fired. ngDoCheckValue={ ${this.ngDoCheckValue} }` );
  }
}
