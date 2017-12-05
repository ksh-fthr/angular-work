import { Component } from '@angular/core';

// ngAfterViewChecked を利用するための import
import { AfterViewChecked } from '@angular/core';

// 子コンポーネントの参照をリストで取得するための import
import { ViewChildren, QueryList } from '@angular/core';

// 子コンポーネントを import
import { ViewChildComponent} from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements AfterViewChecked {

  /**
   * 子コンポーネントの参照から値をセットするためのパラメータ
   *
   * @type {String}
   * @memberof ViewChildComponent
   */
  public valueBox: String[] = ['', '', ''];

  /**
   * 子コンポーネントの参照
   * テンプレートで指定した子コンポーネントをリストで取得できる
   *
   * @type {ViewChildComponent}
   * @memberof ViewParentComponent
   */
  @ViewChildren(ViewChildComponent) viewChildren: QueryList<ViewChildComponent>;

  constructor() { }

  /**
   * ビューの変更をフックする
   *
   * @memberof ViewParentComponent
   */
  ngAfterViewChecked() {

    this.viewChildren.forEach((item, index) => {
      if (this.valueBox[index] !== item.inputValue) {

        // ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
        // の回避のために遅延評価を行う
        setTimeout(() => {
          this.valueBox[index] = item.inputValue;
        }, 0);
      }
    });
  }
}
