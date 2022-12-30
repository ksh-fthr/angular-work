import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Logging } from 'src/app/utils/logging';

@Component({
  selector: 'app-on-change-verification',
  templateUrl: './on-change-verification.component.html',
  styleUrls: ['../../../../style/common.css', './on-change-verification.component.css'],
})
export class OnChangeVerificationComponent implements OnInit, OnChanges {
  @Input() ngOnChangesValue = '';

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(private element: ElementRef) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    // よって､ここではコンソールログに出力するだけになる
    console.log('[constructor] execute');
  }

  ngOnInit(): void {
    // こちらはコンソールログと画面上の両方に出力する
    const message = '[ngOnInit] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);
  }

  ngOnChanges(changes: SimpleChanges) {
    // ngOnchanges はライフサイクルの順序上､ ( @Input で修飾されたデータが存在する場合は )ngOninit の先に実行される.
    // なので､ちょっと気持ち悪いがここで
    //
    // - 画面上のログ出力先となる HTML 要素の取得
    //
    // を行う
    // ( ngOninit で行うと HTML 要素が取得される前にログ出力を行おうとするので例外が発生する )
    this.textAreaElement = this.element.nativeElement.querySelector('.log-text-area');

    // こちらもコンソールログと画面上の両方に出力する
    let message = '[ngOnChanges] fired';
    console.log(message);
    Logging.info(this.textAreaElement, message);

    // SimpleChanges を使って変更前の値と変更後の値、そして変更されているかをログ出力する
    for (const prop in changes) {
      if (!changes.hasOwnProperty(prop)) {
        continue;
      }

      const change = changes[prop];
      const messageJson = {
        property: prop,
        isFirstChange: change.firstChange,
        previousValue: ((previousValue): string => {
          // 初回実行時、`previousValue` は「前回の値が存在しない」ので `undefined` が設定される
          // だが JSON.stringfy で文字列に変換する際、 `undefined` は文字列化の対象から除外されてしまうので
          // 文字列としての `undefined` を返却したい
          if (previousValue === undefined) {
            return 'undefined';
          }
          return previousValue;
        })(change.previousValue),
        currentValue: change.currentValue,
      };
      message = `[ngOnChanges] ${JSON.stringify(messageJson)}`;
      console.log(message);
      Logging.info(this.textAreaElement, message);
    }
  }
}
