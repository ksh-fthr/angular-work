import { Component, OnInit, OnDestroy } from '@angular/core';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../../../service/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  /**
   * コンストラクタ
   *
   * @param modalService
   */
  constructor(
    private modalService: ModalService
  ) {}

  /**
   * 初期処理
   */
  ngOnInit(): void {}

  /**
   * 終了処理
   */
  ngOnDestroy(): void {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }

  /**
   * クリックイベント
   *
   * @param $event イベント情報
   */
  public onClick($event: any) {
    this.notifyCloseModal();
  }

  /**
   * モーダルダイアログを閉じる
   *
   * @private
   */
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }
}
