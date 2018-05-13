import { Injectable } from '@angular/core';

// REST クライアント実装ののためのサービスを import
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientService {

  /**
   * リクエストヘッダを定義
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
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   *
   * @private
   * @memberof HttpClientService
   */
  private host: string = 'http://localhost:4200/app';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   *
   * @param {Http} http Httpサービスを DI する
   * @memberof HttpClientService
   */
  constructor(private http: HttpClient) { }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
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
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * HTTP GET メソッドを実行する
   * (subscribe((res) =>{}) を利用する場合のコード)
   *
   * @param {*} callback HTTP GET の実行結果を受け取って処理するためのコールバック処理
   * @memberof HttpClientService
   */
  // public get(callback: any) {
  //   this.http.get(this.host + '/get', this.headers)
  //   .subscribe(
  //     (res) => {
  //       const response: any = res;
  //       callback(response);
  //     },
  //     (error) => {
  //       this.errorHandler(error);
  //     }
  //   );
  // }

  /**
   * メッセージ登録
   *
   * @param {*} body リクエストボディ
   * @returns {Promise<any[]>} バックエンドからのレスポンス
   * @memberof HttpClientService
   */
  public register(body: any): Promise<any[]> {
    return this.http.post(this.host + '/post', body, this.headers)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * メッセージ更新
   *
   * @param {*} body リクエストボディ
   * @returns {Promise<any[]>} バックエンドからのレスポンス
   * @memberof HttpClientService
   */
  public update(body: any): Promise<any[]> {
    return this.http.put(this.host + '/put', body, this.headers)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * メッセージ削除
   *
   * @param {*} body リクエストボディ
   * @returns {Promise<any[]>} バックエンドからのレスポンス
   * @memberof HttpClientService
   */
  public delete(body: any): Promise<any[]> {
    this.headers.body = body;
    return this.http.delete(this.host + '/delete', this.headers)
    .toPromise()
    .then((res) => {
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }

  /**
   * REST-API 実行時のエラーハンドラ
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
