import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpClientService {

  /**
   * Request Header
   *
   * @private
   * @memberof HttpClientService
   */
  private headers: any = new Headers({'Content-Type': 'application/json'});

  /**
   * RST-API 実行時に指定する URL
   *
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * angular/cli のリバースプロキシを利用してバックエンドとの通信を実現する
   *
   * @private
   * @memberof HttpClientService
   */
  private host: string = 'http://localhost:4200/app';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   * @param {Http} http HTTP
   * @memberof HttpClientService
   */
  constructor(private http: Http) { }

  /**
   * HTTP GET メソッドを実行する.
   *
   * @returns {Promise<any[]>}
   * @memberof HttpClientService
   */
  public get(): Promise<any[]> {
    return this.http.get(this.host + '/get', this.headers)
    .toPromise()
    .then((res) => {
      // response の型は any ではなく class で型を定義した方が良いが
      // ここでは簡便さから any としておく
      const response: any = res.json();
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * エラーハンドラ
   *
   * @private
   * @param {any} err エラー情報
   * @memberof HttpClientService
   */
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
