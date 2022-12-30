import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Validation 機能の検証用コンポーネント
import { ValidationBaseComponent } from '../component/validation/validation-base.component';
import { ValidationVerificationComponent } from '../component/validation/validation-verification/validation-verification.component';

@NgModule({
  declarations: [ValidationBaseComponent, ValidationVerificationComponent],
  imports: [CommonModule, FormsModule],
  exports: [ValidationBaseComponent, ValidationVerificationComponent],
})
export class FeatureNormalValidationModule {}
