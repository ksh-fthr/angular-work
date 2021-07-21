import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  /**
   * テキストボックスの入力値
   */
  public inputValue = '';

  constructor() { }
}
