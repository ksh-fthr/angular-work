# このアプリについて

Angular CLI で作成したプロジェクトを使用して、Angular の理解を深めるためにアレコレすることを目的としたものです。 したがって、完全に個人での利用を目的としたものであり、更新のたびに以前の機能が無くなることがあります。

上記より master ブランチは意味のある役割を持っていません。 もし学習の内容が気になる場合は各ブランチをご参照ください。


# 環境について
以下の環境で実行・確認しています。

| 環境                                          | バージョン | 備考               |
| --------------------------------------------- | ---------- | ------------------ |
| [Angular CLI](https://cli.angular.io/)        | v11.0.5    | `$ ng --version`   |
| [Angular](https://angular.io/)                | v11.0.5    | 同上               |
| [TypeScript](https://www.typescriptlang.org/) | v4.0.2     | 同上               |
| [Node.js](https://nodejs.org/ja/)             | v12.18.3   | `$ node --version` |
| [npm](https://www.npmjs.com/)                 | v6.14.6    | `$ npm --version`  |

<details>
<div>
<summary>Angular のバージョン詳細( ng version の結果 )</summary>

```bash
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 11.0.5
Node: 12.18.3
OS: darwin x64

Angular: 11.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1100.5
@angular-devkit/build-angular   0.1100.5
@angular-devkit/core            11.0.5
@angular-devkit/schematics      11.0.5
@schematics/angular             11.0.5
@schematics/update              0.1100.5
rxjs                            6.6.0
typescript                      4.0.2
```

</div>
</details>


# ブランチについて
基本的にそのとき確認した内容ごとにブランチを切ります。
現在は次のブランチがあります。

* feat_life_cycle_docheck
  * Angular コンポーネントのライフサイクルの ngDoCheck について確認するためのブランチ
  * Qiita の [[Angular] ライフサイクルメソッドをみる(ngDoCheck)](https://qiita.com/ksh-fthr/items/f1adea56c17f8c7f6c0d) で扱った

