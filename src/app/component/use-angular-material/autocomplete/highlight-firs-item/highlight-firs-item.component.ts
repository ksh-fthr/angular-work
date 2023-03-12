import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-highlight-firs-item',
  templateUrl: './highlight-firs-item.component.html',
  styleUrls: ['../../../../style/common.css', './highlight-firs-item.component.css'],
})
export class HightlightFirstItemComponent implements OnInit {
  //
  // NOTE: 下記のサンプル実装をもとに実装
  // https://material.angular.io/components/autocomplete/overview#automatically-highlighting-the-first-option
  //

  @ViewChild('autoCompleteInput') autoCompleteInput!: ElementRef;

  // テンプレートの `input` からデータを流すための器
  // 入力された情報に応じてフィルタするために利用する
  autocompleteControl = new UntypedFormControl('');

  // autocomplete でリストされたデータを動的にフィルタするための器
  // テンプレートの `mat-option` から参照される
  filteredAutocompleteItemList: Observable<string[]> = of([]); // of([]) で初期化しているのはリンターエラー対応

  // autocompolete でリストするためのデータ
  private autocompleteList: string[] = ['One', 'Two', 'Three'];

  constructor() {}

  ngOnInit(): void {
    // 初期表示は input からの入力が流れてこないのでフィルタされない
    this.filteredAutocompleteItemList = this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      // input からの入力がながれてきたら `_filter` メソッドでフィルタされた内容が
      // テンプレートの方で表示される
      //
      // 言い方を変えると､
      // ここの処理で input で入力された内容に応じて表示するデータが絞り込まれる
      map((value) => this._filter(value || ''))
    );

    // 画面表示時に入力欄にフォーカスをあてることで autocomplete パネルを表示させる
    // ここ (ngOninit) でこれをやると､画面表示時に autocomplete パネルが開く
    //
    // 遅延評価させているのは描画時に発生するエラー対応
    setTimeout(() => {
      this.autoCompleteInput.nativeElement.focus();
    }, 1);
  }

  // autocomplete のパネルを明示的に開くための処理
  //
  // 処理の流れは以下の通り
  // 1. ngOnInit でテンプレート変数: autoCompleteInput に対して focus() でフォーカスをあてる
  // 2. ページ描画時､テンプレートでは｢フォーカスがあたった｣となり､ focus イベントが発火する
  // 3. focus イベントの発火を受けて､それに紐づく本メソッドが実行される
  openPanel(event: Event, trigger: MatAutocompleteTrigger): void {
    event.stopPropagation();
    trigger.openPanel();
  }

  onItemSelected(event: MatAutocompleteSelectedEvent): void {
    const message = `autocompolete からアイテム=${event.option.value}が選択されました`;
    alert(message);
    console.log(message);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // autocomplete で表示する情報を input から流れてきた入力値に応じて絞り込む
    return this.autocompleteList.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
