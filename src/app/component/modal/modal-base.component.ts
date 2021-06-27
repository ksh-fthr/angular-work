
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

// モーダルダイアログとして表示するコンポーネント
import { ModalComponent } from './modal/modal.component';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit, OnDestroy  {

  // モーダルダイアログが閉じた際のイベントをキャッチするための subscription
  private subscription!: Subscription;

  // ngComponentOutlet にセットするためのプロパティ
  public modal: any = null;

  /**
   * コンストラクタ
   *
   * @memberof AppComponent
   */
  constructor(
    private modalService: ModalService
  ) {}

  /**
   * 初期処理
   *
   * @memberof AppComponent
   */
  ngOnInit() {
    // モーダルダイアログを閉じた際のイベントを処理する
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      () => {
        // プロパティ modal に null をセットすることでコンポーネントを破棄する
        // このタイミングで ModalComponent では ngOnDestroy が走る
        this.modal = null;
      }
    );
  }

  /**
   * 終了処理
   *
   * @memberof AppComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof AppComponent
   */
  public onClick($event: any) {
    this.setModal();
  }

  /**
   * モーダルダイアログを表示する
   *
   * @private
   * @memberof AppComponent
   */
  private setModal() {
    this.modal = ModalComponent;
  }
}
