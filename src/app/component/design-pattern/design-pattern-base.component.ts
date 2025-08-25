import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    imports: [RouterModule],
    selector: 'app-design-pattern-base',
    templateUrl: './design-pattern-base.component.html',
    styleUrls: ['../../style/common.css'],
})
export class DesignPatternBaseComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
