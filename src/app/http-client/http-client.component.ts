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

  public async outputZip(event: any): Promise<any> {
    //-------------------------------------------
    // 1. REST-API を実行して CSV データを取得する
    //-------------------------------------------
    this.httpClientService.getZip()
    .then(
      (response: any) => {
        const zip = response.zip;
        const filename = response.fileName;

        // -------------------------------------------
        // 2. レスポンスを加工してzipファイルとURLを作る
        // -------------------------------------------
        // data はバイナリを文字列化したもの( zip を base64エンコード + utf-8 でデコードして文字列化している )なので、
        // これをバイナリに戻してやる必要がある
        const blob = this.toBlobZip(zip);
        const url = window.URL.createObjectURL(blob);

        //-------------------------------------------
        // 3. 出力はリンクタグのDOMを取得してそこから行う
        //-------------------------------------------
        // this.element は `ElementRef.nativeElement` から取得した `HTMLElement`
        const link: HTMLAnchorElement = this.element.querySelector('#zip-donwload') as HTMLAnchorElement;
        link.href = url;
        link.download = filename;
        link.click();
      }
    )
    .catch(
      (error) => console.log(error)
    );
  }

  /**
   * bas64 文字列になっている zip ファイル(バイナリデータ) をバイナリデータに変換する
   *
   * @private
   * @param {string} base64 バイナリデータを base64エンコードして更に文字列化した文字列
   * @returns {Blob} 引数の文字列をバイナリに戻したバイナリデータ
   * @memberof AggregateMonthlyComponent
   * @desc
   *  ZIP ファイルへの変換のみ対応している
   * @see
   *  https://developer.mozilla.org/ja/docs/Web/API/WindowBase64/atob
   *  https://developer.mozilla.org/ja/docs/Web/API/Blob
   *  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_objects/Uint8Array
   */
  private toBlobZip(base64: string): Blob {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    const blob = new Blob([buffer.buffer], {
      type: 'application/zip'
    });
    return blob;
  }
}
