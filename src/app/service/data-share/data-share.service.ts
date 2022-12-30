import { Injectable } from '@angular/core';

// イベント発火のための Subject を import
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  /**
   * データの変更を通知するためのオブジェクト
   *
   * @private
   */
  private sharedDataSource = new Subject<string>();
  /**
   * Subscribe するためのプロパティ
   * `- コンポーネント間で共有するためのプロパティ
   */
  public sharedDataSource$ = this.sharedDataSource.asObservable();
  /**
   * コンストラクタ. DataShareService のインスタンスを生成する
   */
  constructor() {}
  /**
   * データの更新イベント
   *
   * @param updated 更新データ
   */
  public onNotifySharedDataChanged(updated: string) {
    console.log('[DataShareService] onNotifySharedDataChanged fired.');
    this.sharedDataSource.next(updated);
  }
}
