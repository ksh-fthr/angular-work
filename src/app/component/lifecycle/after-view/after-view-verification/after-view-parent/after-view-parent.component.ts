import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { AfterViewChildComponent} from '../after-view-child/after-view-child.component';

@Component({
  selector: 'app-after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styleUrls: ['./after-view-parent.component.css']
})
export class AfterViewParentComponent implements OnInit {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   */
   public ngAfterViewCheckValue = '';

   /**
    * 子コンポーネントを参照
    */
   @ViewChild(AfterViewChildComponent)
   viewChild!: AfterViewChildComponent;

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
     console.log('[ViewParentComponent][ngAfterViewInit] fired');
   }

   /**
    * ビューの変更をフックする
    */
   ngAfterViewChecked(): void {
     console.log('[ViewParentComponent][ngAfterViewChecked] fired. ngAfterViewCheckValue={' + this.ngAfterViewCheckValue + '}');
   }

}
