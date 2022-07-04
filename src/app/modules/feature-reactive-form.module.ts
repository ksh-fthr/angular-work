import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // RactiveForm を使用するために必要

// ReactiveFormsModule の検証用コンポーネント
import { ReactiveFormBaseComponent } from '../component/reactive-form/reactive-form-base.component';
import { ReactiveFormVerificationComponent } from '../component/reactive-form/reactive-form-verification/reactive-form-verification.component';

@NgModule({
  declarations: [ReactiveFormBaseComponent, ReactiveFormVerificationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormBaseComponent, ReactiveFormVerificationComponent],
})
export class FeatureReactiveForm {}
