import { Component, OnInit } from '@angular/core';

// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';

// サービスを登録するための import
// アプリ全体でのサービスの共有､コンポーネント単位でのサービスの共有に関わらず､ここの import は必要
import { DataShareService } from '../../../service/data-share/data-share.service';

@Component({
  selector: 'app-data-share-b',
  templateUrl: './data-share-b.component.html',
  styleUrls: ['./data-share-b.component.css']
})
export class DataShareBComponent implements OnInit {
  /**
   * CommonService の変数の参照を取得するプロパティ
   *
   * @type {String}
   */
   public serviceProp: String = 'Initialized by Sample2Component';

   /**
    * subscribe を保持するための Subscription
    *
    * @private
    * @type {Subscription}
    */
   private subscription!: Subscription;

   /**
    * コンストラクタ. ServiceSample2Component のインスタンスを生成する
    *
    * @param {CommonService} commonService 共通サービス
    */
   constructor(private dataShareService: DataShareService) { }

   /**
    * ライフサイクルメソッド｡コンポーネントの初期化で使用する
    */
   ngOnInit(): void {

     // イベント登録
     // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
     this.subscription = this.dataShareService.sharedDataSource$.subscribe(
       (msg: any) => {
         console.log('[Sample2Component] shared data updated.');
         this.serviceProp = msg;
       }
     );
   }

   /**
    * コンポーネント終了時の処理
    */
   ngOnDestroy(): void {
     //  リソースリーク防止のため CommonService から subcribe したオブジェクトを破棄する
     this.subscription.unsubscribe();
   }

   /**
    * ボタンクリック時のイベントハンドラ
    */
   onClicSendMessage() {
     // CommonService のデータ更新を行う
     console.log('[Sample2Component] onClicSendMessage fired.');
     this.dataShareService.onNotifySharedDataChanged('Updated by Sample2Component.');
   }
 }
