import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplate]',
})
export class TemplateDirective implements OnInit {
  /**
   * 親コンポーネントから受け取るデータ-1
   *
   * @type {string}
   */
  @Input() public greet = '';

  /**
   * 親コンポーネントから受け取るデータ-2
   *
   * @type {string}
   */
  @Input() public name = '';

  /**
   * コンストラクタ
   *
   * @param elementRef このディレクティブがセットされたDOMへの参照
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * 初期処理
   * 本ディレクティブではこのタイミングで親コンポーネントから受け取ったデータを
   * DOMの innerHTML にセットする
   */
  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.innerHTML = this.greet + ' ' + this.name + '.';
  }
}
