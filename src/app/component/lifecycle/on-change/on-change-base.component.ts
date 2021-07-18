import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change-base',
  templateUrl: './on-change-base.component.html',
  styleUrls: ['./on-change-base.component.css']
})
export class OnChangeBaseComponent implements OnInit {
  childComponentParameter: string = 'initial value';

  constructor() { }

  ngOnInit(): void {
  }

}
