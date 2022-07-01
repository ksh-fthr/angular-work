import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchTabComponent } from '../component/tab/switch-tab/switch-tab.component';
import { TabBaseComponent } from '../component/tab/tab-base.component';
import { TabAComponent } from '../component/tab/tab-a/tab-a.component';
import { TabBComponent } from '../component/tab/tab-b/tab-b.component';

@NgModule({
  declarations: [SwitchTabComponent, TabBaseComponent, TabAComponent, TabBComponent],
  imports: [CommonModule],
  exports: [SwitchTabComponent, TabBaseComponent, TabAComponent, TabBComponent],
})
export class FeatureTabVerificationModule {}
