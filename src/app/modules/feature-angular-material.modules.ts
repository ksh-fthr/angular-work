import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseAngularMaterialBaseComponent } from '../component/use-angular-material/use-angular-material-base.component';

@NgModule({
  declarations: [UseAngularMaterialBaseComponent],
  imports: [CommonModule],
  exports: [UseAngularMaterialBaseComponent],
})
export class FeatureAngularMaterialModule {}
