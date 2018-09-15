import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalComponent } from './component/modal/modal.component';

import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {

  private subscription: Subscription;

  public modal: any = null;

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
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
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      () => {
        this.modal = null;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClick($event) {
    this.modal = ModalComponent;
  }

}