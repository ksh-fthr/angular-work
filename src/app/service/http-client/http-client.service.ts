import { Injectable, Signal } from '@angular/core';

// REST クライアント実装ののためのサービスを import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { toSignal } from '@angular/core/rxjs-interop';

/**
 * メッセージ情報をやり取りするためのモデル
 */
export interface MessageModel {
  id: number | null;
  message: string | null;
}

/**
 * HTTPレスポンスの body を表すモデル
 */
export interface HttpResponseBodyModel {
  status: number;
  response: string;
  messages: MessageModel[];
}

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  /**
   * Http クライアントを実行する際のヘッダオプション
   *
   * @protected
   * @type {*}
   * @description
   * 認証トークンを使用するために `httpOptions` としてオブジェクトを用意した。
   */
  protected httpOptions: any = {
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
    // レスポンスタイプは 'arraybuffer'|'blob'|'json'|'text' から指定できる
    responseType: 'json',
    //
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null,
  };

  /**
   * RST-API 実行時に指定する URL
   *
   * @protected
   * @description
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   */
  protected host = 'http://localhost:4200/app';

  /**
   * コンストラクタ. HttpClientService のインスタンスを生成する
   *
   * @param http Httpサービスを DI する
   */
  constructor(protected http: HttpClient) {
    // `Authorization` に `Bearer トークン` をセットする
    this.setAuthorization('my-auth-token');
  }

  /**
   * HTTP GET メソッドを実行する
   */
  public get$(): Signal<MessageModel[] | undefined> {
    const observable = this.http.get<HttpResponseBodyModel>(this.host + '/message/get', this.httpOptions).pipe(
      map((response) => {
        const res: any = response;
        const resBody: HttpResponseBodyModel = res.body;
        return resBody.messages;
      })
    );

    return toSignal(observable);
  }

  /**
   * メッセージ登録
   *
   * @param body リクエストボディ
   */
  public register$(body: MessageModel): Signal<MessageModel[] | undefined> {
    const observable = this.http.post(this.host + '/message/post', body, this.httpOptions).pipe(
      map((response) => {
        const res: any = response;
        const resBody: HttpResponseBodyModel = res.body;
        return resBody.messages;
      })
    );

    return toSignal(observable);
  }

  /**
   * メッセージ更新
   *
   * @param body リクエストボディ
   */
  public update$(body: MessageModel): Signal<MessageModel[] | undefined> {
    const observable = this.http.put(this.host + '/message/put', body, this.httpOptions).pipe(
      map((response) => {
        const res: any = response;
        const resBody: HttpResponseBodyModel = res.body;
        return resBody.messages;
      })
    );

    return toSignal(observable);
  }

  /**
   * メッセージ削除
   *
   * @param body リクエストボディ
   */
  public delete$(body: MessageModel): Signal<MessageModel[] | undefined> {
    this.httpOptions.body = body;
    const observable = this.http.delete(this.host + '/message/delete', this.httpOptions).pipe(
      map((response) => {
        const res: any = response;
        const resBody: HttpResponseBodyModel = res.body;
        return resBody.messages;
      })
    );

    return toSignal(observable);
  }

  /**
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @private
   * @param err エラー情報
   */
  protected errorHandler(err: any): Promise<never> {
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
