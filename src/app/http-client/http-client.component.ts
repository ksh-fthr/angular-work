import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  private element: HTMLElement;

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   * 自作した HttpClientService を DI する
   *
   * @param {HttpClientService} httpClientService HTTP通信を担当するサービス
   * @param {ElementRef} elementRef DOM参照のためのモジュール
   * @memberof HttpClientComponent
   */
  constructor(
    private httpClientService: HttpClientService,
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はなにもしない
   *
   * @memberof HttpClientComponent
   */
  ngOnInit() {}

  public async outputCsv(event: any): Promise<any> {
    //-------------------------------------------
    // 1. REST-API を実行して CSV データを取得する
    //-------------------------------------------
    this.httpClientService.getCsv()
    .then(
      (response: any) => {
        const csv = response.csv;
        const filename = response.fileName;

        //-------------------------------------------
        // 2. レスポンスを加工してCSVファイルとURLを作る
        //-------------------------------------------
        // CSV ファイルは `UTF-8 BOM有り` で出力する
        // そうすることで Excel で開いたときに文字化けせずに表示できる
        const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
        // CSVファイルを出力するために Blob 型のインスタンスを作る
        const blob = new Blob([bom, csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);

        //-------------------------------------------
        // 3. 出力はリンクタグのDOMを取得してそこから行う
        //-------------------------------------------
        // this.element は `ElementRef.nativeElement` から取得した `HTMLElement`
        const link: HTMLAnchorElement = this.element.querySelector('#csv-donwload') as HTMLAnchorElement;
        link.href = url;
        link.download = filename;
        link.click();
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }
}
