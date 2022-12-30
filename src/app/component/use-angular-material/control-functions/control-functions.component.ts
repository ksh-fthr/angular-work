import { Component, OnInit } from '@angular/core';

import { SwitchTabService } from '../../../service/switch-tab/switch-tab.service';

import { TabModel } from '../../../model/tab-model';

@Component({
  selector: 'app-control-functions',
  templateUrl: './control-functions.component.html',
  styleUrls: ['./control-functions.component.css'],
})
export class ControlFunctionsComponent implements OnInit {
  private _currentTab: any;
  private _tabs!: Array<TabModel>;

  public get currentTab(): any {
    return this._currentTab;
  }

  public get tabs(): Array<TabModel> {
    return this._tabs;
  }

  constructor(private switchTabService: SwitchTabService) {}

  ngOnInit(): void {
    this._tabs = this.switchTabService.tabs;
    this._currentTab = this.switchTabService.getCurrentContents();
  }

  public onClick($event: any) {
    this._currentTab = this.switchTabService.changeCurrentContents($event.target.innerHTML);
  }
}
