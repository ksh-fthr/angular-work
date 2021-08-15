import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change-base',
  templateUrl: './on-change-base.component.html',
  styleUrls: ['../../../style/common.css'],
})
export class OnChangeBaseComponent implements OnInit {
  childComponentParameter = 'initial value';

  constructor() {}

  ngOnInit(): void {}
}
