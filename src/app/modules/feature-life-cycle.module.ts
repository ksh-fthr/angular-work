import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// コンポーネントのライフサイクル検証用コンポーネント
// doCheck の検証
import { DoCheckBaseComponent } from '../component/lifecycle/do-check/do-check-base.component';
import { DoCheckVerificationComponent } from '../component/lifecycle/do-check/do-check-verification/do-check-verification.component';
// onChange の検証
import { OnChangeBaseComponent } from '../component/lifecycle/on-change/on-change-base.component';
import { OnChangeVerificationComponent } from '../component/lifecycle/on-change/on-change-verification/on-change-verification.component';
// AfterContentInit と AfterContentChecked の検証
import { AfterContentBaseComponent } from '../component/lifecycle/after-content/after-content-base.component';
import { AfterContentParentComponent } from '../component/lifecycle/after-content/after-content-verification/after-content-parent/after-content-parent.component';
import { AfterContentChildComponent } from '../component/lifecycle/after-content/after-content-verification/after-content-child/after-content-child.component';
import { NgContentParentComponent } from '../component/lifecycle/after-content/ng-content-verification/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from '../component/lifecycle/after-content/ng-content-verification/ng-content-child/ng-content-child.component';
// AfterViewInit と AfterViewChecked の検証
import { AfterViewBaseComponent } from '../component/lifecycle/after-view/after-view-base.component';
import { AfterViewParentComponent } from '../component/lifecycle/after-view/after-view-verification/after-view-parent/after-view-parent.component';
import { AfterViewChildComponent } from '../component/lifecycle/after-view/after-view-verification/after-view-child/after-view-child.component';

@NgModule({
  declarations: [
    DoCheckBaseComponent,
    DoCheckVerificationComponent,
    OnChangeBaseComponent,
    OnChangeVerificationComponent,
    AfterContentBaseComponent,
    AfterContentParentComponent,
    AfterContentChildComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    AfterViewBaseComponent,
    AfterViewParentComponent,
    AfterViewChildComponent,
  ],
  imports: [FormsModule],
  exports: [
    DoCheckBaseComponent,
    DoCheckVerificationComponent,
    OnChangeBaseComponent,
    OnChangeVerificationComponent,
    AfterContentBaseComponent,
    AfterContentParentComponent,
    AfterContentChildComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    AfterViewBaseComponent,
    AfterViewParentComponent,
    AfterViewChildComponent,
  ],
})
export class FeatureLifeCycleModule {}
