import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

// subscribe を保持するための Subscription を import
import { Subscription } from 'rxjs';

// サービスを登録するための import
// アプリ全体でのサービスの共有､コンポーネント単位でのサービスの共有に関わらず､ここの import は必要
import { DataShareService } from '../../../service/data-share/data-share.service';

@Component({
  selector: 'app-data-share-a',
  templateUrl: './data-share-a.component.html',
  styleUrls: ['../../../style/common.css', './data-share-a.component.css'],
  // サービスを登録する
  // コンポーネントで DI する場合はこのコメントアウトを外す
  // providers: [
  //   DataShareService
  // ]
})
export class DataShareAComponent implements OnInit, OnDestroy, AfterViewChecked {
  /**
   * DataShareService の変数の参照を取得するプロパティ
   *
   * @type {string}
   */
  public serviceProp = 'Initialized by Component-A';

  /**
   * subscribe を保持するための Subscription
   *
   * @private
   * @type {Subscription}
   */
  private subscription!: Subscription;

  /**
   * サービスで共有するデータが更新されたかをチェックするためのデータ
   *
   * @type {string}
   */
  private preData: string = this.serviceProp;

  /**
   * コンストラクタ. ServiceSample1Component のインスタンスを生成する
   *
   * @param dataShareService 共通サービス
   */
  constructor(private dataShareService: DataShareService, private element: ElementRef) {}

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   */
  ngOnInit(): void {
    // イベント登録
    // サービスで共有しているデータが更新されたら発火されるイベントをキャッチする
    this.subscription = this.dataShareService.sharedDataSource$.subscribe((msg: any) => {
      console.log('[Component-A] shared data updated.');
      this.serviceProp = msg;
    });
  }

  /**
   * コンポーネント終了時の処理
   */
  ngOnDestroy(): void {
    //  リソースリーク防止のため DataShareService から subcribe したオブジェクトを破棄する
    this.subscription.unsubscribe();
  }

  /**
   * View の変更検知処理
   */
  ngAfterViewChecked(): void {
    // 泥臭いがデータ変更が検知されたら描画する
    // TODO: もっとスマートなやり方があるはず...
    if (this.preData !== this.serviceProp) {
      this.element.nativeElement.querySelector('.updated-data').style.visibility = 'visible';
    }
  }

  /**
   * ボタンクリック時のイベントハンドラ
   */
  onClicSendMessage() {
    // DataShareService のデータ更新を行う
    console.log('[Component-A] onClicSendMessage fired.');
    this.dataShareService.onNotifySharedDataChanged('Updated by Component-A.');
  }
}
