import { Component, OnInit } from '@angular/core';
import { AutoCompleteComponent } from './autocomplete/autocomplete.component';

import { SwitchTabService } from '../../service/switch-tab/switch-tab.service';
import { TabModel } from '../../model/tab-model';

@Component({
  selector: 'app-use-anuglar-material-base',
  templateUrl: './use-angular-material-base.component.html',
  styleUrls: ['../../style/common.css'],
})
export class UseAngularMaterialBaseComponent implements OnInit {
  private _tabs: Array<TabModel> = new Array();

  constructor(private switchTabService: SwitchTabService) {}

  ngOnInit(): void {
    this._tabs.push(new TabModel('autocomplete', AutoCompleteComponent, true));
    this.switchTabService.tabs = this._tabs;
  }
}
