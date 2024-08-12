import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 音声認識-文字起こしの検証用コンポーネント
import { SpeechToTextBaseComponent } from '../component/speech-to-text/speech-to-text-base.component';
import { UseWebSpeechApiComponent } from '../component/speech-to-text/use-web-speech-api/use-web-speech-api.component';
import { UseAwsTranscribeStreamingComponent } from '../component/speech-to-text/use-aws-transcribe-streaming/use-aws-transcribe-streaming.component';

const ROUTE_TABLE: Routes = [
  {
    path: 'speech-to-text',
    component: SpeechToTextBaseComponent,
    children: [
      { path: 'use-web-speech-api', component: UseWebSpeechApiComponent },
      { path: 'use-aws-transcribe', component: UseAwsTranscribeStreamingComponent },
    ],
  },
];
@NgModule({
  declarations: [SpeechToTextBaseComponent, UseWebSpeechApiComponent, UseAwsTranscribeStreamingComponent],
  imports: [RouterModule.forRoot(ROUTE_TABLE)],
  exports: [SpeechToTextBaseComponent, UseWebSpeechApiComponent, UseAwsTranscribeStreamingComponent, RouterModule],
})
export class FeatureSpeechToTextModule {}
