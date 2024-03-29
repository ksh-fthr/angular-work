import { Injectable } from '@angular/core';

// REST クライアント実装ののためのサービスを import
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  /**
   * Http クライアントを実行する際のヘッダオプション
   *
   * @private
   * @type {*}
   * @description
   * 認証トークンを使用するために `httpOptions` としてオブジェクトを用意した。
   */
  private httpOptions: any = {
    //
    // ヘッダ情報
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    }),
    //
    // レスポンスにヘッダ情報を入れるための設定
    // https://angular.io/guide/http#reading-the-full-response
    observe: 'response',
    //
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null,
  };

  /**
   * RST-API 実行時に指定する URL
   *
   * @private
   * @description
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   */
  private host = 'http://localhost:4200/app';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   *
   * @param http Httpサービスを DI する
   */
  constructor(private http: HttpClient) {
    // `Authorization` に `Bearer トークン` をセットする
    this.setAuthorization('my-auth-token');
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns
   */
  public get(): Promise<any[]> {
    return this.http
      .get(this.host + '/message/get', this.httpOptions)
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
   */
  // public get(callback: any) {
  //   this.http.get(this.host + '/message/get', this.httpOptions).subscribe(
  //     (res) => {
  //       const response: any = res;
  //       callback(response);
  //     },
  //     (error) => {
  //       // subscribe の実装のときに this.errorHandler でエラー処理を
  //       // 行うと Uncaught (in promise) が発生するので、
  //       // ここではコンソールにログを出すだけにする
  //       console.log(error);
  //     }
  //   );
  // }

  /**
   * メッセージ登録
   *
   * @param body リクエストボディ
   * @returns バックエンドからのレスポンス
   */
  public register(body: any): Promise<any[]> {
    return this.http
      .post(this.host + '/message/post', body, this.httpOptions)
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
   * @param body リクエストボディ
   * @returns バックエンドからのレスポンス
   */
  public update(body: any): Promise<any[]> {
    return this.http
      .put(this.host + '/message/put', body, this.httpOptions)
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
   * @param body リクエストボディ
   * @returns バックエンドからのレスポンス
   */
  public delete(body: any): Promise<any[]> {
    this.httpOptions.body = body;
    return this.http
      .delete(this.host + '/message/delete', this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandler);
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns
   */
  public getCsv(): Promise<any> {
    return this.http
      .get(this.host + '/csv', this.httpOptions)
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
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns
   */
  public getZip(): Promise<any> {
    return this.http
      .get(this.host + '/zip', this.httpOptions)
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
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @private
   * @param err エラー情報
   */
  private errorHandler(err: any): Promise<never> {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  /**
   * Authorizatino に認証トークンを設定しする
   *
   * @param token 認証トークン
   * @returns
   * @description
トークンを動的に設定できるようメソッド化している
   * Bearer トークンをヘッダに設定したい場合はこのメソッドを利用する
   */
  public setAuthorization(token: string = ''): void {
    if (!token) {
      return;
    }
    const bearerToken = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }
}
