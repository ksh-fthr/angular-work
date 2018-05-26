import { Injectable } from '@angular/core';

// イベント発火のための Subject を import
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {

  /**
   * データの変更を通知するためのオブジェクト
   *
   * @private
   * @memberof CommonService
   */
  private sharedDataSource = new Subject<string>();

  /**
   * Subscribe するためのプロパティ
   * `- コンポーネント間で共有するためのプロパティ
   *
   * @memberof CommonService
   */
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  /**
   * コンストラクタ. CommonService のインスタンスを生成する
   *
   * @memberof CommonService
   */
  constructor() {}

  /**
   * データの更新イベント
   *
   * @param {string} updateed 更新データ
   * @memberof CommonService
   */
  public onNotifySharedDataChanged(updateed: string) {
    console.log('[CommonService] onNotifySharedDataChanged fired.');
    this.sharedDataSource.next(updateed);
  }
}
