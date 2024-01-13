import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

// ngx-toastr の使用感を検証するコンポーネノt
import { ToastBaseComponent } from '../component/toast/toast-base.component';
import { ViewToastComponent } from '../component/toast/view-toast/view-toast.component';

@NgModule({
  declarations: [ToastBaseComponent, ViewToastComponent],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [ToastBaseComponent, ViewToastComponent],
})
export class FeatureUseNgxToastr {}
