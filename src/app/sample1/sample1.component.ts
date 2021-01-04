import { Component, OnInit } from '@angular/core';

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
export class Sample1Component implements OnInit {

  /**
   * CommonService のプロパティの参照を取得するプロパティ
   *
   * @type {String}
   * @memberof Sample1Component
   */
  public serviceProp: String = '';

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
    this.serviceProp = this.commonService.commonProp;
  }
}
