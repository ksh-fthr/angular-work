import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReferenceBaseComponent } from '../component/reference/reference-base.component';
import { ContentChildComponent } from '../component/reference/content-child/content-child.component';
import { ContentParentComponent } from '../component/reference/content-parent/content-parent.component';
import { ViewChildComponent } from '../component/reference/view-child/view-child.component';
import { ViewParentComponent } from '../component/reference/view-parent/view-parent.component';

@NgModule({
  declarations: [
    ReferenceBaseComponent,
    ContentChildComponent,
    ContentParentComponent,
    ViewChildComponent,
    ViewParentComponent,
  ],
  imports: [FormsModule],
  exports: [
    ReferenceBaseComponent,
    ContentChildComponent,
    ContentParentComponent,
    ViewChildComponent,
    ViewParentComponent,
  ],
})
export class FeatureReferenceContentModule {}
