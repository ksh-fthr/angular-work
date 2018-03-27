import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective implements OnInit {

  @Input() public inputData: string;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  public ngOnInit() {
    const element = this.elementRef.nativeElement;
    element.innerHTML = this.inputData;
  }
}
