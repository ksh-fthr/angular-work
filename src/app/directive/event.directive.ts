import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appEvent]'
})
export class EventDirective {

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
   * イベントリスナー
   * マウスイベントをキャッチして背景色を変更する
   *
   * @param {*} target このディレクティブが適用されているhtml要素
   * @memberof EventDirective
   */
  @HostListener('mouseenter', ['$event.target']) onmouseenter(target: any) {
    console.log(target);
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(255, 0, 0)';
  }

  /**
   * イベントリスナー
   * マウスリーブイベントをキャッチして背景色を変更する
   *
   * @param {*} target このディレクティブが適用されているhtml要素
   * @memberof EventDirective
   */
  @HostListener('mouseleave', ['$event.target']) onmouseleave(target: any) {
    console.log(target);
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(219, 210, 224)';
  }
}
