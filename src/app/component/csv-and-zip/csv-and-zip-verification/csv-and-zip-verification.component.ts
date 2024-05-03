import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClientService } from '../../../service/http-client/http-client.service';

@Component({
  selector: 'app-csv-and-zip-verification',
  templateUrl: './csv-and-zip-verification.component.html',
  styleUrls: ['../../../style/common.css', './csv-and-zip-verification.component.css'],
})
export class CsvAndZipVerificationComponent implements OnInit {
  private element: HTMLElement;

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   * 自作した HttpClientService を DI する
   *
   * @param httpClientService HTTP通信を担当するサービス
   * @param elementRef DOM参照のためのモジュール
   */
  constructor(private httpClientService: HttpClientService, private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はなにもしない
   */
  ngOnInit() {}

  /**
   * CSV ファイル出力を行う
   *
   * @param event イベント情報
   * @description
   *  REST-API を実行して取得した CSV データを元に CSV ファイル出力を行う
   */
  public async outputCsv(event: any): Promise<any> {
    //-------------------------------------------
    // 1. REST-API を実行して CSV データを取得する
    //-------------------------------------------
    this.httpClientService
      .getCsv()
      .then((response: any) => {
        const csv = response.body.csv;
        const filename = response.body.fileName;

        //-------------------------------------------
        // 2. レスポンスを加工してCSVファイルとURLを作る
        //-------------------------------------------
        // CSV ファイルは `UTF-8 BOM有り` で出力する
        // そうすることで Excel で開いたときに文字化けせずに表示できる
        const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
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
      })
      .catch((error) => console.log(error));
  }

  /**
   * ZIP ファイル出力を行う
   *
   * @param event イベント情報
   * @description
   *  REST-API を実行して取得した ZIP データを元に ZIP ファイル出力を行う
   */
  public async outputZip(event: any): Promise<any> {
    //-------------------------------------------
    // 1. REST-API を実行して ZIP データを取得する
    //-------------------------------------------
    this.httpClientService
      .getZip()
      .then((response: any) => {
        const zip = response.body.zip;
        const filename = response.body.fileName;

        // -------------------------------------------
        // 2. レスポンスを加工して ZIP ファイルと URL を作る
        // -------------------------------------------
        // data はバイナリを文字列化したものなので、これをバイナリに戻してやる必要がある
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // └─> ZIP を base64エンコード + utf-8 でデコードして文字列化している
        const blob = this.toBlobZip(zip);
        const url = window.URL.createObjectURL(blob);

        //-------------------------------------------
        // 3. 出力はリンクタグの DOM を取得してそこから行う
        //-------------------------------------------
        // this.element は `ElementRef.nativeElement` から取得した `HTMLElement`
        const link: HTMLAnchorElement = this.element.querySelector('#zip-donwload') as HTMLAnchorElement;
        link.href = url;
        link.download = filename;
        link.click();
      })
      .catch((error: any) => console.log(error));
  }

  /**
   * bas64 文字列になっている ZIP ファイル(バイナリデータ) をバイナリデータに変換する
   *
   * @private
   * @param base64 バイナリデータを base64 エンコードして更に文字列化した文字列
   * @returns 引数の文字列をバイナリに戻したバイナリデータ
   * @description ZIP ファイルへの変換のみ対応している
   * @see https://developer.mozilla.org/ja/docs/Web/API/WindowBase64/atob
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
      type: 'application/zip',
    });
    return blob;
  }
}
