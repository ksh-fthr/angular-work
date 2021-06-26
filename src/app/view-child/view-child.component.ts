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
