import { Directive, ElementRef, OnInit, input } from '@angular/core';

@Directive({
  selector: '[appTemplate]',
})
export class TemplateDirective implements OnInit {
  /**
   * 親コンポーネントから受け取るデータ-1
   */
  public greet = input<string>();

  /**
   * 親コンポーネントから受け取るデータ-2
   */
  public name = input<string>();

  /**
   * コンストラクタ
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * 初期処理
   * 本ディレクティブではこのタイミングで親コンポーネントから受け取ったデータを
   * DOMの innerHTML にセットする
   */
  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.innerHTML = this.greet() + ' ' + this.name() + '.';
  }
}
