import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hoge-hoge',
  templateUrl: './hoge-hoge.component.html',
  styleUrls: ['./hoge-hoge.component.css']
})
export class HogeHogeComponent implements OnInit, OnChanges, DoCheck {

  /**
   * ngOnChanges の確認のためのパラメータ
   *
   * @type {String}
   * @memberof HogeHogeComponent
   */
  @Input()
  ngOnChangesValue: String = '';

  /**
   * ngDoCheck の確認のためのパラメータ
   *
   * @type {String}
   * @memberof HogeHogeComponent
   */
  ngDoCheckValue: String = 'Initial Value';

  constructor() {
    console.log('[constructor] fired');
  }

  ngOnInit(): void {
    console.log('[ngOnInit] fired');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges] fired. ngOnChangesValue={' + this.ngOnChangesValue + '}' );
  }

  ngDoCheck(): void {
    console.log('[ngDoCheck] fired. ngDoCheckValue={' + this.ngDoCheckValue + '}' );
  }
}
