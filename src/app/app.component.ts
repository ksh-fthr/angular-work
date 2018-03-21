import { Component, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';

import { HogeService } from './service/hoge.service';
import { Bar1Service } from './service/bar1.service';
import { Bar2Service } from './service/bar2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private hogeService: HogeService,
    private bar1Service: Bar1Service,
    private bar2Service: Bar2Service
  ) {
    hogeService.exec(bar1Service);
    hogeService.exec(bar2Service);
  }
}
