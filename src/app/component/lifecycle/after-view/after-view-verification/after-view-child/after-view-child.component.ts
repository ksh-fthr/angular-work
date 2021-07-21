import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styleUrls: ['./after-view-child.component.css']
})
export class AfterViewChildComponent implements OnInit {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   */
   public ngAfterViewCheckValue = '';

   constructor() { }

   /**
    * コンポーネントの初期化処理
    */
   ngOnInit(): void {
     this.ngAfterViewCheckValue = 'ngOnInitで初期化した';
   }

   /**
    * ビューの初期化をフックする
    */
   ngAfterViewInit(): void {
     console.log('[ViewChildComponent][ngAfterViewInit] fired.');
   }

   /**
    * ビューの変更をフックする
    */
   ngAfterViewChecked(): void {
     console.log('[ViewChildComponent][ngAfterViewChecked] fired. ngAfterViewCheckValue={' + this.ngAfterViewCheckValue + '}');
   }
}
