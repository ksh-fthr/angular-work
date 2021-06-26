import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piyo-child',
  templateUrl: './piyo-child.component.html',
  styleUrls: ['./piyo-child.component.css']
})
export class PiyoChildComponent implements OnInit {

  public contents = '';

  constructor() {
    console.log('[PiyoChildComponent][constructor] fired');
  }

  /**
   * コンポーネントの初期化
   */
  ngOnInit(): void {
    this.contents = '子コンポーネント で初期化しました。';
    console.log('[PiyoChildComponent][ngOnInit] fired. contents={' + this.contents + '}');
  }
}
