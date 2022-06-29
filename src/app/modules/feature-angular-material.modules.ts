import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseAngularMaterialBaseComponent } from '../component/use-angular-material/use-angular-material-base.component';
import { ControlFunctionsComponent } from '../component/use-angular-material/control-functions/control-functions.component';
import { AutoCompleteComponent } from '../component/use-angular-material/autocomplete/autocomplete.component';
@NgModule({
  declarations: [UseAngularMaterialBaseComponent, ControlFunctionsComponent, AutoCompleteComponent],
  imports: [CommonModule],
  exports: [UseAngularMaterialBaseComponent, ControlFunctionsComponent, AutoCompleteComponent],
})
export class FeatureAngularMaterialModule {}
