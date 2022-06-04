/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, OnInit } from '@angular/core';

// AWS Transcribe Streaming を使った文字起こしに必要なライブラリ群
// https://github.com/aws/aws-sdk-js-v3/tree/d8475f8d972d28fbc15cd7e23abfe18f9eab0644/clients/client-transcribe-streaming
import {
  TranscribeStreamingClient,
  StartStreamTranscriptionCommand,
  StartStreamTranscriptionCommandInput,
  LanguageCode,
  MediaEncoding,
  StartStreamTranscriptionCommandOutput,
} from '@aws-sdk/client-transcribe-streaming';

// AWS Transcribe Streaming に流す audio データを作るのに必要
// https://github.com/microphone-stream/microphone-stream#readme
const MicrophoneStream = require('microphone-stream').default;
let micStream: any = null;

@Component({
  selector: 'app-use-aws-transcribe-streaming',
  templateUrl: './use-aws-transcribe-streaming.component.html',
  styleUrls: ['../../../style/common.css', './use-aws-transcribe-streaming.component.css'],
})
export class UseAwsTranscribeStreamingComponent implements OnInit {
  title = 'AWS Transcribe Streaming を使ったサンプル';

  private outputArea: any = null;

  // AWS Transcribe Streaming を使うための準備
  // この処理でクライアントインスタンスが生成される
  // ここで生成したインスタンスは後述の処理で AWS Transcribe Streaming にコマンドを送る際に使用する
  private client = new TranscribeStreamingClient({
    region: 'ap-northeast-1',
    credentials: {
      accessKeyId: 'hogehoge',
      secretAccessKey: 'hogehoge',
      sessionToken: 'hogehoge',
    },
  });

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.outputArea = this.elementRef.nativeElement.querySelector('.output-area');
  }

  /**
   * html テンプレートの「音声認識-開始」がクリックされたら実行されるメソッド
   * 音声認識処理の起点
   */
  async startVoiceRecognition(event: any) {
    // micStream は後で出てくる `stopVoiceRecognition` で `stop()` を実行して音声認識を停止する
    // このとき実際には AudioContext.close() が実行されているのだが、これを実行すると micStream の再利用ができなくなる
    // なので、一度停止した場合は micStream のインスタンスを新規に生成してやる必要がある
    //
    // AudioContext.close() については下記を参照
    // https://developer.mozilla.org/ja/docs/Web/API/AudioContext/close
    if (!micStream) {
      micStream = new MicrophoneStream();
    }

    await this.setStream();

    // AWS Transcribe Streaming に流す音声データのパラメータ
    // 肝は `AudioStream: this.audioStream()` の部分。ここで音声データを作っている
    const params: StartStreamTranscriptionCommandInput = {
      // https://docs.aws.amazon.com/ja_jp/transcribe/latest/dg/API_streaming_StartStreamTranscription.html
      LanguageCode: LanguageCode.JA_JP,
      MediaSampleRateHertz: 44_100, // 有効範囲: 最小値は 8,000. 最大値は 48,000
      MediaEncoding: MediaEncoding.PCM,
      AudioStream: this.audioStream(),
    };

    // 音声自動文字起こし機能
    const command = new StartStreamTranscriptionCommand(params);
    let response: StartStreamTranscriptionCommandOutput;
    try {
      // ここまでの処理で作成したクライアントインスタンスと音声データのパラメータから AWS Transcribe Streaming を実行する
      // `handleResponse()` はレスポンスから文字起こしをするための処理
      response = await this.client.send(command);
      await this.handleResponse(response);
    } catch (error: any) {
      console.dir(error);
    }
  }

  /**
   * AWS Transcribe Streaming からのレスポンスを解析し文字起こしを行う
   *
   * 実装の大まかな部分は AWS Transcribe Streaming SDK のサンプルコードをコピーしたもの
   * -> https://github.com/aws/aws-sdk-js-v3/tree/d8475f8d972d28fbc15cd7e23abfe18f9eab0644/clients/client-transcribe-streaming#handling-text-stream
   *
   * レスポンスの構成については下記を参照
   * -> https://docs.aws.amazon.com/ja_jp/transcribe/latest/dg/API_streaming_StartStreamTranscription.html
   * */
  async handleResponse(response: StartStreamTranscriptionCommandOutput) {
    for await (const event of response.TranscriptResultStream!) {
      if (event.TranscriptEvent) {
        const results = event.TranscriptEvent.Transcript!.Results;

        let transcript = '';
        results!
          .filter((result) => !result.IsPartial) // 変換途中 は処理対象外とする
          .map((result) => {
            (result.Alternatives || []).map((alternative) => {
              transcript = alternative.Items!.map((item) => item.Content).join(' ');

              // 変換したデータは html のテキストエリアに出力する
              this.outputArea.innerHTML += transcript;
            });
          });
      }
    }
  }

  /**
   * html テンプレートの「音声認識-終了」がクリックされたら実行されるメソッド
   *
   * 前掲の startVoiceRecognition() の説明でも触れたとおり、
   * micStream.stop() を実行することで実際には AudioContext.close() が実行される
   * これによって、これまで使用していた micStream のインスタンスは役目を終える
   * 新たにストリームを流すためにはインスタンスを作り直す必要があるので、これを明示的に示すために
   * micStream = null; を行い、startVoiceRecognition() では null 判定を行った上でインスタンスを生成している
   */
  stopVoiceRecognition(event: any) {
    micStream.stop();
    micStream = null;
  }

  /**
   * 前掲の startVoiceRecognition() で使用されているメソッド
   * getUserMedia() では音声データのみを使用する設定でメディアの使用を要求し、
   * マイクに入力された音声をストリームにセットしている
   */
  private async setStream() {
    micStream.setStream(
      await window.navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      })
    );
  }

  /**
   * こちらも前掲の startVoiceRecognition() で使用されているメソッド
   *
   * ストリームに流れてくる音声データを PCM にエンコードする処理で、
   * 実装は AWS Transcribe Streaming SDK の サンプルコード をコピーした
   * -> https://github.com/aws/aws-sdk-js-v3/tree/d8475f8d972d28fbc15cd7e23abfe18f9eab0644/clients/client-transcribe-streaming#acquire-from-browsers
   */
  private audioStream = async function* () {
    for await (const chunk of micStream) {
      yield {
        AudioEvent: { AudioChunk: pcmEncodeChunk(chunk) /* pcm Encoding is optional depending on the source */ },
      };
    }
  };
}

/**
 * PCM エンコード処理の実態
 *
 * 実装は AWS Transcribe Streaming SDK の サンプルコード をコピーしたもの
 * -> https://github.com/aws/aws-sdk-js-v3/tree/d8475f8d972d28fbc15cd7e23abfe18f9eab0644/clients/client-transcribe-streaming#pcm-encoding
 */
function pcmEncodeChunk(chunk: Buffer) {
  const input = MicrophoneStream.toRaw(chunk);
  let offset = 0;
  const buffer = new ArrayBuffer(input.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < input.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return Buffer.from(buffer);
}
