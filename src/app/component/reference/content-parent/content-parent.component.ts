import { Component } from '@angular/core';

// ngAfterContentChecked を利用するための import
import { AfterContentChecked } from '@angular/core';

// 外部コンテンツの参照を単独で取得するための import
import { ContentChild } from '@angular/core';

// 外部コンテンツを import
import { ContentChildComponent} from '../content-child/content-child.component';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.css']
})
export class ContentParentComponent implements AfterContentChecked {

  /**
   * 外部コンテンツの参照から値をセットするためのパラメータ
   *
   * @type {String}
   */
  public contentValue: String = '';

  /**
   * 外部コンテンツの参照
   * テンプレートで指定した外部コンテンツを取得できる
   *
   * @type {ContentChildComponent}
   */
  @ContentChild(ContentChildComponent) contentChild!: ContentChildComponent;

  constructor() { }

  /**
   * 外部コンテンツの変更をフックする
   */
  ngAfterContentChecked(): void {

    if (this.contentValue !== this.contentChild.inputValue) {
      this.contentValue = this.contentChild.inputValue;
    }
  }
}
