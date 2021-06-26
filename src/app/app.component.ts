import { Component, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childHogeValue = 'initial value';

  constructor() {}
}
