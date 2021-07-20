import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';
import { AfterContentChildComponent } from '../after-content-child/after-content-child.component';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.css']
})
export class AfterContentParentComponent implements OnInit {

  // 外部コンテンツである子コンポーネントを参照
  @ContentChild(AfterContentChildComponent) child!: AfterContentChildComponent;

  // 子コンポーネントのパラメータの値をセットする変数
  private contents: string = '';

  constructor() {
    console.log('[AfterContentParentComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化
   */
  ngOnInit() {
    console.log('[AfterContentParentComponent][ngOnInit] fired');
  }

  /**
   * 外部コンテンツが初期化された後に処理
   */
  ngAfterContentInit() {
    this.contents = this.child.contents;
    console.log('[AfterContentParentComponent][ngAfterContentInit] fired. conents={' + this.contents + '}');
  }

  /**
   * 外部コンテンツの確認後に処理
   */
  ngAfterContentChecked() {
    this.contents = this.child.contents;
    console.log('[AfterContentParentComponent][ngAfterContentChecked] fired. contents={' + this.contents + '}');
  }
}
