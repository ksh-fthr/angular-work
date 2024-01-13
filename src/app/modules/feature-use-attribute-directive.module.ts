import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 属性ディレクティブの実装検証用コンポーネント/ディレクティブ
import { TemplateDirective } from '../directive/attribute/template/template.directive';
import { UseAttributeDirectiveBaseComponent } from '../component/use-attribute-directive/use-attribute-directive-base.component';
import { AttributeDirectiveVerificationComponent } from '../component/use-attribute-directive/attribute-directive-verification/attribute-directive-verification.component';

// 属性ディレクティブのイベント実装検証用コンポーネント/ディレクティブ
import { EventDirective } from '../directive/attribute/event/event.directive';
import { AttributeDirectiveEventVerificationComponent } from '../component/use-attribute-directive/attribute-directive-event-verification/attribute-directive-event-verification.component';

// 属性ディレクティブの Validation 実装検証用コンポーネント/ディレクティブ
import { NetworkAddressValidatorDirective } from '../directive/attribute/validator/network-address-validator.directive';
import { AttributeDirectiveValidatorVerificationComponent } from '../component/use-attribute-directive/attribute-directive-validator-verification/attribute-directive-validator-verification.component';

@NgModule({
  declarations: [
    TemplateDirective,
    UseAttributeDirectiveBaseComponent,
    AttributeDirectiveVerificationComponent,
    EventDirective,
    AttributeDirectiveEventVerificationComponent,
    NetworkAddressValidatorDirective,
    AttributeDirectiveValidatorVerificationComponent,
  ],
  imports: [FormsModule],
  exports: [
    TemplateDirective,
    UseAttributeDirectiveBaseComponent,
    AttributeDirectiveVerificationComponent,
    EventDirective,
    AttributeDirectiveEventVerificationComponent,
    NetworkAddressValidatorDirective,
    AttributeDirectiveValidatorVerificationComponent,
  ],
})
export class FeatureUseAttributeDirectiveModule {}
