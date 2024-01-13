import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// コンポーネント間のデータ共有の検証用コンポーネント/サービス
import { DataShareBaseComponent } from '../component/data-share/data-share-base.component';
import { DataShareAComponent } from '../component/data-share/data-share-a/data-share-a.component';
import { DataShareBComponent } from '../component/data-share/data-share-b/data-share-b.component';

@NgModule({
  declarations: [DataShareBaseComponent, DataShareAComponent, DataShareBComponent],
  imports: [FormsModule],
  exports: [DataShareBaseComponent, DataShareAComponent, DataShareBComponent],
})
export class FeatureDataShareModule {}
