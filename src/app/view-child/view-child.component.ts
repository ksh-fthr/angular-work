import { Component, OnInit } from '@angular/core';

// ngAferViewInit と ngAfterViewChecked を利用するための import
import { AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  /**
   * ngAfterViewInit と ngAfterViewChecked の確認のためのパラメータ
   *
   * @type {String}
   * @memberof ViewChildComponent
   */
  public ngAfterViewCheckValue: String;

  constructor() { }

  /**
   * コンポーネントの初期化処理
   *
   * @memberof ViewChildComponent
   */
  ngOnInit() {
    this.ngAfterViewCheckValue = 'ngOnInitで初期化した';
  }

  /**
   * ビューの初期化をフックする
   *
   * @memberof ViewChildComponent
   */
  ngAfterViewInit() {
    console.log('[ViewChildComponent][ngAfterViewInit] fired.');
  }

  /**
   * ビューの変更をフックする
   *
   * @memberof ViewChildComponent
   */
  ngAfterViewChecked() {
    console.log('[ViewChildComponent][ngAfterViewChecked] fired. ngAfterViewCheckValue={' + this.ngAfterViewCheckValue + '}');
  }
}
