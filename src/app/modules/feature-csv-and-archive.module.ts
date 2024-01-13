import { NgModule } from '@angular/core';

// csv ファイル出力と zip ファイル出力の検証用コンポーネント
import { CsvAndZipBaseComponent } from '../component/csv-and-zip/csv-and-zip-base.component';
import { CsvAndZipVerificationComponent } from '../component/csv-and-zip/csv-and-zip-verification/csv-and-zip-verification.component';

@NgModule({
  declarations: [CsvAndZipBaseComponent, CsvAndZipVerificationComponent],
  exports: [CsvAndZipBaseComponent, CsvAndZipVerificationComponent],
})
export class FeatureCsvAndArchiveModule {}
