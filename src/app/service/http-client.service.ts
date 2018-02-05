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
   * バックエンドのアドレス
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
