import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

////////////////////////////////////////////////////////////////
// ↓ Angular Material の機能を使うためのモジュールインポート
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// ↑ Angular Material の機能を使うためのモジュールインポート
////////////////////////////////////////////////////////////////

import { UseAngularMaterialBaseComponent } from '../component/use-angular-material/use-angular-material-base.component';
import { ControlFunctionsComponent } from '../component/use-angular-material/control-functions/control-functions.component';
import { AutoCompleteComponent } from '../component/use-angular-material/autocomplete/autocomplete.component';
import { HightlightFirstItemComponent } from '../component/use-angular-material/autocomplete/highlight-firs-item/highlight-firs-item.component';

@NgModule({
  declarations: [
    UseAngularMaterialBaseComponent,
    ControlFunctionsComponent,
    AutoCompleteComponent,
    HightlightFirstItemComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule],
  exports: [
    UseAngularMaterialBaseComponent,
    ControlFunctionsComponent,
    AutoCompleteComponent,
    HightlightFirstItemComponent,
  ],
})
export class FeatureAngularMaterialModule {}
