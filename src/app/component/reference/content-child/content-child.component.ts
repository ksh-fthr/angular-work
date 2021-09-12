import { Component } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['../../../style/common.css'],
})
export class ContentChildComponent {
  /**
   * テキストボックスの入力値
   *
   * @type {string}
   */
  public inputValue = '';

  constructor() {}
}
