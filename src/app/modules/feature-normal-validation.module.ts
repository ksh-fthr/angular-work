import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Validation 機能の検証用コンポーネント
import { ValidationBaseComponent } from '../component/validation/validation-base.component';
import { ValidationVerificationComponent } from '../component/validation/validation-verification/validation-verification.component';

@NgModule({
  declarations: [ValidationBaseComponent, ValidationVerificationComponent],
  imports: [FormsModule],
  exports: [ValidationBaseComponent, ValidationVerificationComponent],
})
export class FeatureNormalValidationModule {}
