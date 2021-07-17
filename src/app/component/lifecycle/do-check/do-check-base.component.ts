import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-base',
  templateUrl: './do-check-base.component.html',
  styleUrls: ['./do-check-base.component.css']
})
export class DoCheckBaseComponent implements OnInit {
  title = 'app';
  childComponentParameter: String = 'initial value';

  constructor() { }

  ngOnInit(): void {
  }

}
