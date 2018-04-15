import { Component, OnInit } from '@angular/core';
import { TemplateDirective } from '../../directive/template.directive';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  /**
   * 本コンポーネントの html テンプレートでセットしているディレクティブに渡すデータ-1
   *
   * @type {string}
   * @memberof UseDirectiveComponent
   */
  public greet: string;

  /**
   * 本コンポーネントの html テンプレートでセットしているディレクティブに渡すデータ-2
   *
   * @type {string}
   * @memberof UseDirectiveComponent
   */
  public name: string;

  /**
   * コンストラクタ ( 本コンポーネントではなにもしない )
   *
   * @memberof UseDirectiveComponent
   */
  constructor() { }

  /**
   * 初期処理
   * プロパティ: inputData に文字列をセット
   * ここでセットされた文字列がディレクティブに渡り､ブラウザ上に表示される
   *
   * @memberof UseDirectiveComponent
   */
  ngOnInit() {
    this.greet = 'Hello';
    this.name = 'Angular';
  }

}
