import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvent]',
})
export class EventDirective {
  /**
   * コンストラクタ
   *
   * @param elementRef このディレクティブがセットされたDOMへの参照
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * イベントリスナー
   * マウスイベントをキャッチして背景色を変更する
   *
   * @param target このディレクティブが適用されているhtml要素
   */
  @HostListener('mouseenter', ['$event.target']) changeBackgroundColor(target: any) {
    console.log(target);
    this.elementRef.nativeElement.style.backgroundColor = '#ff0000';
    this.elementRef.nativeElement.style.color = '#ffffffff';
  }

  /**
   * イベントリスナー
   * マウスリーブイベントをキャッチして背景色を変更する
   *
   * @param target このディレクティブが適用されているhtml要素
   */
  @HostListener('mouseleave', ['$event.target']) restoreBackgroundColor(target: any) {
    console.log(target);
    this.elementRef.nativeElement.style.backgroundColor = '#b7a007';
    this.elementRef.nativeElement.style.color = '#ffffffff';
  }
}
