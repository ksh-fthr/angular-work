import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

//
// Rule: no-conflicting-lifecycle を適用
// http://codelyzer.com/rules/no-conflicting-life-cycle-hooks/
//
// もう少し詳しい理由は Angular の公式ドキュメントを参照
// https://angular.io/api/core/DoCheck#description.
//

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-hoge-hoge',
  templateUrl: './hoge-hoge.component.html',
  styleUrls: ['./hoge-hoge.component.css']
})
export class HogeHogeComponent implements OnInit, OnChanges, DoCheck {

  /**
   * ngOnChanges の確認のためのパラメータ
   */
  @Input()
  ngOnChangesValue = '';

  /**
   * ngDoCheck の確認のためのパラメータ
   */
  ngDoCheckValue = 'Initial Value';

  constructor() {
    console.log('[HogeHogeComponent][constructor] fired');
  }

  ngOnInit(): void {
    console.log('[HogeHogeComponent][ngOnInit] fired');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[HogeHogeComponent][ngOnChanges] fired. ngOnChangesValue={' + this.ngOnChangesValue + '}' );
  }

  ngDoCheck(): void {
    console.log('[HogeHogeComponent][ngDoCheck] fired. ngDoCheckValue={' + this.ngDoCheckValue + '}' );
  }
}
