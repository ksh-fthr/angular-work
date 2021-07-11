
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @param {SwitchTabService} switchTabService
   */
  constructor() {}

  /**
   * 初期処理
   */
  ngOnInit(): void { }
}
