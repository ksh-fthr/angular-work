import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalBaseComponent } from '../component/modal/modal-base.component';
import { ModalComponent } from '../component/modal/modal/modal.component';

@NgModule({
  declarations: [ModalBaseComponent, ModalComponent],
  imports: [CommonModule],
  exports: [ModalBaseComponent, ModalComponent],
})
export class FeatureModalModule {}
