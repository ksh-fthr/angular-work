import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-share-base',
  templateUrl: './data-share-base.component.html',
  styleUrls: ['./data-share-base.component.css']
})
export class DataShareBaseComponent implements OnInit {
  title = 'app';
  childHogeValue: String = 'initial value';

  constructor() { }

  ngOnInit(): void {
  }

}
