# Angular Material の導入
[公式](https://material.angular.io/) の [手順](https://material.angular.io/guide/getting-started) に乗っ取り下記を実施｡

```bash
% ng add @angular/material

# 対話式に入力を求められるが､ここではすべて yes | 初期値 ですすめる
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@13.3.9.
✔ Package information loaded.

The package @angular/material@13.3.9 will be installed and executed.
Would you like to proceed? Yes
✔ Package successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
UPDATE package.json (2211 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (13432 bytes)
UPDATE angular.json (3998 bytes)
UPDATE src/index.html (581 bytes)
UPDATE src/styles.css (499 bytes)
```

# 各ファイルの差分
## angular.json
( コード中のコメントは記事用に追記 )

```bash
% git diff angular.json
diff --git a/angular.json b/angular.json
index 9c74f03..697617b 100644
--- a/angular.json
+++ b/angular.json

// architect > build > options > styles
@@ -27,6 +27,7 @@
               "src/assets"
             ],
             "styles": [
+              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
               "src/styles.css"
             ],
             "scripts": [],

// architect > test > options > styles
@@ -97,6 +98,7 @@
               "src/assets"
             ],
             "styles": [
+              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
               "src/styles.css"
             ],
             "scripts": []
```

## package.json
(package-lock.json は差分が大量にでるので割愛)

```bash
% git diff package.json
diff --git a/package.json b/package.json
index ecd6995..eb9b0a4 100644
--- a/package.json
+++ b/package.json
@@ -17,10 +17,12 @@
   },
   "dependencies": {
     "@angular/animations": "13.2.3",
+    "@angular/cdk": "^13.3.9",
     "@angular/common": "13.2.3",
     "@angular/compiler": "13.2.3",
     "@angular/core": "13.2.3",
     "@angular/forms": "13.2.3",
+    "@angular/material": "^13.3.9",
     "@angular/platform-browser": "13.2.3",
     "@angular/platform-browser-dynamic": "13.2.3",
     "@angular/router": "13.2.3",
```

## src/app/app.module.ts
```bash
% git diff src/app/app.module.ts
diff --git a/src/app/app.module.ts b/src/app/app.module.ts
index 236b73a..439c6c9 100644
--- a/src/app/app.module.ts
+++ b/src/app/app.module.ts
@@ -101,6 +101,7 @@ import { CsvAndZipVerificationComponent } from './component/csv-and-zip/csv-and-
 import { SpeechToTextBaseComponent } from './component/speech-to-text/speech-to-text-base.component';
 import { UseWebSpeechApiComponent } from './component/speech-to-text/use-web-speech-api/use-web-speech-api.component';
 import { UseAwsTranscribeStreamingComponent } from './component/speech-to-text/use-aws-transcribe-streaming/use-aws-transcribe-streaming.component';
+import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@@ -265,7 +266,7 @@ const ROUTE_TABLE: Routes = [
     UseWebSpeechApiComponent,
     UseAwsTranscribeStreamingComponent,
   ],
-  imports: [BrowserModule, RouterModule.forRoot(ROUTE_TABLE), FormsModule, HttpClientModule, ReactiveFormsModule],
+  imports: [BrowserModule, RouterModule.forRoot(ROUTE_TABLE), FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule],
   providers: [ModalService, SwitchTabService, DataShareService, HttpClientService, Logging],
   bootstrap: [AppComponent],
 })
```

## src/index.html
```bash
% git diff src/index.html
diff --git a/src/index.html b/src/index.html
index c8ef96a..683036f 100644
--- a/src/index.html
+++ b/src/index.html
@@ -7,8 +7,11 @@

   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="icon" type="image/x-icon" href="favicon.ico">
+  <link rel="preconnect" href="https://fonts.gstatic.com">
+  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
+  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 </head>
-<body>
+<body class="mat-typography">
   <app-root></app-root>
 </body>
 </html>
```

## src/styles.css
```bash
% git diff src/styles.css
diff --git a/src/styles.css b/src/styles.css
index 8a94596..2e97595 100644
--- a/src/styles.css
+++ b/src/styles.css
@@ -12,3 +12,6 @@ body {
   margin: 0;
 }
+
+html, body { height: 100%; }
+body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
```
