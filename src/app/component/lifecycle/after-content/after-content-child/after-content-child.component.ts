import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.css']
})
export class AfterContentChildComponent implements OnInit {
  public contents: string = '';
  constructor() {
    console.log('[AfterContentChildComponent][constructor] fired');
  }

  ngOnInit(): void {
    this.contents = '子コンポーネント で初期化しました。';
    console.log('[AfterContentChildComponent][ngOnInit] fired. contents={' + this.contents + '}');
  }

}
