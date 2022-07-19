import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from 'src/app/service/toaster/toaster.service';

@Component({
  selector: 'app-view-toast',
  templateUrl: './view-toast.component.html',
  styleUrls: ['../../../style/common.css'],
})
export class ViewToastComponent implements OnInit {
  constructor(private _tostService: ToasterService) {}

  ngOnInit(): void {}

  showNormal() {
    this._tostService.show();
  }

  showSuccess() {
    this._tostService.success();
  }

  showError() {
    this._tostService.error();
  }
}
