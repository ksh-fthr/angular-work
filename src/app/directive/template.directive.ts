import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit {

  /**
   * 親コンポーネントから受け取るデータ-1
   *
   * @type {string}
   * @memberof TemplateDirective
   */
  @Input() public greet: string = '';

  /**
   * 親コンポーネントから受け取るデータ-2
   *
   * @type {string}
   * @memberof TemplateDirective
   */
  @Input() public name: string = '';

  /**
   * コンストラクタ
   *
   * @param {ElementRef} elementRef このディレクティブがセットされたDOMへの参照
   * @memberof TemplateDirective
   */
  constructor(
    private elementRef: ElementRef
  ) {
  }

  /**
   * 初期処理
   * 本ディレクティブではこのタイミングで親コンポーネントから受け取ったデータを
   * DOMの innerHTML にセットする
   *
   * @memberof TemplateDirective
   */
  public ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.innerHTML = this.greet + ' ' + this.name + '.';
  }
}
