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
  ngOnChangesValue: String;

  /**
   * ngDoCheck の確認のためのパラメータ
   *
   * @type {String}
   * @memberof HogeHogeComponent
   */
  ngDoCheckValue: String = 'Initial Value';

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
