import { Component, OnInit } from '@angular/core';

// ngAfterContentInit と ngAfterContentChecked を利用するための import
import { AfterContentInit, AfterContentChecked } from '@angular/core';

// 外部コンテンツとして埋め込まれた子コンポーネントを参照するための import
import { ContentChild } from '@angular/core';

// 外部コンテンツである子コンポーネントを import
import { PiyoChildComponent } from '../piyo-child/piyo-child.component';

@Component({
  selector: 'app-piyo-parent',
  templateUrl: './piyo-parent.component.html',
  styleUrls: ['./piyo-parent.component.css']
})
export class PiyoParentComponent implements OnInit, AfterContentInit, AfterContentChecked {

  // 外部コンテンツである子コンポーネントを参照
  @ContentChild(PiyoChildComponent) child: PiyoChildComponent;

  // 子コンポーネントのパラメータの値をセットする変数
  private contents: String = '';

  constructor() {
    console.log('[PiyoParentComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化
   */
  ngOnInit() {
    console.log('[PiyoParentComponent][ngOnInit] fired');
  }

  /**
   * 外部コンテンツが初期化された後に処理
   */
  ngAfterContentInit() {
    this.contents = this.child.contents;
    console.log('[PiyoParentComponent][ngAfterContentInit] fired. conents={' + this.contents + '}');
  }

  /**
   * 外部コンテンツの確認後に処理
   */
  ngAfterContentChecked() {
    this.contents = this.child.contents;
    console.log('[PiyoParentComponent][ngAfterContentChecked] fired. contents={' + this.contents + '}');
  }
}
