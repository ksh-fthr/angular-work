import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpClient } from '@angular/common/http';

/**
 * CSV 情報をやり取りするためのモデル
 */
export interface CsvModel {
  csv: string;
  fileName: string;
}

/**
 * ZIP 情報をやり取りするためのモデル
 */
export interface ZipModel {
  zip: string;
  fileName: string;
}

@Injectable({
  providedIn: 'root',
})
export class CsvZipClientService extends HttpClientService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns
   */
  public getCsv(): Promise<CsvModel> {
    return this.http
      .get(this.host + '/csv', this.httpOptions)
      .toPromise()
      .then((res) => {
        console.log(`[get] response: ${JSON.stringify(res)}`);
        const response: any = res;
        return response.body;
      })
      .catch(this.errorHandler);
  }

  /**
   * HTTP GET メソッドを実行する
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @returns
   */
  public getZip(): Promise<ZipModel> {
    return this.http
      .get(this.host + '/zip', this.httpOptions)
      .toPromise()
      .then((res) => {
        console.log(`[get] response: ${JSON.stringify(res)}`);
        const response: any = res;
        return response.body;
      })
      .catch(this.errorHandler);
  }
}
