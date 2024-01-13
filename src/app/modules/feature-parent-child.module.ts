import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 親子関係にあるコンポーネント間でのデータ受け渡しの検証用コンポーネント
import { ParentChildBaseComponent } from '../component/parent-child/parent-child-base.component';
import { ParentComponent } from '../component/parent-child/parent/parent.component';
import { ChildComponent } from '../component/parent-child/child/child.component';

@NgModule({
  declarations: [ParentChildBaseComponent, ParentComponent, ChildComponent],
  imports: [FormsModule],
  exports: [ParentChildBaseComponent, ParentComponent, ChildComponent],
})
export class FeatureParentChildModule {}
