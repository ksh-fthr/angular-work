import { Component, OnInit, OnDestroy } from '@angular/core';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  /**
   * コンストラクタ
   *
   * @param {ModalService} modalService
   * @memberof ModalComponent
   */
  constructor(
    private modalService: ModalService
  ) {}

  /**
   * 初期処理
   *
   * @memberof ModalComponent
   */
  ngOnInit() {}

  /**
   * 終了処理
   *
   * @memberof ModalComponent
   */
  ngOnDestroy() {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof ModalComponent
   */
  public onClick($event) {
    this.notifyCloseModal();
  }

  /**
   * モーダルダイアログを閉じる
   *
   * @private
   * @memberof ModalComponent
   */
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }
}
