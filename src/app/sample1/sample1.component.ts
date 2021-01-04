import { Component, OnInit, OnDestroy } from '@angular/core';

// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';

// サービスを登録するための import
// アプリ全体でのサービスの共有､コンポーネント単位でのサービスの共有に関わらず､ここの import は必要
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css'],
  // サービスを登録する
  // コンポーネントで DI する場合はこのコメントアウトを外す
  // providers: [
    // CommonService
  // ]
})
export class Sample1Component implements OnInit, OnDestroy {

  /**
   * CommonService の変数の参照を取得するプロパティ
   *
   * @type {String}
   * @memberof Sample1Component
   */
  public serviceProp: String = 'Initialized by Sample1Component';

  /**
   * subscribe を保持するための Subscription
   *
   * @private
   * @type {Subscription}
   * @memberof Sample1Component
   */
  private subscription!: Subscription;

  /**
   * コンストラクタ. ServiceSample1Component のインスタンスを生成する
   *
   * @param {CommonService} commonService 共通サービス
   * @memberof Sample1Component
   */
  constructor(private commonService: CommonService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   *
   * @memberof Sample1Component
   */
  ngOnInit() {

    // イベント登録
    // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.commonService.sharedDataSource$.subscribe(
      msg => {
        console.log('[Sample1Component] shared data updated.');
        this.serviceProp = msg;
      }
    );
  }

  /**
   * コンポーネント終了時の処理
   *
   * @memberof Sample1Component
   */
  ngOnDestroy() {
    //  リソースリーク防止のため CommonService から subcribe したオブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  /**
   * ボタンクリック時のイベントハンドラ
   *
   * @memberof Sample1Component
   */
  onClicSendMessage() {
    // CommonService のデータ更新を行う
    console.log('[Sample1Component] onClicSendMessage fired.');
    this.commonService.onNotifySharedDataChanged('Updated by Sample1Component.');
  }
}
