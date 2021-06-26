import { Component, OnInit } from '@angular/core';

// ngAferViewInit と ngAfterViewChecked を利用するための import
import { AfterViewInit, AfterViewChecked } from '@angular/core';

// 子コンポーネントで定義されたパラメータを取得するための import
import { ViewChild } from '@angular/core';

// 子コンポーネントを import
import { ViewChildComponent} from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   */
  public ngAfterViewCheckValue = '';

  /**
   * 子コンポーネントを参照
   */
  @ViewChild(ViewChildComponent) viewChild!: ViewChildComponent;

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
