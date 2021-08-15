import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-base',
  templateUrl: './do-check-base.component.html',
  styleUrls: ['../../../style/common.css'],
})
export class DoCheckBaseComponent implements OnInit {
  title = 'app';
  childComponentParameter: string = 'initial value';

  constructor() {}

  ngOnInit(): void {}
}
