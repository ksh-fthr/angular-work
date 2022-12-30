import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(
    private _toastr: ToastrService // ngx-toastr 経由で toast を扱うために DI しておく
  ) {}

  show() {
    this._toastr.show('show normal.', 'NORMAL');
  }

  success() {
    this._toastr.success('show success.', 'SUCCESS');
  }

  error() {
    this._toastr.error('show error.', 'ERROR');
  }
}
