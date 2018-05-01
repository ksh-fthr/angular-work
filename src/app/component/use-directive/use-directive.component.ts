import { Component, OnInit } from '@angular/core';
import { EventDirective } from '../../directive/event.directive';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {
  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @memberof UseDirectiveComponent
   */
  constructor() { }

  /**
   * 初期処理 ( 本コンポーネントではなにもしない )
   *
   * @memberof UseDirectiveComponent
   */
  ngOnInit() { }
}
