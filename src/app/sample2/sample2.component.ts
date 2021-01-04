import { Component, OnInit, OnDestroy } from '@angular/core';

// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';

// サービスを登録するための import
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit, OnDestroy {

  /**
   * CommonService の変数の参照を取得するプロパティ
   *
   * @type {String}
   * @memberof Sample2Component
   */
  public serviceProp: String = 'Initialized by Sample2Component';

  /**
   * subscribe を保持するための Subscription
   *
   * @private
   * @type {Subscription}
   * @memberof Sample2Component
   */
  private subscription!: Subscription;

  /**
   * コンストラクタ. ServiceSample2Component のインスタンスを生成する
   *
   * @param {CommonService} commonService 共通サービス
   * @memberof Sample2Component
   */
  constructor(private commonService: CommonService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   *
   * @memberof Sample2Component
   */
  ngOnInit() {

    // イベント登録
    // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.commonService.sharedDataSource$.subscribe(
      msg => {
        console.log('[Sample2Component] shared data updated.');
        this.serviceProp = msg;
      }
    );
  }

  /**
   * コンポーネント終了時の処理
   *
   * @memberof Sample2Component
   */
  ngOnDestroy() {
    //  リソースリーク防止のため CommonService から subcribe したオブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  /**
   * ボタンクリック時のイベントハンドラ
   *
   * @memberof Sample2Component
   */
  onClicSendMessage() {
    // CommonService のデータ更新を行う
    console.log('[Sample2Component] onClicSendMessage fired.');
    this.commonService.onNotifySharedDataChanged('Updated by Sample2Component.');
  }
}
