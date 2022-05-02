import { Component, OnInit, ElementRef } from '@angular/core';
declare const webkitSpeechRecognition: any;

@Component({
  selector: 'app-use-web-speech-api',
  templateUrl: './use-web-speech-api.component.html',
  styleUrls: ['../../../style/common.css', './use-web-speech-api.component.css'],
})
export class UseWebSpeechApiComponent implements OnInit {
  title = 'WebSpeachAPI を使ったサンプル';
  private speech: any = null;
  private outputArea!: HTMLTextAreaElement;
  private isFinished = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.speech = new webkitSpeechRecognition();
    this.speech.lang = 'ja-JP';

    this.outputArea = this.elementRef.nativeElement.querySelector('.output-text');

    // 音声認識 ~ 文字起こし
    this.speech.onresult = (e: any) => {
      this.speech.stop();
      if (e.results[0].isFinal) {
        const text = e.results[0][0].transcript;
        this.outputArea.innerHTML += text;
      }
    };

    this.speech.onend = () => {
      if (this.isFinished) {
        return;
      }
      // UI から終了が明示的に指示されていなければストリーミングを再開する
      this.speech.start();
    };
  }

  startVoiceRecognition(event: any) {
    this.isFinished = false;
    this.speech.start();
  }

  stopVoiceRecognition(event: any) {
    this.isFinished = true;
    this.speech.stop();
  }
}
