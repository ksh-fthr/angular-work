import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  // テンプレートの `input` からデータを流すための器
  // 入力された情報に応じてフィルタするために利用する
  autocompleteControl = new FormControl('');

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
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // autocomplete で表示する情報を input から流れてきた入力値に応じて絞り込む
    return this.autocompleteList.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
