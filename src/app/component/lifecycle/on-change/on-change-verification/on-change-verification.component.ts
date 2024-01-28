import { AfterViewInit, Component, ElementRef, SimpleChanges, effect, input } from '@angular/core';
import { Logging } from 'src/app/utils/logging';

@Component({
  selector: 'app-on-change-verification',
  templateUrl: './on-change-verification.component.html',
  styleUrls: ['../../../../style/common.css', './on-change-verification.component.css'],
})
export class OnChangeVerificationComponent implements AfterViewInit {
  signalInputValue = input<string>('');

  /**
   * ログ出力を行うテキストエリアの HTML エレメント
   */
  private textAreaElement: any;

  constructor(private element: ElementRef) {
    // コンストラクタは画面描画の前に実行されるので画面上の要素を取得することができない
    console.log('[constructor] execute');

    effect(() => {
      // コンソールログと画面上の両方に出力する
      let message = '[effect] fired';
      console.log(message);
      Logging.info(this.textAreaElement, message);

      // effect を使って変更前の値と変更後の値、そして変更されているかをログ出力する
      const messageJson = {
        currentValue: this.signalInputValue(),
      };
      message = `[ngOnChanges] ${JSON.stringify(messageJson)}`;
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
}
