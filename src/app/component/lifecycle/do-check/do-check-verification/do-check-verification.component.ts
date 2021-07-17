import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check-verification',
  templateUrl: './do-check-verification.component.html',
  styleUrls: ['./do-check-verification.component.css']
})
export class DoCheckVerificationComponent implements OnInit, OnChanges, DoCheck {

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
   * @type {String}
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
