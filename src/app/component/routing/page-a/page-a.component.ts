import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-a',
    templateUrl: './page-a.component.html',
    styleUrls: ['./page-a.component.css'],
    standalone: false
})
export class PageAComponent implements OnInit {
    /**
     * コンストラクタ( 本コンポーネントではなにもしない )
     */
    constructor() {}

    /**
     * 初期処理
     */
    ngOnInit(): void {}
}
