import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-base',
  templateUrl: './parent-child-base.component.html',
  styleUrls: ['./parent-child-base.component.css']
})
export class ParentChildBaseComponent implements OnInit {
  title = 'app';
  childHogeValue: String = 'initial value';

  constructor() { }

  ngOnInit(): void {
  }

}
