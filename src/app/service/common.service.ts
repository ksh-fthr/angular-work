import { Injectable } from '@angular/core';

// イベント発火のための Subject を import
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {

  /**
   * 共有データの変更を通知するためのオブジェクト
   *
   * @private
   * @memberof CommonService
   */
  private sharedDataSource = new Subject<string>();

  /**
   * コンポーネント間で共有するためのデータ
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
   * 共有データの更新イベント
   *
   * @param {string} updateed 更新データ
   * @memberof CommonService
   */
  public onNotifySharedDataChanged(updateed: string) {
    console.log('[CommonService] onNotifySharedDataChanged fired.');
    this.sharedDataSource.next(updateed);
  }
}
