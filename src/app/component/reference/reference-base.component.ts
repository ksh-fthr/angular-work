import { Component, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './reference-base.component.html',
  styleUrls: ['./reference-base.component.css']
})
export class ReferenceBaseComponent {
  title = 'app';
  childHogeValue: String = 'initial value';

  constructor() {}
}
