# このアプリについて

Angular CLI で作成したプロジェクトを使用して、Angular の理解を深めるためにアレコレすることを目的としたものです。
したがって、完全に個人での利用を目的としたものであり、更新のたびに以前の機能が無くなることがあります。

学習の内容が気になる場合は各ブランチをご参照ください。

なお [develop](https://github.com/ksh-fthr/angular-work) ブランチには各ブランチで学習/実装した機能をマージしております。
表示される画面に違いはありますが、コンポーネントやサービス、ディレクティブにおける基本的な実装内容に大きな違いはありません。

# 環境について

[develop](https://github.com/ksh-fthr/angular-work) ブランチの内容は 以下の環境で実行・確認しています。
他のブランチの確認バージョンについては、後述の各ブランチ の README をご参照下さい。

| 環境                                                        | バージョン | 備考                     |
| ----------------------------------------------------------- | ---------- | ------------------------ |
| [Angular CLI](https://cli.angular.io/)                      | v18.0.4    | `ng version` で確認      |
| [Angular](https://angular.io/)                              | v18.0.3    | 同上                     |
| [Angular Material](https://material.angular.io/)            | v18.0.3    | 同上                     |
| [Angular CDK](https://github.com/angular/components#readme) | v18.0.3    | 同上                     |
| [RxJS](https://rxjs.dev/)                                   | v6.6.7     | 同上                     |
| [TypeScript](https://www.typescriptlang.org/)               | v5.4.5     | 同上                     |
| [zone.js](https://www.npmjs.com/package/zone.js)            | v0.14.7    | 同上                     |
| [Node.js](https://nodejs.org/ja/)                           | v20.14.0   | 同上                     |
| [npm](https://www.npmjs.com/)                               | v10.7.0    | 同上                     |
| [ngx-toastr](https://github.com/scttcper/ngx-toastr)        | v16.1.0    | `package.json` で確認    |

<details>
<div>
<summary>Angular のバージョン詳細( ng version の結果 )</summary>

```bash
% ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 18.0.4
Node: 20.14.0
Package Manager: npm 10.7.0
OS: darwin x64

Angular: 18.0.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... material, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1800.4
@angular-devkit/build-angular   18.0.4
@angular-devkit/core            18.0.4
@angular-devkit/schematics      18.0.4
@angular/cli                    18.0.4
@schematics/angular             18.0.4
rxjs                            6.6.7
typescript                      5.4.5
zone.js                         0.14.7
```

</div>
</details>

# ブランチについて

基本的にそのとき確認した内容ごとにブランチを切ります。
現在は次のブランチがあります。

* [develop](https://github.com/ksh-fthr/angular-work)
  * GitHub 上のデフォルトブランチ
  * 他のブランチで確認したコードを取り込んだブランチ
  * HTML のレイアウトやスタイルは変えているが､Angular の実装は大きく変えていない
  * ブランチを切り替えずにそれぞれのコードを確認できることが目的
* [feat_life_cycle_docheck](https://github.com/ksh-fthr/angular-work/tree/feat_life_cycle_docheck)
  * Angular コンポーネントのライフサイクルの ngDoCheck について確認するためのブランチ
  * Qiita の [[Angular] ライフサイクルメソッドをみる(ngDoCheck)](https://qiita.com/ksh-fthr/items/f1adea56c17f8c7f6c0d) で扱った
* [feat_life_cycle_aftercontent](https://github.com/ksh-fthr/angular-work/tree/feat_life_cycle_aftercontent)
  * Angular コンポーネントのライフサイクルの ngAfterContentInit と ngAfterContentChecked について確認するためのブランチ
  * Qiita の [[Angular] ライフサイクルメソッドをみる(ngAfterContentInit と ngAfterContentChecked)](https://qiita.com/ksh-fthr/items/bf8fb8c66cd1d044866e) で扱った
* [feat_life_cycle_afterview](https://github.com/ksh-fthr/angular-work/tree/feat_life_cycle_afterview)
  * Angular コンポーネントのライフサイクルの ngAfterViewInit と ngAfterViewChecked について確認するためのブランチ
  * Qiita の [[Angular] ライフサイクルメソッドをみる(ngAfterViewInit と ngAfterViewChecked)](https://qiita.com/ksh-fthr/items/411d2884875a4a0f7bd6) で扱った
* [feat_reference_component](https://github.com/ksh-fthr/angular-work/tree/feat_reference_component)
  * Angular コンポーネントで子コンポーネントや外部コンテンツの参照を取得する動きを確認するためのブランチ
  * Qiita の [[Angular] 子コンポーネントや外部コンテンツの参照を取得する](https://qiita.com/ksh-fthr/items/00341b3b12f7048c9575) で扱った
* [feat_parent_child](https://github.com/ksh-fthr/angular-work/tree/feat_parent_child)
  * Angular コンポーネントで親子関係にあるコンポーネント間でのデータ受け渡しの動きを確認するためのブランチ
  * Qiita の [[Angular] 親子関係にあるコンポーネント間でデータの受け渡しを行う](https://qiita.com/ksh-fthr/items/db6a48d072d5e9a33f0b) で扱った
* [feat_create_service](https://github.com/ksh-fthr/angular-work/tree/feat_create_service)
  * Angular サービスの生成と利用についての動きを確認するためのブランチ
  * Qiita の [[Angular] Angular CLI によるサービスの生成](https://qiita.com/ksh-fthr/items/900baee52b80e6ed1b66) で扱った
* [feat_share_service](https://github.com/ksh-fthr/angular-work/tree/feat_share_service)
  * Angular サービスによるコンポーネント間のデータ共有を確認するためのブランチ
  * Qiita の [[Angular] サービスを使用してデータをコンポーネント間で共有する](https://qiita.com/ksh-fthr/items/e43dd37bff2e51e95a59) で扱った
* [feat_http_client](https://github.com/ksh-fthr/angular-work/tree/feat_http_client)
  * Http モジュールを利用した Http クライアントの実装を確認するためのブランチ
  * Qiita の [[Angular] HTTPクライアント(RESTクライアント)を実装する](https://qiita.com/ksh-fthr/items/840ae54472892a87f48d) で扱った
* [feature/validation](https://github.com/ksh-fthr/angular-work/tree/feature/validation)
  * Angular による validation 機能を確認するためのブランチ
  * Qiita の [[Angular] 標準機能を利用して validation を実現する](https://qiita.com/ksh-fthr/items/ee9b026da40cae96ac38) で扱った
* [feat_generics](https://github.com/ksh-fthr/angular-work/tree/feat_generics)
  * TypeScript のジェネリックで、引数で渡されたインスタンスのメソッドを使うための実装を確認するためのブランチ
  * Qiita の [[TypeScript] ジェネリックで引数で渡されたインスタンスのメソッドを使いたい](https://qiita.com/ksh-fthr/items/c0696167a72f9e37986c) で扱った
* [feat_directive](https://github.com/ksh-fthr/angular-work/tree/feat_directive)
  * ディレクティブの自作について確認するためのブランチ
  * Qiita の [[Angular] 属性ディレクティブを自作する](https://qiita.com/ksh-fthr/items/b8e3577f47483f5685e2) で扱った
* [feat_directive_event](https://github.com/ksh-fthr/angular-work/tree/feat_directive_event)
  * イベント処理を伴うディレクティブについて確認するためのブランチ
  * Qiita の [[Angular] 属性ディレクティブにイベント処理を登録する](https://qiita.com/ksh-fthr/items/43cf954515a5f6ace515) で扱った
* [feat_directive_validation](https://github.com/ksh-fthr/angular-work/tree/feat_directive_validation)
  * ディレクティブに検証機能( validation )を設ける方法について確認するためのブランチ
  * Qiita の [[Angular] 属性ディレクティブにvalidation機能を設ける](https://qiita.com/ksh-fthr/items/22fe5be4ff3c3467cb85) で扱った
* [feat_reactive_form](https://github.com/ksh-fthr/angular-work/tree/feat_reactive_form)
  * ReactiveFormsModule を使って statusChanges で validation の状態遷移を検知する方法について確認するためのブランチ
  * Qiita の [[Angular] ReactiveFormsModuleを使ってFormの作成とvalidationを実現する](https://qiita.com/ksh-fthr/items/b5546c50129c60b883ba) で扱った
* [feat_switch_tab](https://github.com/ksh-fthr/angular-work/tree/feat_switch_tab)
  * ngComponentOutlet を使ったタブの実装を通じてコンポーネントの動的切り替えを確認するためのブランチ
  * Qiita の [[Angular] ngComponentOutlet を使ってタブを実装する](https://qiita.com/ksh-fthr/items/212fe3a1c0308b1fd782) で扱った
* [feat_routing](https://github.com/ksh-fthr/angular-work/tree/feat_routing)
  * Routing による画面繊維の確認するためのブランチ
  * Qiita の [[Angular] ルーティング による画面遷移](https://qiita.com/ksh-fthr/items/91c85a06998314c95648) で扱った
* [feat_routing_another](https://github.com/ksh-fthr/angular-work/tree/feat_routing_another)
  * Routing による画面繊維の確認するためのブランチ(画面そのものの切り替えを試す)
  * 上記ブランチと同じく Qiita の [[Angular] ルーティング による画面遷移](https://qiita.com/ksh-fthr/items/91c85a06998314c95648) で扱った
* [feat_modal](https://github.com/ksh-fthr/angular-work/tree/feat_modal)
  * ngComponentOutlet を使って modal の実装を試すブランチ
  * Qiita の [[Angular] ngComponentOutlet を使ってモーダルダイアログを実装する](https://qiita.com/ksh-fthr/items/769767c346c8f04e2df2) で扱った
* [feat_csv](https://github.com/ksh-fthr/angular-work/tree/feat_csv)
  * CSVデータをバックエンドから取得してファイル出力する実装を試すブランチ
  * Qiita の [[Angular] CSV ファイルを出力したときにやったこと](https://qiita.com/ksh-fthr/items/29db7c5c7268ee1802c5) で扱った
* [feat_zip](https://github.com/ksh-fthr/angular-work/tree/feat_zip)
  * base64 文字列化したZIPファイルをバックエンドから取得してファイル出力する実装を試すブランチ
  * Qiita の [[Angular] base64 文字列をバイナリに戻してダウンロードする](https://qiita.com/ksh-fthr/items/b3e3afb7f8e51759a1ed) で扱った
* [feature/speech-to-text/use-webspeechapi](https://github.com/ksh-fthr/angular-work/tree/feature/speech-to-text/use-webspeechapi)
  * WebSpeechAPI を使った音声認識と文字起こしの実装を試すブランチ
* [feature/speech-to-text/use-aws-transcribe-streaming](https://github.com/ksh-fthr/angular-work/tree/feature/speech-to-text/use-aws-transcribe-streaming)
  * AWS Transcribe Streaming を使った音声認識と文字起こしの実装を試すブランチ
* [feature/investigate/angular-material](https://github.com/ksh-fthr/angular-work/tree/feature/investigate/angular-material)
  * Angular Material の検証を行うブランチ
* [feature/use-toastr](https://github.com/ksh-fthr/angular-work/tree/feature/use-toastr)
  * [ngx-toastr](https://www.npmjs.com/package/ngx-toastr) の使用感を検証するブランチ
